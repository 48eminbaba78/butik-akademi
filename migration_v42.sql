-- ============================================================================
-- MIGRATION V42 — Sıfır Aktivasyon Kurtarma E-postası
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- 48 saat geçtiği halde hiç öğrenci eklememiş koçlara tek seferlik kurtarma
-- e-postası gönderilir (bkz. api/generate.js runOnboardingCron). Bu alan
-- olmadan cron her çalıştığında aynı koça e-postayı tekrar tekrar gönderir.
alter table public.users add column if not exists onboarding_rescue_sent_at timestamptz;
