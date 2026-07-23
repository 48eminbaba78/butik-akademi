-- ============================================================================
-- MIGRATION V41 — Push Bildirimleri: abonelik tablosu
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================================

-- Her kullanıcı (koç/öğrenci/veli) birden fazla cihazdan bildirime abone
-- olabilir (telefon + bilgisayar gibi) — bu yüzden user_id tekil değil,
-- endpoint tekil (aynı cihaz+tarayıcı ikinci kez abone olursa üzerine yazar).
create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz default now()
);

create index if not exists idx_push_subscriptions_user on public.push_subscriptions(user_id);

-- RLS: yazma/okuma servis rolü (api/push-*.js) üzerinden yapılıyor — bazı
-- öğrenciler gerçek Supabase Auth oturumu olmadan (RPC fallback ile) giriş
-- yaptığı için auth.uid() bazlı politika burada da (student_profiles'daki
-- gibi) güvenilir olmaz. Tablo sadece service-role ile yazılıyor/okunuyor.
alter table public.push_subscriptions enable row level security;
