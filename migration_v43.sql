-- ============================================================================
-- MIGRATION V43 — Rapor Şablonları (Performans Raporu + Haftalık Program PDF)
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- program_templates (migration_v6) ile birebir aynı desen — koç kendi rapor
-- görünüm tercihlerini (hangi bölümler, hangi sırada, hangi stil) isimli bir
-- şablon olarak kaydedip tekrar uygulayabilsin diye.
create table if not exists public.report_templates (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid references public.users(id) on delete cascade,
  name varchar(255) not null,
  report_type text not null check (report_type in ('performance','weekly')),
  config jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

alter table public.report_templates enable row level security;

drop policy if exists "Report templates are manageable by their coach" on public.report_templates;
create policy "Report templates are manageable by their coach" on public.report_templates
  for all using (coach_id = auth.uid());
