-- ============================================================================
-- MIGRATION V21 — Koç Davet Kodu Sistemi
-- Supabase SQL Editor'da tek seferde çalıştırın.
-- ============================================================================

-- 1) workspaces.invite_code kolonu
alter table public.workspaces add column if not exists invite_code text;
create unique index if not exists workspaces_invite_code_key
  on public.workspaces (invite_code) where invite_code is not null;

-- 2) Kod üretici — karışmayan karakterler (0/O, 1/I/L yok), 6 hane
create or replace function public.generate_invite_code()
returns text as $$
declare
  chars constant text := '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
  code text;
  tries int := 0;
begin
  loop
    code := '';
    for i in 1..6 loop
      code := code || substr(chars, 1 + floor(random() * length(chars))::int, 1);
    end loop;
    exit when not exists (select 1 from public.workspaces w where w.invite_code = code);
    tries := tries + 1;
    if tries > 20 then
      raise exception 'invite code generation failed';
    end if;
  end loop;
  return code;
end;
$$ language plpgsql volatile;

-- 3) Mevcut workspace'lere backfill
update public.workspaces
set invite_code = public.generate_invite_code()
where invite_code is null;

-- 4) Yeni workspace'lere otomatik kod (BEFORE INSERT)
create or replace function public.set_workspace_invite_code()
returns trigger as $$
begin
  if new.invite_code is null then
    new.invite_code := public.generate_invite_code();
  end if;
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_workspace_invite_code on public.workspaces;
create trigger trg_workspace_invite_code
  before insert on public.workspaces
  for each row execute procedure public.set_workspace_invite_code();

-- 5) handle_new_user güncellemesi — signup metadata'sındaki invite_code'u
--    workspaces üzerinden coach_id'ye çözer (security definer, atomik bağlama)
create or replace function public.handle_new_user()
returns trigger as $$
declare
  v_invite text;
  v_coach uuid;
begin
  v_invite := upper(trim(coalesce(new.raw_user_meta_data->>'invite_code', '')));
  if v_invite <> '' then
    select w.coach_id into v_coach
    from public.workspaces w
    where w.invite_code = v_invite;
  end if;

  insert into public.users (id, full_name, username, role, email, password_hash, exam_profile, coach_id)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    split_part(new.email, '@', 1),
    coalesce(new.raw_user_meta_data->>'role', 'coach'),
    new.email,
    'supabase_managed',
    'YKS',
    v_coach
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

-- (on_auth_user_created trigger'ı zaten bu fonksiyona bağlı; yeniden kurmaya gerek yok)

-- 6) check_invite_code — kayıt ekranında canlı doğrulama (anon erişilebilir)
create or replace function public.check_invite_code(p_code text)
returns table (brand_name text) as $$
  select w.brand_name
  from public.workspaces w
  where w.invite_code = upper(trim(p_code));
$$ language sql stable security definer;

grant execute on function public.check_invite_code(text) to anon, authenticated;

-- 7) ensure_invite_code — koç kendi kodunu ister; yoksa üretir, varsa döndürür
create or replace function public.ensure_invite_code()
returns text as $$
declare
  v_code text;
begin
  select invite_code into v_code from public.workspaces where coach_id = auth.uid();
  if v_code is null then
    v_code := public.generate_invite_code();
    update public.workspaces set invite_code = v_code where coach_id = auth.uid();
  end if;
  return v_code;
end;
$$ language plpgsql security definer;

grant execute on function public.ensure_invite_code() to authenticated;
