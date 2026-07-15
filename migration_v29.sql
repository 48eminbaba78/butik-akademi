-- ============================================================================
-- MIGRATION V29 — Öğrenci Paneli "Elit Çalışma Odası": Boşluktan Eyleme
-- (öğrencinin kendi programına görev ekleyebilmesi)
-- Supabase SQL Editor'da tek seferde çalıştırın. (Önce v28 çalışmış olmalı.)
-- ============================================================================

-- 1) tasks: öğrencinin kendi eklediği görevleri işaretlemek için
alter table public.tasks add column if not exists added_by_student boolean default false;
comment on column public.tasks.added_by_student is 'Görev koç tarafından değil, öğrenci "Boşluktan Eyleme" kartından kendisi eklediyse true';

-- 2) RLS: öğrenci sadece kendi student_id'sine görev ekleyebilir
--    (mevcut "Coaches can manage tasks" politikası değişmiyor, bu ek bir insert izni)
drop policy if exists "Students can add their own tasks" on public.tasks;
create policy "Students can add their own tasks" on public.tasks
  for insert
  with check (student_id = auth.uid());
