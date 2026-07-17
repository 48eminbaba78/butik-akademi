-- ============================================================================
-- MIGRATION V32 — İki katmanlı fiyatlandırma (Bireysel / Profesyonel) desteği
-- Supabase SQL Editor'da tek seferde çalıştırın.
-- ============================================================================

-- Her koçun hangi pakette olduğunu tutar. Mevcut koçlar geriye dönük
-- 'bireysel' (temel paket) alır — güvenli varsayılan, kimse yanlışlıkla
-- fazla fiyatlandırılmaz.
alter table public.users add column if not exists plan_tier text not null default 'bireysel';
