-- ============================================================================
-- MIGRATION V38 — Yolculuğum: Koçtan Öğrenciye Kişisel Not
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- Koçun öğrenciye yazdığı kısa, kişisel bir not (motivasyon sözü, hatırlatma vb.).
-- Koç panelinden (öğrenci detay sayfası) yazılır, öğrencinin Yolculuğum
-- sayfasında gösterilir. RLS zaten student_profiles üzerinde koça yazma izni
-- veriyor (migration_v4'teki "Students can manage own profile" politikası
-- coach_id eşleşmesini de kapsıyor) — ek bir politika gerekmiyor.
alter table public.student_profiles
  add column if not exists coach_note text;

comment on column public.student_profiles.coach_note is 'Koçun öğrenciye yazdığı kişisel not — öğrencinin Yolculuğum sayfasında gösterilir.';
