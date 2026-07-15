-- ============================================================================
-- MIGRATION V25 — Öğrenci Davet ve Kayıt Altyapısı
-- ============================================================================

-- 1. Davet tablosunu oluştur
create table if not exists public.student_invitations (
  id uuid primary key default gen_random_uuid(),
  token text unique not null,
  coach_id uuid references public.users(id) on delete cascade,
  email text not null,
  student_name text,
  username text,
  created_at timestamptz default now(),
  expires_at timestamptz not null,
  used_at timestamptz
);

comment on table public.student_invitations is 'Öğrenci davet linkleri ve kayıt durumları';
comment on column public.student_invitations.token is 'Benzersiz 48 saatlik davet tokenı';
comment on column public.student_invitations.expires_at is 'Token son kullanma tarihi';
comment on column public.student_invitations.used_at is 'Davetin kabul edildiği tarih';

-- 2. RLS kurallarını tanımla
alter table public.student_invitations enable row level security;

-- Koçlar kendi davetlerini yönetebilir (okuma, silme, ekleme)
create policy "Coaches can manage their own invitations"
  on public.student_invitations
  for all
  using (auth.uid() = coach_id);

-- Davet sayfasından herkes (kayıtsız öğrenciler) tokenı kontrol edebilir
create policy "Public read-only access to verify token"
  on public.student_invitations
  for select
  using (true);

-- 3. Users tablosuna onboarding e-posta adımları için alanları ekle
alter table public.users
  add column if not exists onboarding_email_step integer default 0,
  add column if not exists onboarding_email_sent_at timestamptz;

comment on column public.users.onboarding_email_step is 'Koç onboarding e-posta serisi adımı (0-6)';
comment on column public.users.onboarding_email_sent_at is 'Son onboarding e-postası gönderim tarihi';
