-- ============================================================================
-- MIGRATION V26 — Koç Profili v2: slug linki + güvenli foto yükleme bucket'ı
-- Supabase SQL Editor'da tek seferde çalıştırın.
-- ============================================================================

-- 1) coach_profiles.slug — temiz kamu linki: rostrumakademi.com/koc/<slug>
alter table public.coach_profiles add column if not exists slug text;
create unique index if not exists coach_profiles_slug_key
  on public.coach_profiles (slug) where slug is not null;

-- Slug biçim koruması: küçük harf/rakam/tire, 3-40 karakter
alter table public.coach_profiles drop constraint if exists coach_profiles_slug_format;
alter table public.coach_profiles add constraint coach_profiles_slug_format
  check (slug is null or slug ~ '^[a-z0-9](?:[a-z0-9-]{1,38})[a-z0-9]$');

-- 2) Slug müsaitlik kontrolü (profil ekranında canlı doğrulama)
create or replace function public.check_coach_slug(p_slug text)
returns boolean as $$
  select not exists (
    select 1 from public.coach_profiles
    where slug = lower(trim(p_slug))
  );
$$ language sql stable security definer;
grant execute on function public.check_coach_slug(text) to anon, authenticated;

-- 3) Slug ile kamuya açık profil çözümleme (koc_bul.html /koc/<slug> için)
create or replace function public.get_coach_by_slug(p_slug text)
returns table (
  id uuid, full_name text, target text, color text,
  bio text, subjects text, education text, experience text,
  photo_url text, instagram text, linkedin text, slug text
) as $$
  select u.id, u.full_name, u.target, u.color,
         cp.bio, cp.subjects, cp.education, cp.experience,
         cp.photo_url, cp.instagram, cp.linkedin, cp.slug
  from public.coach_profiles cp
  join public.users u on u.id = cp.id
  where cp.slug = lower(trim(p_slug)) and u.role = 'coach';
$$ language sql stable security definer;
grant execute on function public.get_coach_by_slug(text) to anon, authenticated;

-- 4) coach-photos bucket — herkese açık OKUMA; yalnızca sahibi kendi
--    klasörüne (userId/...) yazabilir/güncelleyebilir/silebilir.
insert into storage.buckets (id, name, public)
values ('coach-photos', 'coach-photos', true)
on conflict (id) do nothing;

drop policy if exists "coach_photos_public_read" on storage.objects;
create policy "coach_photos_public_read" on storage.objects
  for select using (bucket_id = 'coach-photos');

drop policy if exists "coach_photos_owner_write" on storage.objects;
create policy "coach_photos_owner_write" on storage.objects
  for insert with check (
    bucket_id = 'coach-photos'
    and auth.role() = 'authenticated'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "coach_photos_owner_update" on storage.objects;
create policy "coach_photos_owner_update" on storage.objects
  for update using (
    bucket_id = 'coach-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "coach_photos_owner_delete" on storage.objects;
create policy "coach_photos_owner_delete" on storage.objects
  for delete using (
    bucket_id = 'coach-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
