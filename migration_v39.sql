-- ============================================================================
-- MIGRATION V39 — get_coach_by_slug: varchar/text tip uyuşmazlığı düzeltmesi
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- KÖK NEDEN: coach_profiles.instagram ve .linkedin kolonları migration_v4'te
-- varchar(255) olarak oluşturulmuş, ama get_coach_by_slug fonksiyonu v27'den
-- beri bu kolonları hep TEXT olarak deklare etmiş. RETURN QUERY, RETURNS TABLE
-- imzasıyla tam eşleşme istediği için bu satırlar "structure of query does not
-- match function result type" hatasına yol açıyordu — muhtemelen fonksiyon
-- hiç çalışmamıştı, koc_bul.html'deki fallback sorgu sayesinde site kırılmadı.
-- Çözüm: instagram/linkedin'i açıkça ::text'e cast etmek.
drop function if exists get_coach_by_slug(text);

create or replace function get_coach_by_slug(p_slug text)
returns table (
  id uuid,
  full_name text,
  target text,
  color text,
  bio text,
  subjects text,
  education text,
  experience text,
  photo_url text,
  instagram text,
  linkedin text,
  slug text,
  headline text,
  capacity_left int,
  pricing_text text,
  whatsapp_number text,
  reviews jsonb,
  faq jsonb,
  custom_features jsonb,
  blocks jsonb,
  yks_rank text,
  university text,
  department text,
  profession text,
  experience_years text,
  institution text,
  published boolean
) language plpgsql security definer as $$
begin
  return query
  select
    u.id,
    u.full_name,
    u.target,
    u.color,
    cp.bio,
    cp.subjects,
    cp.education,
    cp.experience,
    cp.photo_url,
    cp.instagram::text,
    cp.linkedin::text,
    cp.slug,
    cp.headline,
    cp.capacity_left,
    cp.pricing_text,
    cp.whatsapp_number,
    cp.reviews,
    cp.faq,
    cp.custom_features,
    cp.blocks,
    cp.yks_rank,
    cp.university,
    cp.department,
    cp.profession,
    cp.experience_years,
    cp.institution,
    cp.published
  from coach_profiles cp
  join users u on u.id = cp.id
  where lower(cp.slug) = lower(p_slug)
    and u.role = 'coach'
    and cp.published = true;
end;
$$;
