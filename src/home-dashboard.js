// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — KOÇ ANA SAYFA (DASHBOARD) ANALİZ MOTORU
// Saf (DOM bağımsız) özet metrikleri, öğrenci nabzı ve geri bildirim akışı.
// ═══════════════════════════════════════════════

import {
  DIFF_META,
  BLOCKER_LABELS,
  getTaskStatusMeta,
} from './weekly-report.js';

const MONTHS_SHORT_TR = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
const DOW_SHORT_TR = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

function parseLocalDate(ds) {
  if (!ds || typeof ds !== 'string') return null;
  const parts = ds.split('-');
  if (parts.length !== 3) return null;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

/**
 * Verilen Date veya string tarihi yerel saat diliminde YYYY-MM-DD biçimine çevirir.
 */
export function fmtDateLocal(d) {
  if (typeof d === 'string') return d;
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Verilen tarihe n gün eklenmiş yeni bir Date nesnesi döner.
 */
export function addDaysLocal(d, n) {
  const base = d instanceof Date ? new Date(d.getTime()) : (parseLocalDate(String(d)) || new Date());
  base.setDate(base.getDate() + Number(n || 0));
  return base;
}

function getWeekStartLocal(offset = 0, stuWeekStart = 0, refDate = new Date()) {
  const t = new Date(refDate.getTime());
  const dow = t.getDay();
  const todayIdx = dow === 0 ? 6 : dow - 1;
  const diff = todayIdx - (stuWeekStart || 0);
  const monday = new Date(t);
  monday.setDate(t.getDate() - ((diff + 7) % 7) + Number(offset || 0) * 7);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

/**
 * YYYY-MM-DD tarihini kısa Türkçe tarihe çevirir ("18 Kas").
 */
export function formatShortDateTr(ds) {
  const dt = parseLocalDate(ds);
  if (!dt) return String(ds || '');
  return `${dt.getDate()} ${MONTHS_SHORT_TR[dt.getMonth()] || ''}`;
}

/**
 * Yaklaşan randevu gününü bugüne göre anlaşılır etikete çevirir.
 */
export function formatRelApptDay(ds, todayDs) {
  const dt = parseLocalDate(ds);
  const base = parseLocalDate(todayDs);
  if (!dt || !base) return formatShortDateTr(ds);

  const diffDays = Math.round((dt.getTime() - base.getTime()) / 86400000);
  if (diffDays === 0) return 'Bugün';
  if (diffDays === 1) return 'Yarın';
  if (diffDays === 2) return '2 gün sonra';
  return `${dt.getDate()} ${MONTHS_SHORT_TR[dt.getMonth()] || ''} · ${DOW_SHORT_TR[dt.getDay()] || ''}`;
}

/**
 * Koç Ana Sayfası için ek DB sorgusu olmadan tüm özet metriklerini hesaplar.
 */
export function computeCoachHomeMetrics(state = {}, { now = new Date(), alertRes = null, getWeekStartFn } = {}) {
  const students = Array.isArray(state.students) ? state.students : [];
  const activeStudents = students.filter(s => s && s.active !== false);
  const activeIds = new Set(activeStudents.map(s => s.id));
  const stuMap = new Map(students.map(s => [s.id, s]));

  const pendingInvitesCount = Array.isArray(state.pendingInvites) ? state.pendingInvites.length : 0;
  const todayDs = fmtDateLocal(now);
  const timeNow = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // 1. Okunmamış mesajlar
  let unreadCount = 0;
  const unreadByStu = new Map();
  for (const [stuId, msgs] of Object.entries(state.messages || {})) {
    if (!Array.isArray(msgs)) continue;
    const cnt = msgs.filter(m => m && m.from === 'student' && !m.read).length;
    if (cnt > 0) {
      unreadCount += cnt;
      unreadByStu.set(stuId, cnt);
    }
  }
  const unreadEntries = [...unreadByStu.entries()]
    .sort((a, b) => b[1] - a[1]);
  const unreadStudentCount = unreadEntries.length;
  const unreadSenders = unreadEntries
    .map(([stuId]) => stuMap.get(stuId)?.name)
    .filter(Boolean)
    .slice(0, 2);

  // 2. Randevular (Bugün + Önümüzdeki 7 gün)
  const appts = Array.isArray(state.appointments) ? state.appointments : [];
  const plus7Ds = fmtDateLocal(addDaysLocal(now, 7));

  const todayAppts = appts
    .filter(a => a && a.date === todayDs)
    .sort((a, b) => String(a.time || '').localeCompare(String(b.time || '')));
  const nextTodayAppt = todayAppts.find(a => String(a.time || '') >= timeNow) || null;

  const upcomingAppts = appts
    .filter(a => a && a.date > todayDs && a.date <= plus7Ds)
    .sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')) || String(a.time || '').localeCompare(String(b.time || '')))
    .slice(0, 6)
    .map(a => {
      const stu = stuMap.get(a.studentId);
      return {
        ...a,
        relLabel: formatRelApptDay(a.date, todayDs),
        studentName: stu?.name || 'Öğrenci',
        studentColor: stu?.color || '',
      };
    });

  let apptKpiSub = 'Önümüzdeki 7 günde randevu yok';
  if (todayAppts.length > 0 && nextTodayAppt) {
    apptKpiSub = `Sıradaki: ${nextTodayAppt.time}`;
  } else if (todayAppts.length > 0 && !nextTodayAppt) {
    apptKpiSub = 'Bugünkü tüm randevular tamamlandı ✓';
  } else if (todayAppts.length === 0 && upcomingAppts.length > 0) {
    apptKpiSub = `Yaklaşan: ${upcomingAppts[0].relLabel} ${upcomingAppts[0].time}`;
  }

  // 3. Uyarı sayıları (öğrenci bazlı)
  const alertByStu = new Map();
  for (const al of (alertRes?.alerts || [])) {
    if (!al?.studentId) continue;
    const prev = alertByStu.get(al.studentId) || { critical: 0, warning: 0, positive: 0 };
    if (al.severity === 'critical') prev.critical++;
    else if (al.severity === 'warning') prev.warning++;
    else if (al.severity === 'positive') prev.positive++;
    alertByStu.set(al.studentId, prev);
  }

  // 4. Öğrenci son denemeleri
  const lastExamByStu = new Map();
  for (const ex of (state.exams || [])) {
    if (!ex?.studentId || !ex.date) continue;
    const prev = lastExamByStu.get(ex.studentId);
    if (!prev || String(ex.date) > String(prev.date)) {
      lastExamByStu.set(ex.studentId, ex);
    }
  }

  // 5. Öğrenci Haftalık Nabzı & Haftalık Toplamlar
  let weekTotal = 0;
  let weekDone = 0;
  let weekSolved = 0;
  let weekStudyMin = 0;
  let plannedStudentCount = 0;
  let unplannedStudentCount = 0;

  const todayMid = parseLocalDate(todayDs)?.getTime() || 0;

  const studentPulse = activeStudents.map(s => {
    const sWs = typeof getWeekStartFn === 'function'
      ? getWeekStartFn(0, s.weekStart || 0)
      : getWeekStartLocal(0, s.weekStart || 0, now);

    let total = 0;
    let done = 0;
    let solved = 0;
    let studyMin = 0;
    let hardCount = 0;
    let blockerCount = 0;

    for (let i = 0; i < 7; i++) {
      const ds = fmtDateLocal(addDaysLocal(sWs, i));
      const dayTasks = state.tasks?.[`${s.id}_${ds}`] || [];
      for (const t of dayTasks) {
        total++;
        if (t.done) done++;
        if (t.student_result) {
          solved += Number(t.student_result.dogru || 0) + Number(t.student_result.yanlis || 0) + Number(t.student_result.bos || 0);
        }
        const spent = Number(t.student_feedback?.time_spent || 0);
        if (spent > 0) studyMin += spent;
        else if (t.done) studyMin += Number(t.duration || 0);

        if (Number(t.student_feedback?.difficulty || 0) >= 4) hardCount++;
        if (t.student_feedback?.blocker) blockerCount++;
      }
    }

    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    weekTotal += total;
    weekDone += done;
    weekSolved += solved;
    weekStudyMin += studyMin;
    if (total > 0) plannedStudentCount++;
    else unplannedStudentCount++;

    const alCounts = alertByStu.get(s.id) || { critical: 0, warning: 0, positive: 0 };
    const unread = unreadByStu.get(s.id) || 0;

    let health = 'normal';
    if (alCounts.critical > 0) health = 'critical';
    else if (total === 0) health = 'no_plan';
    else if (alCounts.warning > 0 || pct < 40) health = 'attention';
    else if (pct >= 70) health = 'on_track';

    const lastExam = lastExamByStu.get(s.id) || null;
    let lastNet = null;
    let lastExamDaysAgo = null;
    if (lastExam) {
      const vals = Object.values(lastExam.nets || {});
      if (vals.length > 0) {
        const sumNet = vals.reduce((acc, v) => acc + Number(v || 0), 0);
        lastNet = Number.isInteger(sumNet) ? String(sumNet) : sumNet.toFixed(1);
      }
      const exTime = parseLocalDate(lastExam.date)?.getTime();
      if (exTime && todayMid) {
        lastExamDaysAgo = Math.max(0, Math.round((todayMid - exTime) / 86400000));
      }
    }

    return {
      studentId: s.id,
      studentName: s.name || 'Öğrenci',
      target: s.target || `${s.examProfile || 'YKS'} ${s.yksArea || ''}`.trim(),
      color: s.color || '',
      total,
      done,
      pct,
      solved,
      studyMin,
      hardCount,
      blockerCount,
      unreadCount: unread,
      criticalCount: alCounts.critical,
      warningCount: alCounts.warning,
      positiveCount: alCounts.positive,
      lastNet,
      lastExamType: lastExam?.type || '',
      lastExamDaysAgo,
      health,
    };
  });

  const healthOrder = { critical: 0, no_plan: 1, attention: 2, normal: 3, on_track: 4 };
  studentPulse.sort((a, b) => {
    if (b.criticalCount !== a.criticalCount) return b.criticalCount - a.criticalCount;
    if (b.unreadCount !== a.unreadCount) return b.unreadCount - a.unreadCount;
    const ha = healthOrder[a.health] ?? 5;
    const hb = healthOrder[b.health] ?? 5;
    if (ha !== hb) return ha - hb;
    if (a.pct !== b.pct) return a.pct - b.pct;
    return a.studentName.localeCompare(b.studentName, 'tr');
  });

  const weekPct = weekTotal > 0 ? Math.round((weekDone / weekTotal) * 100) : 0;

  // 6. Son 7 Günde Öğrenci Geri Bildirimleri & Zorlanmalar
  const rawFeedback = [];
  for (let dOff = 0; dOff < 7; dOff++) {
    const ds = fmtDateLocal(addDaysLocal(now, -dOff));
    for (const s of activeStudents) {
      if (!activeIds.has(s.id)) continue;
      const dayTasks = state.tasks?.[`${s.id}_${ds}`] || [];
      dayTasks.forEach((t, idx) => {
        const fb = t.student_feedback || {};
        const note = String(t.student_note || '').trim();
        const diff = Number(fb.difficulty || 0);
        const focus = Number(fb.focus || 0);
        const blocker = fb.blocker || '';
        const st = getTaskStatusMeta(t, todayDs);

        const isNotable = note.length > 0 || diff >= 4 || !!blocker || fb.status === 'failed' || fb.status === 'partial';
        if (!isNotable) return;

        const importance =
          (blocker ? 4 : 0) +
          (fb.status === 'failed' ? 4 : fb.status === 'partial' ? 2 : 0) +
          (diff >= 5 ? 3 : diff === 4 ? 2 : 0) +
          (note ? 2 : 0) +
          (focus > 0 && focus <= 2 ? 1 : 0);

        rawFeedback.push({
          id: t._id || `${s.id}_${ds}_${idx}`,
          studentId: s.id,
          studentName: s.name || 'Öğrenci',
          studentColor: s.color || '',
          date: ds,
          dateLabel: formatShortDateTr(ds),
          subject: t.subject || 'Görev',
          type: t.type || 'diger',
          note,
          difficulty: diff,
          diffLabel: diff ? (DIFF_META[diff]?.label || '') : '',
          diffCls: diff ? (DIFF_META[diff]?.cls || '') : '',
          focus,
          blocker,
          blockerLabel: blocker ? (BLOCKER_LABELS[blocker] || blocker) : '',
          status: st.code,
          statusLabel: st.label,
          statusIcon: st.icon,
          statusCls: st.cls,
          importance,
          task: t,
        });
      });
    }
  }

  rawFeedback.sort((a, b) => {
    const d = b.date.localeCompare(a.date);
    if (d !== 0) return d;
    if (b.importance !== a.importance) return b.importance - a.importance;
    return a.studentName.localeCompare(b.studentName, 'tr');
  });
  const recentFeedback = rawFeedback.slice(0, 8);

  // 7. Bugünün Koç Yapılacakları
  const todoItems = Array.isArray(state.coachTodos?.[todayDs]) ? state.coachTodos[todayDs] : [];
  const todayTodos = {
    items: todoItems,
    doneCount: todoItems.filter(x => x && x.done).length,
    totalCount: todoItems.length,
  };

  // 8. Günlük Brifing Metni
  let briefingText = '';
  if (activeStudents.length === 0) {
    briefingText = 'İlk öğrencini davet ederek haftalık takip ve erken uyarıları başlatabilirsin.';
  } else {
    const parts = [];
    const crit = Number(alertRes?.counts?.critical || 0);
    const warn = Number(alertRes?.counts?.warning || 0);
    if (crit > 0) parts.push(`${crit} kritik erken uyarı`);
    else if (warn > 0) parts.push(`${warn} takip uyarısı`);
    else parts.push('Kritik uyarı yok');

    if (unplannedStudentCount > 0) {
      parts.push(`${unplannedStudentCount} öğrencinin bu hafta programı eksik`);
    }
    if (todayAppts.length > 0) {
      parts.push(`bugün ${todayAppts.length} randevu${nextTodayAppt ? ` (sıradaki ${nextTodayAppt.time})` : ''}`);
    } else if (upcomingAppts.length > 0 && parts.length < 3) {
      parts.push(`yaklaşan randevu: ${upcomingAppts[0].relLabel} ${upcomingAppts[0].time}`);
    }
    if (unreadCount > 0 && parts.length < 3) {
      parts.push(`${unreadCount} okunmamış mesaj bekliyor`);
    }
    if (parts.length < 3 && weekTotal > 0) {
      parts.push(`haftalık tamamlama %${weekPct}`);
    }
    const joined = parts.join(' · ');
    briefingText = joined.charAt(0).toLocaleUpperCase('tr') + joined.slice(1) + '.';
  }

  return {
    todayDs,
    timeNow,
    activeStudents,
    pendingInvitesCount,
    unreadCount,
    unreadStudentCount,
    unreadSenders,
    todayAppts,
    nextTodayAppt,
    upcomingAppts,
    apptKpiSub,
    weekTotal,
    weekDone,
    weekPct,
    weekSolved,
    weekStudyMin,
    plannedStudentCount,
    unplannedStudentCount,
    studentPulse,
    recentFeedback,
    todayTodos,
    briefingText,
  };
}
