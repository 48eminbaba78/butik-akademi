// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — ERKEN UYARI (EARLY WARNING) MOTORU
// Saf (DOM bağımsız) analiz, önceliklendirme ve erteleme modülü.
// ═══════════════════════════════════════════════

export const SPEED_LIMITS = {
  'TYT_Türkçe': 105,
  'TYT_Tarih': 90,
  'TYT_Coğrafya': 90,
  'TYT_Felsefe': 90,
  'TYT_Din Kültürü': 85,
  'TYT_Din': 85,
  'TYT_Sosyal': 95,
  'TYT_Biyoloji': 100,
  'TYT_Kimya': 110,
  'TYT_Fizik': 130,
  'TYT_Fen': 120,
  'TYT_Matematik': 145,
  'TYT_Geometri': 145,
  'AYT-SAY_Matematik': 185,
  'AYT-SAY_Fizik': 185,
  'AYT-SAY_Geometri': 185,
  'AYT-SAY_Kimya': 145,
  'AYT-SAY_Biyoloji': 125,
  'AYT-EA_Matematik': 185,
  'AYT-EA_Geometri': 185,
  'AYT-EA_Edebiyat': 110,
  'AYT-EA_Tarih-1': 100,
  'AYT-EA_Tarih1': 100,
  'AYT-EA_Tarih': 100,
  'AYT-EA_Coğrafya-1': 100,
  'AYT-EA_Coğrafya1': 100,
  'AYT-EA_Coğrafya': 100,
  'AYT-SOZ_Edebiyat': 110,
  'AYT-SOZ_Tarih-1': 100,
  'AYT-SOZ_Tarih1': 100,
  'AYT-SOZ_Tarih-2': 100,
  'AYT-SOZ_Tarih2': 100,
  'AYT-SOZ_Coğrafya-1': 100,
  'AYT-SOZ_Coğrafya1': 100,
  'AYT-SOZ_Coğrafya-2': 100,
  'AYT-SOZ_Coğrafya2': 100,
  'AYT-SOZ_Felsefe Grubu': 100,
  'AYT-SOZ_Felsefe': 100,
  'AYT-SOZ_Din Kültürü': 90,
  'AYT-SOZ_Din': 90,
  'YDT_İngilizce': 110,
};

export function getSpeedLimit(examType, subject) {
  const key = `${examType || ''}_${subject || ''}`;
  if (SPEED_LIMITS[key] != null) return SPEED_LIMITS[key];
  const et = String(examType || '').toUpperCase();
  if (et === 'TYT') return 125;
  if (et.startsWith('AYT')) return 175;
  return 130;
}

export function fmtDateLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDaysLocal(d, n) {
  const x = new Date(d.getTime());
  x.setDate(x.getDate() + n);
  return x;
}

export function getWeekStartLocal(now, offset = 0, stuWeekStart = 0) {
  const t = new Date(now.getTime());
  const dow = t.getDay();
  const todayIdx = dow === 0 ? 6 : dow - 1;
  const diff = todayIdx - (Number(stuWeekStart) || 0);
  const start = new Date(t.getTime());
  start.setDate(t.getDate() - ((diff + 7) % 7) + offset * 7);
  start.setHours(0, 0, 0, 0);
  return start;
}

export function daysBetweenDates(isoA, isoB) {
  if (!isoA || !isoB) return 999;
  const [ya, ma, da] = String(isoA).slice(0, 10).split('-').map(Number);
  const [yb, mb, db] = String(isoB).slice(0, 10).split('-').map(Number);
  if (!ya || !ma || !da || !yb || !mb || !db) return 999;
  const msA = Date.UTC(ya, ma - 1, da);
  const msB = Date.UTC(yb, mb - 1, db);
  return Math.round((msB - msA) / 86400000);
}

export function escapeAlertHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const BLOCKER_LABELS = {
  time: 'Zaman yetmedi',
  topic: 'Konuyu anlamadı',
  hard: 'Kaynak çok zordu',
  moti: 'Motivasyon düşük',
};

