-- ============================================================================
-- MIGRATION V44 — Premium Performans Raporu arşiv alanları
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- Mevcut public.reports (migration_v14.sql) sadece düz content text tutuyor.
-- Premium rapor türünün yapılandırılmış alanlarını (güçlü yönler, gelişim
-- alanları, hedefler, şeffaf performans skoru) saklamak için nullable/default'lu
-- yeni kolonlar — geriye dönük güvenli, mevcut standart raporları etkilemez.
alter table public.reports add column if not exists report_style varchar(20) not null default 'standard'
  check (report_style in ('standard','premium'));
alter table public.reports add column if not exists summary text;
alter table public.reports add column if not exists strengths jsonb not null default '[]'::jsonb;
alter table public.reports add column if not exists growth_areas jsonb not null default '[]'::jsonb;
alter table public.reports add column if not exists coach_comment text;
alter table public.reports add column if not exists weekly_goals jsonb not null default '[]'::jsonb;
alter table public.reports add column if not exists score numeric(3,1);
alter table public.reports add column if not exists score_breakdown jsonb;
