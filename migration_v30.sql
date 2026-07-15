-- ============================================================================
-- MIGRATION V30 — dev@rostrumakademi.com için eksik public.users satırı
-- Supabase SQL Editor'da tek seferde çalıştırın. (Önce v29 çalışmış olmalı.)
-- ============================================================================

-- Bu hesap auth.users'ta var ama public.users'ta hiç yok. Sonuç: role='developer'
-- kontrolü yapan her yerde (receipts storage RLS'i dahil) bu hesap "developer"
-- olarak tanınmıyordu.
insert into public.users (id, email, full_name, username, role, password_hash)
select id, email, 'Kurucu', 'dev', 'developer', 'supabase_managed'
from auth.users
where email = 'dev@rostrumakademi.com'
on conflict (id) do update set role = 'developer';
