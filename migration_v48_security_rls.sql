-- ============================================================================
-- MIGRATION V48 — Güvenlik, RLS Sertleştirme, RPC Yetkilendirme & Şema Uyumu
-- Bu migrasyon tüm rolleri (öğrenci, koç, veli, developer) tek tutarlı RLS ve
-- SECURITY DEFINER politikası altında toplar. İdempotent olarak tekrar çalışabilir.
-- ============================================================================

-- 1. SECURITY DEFINER RPC Korumaları (Yetkisiz çağıranlar reddedilir)
create or replace function public.create_new_user(
  p_email text,
  p_password text,
  p_full_name text,
  p_username text,
  p_role text,
  p_target text,
  p_color text,
  p_progress integer,
  p_week_start integer,
  p_coach_id uuid,
  p_institution_id uuid,
  p_exam_profile text
)
returns uuid
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_caller_role text;
  v_user_id uuid;
  v_encrypted_password text;
begin
  select role into v_caller_role from public.users where id = auth.uid();
  if v_caller_role is distinct from 'developer' then
    if v_caller_role is distinct from 'coach' or p_role is distinct from 'student' or p_coach_id is distinct from auth.uid() then
      raise exception 'Yetkisiz işlem: yalnızca yönetici veya koç kendi öğrencisini oluşturabilir.';
    end if;
  end if;

  select id into v_user_id from auth.users where email = p_email;
  if v_user_id is not null then
    raise exception 'Bu e-posta adresiyle zaten bir kullanıcı kayıtlı!';
  end if;

  v_user_id := uuid_generate_v4();
  v_encrypted_password := crypt(p_password, gen_salt('bf', 10));

  insert into auth.users (
    instance_id, id, role, aud, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_user_id, 'authenticated', 'authenticated',
    p_email, v_encrypted_password, now(),
    '{"provider": "email", "providers": ["email"]}'::jsonb,
    jsonb_build_object('full_name', p_full_name, 'role', p_role),
    now(), now(), '', '', '', ''
  );

  insert into public.users (
    id, full_name, username, password_hash, role, email, color, target,
    progress, week_start, coach_id, institution_id, exam_profile
  ) values (
    v_user_id, p_full_name, p_username, 'supabase_managed', p_role, p_email,
    p_color, p_target, p_progress, p_week_start, p_coach_id, p_institution_id, p_exam_profile
  )
  on conflict (id) do update set
    full_name = excluded.full_name,
    username = excluded.username,
    role = excluded.role,
    email = excluded.email,
    color = excluded.color,
    target = excluded.target,
    progress = excluded.progress,
    week_start = excluded.week_start,
    coach_id = excluded.coach_id,
    institution_id = excluded.institution_id,
    exam_profile = excluded.exam_profile;

  return v_user_id;
end;
$$;

create or replace function public.update_auth_user_password(
  p_user_id uuid,
  p_new_password text
)
returns boolean
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_caller_role text;
  v_target_coach uuid;
  v_encrypted_password text;
begin
  select role into v_caller_role from public.users where id = auth.uid();
  select coach_id into v_target_coach from public.users where id = p_user_id;

  if auth.uid() is distinct from p_user_id
     and v_caller_role is distinct from 'developer'
     and not (v_caller_role = 'coach' and v_target_coach = auth.uid()) then
    raise exception 'Yetkisiz şifre güncelleme denemesi.';
  end if;

  v_encrypted_password := crypt(p_new_password, gen_salt('bf', 10));

  update auth.users
  set encrypted_password = v_encrypted_password,
      updated_at = now()
  where id = p_user_id;

  update public.users
  set password_hash = 'supabase_managed'
  where id = p_user_id;

  return found;
end;
$$;

