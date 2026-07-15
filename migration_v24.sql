-- ============================================================================
-- MIGRATION V24 — Yönetim & Abonelik & Onay Sistemi Genişletmeleri
-- ============================================================================

-- 1. Payments tablosuna manuel onay ve doğrulama kolonlarının eklenmesi
alter table public.payments
  add column if not exists verified boolean default false,
  add column if not exists recorded_by text,
  add column if not exists note text;

comment on column public.payments.verified is 'Ödeme yönetici tarafından doğrulandı mı';
comment on column public.payments.recorded_by is 'Ödemeyi kaydeden/onaylayan yönetici';
comment on column public.payments.note is 'Ödemeye ait ek notlar';

-- 2. Yeni kaydolan koçlara varsayılan olarak 7 günlük deneme (trial) süresi tanımlanması
-- handle_new_user fonksiyonunu güncelleyelim
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, full_name, username, role, email, password_hash, exam_profile, plan, trial_ends_at)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    split_part(new.email, '@', 1),
    coalesce(new.raw_user_meta_data->>'role', 'coach'),
    new.email,
    'supabase_managed',
    'YKS',
    case when coalesce(new.raw_user_meta_data->>'role', 'coach') = 'coach' then 'trial' else null end,
    case when coalesce(new.raw_user_meta_data->>'role', 'coach') = 'coach' then now() + interval '7 days' else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;
