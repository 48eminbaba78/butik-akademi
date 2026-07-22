-- ============================================================================
-- MIGRATION V36 — Rostrum Studio: Profil Tipi (editör UX'i için)
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- Editörün hangi alan grubunu (Öğrenci Koçu / Profesyonel Koç) öne çıkaracağını
-- hatırlaması için. Genel/kamu sayfası zaten hangi alanların dolu olduğuna göre
-- kendi kendine adapte oluyor — bu alan sadece editördeki gereksiz karmaşayı
-- azaltmak için, görüntüleme mantığını değiştirmiyor.
alter table public.coach_profiles
  add column if not exists profile_type text not null default 'student'
  check (profile_type in ('student','professional'));
