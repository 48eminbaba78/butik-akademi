-- ═══════════════════════════════════════════════════════════
-- MIGRATION V18 — GÖREV GERİ BİLDİRİM ALANI
-- Supabase SQL Editor'de çalıştırın.
-- ═══════════════════════════════════════════════════════════

ALTER TABLE public.tasks ADD COLUMN IF NOT EXISTS student_feedback jsonb;

COMMENT ON COLUMN public.tasks.student_feedback IS
  'Öğrencinin görev geri bildirimi: {status, time_spent (dk), focus (1-5), difficulty (1-5), blocker}';
