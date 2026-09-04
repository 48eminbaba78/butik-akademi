-- ============================================================================
-- MIGRATION V47 — Instagram 2 Haftalık Viral Post & Story Otomasyonu,
-- Onay Süzgeci, A/B Kanca Varyantları ve Adaptif Kalite Hafızası
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- 1. story_queue Tablosuna Yeni Sütunlar
ALTER TABLE public.story_queue
  ADD COLUMN IF NOT EXISTS post_type text DEFAULT 'story',
  ADD COLUMN IF NOT EXISTS rejection_reason text,
  ADD COLUMN IF NOT EXISTS feedback_history jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS hooks jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS virality_score int DEFAULT 85,
  ADD COLUMN IF NOT EXISTS lead_magnet_trigger text,
  ADD COLUMN IF NOT EXISTS approved_at timestamptz,
  ADD COLUMN IF NOT EXISTS rejected_at timestamptz;

-- 2. post_date UNIQUE kısıtını kaldırıp (post_date, post_type) bileşik kısıtına geç
-- Bu sayede aynı günde hem 1 Gönderi (feed) hem de 1 Hikaye (story) barındırılabilir!
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'story_queue_post_date_key'
  ) THEN
    ALTER TABLE public.story_queue DROP CONSTRAINT story_queue_post_date_key;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'story_queue_post_date_type_key'
  ) THEN
    ALTER TABLE public.story_queue ADD CONSTRAINT story_queue_post_date_type_key UNIQUE (post_date, post_type);
  END IF;
END $$;

-- 3. platform_settings içine Öğrenilmiş Tercihler / Kalite Hafızası Kaydı
INSERT INTO public.platform_settings (key, value)
VALUES ('instagram_feedback_memory', '[]'::jsonb)
ON CONFLICT (key) DO NOTHING;
