-- ═══════════════════════════════════════════════════════════
-- MIGRATION V19 — Mesajlarda görsel + üyelik paneli
-- Supabase SQL Editor'de çalıştırın.
-- ═══════════════════════════════════════════════════════════

-- 1. Mesajlara görsel URL sütunu
ALTER TABLE public.messages ADD COLUMN IF NOT EXISTS image_url text;

-- 2. Chat görselleri için storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('chat_images', 'chat_images', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "chat_images_public_read" ON storage.objects;
CREATE POLICY "chat_images_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'chat_images');

DROP POLICY IF EXISTS "chat_images_write" ON storage.objects;
CREATE POLICY "chat_images_write" ON storage.objects
  FOR ALL USING (bucket_id = 'chat_images');
