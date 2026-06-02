-- ══════════════════════════════════════════
-- BUTIK AKADEMİ — Site Yönetim Tabloları
-- Supabase SQL Editor'da çalıştır
-- ══════════════════════════════════════════

-- LEADS
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  first_name text not null,
  last_name text,
  brand_name text not null,
  email text not null unique,
  phone text,
  student_count text,
  plan text default 'pro',
  status text default 'pending',
  notes text,
  source text default 'landing'
);

-- BLOG POSTS
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  category text default 'Genel',
  cover_emoji text default '📝',
  read_time int default 5,
  published boolean default false,
  author text default 'Butik Akademi'
);

-- SITE CONTENT
create table if not exists site_content (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  updated_at timestamptz default now()
);

-- ANNOUNCEMENTS
create table if not exists announcements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  message text not null,
  type text default 'info',
  active boolean default true,
  link text,
  link_text text
);

-- Varsayılan içerik
insert into site_content (key, value) values
  ('hero_title', 'Öğrencilerinizi profesyonel yönetin'),
  ('hero_desc', 'Haftalık program, deneme takibi, gerçek zamanlı mesajlaşma, PDF raporlar.'),
  ('coach_count', '180'),
  ('student_count', '2400'),
  ('task_count', '47000'),
  ('satisfaction', '98'),
  ('price_pro', '299'),
  ('price_enterprise', '699'),
  ('brand_name', 'Butik Akademi')
on conflict (key) do nothing;

-- Örnek blog yazıları
insert into blog_posts (title, slug, excerpt, category, cover_emoji, read_time, published) values
  ('Haftalık Program Nasıl Hazırlanır?', 'haftalik-program', 'Etkili haftalık program öğrenci motivasyonunu artırır.', 'Verimlilik', '📋', 5, true),
  ('TYT Net Takibi: Koçun Rehberi', 'tyt-net-takibi', 'Deneme sonuçlarını doğru analiz edin.', 'Deneme Analizi', '📊', 7, true),
  ('Öğrenci ile Sağlıklı İletişim', 'ogrenci-iletisim', 'İletişim kalitesi başarıyı belirler.', 'İletişim', '💬', 4, true)
on conflict (slug) do nothing;

-- ── RLS AKTİF ET ──────────────────────────
alter table leads enable row level security;
alter table blog_posts enable row level security;
alter table site_content enable row level security;
alter table announcements enable row level security;

-- ── POLİTİKALAR (drop + create) ───────────
-- LEADS
drop policy if exists "anon_leads_all" on leads;
create policy "anon_leads_all"
  on leads for all to anon
  using (true) with check (true);

-- BLOG POSTS
drop policy if exists "anon_blogs_all" on blog_posts;
create policy "anon_blogs_all"
  on blog_posts for all to anon
  using (true) with check (true);

-- SITE CONTENT
drop policy if exists "anon_content_all" on site_content;
create policy "anon_content_all"
  on site_content for all to anon
  using (true) with check (true);

-- ANNOUNCEMENTS
drop policy if exists "anon_announces_all" on announcements;
create policy "anon_announces_all"
  on announcements for all to anon
  using (true) with check (true);