const TR_DAYS_FULL = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function calcStreakLocal(stuId, nowDate, tasksMap) {
  const hasDoneOn = ds => (tasksMap?.[`${stuId}_${ds}`] || []).some(t => t.done);
  let cursor = new Date(nowDate.getTime());
  cursor.setHours(12, 0, 0, 0);
  if (!hasDoneOn(fmtDateLocal(cursor))) cursor = addDaysLocal(cursor, -1);
  let streak = 0;
  while (streak < 60) {
    if (!hasDoneOn(fmtDateLocal(cursor))) break;
    streak++;
    cursor = addDaysLocal(cursor, -1);
  }
  return streak;
}

function examNetTotal(exam) {
  return Object.values(exam?.nets || {}).reduce((sum, v) => sum + Number(v || 0), 0);
}

function formatWaitDuration(hoursWaiting) {
  if (hoursWaiting >= 48) return `${Math.floor(hoursWaiting / 24)} gün`;
  return `${Math.floor(hoursWaiting)} sa`;
}

export function computeEarlyWarnings(state = {}, options = {}) {
  const nowDate = options.now instanceof Date ? new Date(options.now.getTime()) : new Date(options.now || Date.now());
  const nowMs = nowDate.getTime();
  const todayStr = fmtDateLocal(nowDate);
  const todayMid = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  const snoozedMap = options.snoozedMap || {};
  const tasksMap = state.tasks || {};

  const activeStudents = (state.students || []).filter(
    s => s && s.active !== false && (!options.studentId || s.id === options.studentId)
  );

  const allAlerts = [];
  const pushAlert = alert => {
    allAlerts.push({ ...alert, id: alert.fingerprint });
  };

  for (const s of activeStudents) {
    const firstName = String(s.name || 'Öğrenci').trim().split(/\s+/)[0] || 'Öğrenci';
    const ws = getWeekStartLocal(nowDate, 0, s.weekStart || 0);
    const wsStr = fmtDateLocal(ws);
    const elapsedDayIdx = Math.max(0, Math.min(6, Math.round((todayMid.getTime() - ws.getTime()) / 86400000)));

    let totalTasks = 0;
    let doneTasks = 0;
    let elapsedTotal = 0;
    let elapsedDone = 0;
    const dayMinutes = {};

    for (let i = 0; i < 7; i++) {
      const ds = fmtDateLocal(addDaysLocal(ws, i));
      const dayList = tasksMap[`${s.id}_${ds}`] || [];
      totalTasks += dayList.length;
      const dayDoneCount = dayList.filter(t => t.done).length;
      doneTasks += dayDoneCount;

      if (ds <= todayStr) {
        elapsedTotal += dayList.length;
        elapsedDone += dayDoneCount;
      }
      if (ds >= todayStr) {
        dayMinutes[ds] = dayList.reduce((sum, t) => sum + (Number(t.duration) || 0), 0);
      }
    }

    const wsNext = addDaysLocal(ws, 7);
    const wsNextStr = fmtDateLocal(wsNext);
    let nextWeekTotal = 0;
    for (let i = 0; i < 7; i++) {
      const ds = fmtDateLocal(addDaysLocal(wsNext, i));
      nextWeekTotal += (tasksMap[`${s.id}_${ds}`] || []).length;
    }

    // ── 1) 3+ günlük pasiflik ──────────────────────
    let scheduledLast3 = 0;
    let doneLast3 = 0;
    for (let i = 0; i < 3; i++) {
      const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
      const list = tasksMap[`${s.id}_${ds}`] || [];
      scheduledLast3 += list.length;
      doneLast3 += list.filter(t => t.done).length;
    }
    const isInactive = scheduledLast3 >= 2 && doneLast3 === 0;
    if (isInactive) {
      let inactiveDays = 3;
      for (let i = 3; i < 14; i++) {
        const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
        const list = tasksMap[`${s.id}_${ds}`] || [];
        if (list.length > 0 && list.every(t => !t.done)) inactiveDays++;
        else break;
      }
      pushAlert({
        fingerprint: `${s.id}:inactive:${inactiveDays}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'critical',
        score: 95,
        type: 'inactive',
        icon: '💤',
        title: `${inactiveDays} Gündür Pasif`,
        desc: `Son <b>${inactiveDays} gündür</b> atanmış ${scheduledLast3}+ görevden hiçbiri tamamlanmadı.`,
        actionType: 'message',
        actionLabel: '💬 Mesaj Yaz',
        draftMsg: `Merhaba ${firstName}, son ${inactiveDays} gündür programında aksama gördüm. Takıldığın bir konu veya yoğunluk mu var? Programı birlikte esnetebiliriz.`,
      });
    }

    // ── 2) Öğrenci geri bildirimi: blocker / yapamadı / aşırı zor / düşük odak ──
    let failedCount = 0;
    let struggleCount = 0;
    let latestBlockerDate = '';
    let latestBlockerSubject = '';
    let latestBlockerCode = '';
    for (let i = 0; i < 7; i++) {
      const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
      const list = tasksMap[`${s.id}_${ds}`] || [];
      for (const t of list) {
        const fb = t.student_feedback;
        if (!fb) continue;
        const isFailed = fb.status === 'failed';
        const isPartialBlocker = fb.status === 'partial' && Boolean(fb.blocker);
        const isVeryHard = Number(fb.difficulty) >= 5;
        const isLowFocus = Number(fb.focus) > 0 && Number(fb.focus) <= 2;
        if (isFailed || isPartialBlocker || isVeryHard || isLowFocus) {
          if (isFailed) failedCount++;
          struggleCount++;
          if (!latestBlockerDate) {
            latestBlockerDate = ds;
            latestBlockerSubject = t.subject || 'Görev';
            latestBlockerCode = fb.blocker || '';
          }
        }
      }
    }
    if (failedCount >= 1 || struggleCount >= 2) {
      const reasonTxt = BLOCKER_LABELS[latestBlockerCode] || '';
      const reasonPart = reasonTxt ? ` · Neden: <b>${escapeAlertHtml(reasonTxt)}</b>` : '';
      const countTxt = failedCount > 0 ? `${failedCount} yapılamayan` : `${struggleCount} zorlanılan`;
      pushAlert({
        fingerprint: `${s.id}:blocker:${failedCount}_${struggleCount}_${latestBlockerDate}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'critical',
        score: 90,
        type: 'blocker',
        icon: '🆘',
        title: 'Görevde Zorlanma',
        desc: `Son 7 günde <b>${countTxt} görev</b> (<i>${escapeAlertHtml(latestBlockerSubject)}</i>)${reasonPart}.`,
        actionType: 'message',
        actionLabel: '💬 Destek Yaz',
        draftMsg: `Merhaba ${firstName}, "${latestBlockerSubject}" görevinde zorlandığını gördüm${reasonTxt ? ` (${reasonTxt})` : ''}. İstersen bu kısmı birlikte sadeleştirip planı revize edelim.`,
      });
    }

    // ── 3) Yanıtsız bekleyen öğrenci mesajı (>= 12 sa) ──
    const thread = (state.messages?.[s.id] || [])
      .slice()
      .sort((a, b) => new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime());
    const lastMsg = thread[thread.length - 1];
    if (lastMsg && lastMsg.from === 'student') {
      const unreadMsgs = thread.filter(m => m.from === 'student' && !m.read);
      if (unreadMsgs.length > 0) {
        const oldestUnread = unreadMsgs[0];
        const latestUnread = unreadMsgs[unreadMsgs.length - 1];
        const oldestMs = new Date(oldestUnread.created_at || 0).getTime();
        const hoursWaiting = (nowMs - oldestMs) / 3600000;
        if (Number.isFinite(hoursWaiting) && hoursWaiting >= 12) {
          const rawSnippet = String(latestUnread.text || (latestUnread.image_url ? '📎 Ek dosya' : '')).replace(/\s+/g, ' ').trim();
          const snippet = rawSnippet.length > 50 ? rawSnippet.slice(0, 49) + '…' : rawSnippet;
          pushAlert({
            fingerprint: `${s.id}:unanswered_msg:${latestUnread._id || latestUnread.id || latestUnread.created_at}`,
            studentId: s.id,
            studentName: s.name,
            color: s.color,
            severity: 'critical',
            score: 88,
            type: 'unanswered_msg',
            icon: '💬',
            title: `Yanıtsız Mesaj (${formatWaitDuration(hoursWaiting)})`,
            desc: `${unreadMsgs.length} okunmamış mesaj bekliyor${snippet ? `: "<i>${escapeAlertHtml(snippet)}</i>"` : '.'}`,
            actionType: 'message',
            actionLabel: '💬 Yanıtla',
            draftMsg: '',
          });
        }
      }
    }

    // ── 4) Deneme net düşüşü (sınav ölçeğine duyarlı + 3 deneme trendi) ──
    const stuExams = (state.exams || [])
      .filter(e => e.studentId === s.id)
      .slice()
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    const examsByType = {};
    for (const e of stuExams) {
      if (!examsByType[e.type]) examsByType[e.type] = [];
      examsByType[e.type].push(e);
    }

    for (const [examType, list] of Object.entries(examsByType)) {
      if (list.length < 2) continue;
      const latest = list[0];
      const ageLatest = daysBetweenDates(latest.date, todayStr);
      if (ageLatest > 30 || ageLatest < -1) continue;

      const prev = list[1];
      const latestTotal = examNetTotal(latest);
      const prevTotal = examNetTotal(prev);
      const diff = latestTotal - prevTotal;
      const minDrop = examType === 'TYT' ? 6 : 4;
      const relDrop = prevTotal >= 15 && diff / prevTotal <= -0.12;
      const prev2Total = list.length >= 3 ? examNetTotal(list[2]) : null;
      const consecDrop =
        list.length >= 3 &&
        latestTotal < prevTotal &&
        prevTotal < prev2Total &&
        prev2Total - latestTotal >= minDrop;
      const sharpDrop = diff <= -minDrop || relDrop;

      if (consecDrop || sharpDrop) {
        const subKeys = new Set([...Object.keys(latest.nets || {}), ...Object.keys(prev.nets || {})]);
        let worstSub = '';
        let worstSubDiff = 0;
        for (const sub of subKeys) {
          const sd = Number(latest.nets?.[sub] || 0) - Number(prev.nets?.[sub] || 0);
          if (sd < worstSubDiff) {
            worstSubDiff = sd;
            worstSub = sub;
          }
        }
        const subInfo =
          worstSub && worstSubDiff <= -1
            ? ` En fazla düşüş: <b>${escapeAlertHtml(worstSub)}</b> (${worstSubDiff.toFixed(1)}).`
            : '';
        pushAlert({
          fingerprint: `${s.id}:exams:${examType}:${latest.id || latest.date}`,
          studentId: s.id,
          studentName: s.name,
          color: s.color,
          severity: 'critical',
          score: consecDrop ? 92 : 85,
          type: 'exams',
          icon: '📉',
          title: consecDrop ? `Üst Üste Net Düşüşü (${examType})` : `Net Düşüşü (${examType})`,
          desc: consecDrop
            ? `Son 3 denemede geriledi (${prev2Total.toFixed(1)} → ${prevTotal.toFixed(1)} → <b>${latestTotal.toFixed(1)} net</b>).${subInfo}`
            : `Son denemede <b>${latestTotal.toFixed(1)} net</b> (${prevTotal.toFixed(1)} netten <b>${Math.abs(diff).toFixed(1)} net düşüş</b>).${subInfo}`,
          actionType: 'exams',
          actionLabel: '📊 Denemeler',
          draftMsg: '',
        });
      }
    }

    // ── 5) Bugüne kadar vadesi gelen görevlerde düşük tamamlama (Pazartesi yalancı alarmını önler) ──
    const elapsedPct = elapsedTotal > 0 ? Math.round((elapsedDone / elapsedTotal) * 100) : 0;
    if (elapsedTotal >= 3 && elapsedPct < 40 && !(isInactive && elapsedDone === 0)) {
      pushAlert({
        fingerprint: `${s.id}:tasks:${wsStr}:${elapsedDone}_${elapsedTotal}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: elapsedPct < 25 ? 'critical' : 'warning',
        score: elapsedPct < 25 ? 78 : 66,
        type: 'tasks',
        icon: '📋',
        title: 'Düşük Görev',
        desc: `Bugüne dek planlı görevlerde tamamlama <b>%${elapsedPct}</b> (${elapsedDone}/${elapsedTotal} görev).`,
        actionType: 'program',
        actionLabel: '📋 Programı Aç',
        draftMsg: '',
      });
    }

    // ── 6) Bu hafta hiç program yok ───────────────
    if (totalTasks === 0) {
      pushAlert({
        fingerprint: `${s.id}:noplan:${wsStr}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 70,
        type: 'noplan',
        icon: '📭',
        title: 'Program Yok',
        desc: 'Bu hafta için henüz hiç görev eklenmemiş.',
        actionType: 'program',
        actionLabel: '📅 Program Yap',
        draftMsg: '',
      });
    }

    // ── 7) Hafta sonuna yaklaşırken gelecek hafta boş ──
    if (totalTasks > 0 && elapsedDayIdx >= 5 && nextWeekTotal === 0) {
      pushAlert({
        fingerprint: `${s.id}:plan_ending:${wsNextStr}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 58,
        type: 'plan_ending',
        icon: '📆',
        title: 'Gelecek Hafta Boş',
        desc: 'Hafta bitmek üzere ancak önümüzdeki hafta için henüz görev planlanmamış.',
        actionType: 'program_next',
        actionLabel: '📆 Haftayı Planla',
        draftMsg: '',
      });
    }

    // ── 8) 21+ gündür deneme kaydı yok ─────────────
    let tasksLast21 = 0;
    for (let i = 0; i < 21; i++) {
      const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
      tasksLast21 += (tasksMap[`${s.id}_${ds}`] || []).length;
    }
    const lastExamAge = stuExams.length > 0 ? daysBetweenDates(stuExams[0].date, todayStr) : 999;
    if (tasksLast21 >= 5 && (stuExams.length === 0 || lastExamAge >= 21)) {
      pushAlert({
        fingerprint: `${s.id}:no_exam:${stuExams[0]?.date || 'none'}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 55,
        type: 'no_exam',
        icon: '📝',
        title: 'Uzun Süredir Deneme Yok',
        desc:
          stuExams.length === 0
            ? 'Aktif çalışma programına rağmen henüz deneme sonucu girilmemiş.'
            : `Son deneme sonucunun üzerinden <b>${lastExamAge} gün</b> geçti.`,
        actionType: 'exams',
        actionLabel: '📊 Denemeler',
        draftMsg: '',
      });
    }

    // ── 9) Tekrar bekleyen / zayıf konular (>= 3) ───
    const stuMastery = state.konuMastery?.[s.id] || {};
    const weakList = [];
    for (const konular of Object.values(stuMastery)) {
      for (const [konu, m] of Object.entries(konular || {})) {
        if (!m || m.status === 'td' || m.status === 'not_started') continue;
        const lastReview = m.last_review_date ? new Date(m.last_review_date).getTime() : null;
        const daysSince = lastReview ? Math.floor((nowMs - lastReview) / 86400000) : 999;
        if ((m.stars || 0) <= 2 || daysSince > 20) {
          weakList.push({ konu, stars: m.stars || 0, daysSince });
        }
      }
    }
    if (weakList.length >= 3) {
      weakList.sort((a, b) => a.stars - b.stars || b.daysSince - a.daysSince);
      const top2 = weakList.slice(0, 2).map(w => escapeAlertHtml(w.konu)).join(', ');
      pushAlert({
        fingerprint: `${s.id}:weak_topics:${Math.floor(weakList.length / 3)}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 52,
        type: 'weak_topics',
        icon: '🔄',
        title: `Tekrar Bekleyen ${weakList.length} Konu`,
        desc: `Zayıf/gecikmiş konular: <b>${top2}</b>${weakList.length > 2 ? ` (+${weakList.length - 2} konu)` : ''}.`,
        actionType: 'konu',
        actionLabel: '🗺️ Konu Haritası',
        draftMsg: '',
      });
    }

    // ── 10) Yavaş çözüm hızı — öğrenci başına TEK özet uyarı ──
    const slowSpeeds = (state.studentSpeeds || [])
      .filter(sp => sp.student_id === s.id)
      .map(sp => {
        const limit = getSpeedLimit(sp.exam_type, sp.subject);
        const secs = Number(sp.secs_per_question || 0);
        return { ...sp, secs, limit, excess: secs - limit };
      })
      .filter(x => x.excess >= 10)
      .sort((a, b) => b.excess - a.excess);

    if (slowSpeeds.length === 1) {
      const sp = slowSpeeds[0];
      pushAlert({
        fingerprint: `${s.id}:speed:${sp.exam_type}_${sp.subject}_${sp.secs}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 48,
        type: 'speed',
        icon: '⚡',
        title: `Hız Aşımı (${sp.exam_type} - ${sp.subject})`,
        desc: `Soru çözüm hızı <b>${sp.secs} sn/soru</b> (Limit: ${sp.limit} sn).`,
        actionType: 'speed',
        actionLabel: '⏱ Hızı Düzenle',
        draftMsg: '',
      });
    } else if (slowSpeeds.length > 1) {
      const topPreview = slowSpeeds
        .slice(0, 3)
        .map(sp => `${escapeAlertHtml(sp.exam_type)} ${escapeAlertHtml(sp.subject)} (${sp.secs}/${sp.limit} sn)`)
        .join(', ');
      const extra = slowSpeeds.length > 3 ? ` +${slowSpeeds.length - 3} ders` : '';
      pushAlert({
        fingerprint: `${s.id}:speed:${slowSpeeds
          .slice(0, 3)
          .map(x => `${x.exam_type}_${x.subject}_${x.secs}`)
          .join(',')}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 48,
        type: 'speed',
        icon: '⚡',
        title: `Yavaş Çözüm Hızı (${slowSpeeds.length} ders)`,
        desc: `Limit üstü dersler: ${topPreview}${extra}.`,
        actionType: 'speed',
        actionLabel: '⏱ Hızı Düzenle',
        draftMsg: '',
      });
    }

    // ── 11) Planlanandan %50+ uzun süren görevler ───
    let overrunCount = 0;
    let ratioSum = 0;
    for (let i = 0; i < 7; i++) {
      const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
      for (const t of tasksMap[`${s.id}_${ds}`] || []) {
        const planned = Number(t.duration || 0);
        const spent = Number(t.student_feedback?.time_spent || 0);
        if (t.done && planned > 0 && spent >= planned * 1.5 && spent - planned >= 20) {
          overrunCount++;
          ratioSum += spent / planned;
        }
      }
    }
    if (overrunCount >= 2) {
      const avgPct = Math.round((ratioSum / overrunCount - 1) * 100);
      pushAlert({
        fingerprint: `${s.id}:time_overrun:${overrunCount}_${wsStr}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 46,
        type: 'time_overrun',
        icon: '⏳',
        title: 'Süre Tahmini Sapması',
        desc: `Son 7 günde <b>${overrunCount} görev</b> planlanan süreden ort. <b>%${avgPct} daha uzun</b> sürdü.`,
        actionType: 'speed',
        actionLabel: '⏱ Hızı Düzenle',
        draftMsg: '',
      });
    }

    // ── 12) Günlük aşırı iş yükü (> 8 saat / 480 dk) ──
    let peakDate = '';
    let peakMin = 0;
    for (const [ds, mins] of Object.entries(dayMinutes)) {
      if (mins > peakMin) {
        peakMin = mins;
        peakDate = ds;
      }
    }
    if (peakMin > 480) {
      const [py, pm, pd] = peakDate.split('-').map(Number);
      const dayName = TR_DAYS_FULL[new Date(py, pm - 1, pd).getDay()];
      const hrsText = `${Math.floor(peakMin / 60)} sa${peakMin % 60 ? ' ' + (peakMin % 60) + ' dk' : ''}`;
      pushAlert({
        fingerprint: `${s.id}:overload:${peakDate}_${peakMin}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 45,
        type: 'overload',
        icon: '⚖️',
        title: 'Aşırı Günlük Yük',
        desc: `<b>${dayName}</b> günü için <b>${hrsText}</b> (${peakMin} dk) çalışma planlanmış.`,
        actionType: 'program',
        actionLabel: '⚖️ Yükü Dengele',
        draftMsg: '',
      });
    }

    // ── 13) 14+ gündür randevu / görüşme yok ───────
    let tasksLast14 = 0;
    for (let i = 0; i < 14; i++) {
      const ds = fmtDateLocal(addDaysLocal(nowDate, -i));
      tasksLast14 += (tasksMap[`${s.id}_${ds}`] || []).length;
    }
    const cutoff14Str = fmtDateLocal(addDaysLocal(nowDate, -14));
    const hasRecentOrFutureAppt = (state.appointments || []).some(
      a => a.studentId === s.id && a.date >= cutoff14Str
    );
    if (tasksLast14 >= 3 && !hasRecentOrFutureAppt) {
      pushAlert({
        fingerprint: `${s.id}:no_appt:${wsStr}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'warning',
        score: 42,
        type: 'no_appt',
        icon: '📅',
        title: 'Görüşme Planlanmamış',
        desc: 'Son 14 günde ve yaklaşan takvimde bu öğrenci için randevu bulunmuyor.',
        actionType: 'appt',
        actionLabel: '📅 Randevu Ekle',
        draftMsg: '',
      });
    }

    // ── 14) Pozitif kilometre taşları (aksiyon uyarı sayacına dahil değil) ──
    if (totalTasks >= 3 && doneTasks === totalTasks) {
      pushAlert({
        fingerprint: `${s.id}:perfect:${wsStr}:${totalTasks}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'positive',
        score: 15,
        type: 'perfect',
        icon: '🏆',
        title: 'Harika Hafta!',
        desc: `Bu haftaki tüm <b>${totalTasks} görevi</b> tamamladı.`,
        actionType: 'message',
        actionLabel: '👏 Tebrik Et',
        draftMsg: `Harika iş çıkardın ${firstName}! 🏆 Bu haftaki tüm ${totalTasks} görevini eksiksiz tamamladın. Bu istikrarla devam edelim!`,
      });
    }

    let bestJump = null;
    for (const [examType, list] of Object.entries(examsByType)) {
      if (list.length < 2) continue;
      const latest = list[0];
      const age = daysBetweenDates(latest.date, todayStr);
      if (age > 14 || age < -1) continue;
      const jump = examNetTotal(latest) - examNetTotal(list[1]);
      const minJump = examType === 'TYT' ? 8 : 5;
      if (jump >= minJump && (!bestJump || jump > bestJump.jump)) {
        bestJump = { examType, jump, latest, latestTotal: examNetTotal(latest), prevTotal: examNetTotal(list[1]) };
      }
    }
    if (bestJump) {
      pushAlert({
        fingerprint: `${s.id}:net_jump:${bestJump.examType}:${bestJump.latest.id || bestJump.latest.date}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'positive',
        score: 14,
        type: 'net_jump',
        icon: '🚀',
        title: `Net Sıçraması (+${bestJump.jump.toFixed(1)} ${bestJump.examType})`,
        desc: `${bestJump.prevTotal.toFixed(1)} netten <b>${bestJump.latestTotal.toFixed(1)} nete</b> yükseldi!`,
        actionType: 'message',
        actionLabel: '👏 Tebrik Et',
        draftMsg: `Tebrikler ${firstName}! 🚀 Son ${bestJump.examType} denemende +${bestJump.jump.toFixed(1)} net sıçrayıp ${bestJump.latestTotal.toFixed(1)} nete ulaştın. Emeklerin çok güzel karşılık veriyor!`,
      });
    }

    const streakDays = calcStreakLocal(s.id, nowDate, tasksMap);
    if (streakDays >= 7) {
      pushAlert({
        fingerprint: `${s.id}:streak:${Math.floor(streakDays / 7)}`,
        studentId: s.id,
        studentName: s.name,
        color: s.color,
        severity: 'positive',
        score: 12,
        type: 'streak',
        icon: '🔥',
        title: `${streakDays} Günlük Çalışma Serisi`,
        desc: `Üst üste <b>${streakDays} gün</b> aksatmadan görev tamamladı.`,
        actionType: 'message',
        actionLabel: '🔥 Tebrik Et',
        draftMsg: `Süpersin ${firstName}! 🔥 Tam ${streakDays} gündür üst üste hiç aksatmadan çalışıyorsun. Bu disiplin fark yaratıyor!`,
      });
    }
  }

  // ── 15) Bekleyen / süresi dolmuş öğrenci davetleri ──
  if (!options.studentId) {
    for (const inv of state.pendingInvites || []) {
      const hoursSince = (nowMs - new Date(inv.createdAt).getTime()) / 3600000;
      if (!inv.expired && hoursSince < 24) continue;
      pushAlert({
        fingerprint: `invite:${inv.id}:${inv.expired ? 'exp' : 'wait'}`,
        studentId: `invite_${inv.id}`,
        studentName: inv.studentName || inv.email || 'Davetli Öğrenci',
        color: '#94a3b8',
        severity: 'warning',
        score: 40,
        type: 'invite',
        icon: '📨',
        title: inv.expired ? 'Davet Süresi Doldu' : 'Davet Bekliyor',
        desc: inv.expired
          ? `<b>${escapeAlertHtml(inv.email)}</b> adresine gönderilen davet kabul edilmeden süresi doldu — tekrar gönderin.`
          : `<b>${escapeAlertHtml(inv.email)}</b> adresine gönderilen davet ${Math.floor(hoursSince)} saattir kabul edilmedi.`,
        actionType: 'students',
        actionLabel: '📩 Davetler',
        draftMsg: '',
      });
    }
  }

  // Snooze filtrelemesi
  const activeAlerts = [];
  const snoozedAlerts = [];
  for (const a of allAlerts) {
    const until = Number(snoozedMap[a.fingerprint] || 0);
    if (until > nowMs) snoozedAlerts.push({ ...a, snoozedUntil: until });
    else activeAlerts.push(a);
  }

  // Öğrenci bazlı gruplama ve önem sırasına göre sıralama
  const groupMap = new Map();
  for (const a of activeAlerts) {
    if (!groupMap.has(a.studentId)) {
      groupMap.set(a.studentId, {
        studentId: a.studentId,
        studentName: a.studentName,
        color: a.color,
        items: [],
        maxScore: 0,
        worstSeverity: 'positive',
        actionableCount: 0,
      });
    }
    const grp = groupMap.get(a.studentId);
    grp.items.push(a);
    if (a.score > grp.maxScore) grp.maxScore = a.score;
    if (a.severity !== 'positive') grp.actionableCount++;
  }

  const sevOrder = { critical: 3, warning: 2, positive: 1 };
  const groups = [...groupMap.values()];
  for (const grp of groups) {
    grp.items.sort((a, b) => b.score - a.score);
    grp.worstSeverity = grp.items.reduce(
      (worst, it) => (sevOrder[it.severity] > sevOrder[worst] ? it.severity : worst),
      'positive'
    );
  }
  groups.sort(
    (a, b) =>
      b.maxScore - a.maxScore ||
      b.actionableCount - a.actionableCount ||
      String(a.studentName || '').localeCompare(String(b.studentName || ''), 'tr')
  );

  let critical = 0;
  let warning = 0;
  let positive = 0;
  for (const a of activeAlerts) {
    if (a.severity === 'critical') critical++;
    else if (a.severity === 'warning') warning++;
    else positive++;
  }

  return {
    alerts: activeAlerts,
    snoozed: snoozedAlerts,
    groups,
    counts: {
      totalActionable: critical + warning,
      critical,
      warning,
      positive,
      snoozed: snoozedAlerts.length,
    },
  };
}

