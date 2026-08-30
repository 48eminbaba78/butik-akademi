-- ============================================================================
-- MIGRATION V46 — KRİTİK GÜVENLİK DÜZELTMESİ: platform_settings ve ilgili
-- tabloların RLS politikaları herkese (anon key ile) açıktı.
-- Supabase SQL Editor'da HEMEN çalıştırın.
-- ============================================================================

-- platform_settings: instagram_access_token, Anthropic/Groq API key'leri ve
-- banka/IBAN bilgileri bu tabloda düz metin duruyor. Eski politika
-- "FOR SELECT USING (true)" idi — anon key ile (herkese açık, client'a
-- gömülü) DOĞRUDAN okunabiliyordu, API katmanı tamamen atlanıyordu.
-- Tek istisna: index.html'deki genel Instagram feed widget'ının okuduğu
-- 'ig_public_feed' key'i — o gerçekten herkese açık olmalı.
DROP POLICY IF EXISTS "Platform settings are viewable by anyone" ON public.platform_settings;
DROP POLICY IF EXISTS "platform_settings_select" ON public.platform_settings;
CREATE POLICY "platform_settings_select_scoped" ON public.platform_settings
  FOR SELECT USING (key = 'ig_public_feed');

DROP POLICY IF EXISTS "platform_settings_insert" ON public.platform_settings;
-- INSERT artık kimseye açık değil — tüm yazımlar service_role (API katmanı) üzerinden.

-- story_queue / instagram_posts / content_memory: yorumlarda zaten "sadece
-- service_role yazsın" diye belirtilmiş ama politika "USING (true)" bırakılmış
-- — yani anon key ile DOĞRUDAN okunup/yazılabiliyordu. Anon erişimi tamamen
-- kapatıyoruz; service_role RLS'i zaten bypass ettiği için API katmanı
-- (lib/core.js, api/generate.js, api/instagram.js) etkilenmez.
DROP POLICY IF EXISTS "story_queue_service" ON public.story_queue;
DROP POLICY IF EXISTS "ig_posts_all" ON public.instagram_posts;
DROP POLICY IF EXISTS "content_memory_all" ON public.content_memory;