-- Öğrenci düzenleme RPC: yalnızca developer veya öğrencinin kendi koçu çağırabilir.
-- Boş bırakılan şifre mevcut şifreyi/e-postayı üzerine yazmaz.
create or replace function public.update_student_profile(
  p_student_id uuid,
  p_full_name text,
  p_target text,
  p_color text,
  p_progress integer,
  p_week_start integer,
  p_username text,
  p_plain_password text,
  p_password_hash text,
  p_yks_area text
)
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_caller_role text;
  v_student_coach uuid;
  v_cur_email text;
begin
  select role into v_caller_role from public.users where id = auth.uid();
  select coach_id, email into v_student_coach, v_cur_email from public.users where id = p_student_id;

  if v_caller_role is distinct from 'developer'
     and not (v_caller_role = 'coach' and v_student_coach = auth.uid()) then
    raise exception 'Bu öğrenciyi düzenleme yetkiniz yok.';
  end if;

  if coalesce(trim(p_plain_password), '') <> '' then
    update auth.users
    set encrypted_password = crypt(p_plain_password, gen_salt('bf', 10)),
        updated_at = now()
    where id = p_student_id;
  end if;

  update public.users
  set full_name = p_full_name,
      target = p_target,
      color = p_color,
      progress = p_progress,
      week_start = p_week_start,
      username = p_username,
      email = coalesce(nullif(v_cur_email, ''), p_username || '@rostrumakademi.com'),
      password_hash = case
        when coalesce(trim(p_plain_password), '') <> '' and coalesce(p_password_hash, '') <> '' then p_password_hash
        else password_hash
      end,
      yks_area = p_yks_area
  where id = p_student_id;
end;
$$;

-- 2. handle_new_user() — v21 davet kodu eşlemesini v24 7-günlük deneme süresiyle birleştir
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_invite text;
  v_coach uuid;
  v_role text;
begin
  v_role := coalesce(new.raw_user_meta_data->>'role', 'coach');
  if v_role = 'developer' then
    v_role := 'coach';
  end if;

  v_invite := upper(trim(coalesce(new.raw_user_meta_data->>'invite_code', '')));
  if v_invite <> '' then
    select w.coach_id into v_coach
    from public.workspaces w
    where w.invite_code = v_invite
    limit 1;
    if v_coach is not null then
      v_role := 'student';
    end if;
  end if;

  insert into public.users (id, full_name, username, role, email, password_hash, exam_profile, coach_id, plan, trial_ends_at)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    split_part(new.email, '@', 1),
    v_role,
    new.email,
    'supabase_managed',
    'YKS',
    v_coach,
    case when v_role = 'coach' then 'trial' else null end,
    case when v_role = 'coach' then now() + interval '7 days' else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- 3. Öğrenci & Koç Eksik RLS Politikaları
-- tasks: öğrenci kendi görevinde done / not / sonuç / task_items güncelleyebilir, yalnızca kendisinin eklediğini silebilir
drop policy if exists "Students can update own tasks" on public.tasks;
create policy "Students can update own tasks" on public.tasks
  for update to authenticated
  using (student_id = auth.uid())
  with check (student_id = auth.uid());

drop policy if exists "Students can delete self-added tasks" on public.tasks;
create policy "Students can delete self-added tasks" on public.tasks
  for delete to authenticated
  using (student_id = auth.uid() and coalesce(added_by_student, false) = true);

-- exams: öğrenci kendi deneme sonucunu ekleyebilir / güncelleyebilir / silebilir
drop policy if exists "Students can insert own exams" on public.exams;
create policy "Students can insert own exams" on public.exams
  for insert to authenticated
  with check (student_id = auth.uid());

drop policy if exists "Students can update own exams" on public.exams;
create policy "Students can update own exams" on public.exams
  for update to authenticated
  using (student_id = auth.uid())
  with check (student_id = auth.uid());

drop policy if exists "Students can delete own exams" on public.exams;
create policy "Students can delete own exams" on public.exams
  for delete to authenticated
  using (student_id = auth.uid());

