-- ═══════════════════════════════════════════════════════════════════
-- ROSTRUM AKADEMI — MIGRATION V33
-- Koç Reklam/Tanıtım Sayfası Altyapısı (Yorumlar, SSS, Fiyat, WhatsApp)
-- ═══════════════════════════════════════════════════════════════════

ALTER TABLE coach_profiles
ADD COLUMN IF NOT EXISTS pricing_text TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS whatsapp_number TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS reviews JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS faq JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS custom_features JSONB DEFAULT '[]'::jsonb;

-- Update get_coach_by_slug RPC function to include new fields
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
  custom_features JSONB
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
    cp.custom_features
  FROM coach_profiles cp
  JOIN users u ON u.id = cp.id
  WHERE LOWER(cp.slug) = LOWER(p_slug)
    AND u.role = 'coach';
END;
$$;
