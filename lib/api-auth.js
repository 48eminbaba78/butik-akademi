// ═══════════════════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — SHARED SERVER AUTH, QUOTA, & SAFE ORIGIN HELPERS
// Vercel Hobby 12-function limitini aşmadan tüm api/*.js dosyaları kullanır.
// ═══════════════════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';
import crypto from 'node:crypto';

export const SB_URL = (process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co').trim();
export const SB_ANON = (
  process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34'
).trim();

const ALLOWED_ORIGINS = [
  'https://www.rostrumakademi.com',
  'https://rostrumakademi.com',
];

export function getServiceKey() {
  return (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || '').trim();
}

export function getServiceClient() {
  const serviceKey = getServiceKey();
  if (!serviceKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY yapılandırılmamış.');
  }
  return createClient(SB_URL, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export function getAnonClient() {
  return createClient(SB_URL, SB_ANON, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export function safeCompare(a, b) {
  const sa = String(a || '');
  const sb = String(b || '');
  if (!sa || !sb) return false;
  const bufA = Buffer.from(sa, 'utf8');
  const bufB = Buffer.from(sb, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function getSigningSecret() {
  return (
    process.env.CRON_SECRET ||
    process.env.PANEL_PASSWORD ||
    getServiceKey() ||
    ''
  ).trim();
}

export function getInternalSecret() {
  const base = getSigningSecret();
  if (!base) return '';
  return crypto.createHmac('sha256', base).update('rostrum-internal-v1').digest('hex');
}

export function hasInternalSecret(req) {
  const hdr = String(req.headers['x-internal-secret'] || '').trim();
  const expected = getInternalSecret();
  if (!hdr || !expected) return false;
  return safeCompare(hdr, expected);
}

export function makeInternalHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const secret = getInternalSecret();
  if (secret) headers['x-internal-secret'] = secret;
  return headers;
}

/**
 * Bearer JWT doğrulaması + public.users rol/profil yüklemesi.
 * Sahte 'supabase_managed' hash bypass'ı kesinlikle kabul edilmez.
 */
export async function verifyJwtUser(req) {
  const authHeader = String(req.headers.authorization || '');
  if (!authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  if (!token || token === 'undefined' || token === 'null') return null;

  try {
    const admin = getServiceKey() ? getServiceClient() : getAnonClient();
    const { data: { user } = {}, error } = await admin.auth.getUser(token);
    if (error || !user) return null;

    const queryClient = getServiceKey()
      ? admin
      : createClient(SB_URL, SB_ANON, {
          auth: { autoRefreshToken: false, persistSession: false },
          global: { headers: { Authorization: `Bearer ${token}` } },
        });

    const { data: profile } = await queryClient
      .from('users')
      .select('id, role, coach_id, full_name, email, username, plan, plan_tier, payment_reference_code')
      .eq('id', user.id)
      .maybeSingle();

    if (!profile) return null;
    return { user, profile, token, admin: getServiceKey() ? admin : queryClient };
  } catch (_) {
    return null;
  }
}

export async function requireRole(req, res, allowedRoles = []) {
  const auth = await verifyJwtUser(req);
  if (!auth) {
    res.status(401).json({ error: 'Oturum doğrulaması gerekli.' });
    return null;
  }
  if (allowedRoles.length && !allowedRoles.includes(auth.profile.role)) {
    res.status(403).json({ error: 'Bu işlem için yetkiniz yok.' });
    return null;
  }
  return auth;
}

export async function isDeveloperOrCron(req) {
  const cronSecret = (process.env.CRON_SECRET || '').trim();
  const panelPw = (process.env.PANEL_PASSWORD || '').trim();
  const bearer = String(req.headers.authorization || '').startsWith('Bearer ')
    ? String(req.headers.authorization).slice(7).trim()
    : '';
  const panelKey = String(req.headers['x-panel-key'] || '').trim();
  const queryKey = String(req.query?.key || '').trim();

  if (cronSecret && (safeCompare(queryKey, cronSecret) || safeCompare(bearer, cronSecret))) {
    return true;
  }
  if (panelPw && safeCompare(panelKey, panelPw)) {
    return true;
  }
  if (bearer) {
    const auth = await verifyJwtUser(req);
    if (auth?.profile?.role === 'developer') return true;
  }
  return false;
}

export function getSafeOrigin(req) {
  const envUrl = (process.env.PUBLIC_APP_URL || process.env.SITE_URL || '').trim().replace(/\/+$/, '');
  const originHdr = String(req.headers?.origin || '').trim().replace(/\/+$/, '');
  const hostHdr = String(req.headers?.host || '').trim();

  if (ALLOWED_ORIGINS.includes(originHdr)) return originHdr;
  if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(originHdr)) return originHdr;

  if (hostHdr) {
    if (/^(www\.)?rostrumakademi\.com$/i.test(hostHdr) || /^[a-z0-9-]+\.vercel\.app$/i.test(hostHdr)) {
      return `https://${hostHdr}`;
    }
    if (process.env.NODE_ENV !== 'production' && /^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(hostHdr)) {
      return `http://${hostHdr}`;
    }
  }
  return envUrl || 'https://www.rostrumakademi.com';
}

export function applyRestrictedCors(req, res, methods = 'POST, OPTIONS') {
  const origin = String(req.headers?.origin || '').trim().replace(/\/+$/, '');
  const allowed =
    ALLOWED_ORIGINS.includes(origin) ||
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin) ||
    (process.env.NODE_ENV !== 'production' && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin));

  if (allowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', methods);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-panel-key');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
}

export function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function signReportToken(payloadObj, ttlSeconds = 7 * 24 * 3600) {
  const secret = getSigningSecret();
  if (!secret) return '';
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const body = Buffer.from(JSON.stringify({ ...payloadObj, exp })).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  return `${body}.${sig}`;
}

export function verifyReportToken(token) {
  const secret = getSigningSecret();
  if (!secret || !token || !token.includes('.')) return null;
  const [body, sig] = String(token).split('.');
  const expected = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  if (!safeCompare(sig, expected)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!data?.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch (_) {
    return null;
  }
}

export async function checkCoachStudentQuota(admin, coachId) {
  const { data: coach } = await admin
    .from('users')
    .select('id, role, plan_tier')
    .eq('id', coachId)
    .maybeSingle();

  if (!coach) return { allowed: false, count: 0, limit: 0, tier: 'bireysel', error: 'Koç bulunamadı.' };
  if (coach.role === 'developer') return { allowed: true, count: 0, limit: 9999, tier: 'developer' };

  const tier = coach.plan_tier === 'profesyonel' ? 'profesyonel' : 'bireysel';
  const limit = tier === 'profesyonel' ? 40 : 15;

  const { count, error } = await admin
    .from('users')
    .select('id', { count: 'exact', head: true })
    .eq('coach_id', coachId)
    .eq('role', 'student');

  if (error) return { allowed: false, count: 0, limit, tier, error: error.message };
  const activeCount = Number(count || 0);
  return {
    allowed: activeCount < limit,
    count: activeCount,
    limit,
    tier,
  };
}