-- messages: alıcı okundu işaretleyebilir
drop policy if exists "Recipients can mark messages read" on public.messages;
create policy "Recipients can mark messages read" on public.messages
  for update to authenticated
  using (
    (student_id = auth.uid() and from_role = 'coach')
    or (coach_id = auth.uid() and from_role = 'student')
    or student_id in (select id from public.users where coach_id = auth.uid())
  )
  with check (
    (student_id = auth.uid() and from_role = 'coach')
    or (coach_id = auth.uid() and from_role = 'student')
    or student_id in (select id from public.users where coach_id = auth.uid())
  );

-- appointments: eksik kalan RLS politikalarını tamamla
drop policy if exists "Coaches manage own appointments" on public.appointments;
create policy "Coaches manage own appointments" on public.appointments
  for all to authenticated
  using (coach_id = auth.uid() or exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'))
  with check (coach_id = auth.uid() or exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

drop policy if exists "Students view own appointments" on public.appointments;
create policy "Students view own appointments" on public.appointments
  for select to authenticated
  using (student_id = auth.uid());

-- payments: koç kendi ödemelerini görebilir / ekleyebilir, güvensiz auth_all_payments temizlenir
alter table public.payments enable row level security;
drop policy if exists "auth_all_payments" on public.payments;
drop policy if exists "Coaches view own payments" on public.payments;
create policy "Coaches view own payments" on public.payments
  for select to authenticated
  using (coach_id = auth.uid() or exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

drop policy if exists "Coaches insert own payments" on public.payments;
create policy "Coaches insert own payments" on public.payments
  for insert to authenticated
  with check (coach_id = auth.uid() or exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

drop policy if exists "Developers manage payments" on public.payments;
create policy "Developers manage payments" on public.payments
  for all to authenticated
  using (exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'))
  with check (exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

-- 4. Gizlilik Sızıntılarını Kapatma
-- student_notes: koç gözlem notu öğrenciye görünmez
drop policy if exists "Student notes are viewable by student" on public.student_notes;

-- leads: herkese okuma/güncelleme kapatılır; yalnız developer okur/günceller
drop policy if exists "Allow select leads" on public.leads;
drop policy if exists "Allow update leads" on public.leads;
drop policy if exists "Leads are viewable by everyone" on public.leads;
drop policy if exists "Leads are updatable by everyone" on public.leads;
drop policy if exists "Developers manage leads" on public.leads;
create policy "Developers manage leads" on public.leads
  for select to authenticated
  using (exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

drop policy if exists "Developers update leads" on public.leads;
create policy "Developers update leads" on public.leads
  for update to authenticated
  using (exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'))
  with check (exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

-- storage.objects: anon geniş yazma/silme kaldırılır
drop policy if exists "Public Access stories" on storage.objects;
drop policy if exists "Public Access platform_assets" on storage.objects;
drop policy if exists "Public Access chat_images" on storage.objects;

drop policy if exists "Authenticated upload chat_images" on storage.objects;
create policy "Authenticated upload chat_images" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'chat_images');

drop policy if exists "Authenticated read chat_images" on storage.objects;
create policy "Authenticated read chat_images" on storage.objects
  for select to authenticated
  using (bucket_id = 'chat_images');

drop policy if exists "Developers manage platform_assets" on storage.objects;
create policy "Developers manage platform_assets" on storage.objects
  for all to authenticated
  using (bucket_id in ('stories', 'platform_assets') and exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'))
  with check (bucket_id in ('stories', 'platform_assets') and exists (select 1 from public.users u where u.id = auth.uid() and u.role = 'developer'));

-- 5. Koçların gizli notları için public.users sütunu (platform_settings yerine koç-özel RLS)
alter table public.users add column if not exists coach_notes jsonb default '[]'::jsonb;

-- 6. Public ödeme/paket gösterim bilgisi için güvenli RPC (hassas anahtar sızdırmaz)
create or replace function public.get_public_payment_info()
returns jsonb
language sql
security definer
set search_path = public
as $$
  select coalesce(
    (select value - 'secret_key' - 'api_key' from public.platform_settings where key = 'payment_settings' limit 1),
    '{}'::jsonb
  );
$$;
