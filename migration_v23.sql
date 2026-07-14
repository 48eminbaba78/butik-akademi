-- ============================================================================
-- MIGRATION V23 — Form Yenilemesi: student_profiles genişletme
-- Onboarding (sınav alanı/hedef sıralama/kapasite/veli) + koç modalı
-- (seviye/iletişim) alanları için kolonlar.
-- Supabase SQL Editor'da tek seferde çalıştırın.
-- ============================================================================

alter table public.student_profiles
  add column if not exists target_rank integer
    check (target_rank is null or (target_rank > 0 and target_rank < 5000000)),
  add column if not exists parent_email text,
  add column if not exists parent_phone text,
  add column if not exists student_email text,
  add column if not exists student_phone text,
  add column if not exists level text
    check (level is null or level in ('baslangic', 'orta', 'ileri')),
  add column if not exists onboarding_done boolean default false;

comment on column public.student_profiles.target_rank is 'Hedef YKS sıralaması (0 < x < 5.000.000)';
comment on column public.student_profiles.parent_email is 'Veli e-posta — haftalık rapor gönderimi için';
comment on column public.student_profiles.parent_phone is 'Veli telefon — 0 (5XX) XXX XX XX formatında';
comment on column public.student_profiles.level is 'Başlangıç seviyesi: baslangic | orta | ileri (koç belirler)';
comment on column public.student_profiles.onboarding_done is 'Öğrenci onboarding formunu tamamladı mı (zorunlular dolu)';

-- Mevcut dolu profiller onboarding'i tamamlamış sayılır (tekrar sorulmasın):
-- veli e-postası zaten olan VEYA hedef+kapasite girmiş profiller.
update public.student_profiles
set onboarding_done = true
where onboarding_done = false
  and (parent_email is not null
       or (target_university is not null and daily_capacity is not null));
