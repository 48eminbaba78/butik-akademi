-- ── LEADS (Kayıt Başvuruları) ──────────────────
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
  status text default 'pending', -- pending, approved, rejected, contacted
  notes text,
  source text default 'landing'
);

-- ── BLOG POSTS ─────────────────────────────────
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

-- ── SITE CONTENT (Dinamik içerik) ──────────────
create table if not exists site_content (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  updated_at timestamptz default now()
);

-- ── ANNOUNCEMENTS (Banner) ─────────────────────
create table if not exists announcements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  message text not null,
  type text default 'info', -- info, success, warning
  active boolean default true,
  link text,
  link_text text
);

-- ── SITE STATS ─────────────────────────────────
create table if not exists site_stats (
  id uuid primary key default gen_random_uuid(),
  date date default current_date unique,
  visits int default 0,
  signups int default 0
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

-- İlk blog yazıları
insert into blog_posts (title, slug, excerpt, category, cover_emoji, read_time, published) values
  ('Haftalık Program Nasıl Hazırlanır?', 'haftalik-program-nasil-hazirlanir', 'Etkili bir haftalık program öğrencinin motivasyonunu doğrudan etkiler.', 'Verimlilik', '📋', 5, true),
  ('TYT Net Hesaplama ve Gelişim Takibi', 'tyt-net-hesaplama', 'Deneme sonuçlarını doğru analiz etmek öğrencinin gelişimini netleştirir.', 'Deneme Analizi', '📊', 7, true),
  ('Öğrenci ile Sağlıklı İletişim', 'ogrenci-iletisim', 'Koç-öğrenci ilişkisinde iletişim kalitesi başarıyı doğrudan belirler.', 'İletişim', '💬', 4, true)
on conflict (slug) do nothing;