// ── localStorage Erteleme (Snooze) Yardımcıları ─────
function snoozeStorageKey(coachId) {
  return `ra_alert_snooze_${coachId || 'anon'}`;
}

export function loadSnoozedAlerts(coachId, now = Date.now()) {
  if (typeof localStorage === 'undefined' || !coachId) return {};
  try {
    const raw = localStorage.getItem(snoozeStorageKey(coachId));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const cleaned = {};
    let dirty = false;
    for (const [k, exp] of Object.entries(parsed || {})) {
      if (Number(exp) > now) cleaned[k] = Number(exp);
      else dirty = true;
    }
    if (dirty) localStorage.setItem(snoozeStorageKey(coachId), JSON.stringify(cleaned));
    return cleaned;
  } catch (_) {
    return {};
  }
}

export function snoozeAlert(coachId, fingerprint, ttlMs, now = Date.now()) {
  const map = loadSnoozedAlerts(coachId, now);
  if (!coachId || !fingerprint) return map;
  map[fingerprint] = now + Math.max(60000, Number(ttlMs) || 86400000);
  if (typeof localStorage !== 'undefined') {
    try { localStorage.setItem(snoozeStorageKey(coachId), JSON.stringify(map)); } catch (_) {}
  }
  return map;
}

export function unsnoozeAlert(coachId, fingerprint, now = Date.now()) {
  const map = loadSnoozedAlerts(coachId, now);
  if (!coachId || !fingerprint) return map;
  delete map[fingerprint];
  if (typeof localStorage !== 'undefined') {
    try { localStorage.setItem(snoozeStorageKey(coachId), JSON.stringify(map)); } catch (_) {}
  }
  return map;
}

export function clearSnoozedAlerts(coachId) {
  if (typeof localStorage !== 'undefined' && coachId) {
    try { localStorage.removeItem(snoozeStorageKey(coachId)); } catch (_) {}
  }
  return {};
}
