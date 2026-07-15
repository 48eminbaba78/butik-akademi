-- ============================================================================
-- MIGRATION V27 — Koç Kamu Vitrini (/koc/<slug>) + Ön Başvuru
-- Supabase SQL Editor'da tek seferde çalıştırın. (Önce v26 çalışmış olmalı.)
-- ============================================================================

-- 1) coach_profiles: vitrin alt-başlığı + opsiyonel boş kontenjan
alter table public.coach_profiles add column if not exists headline text;
alter table public.coach_profiles add column if not exists capacity_left integer
  check (capacity_left is null or (capacity_left >= 0 and capacity_left <= 999));

comment on column public.coach_profiles.headline is 'Vitrin alt-başlığı (örn: YKS Dereceli Sayısal Mentörü & Koçu)';
comment on column public.coach_profiles.capacity_left is 'Opsiyonel boş kontenjan — set ise vitrinde kıtlık rozeti gösterilir';

-- 2) match_requests: WhatsApp-öncelikli başvuru (e-posta opsiyonel) + hedef metni
alter table public.match_requests alter column email drop not null;
alter table public.match_requests add column if not exists goal text;

comment on column public.match_requests.goal is 'Öğrencinin YKS hedefi ve mevcut durumu (serbest metin)';

-- 3) get_coach_by_slug — vitrin için headline + capacity_left döndür (anon)
-- Dönüş tipi (sütun seti) değiştiği için önce DROP şart — CREATE OR REPLACE
-- Postgres'te return table sütunlarını değiştirmeye izin vermiyor (42P13).
drop function if exists public.get_coach_by_slug(text);
create function public.get_coach_by_slug(p_slug text)
returns table (
  id uuid, full_name text, target text, color text,
  bio text, subjects text, education text, experience text,
  photo_url text, instagram text, linkedin text, slug text,
  headline text, capacity_left integer
) as $$
  select u.id, u.full_name, u.target, u.color,
         cp.bio, cp.subjects, cp.education, cp.experience,
         cp.photo_url, cp.instagram, cp.linkedin, cp.slug,
         cp.headline, cp.capacity_left
  from public.coach_profiles cp
  join public.users u on u.id = cp.id
  where cp.slug = lower(trim(p_slug)) and u.role = 'coach';
$$ language sql stable security definer;

grant execute on function public.get_coach_by_slug(text) to anon, authenticated;
