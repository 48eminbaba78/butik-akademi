-- ============================================================================
-- MIGRATION V31 — payments.payment_date için güvenlik ağı varsayılanı
-- Supabase SQL Editor'da tek seferde çalıştırın. (Önce v30 çalışmış olmalı.)
-- ============================================================================

-- Kod tarafında artık her insert payment_date'i açıkça gönderiyor (bkz.
-- api/create-student.js, site_admin.html savePayment). Bu, canlıda
-- "null value in column payment_date" hatasına yol açan NOT NULL kısıtı
-- için ek bir güvenlik ağı — kolon default'u eksik/atlanmışsa bugünün
-- tarihini otomatik kullansın.
alter table public.payments alter column payment_date set default current_date;
