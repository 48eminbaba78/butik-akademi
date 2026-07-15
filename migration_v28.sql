-- ============================================================================
-- MIGRATION V28 — Manuel Ödeme Sistemi (Çekirdek Akış): referans kodu,
-- dekont yükleme, dinamik ödeme ayarları
-- Supabase SQL Editor'da tek seferde çalıştırın. (Önce v27 çalışmış olmalı.)
-- ============================================================================

-- 1) users: koç bazında sabit ödeme referans kodu
alter table public.users add column if not exists payment_reference_code varchar(12);
create unique index if not exists users_payment_reference_code_key
  on public.users (payment_reference_code) where payment_reference_code is not null;

comment on column public.users.payment_reference_code is 'Havale/EFT açıklamasına yazılacak benzersiz kod (RA-XXXX) — finansal eşleştirme için';

-- 2) payments: koçun kendi yüklediği dekontun depolama yolu
alter table public.payments add column if not exists receipt_url text;
comment on column public.payments.receipt_url is 'Koçun yüklediği dekontun receipts bucket''ındaki yolu (coachId/dosya)';

-- 3) ensure_payment_ref_code — koç kendi kodunu ister; yoksa üretir, varsa döndürür
--    (ensure_invite_code ile aynı desen — migration_v21.sql)
create or replace function public.generate_payment_ref_code()
returns text as $$
declare
  digits constant text := '0123456789';
  code text;
  tries int := 0;
begin
  loop
    code := 'RA-';
    for i in 1..4 loop
      code := code || substr(digits, 1 + floor(random() * length(digits))::int, 1);
    end loop;
    exit when not exists (select 1 from public.users u where u.payment_reference_code = code);
    tries := tries + 1;
    if tries > 20 then
      raise exception 'payment ref code generation failed';
    end if;
  end loop;
  return code;
end;
$$ language plpgsql;

create or replace function public.ensure_payment_ref_code()
returns text as $$
declare
  v_code text;
begin
  select payment_reference_code into v_code from public.users where id = auth.uid();
  if v_code is null then
    v_code := public.generate_payment_ref_code();
    update public.users set payment_reference_code = v_code where id = auth.uid();
  end if;
  return v_code;
end;
$$ language plpgsql security definer;

grant execute on function public.ensure_payment_ref_code() to authenticated;

-- 4) receipts bucket — ÖZEL (public değil). Sadece sahibi kendi klasörüne
--    (userId/...) yükleyebilir; sahibi ve developer rolü okuyabilir.
insert into storage.buckets (id, name, public)
values ('receipts', 'receipts', false)
on conflict (id) do nothing;

drop policy if exists "receipts_owner_or_dev_read" on storage.objects;
create policy "receipts_owner_or_dev_read" on storage.objects
  for select using (
    bucket_id = 'receipts'
    and (
      (storage.foldername(name))[1] = auth.uid()::text
      or auth.uid() in (select id from public.users where role = 'developer')
    )
  );

drop policy if exists "receipts_owner_write" on storage.objects;
create policy "receipts_owner_write" on storage.objects
  for insert with check (
    bucket_id = 'receipts'
    and auth.role() = 'authenticated'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- 5) platform_settings — ödeme ayarları (banka/IBAN/unvan/fiyat) admin panelinden
--    yönetilir; kodda hardcode edilmez. Boş şablonla tohumla, admin doldurur.
insert into public.platform_settings (key, value)
values ('payment_settings', '{"bank_name":"","iban":"","account_holder":"","price_monthly":499}'::jsonb)
on conflict (key) do nothing;
