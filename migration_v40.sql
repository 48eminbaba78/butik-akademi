-- ============================================================================
-- MIGRATION V40 — get_coach_by_slug: kalan varchar/text tip uyuşmazlıkları
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- v39, coach_profiles.instagram/linkedin'i düzeltti ama users.full_name
-- (varchar(255)) ve users.color (varchar(50)) aynı sorunu taşımaya devam
-- ediyordu — schema.sql'de bu ikisi hep varchar olarak tanımlanmış,
-- fonksiyon ise TEXT bekliyordu. Bu migration ikisini de ::text'e cast eder.
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
    u.full_name::text,
    u.target,
    u.color::text,
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
