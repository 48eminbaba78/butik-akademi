import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Ana vanilla JS uygulaması postMessage ile bize öğrencinin KENDİ Supabase
// erişim token'ını gönderiyor. Bu client'ı o token'la kurmak, tüm
// sorgularımızın (net ortalaması okuma, addAssignmentToSchedule ile görev
// ekleme) öğrencinin kendi RLS kapsamıyla sınırlı kalmasını sağlar — biz
// hiçbir zaman service-role anahtarı kullanmıyoruz, öğrenci kendi verisi
// dışına asla erişemez/yazamaz (bkz. migration_v29.sql RLS politikası).
export function createBridgedSupabaseClient(accessToken: string): SupabaseClient {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
