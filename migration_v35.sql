-- ═══════════════════════════════════════════════════════════════════
-- ROSTRUM AKADEMI — MIGRATION V35
-- YKS Öğrenci & Profesyonel Koçluk Alanları (yks_rank, university, department, profession, experience_years, institution)
-- ═══════════════════════════════════════════════════════════════════

ALTER TABLE coach_profiles
ADD COLUMN IF NOT EXISTS yks_rank TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS university TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS department TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS profession TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS experience_years TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS institution TEXT DEFAULT '';

-- Update get_coach_by_slug RPC function to include new YKS fields
DROP FUNCTION IF EXISTS get_coach_by_slug(text);

CREATE OR REPLACE FUNCTION get_coach_by_slug(p_slug TEXT)
RETURNS TABLE (
  id UUID,
  full_name TEXT,
  target TEXT,
  color TEXT,
  bio TEXT,
  subjects TEXT,
  education TEXT,
  experience TEXT,
  photo_url TEXT,
  instagram TEXT,
  linkedin TEXT,
  slug TEXT,
  headline TEXT,
  capacity_left INT,
  pricing_text TEXT,
  whatsapp_number TEXT,
  reviews JSONB,
  faq JSONB,
  custom_features JSONB,
  blocks JSONB,
  yks_rank TEXT,
  university TEXT,
  department TEXT,
  profession TEXT,
  experience_years TEXT,
  institution TEXT
) LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  RETURN QUERY
  SELECT 
    u.id,
    u.full_name,
    u.target,
    u.color,
    cp.bio,
    cp.subjects,
    cp.education,
    cp.experience,
    cp.photo_url,
    cp.instagram,
    cp.linkedin,
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
    cp.institution
  FROM coach_profiles cp
  JOIN users u ON u.id = cp.id
  WHERE LOWER(cp.slug) = LOWER(p_slug)
    AND u.role = 'coach';
END;
$$;
