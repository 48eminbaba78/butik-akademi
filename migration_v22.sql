-- ============================================================================
-- MIGRATION V22 — Akıllı Süre Hesaplaması (Server-Side RPC)
--
-- Kaynak mantık: rostrum-developer-copilot.md → task_planner.estimated_duration
--   = question_count × subject_speed_sq  (+ video süresi / oynatma hızı)
-- Canlı şemaya uyarlama: student_metrics yerine MEVCUT student_speeds tablosu
--   (satır bazlı: student_id + exam_type + subject → secs_per_question).
-- Öğrencinin kayıtlı hızı yoksa dokümandaki ders-bazlı varsayılanlar kullanılır.
--
-- Supabase SQL Editor'da tek seferde çalıştırın.
-- ============================================================================

-- Ders bazlı varsayılan hızlar (sn/soru) — copilot dokümanındaki değerler
create or replace function public.default_speed_for_subject(p_subject text)
returns integer as $$
  select case
    when p_subject ilike '%matematik%' or p_subject ilike '%geometri%' then 90
    when p_subject ilike '%fizik%'                                      then 75
    when p_subject ilike '%kimya%'  or p_subject ilike '%biyoloji%'     then 60
    when p_subject ilike '%türkçe%' or p_subject ilike '%turkce%'
      or p_subject ilike '%paragraf%'                                   then 50
    when p_subject ilike '%tarih%'  or p_subject ilike '%coğrafya%'
      or p_subject ilike '%cografya%' or p_subject ilike '%felsefe%'
      or p_subject ilike '%din%'    or p_subject ilike '%sosyal%'       then 50
    else 60
  end;
$$ language sql immutable;

-- ────────────────────────────────────────────────────────────────────────────
-- calculate_smart_duration
--   p_student_id      : öğrenci (users.id)
--   p_exam_type       : 'TYT' | 'AYT' (student_speeds.exam_type ile eşleşir)
--   p_subject         : ders adı (örn. 'Matematik')
--   p_question_count  : çözülecek soru sayısı (0 olabilir — yalnız video görevi)
--   p_video_minutes   : görevdeki video süresi (yoksa 0)
--   p_speed_multiplier: video oynatma hızı (1, 1.25, 1.5, 2 …)
--
-- Dönen JSON: toplam dakika + kırılım + kullanılan hız ve kaynağı
-- SECURITY INVOKER: student_speeds RLS'i aynen uygulanır (öğrenci kendi,
-- koç kendi öğrencisinin hızını okuyabilir) — yetki kaçağı yok.
-- ────────────────────────────────────────────────────────────────────────────
create or replace function public.calculate_smart_duration(
  p_student_id uuid,
  p_exam_type text,
  p_subject text,
  p_question_count integer default 0,
  p_video_minutes numeric default 0,
  p_speed_multiplier numeric default 1
)
returns jsonb as $$
declare
  v_secs_per_q integer;
  v_source text := 'student';
  v_question_min numeric := 0;
  v_video_min numeric := 0;
  v_mult numeric;
begin
  -- Girdi temizliği
  p_question_count := greatest(coalesce(p_question_count, 0), 0);
  p_video_minutes  := greatest(coalesce(p_video_minutes, 0), 0);
  v_mult           := coalesce(nullif(p_speed_multiplier, 0), 1);

  -- 1) Öğrencinin ölçülmüş hızı (student_speeds)
  select ss.secs_per_question into v_secs_per_q
  from public.student_speeds ss
  where ss.student_id = p_student_id
    and ss.exam_type = p_exam_type
    and ss.subject = p_subject
  limit 1;

  -- 2) Yoksa ders-bazlı varsayılan
  if v_secs_per_q is null then
    v_secs_per_q := public.default_speed_for_subject(p_subject);
    v_source := 'default';
  end if;

  -- 3) Hesap: soru dakikası + hız çarpanına bölünmüş video dakikası
  v_question_min := (p_question_count * v_secs_per_q) / 60.0;
  v_video_min    := p_video_minutes / v_mult;

  return jsonb_build_object(
    'estimated_minutes',      ceil(v_question_min + v_video_min)::int,
    'question_minutes',       round(v_question_min, 1),
    'video_minutes',          round(v_video_min, 1),
    'secs_per_question',      v_secs_per_q,
    'speed_source',           v_source,          -- 'student' = ölçülmüş, 'default' = varsayılan
    'speed_multiplier',       v_mult
  );
end;
$$ language plpgsql stable security invoker;

grant execute on function public.calculate_smart_duration(uuid, text, text, integer, numeric, numeric) to authenticated;

-- ────────────────────────────────────────────────────────────────────────────
-- calculate_smart_durations_bulk — haftalık program ekranı için toplu hesap.
-- p_items: [{"exam_type":"TYT","subject":"Matematik","question_count":40,
--            "video_minutes":0,"speed_multiplier":1}, ...]
-- Tek round-trip'te tüm görevlerin süresini döndürür (7 gün × N görev için).
-- ────────────────────────────────────────────────────────────────────────────
create or replace function public.calculate_smart_durations_bulk(
  p_student_id uuid,
  p_items jsonb
)
returns jsonb as $$
declare
  v_item jsonb;
  v_out jsonb := '[]'::jsonb;
begin
  for v_item in select * from jsonb_array_elements(coalesce(p_items, '[]'::jsonb)) loop
    v_out := v_out || jsonb_build_array(
      public.calculate_smart_duration(
        p_student_id,
        v_item->>'exam_type',
        v_item->>'subject',
        coalesce((v_item->>'question_count')::int, 0),
        coalesce((v_item->>'video_minutes')::numeric, 0),
        coalesce((v_item->>'speed_multiplier')::numeric, 1)
      )
    );
  end loop;
  return v_out;
end;
$$ language plpgsql stable security invoker;

grant execute on function public.calculate_smart_durations_bulk(uuid, jsonb) to authenticated;
