// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — HELPER FUNCTIONS
// ═══════════════════════════════════════════════

import { S, session } from './state.js';

export function saveUI() {
  try {
    localStorage.setItem('ba_ui_' + (session.dbUser?.id || 'x'), JSON.stringify({
      // weekOffset kasıtlı olarak kaydedilmiyor — bir önceki oturumda geçmiş/
      // gelecek bir haftaya bakılmışsa bu değer kalıcı olarak "yapışıyor" ve
      // her yeni girişte bugünün haftası yerine o eski hafta açılıyordu.
      // Her uygulama açılışı her zaman güncel haftadan (offset 0) başlamalı.
      activeStuId: S.activeStuId,
      calMonth: S.calMonth,
      calYear: S.calYear
    }));
  } catch (e) {}
}

export function saveS() {
  saveUI();
}

export function showLoading(on, msg) {
  let el = document.getElementById('loadingOverlay');

  // Mükerrer tıklamaları önlemek için giriş/aksiyon butonlarını devre dışı bırak
  const actionBtns = document.querySelectorAll('.btn-login, .btn-accent, .btn');
  actionBtns.forEach(btn => {
    if (on) {
      btn.setAttribute('disabled', 'true');
      btn.style.opacity = '0.6';
      btn.style.pointerEvents = 'none';
    } else {
      btn.removeAttribute('disabled');
      btn.style.opacity = '';
      btn.style.pointerEvents = '';
    }
  });

  if (on && !el) {
    el = document.createElement('div');
    el.id = 'loadingOverlay';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(15,14,12,.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;backdrop-filter:blur(6px)';
    const label = msg || 'Yükleniyor...';
    const icon  = msg ? `<div style="font-size:36px;animation:overlayPop .3s cubic-bezier(.34,1.56,.64,1) both">🗑️</div>` : `<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.12);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite"></div>`;
    el.innerHTML = `${icon}<div style="font-size:14px;font-weight:600;color:#fff;letter-spacing:.2px">${label}</div>`;
    if (!document.getElementById('spinStyle')) {
      const s = document.createElement('style');
      s.id = 'spinStyle';
      s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}@keyframes overlayPop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}';
      document.head.appendChild(s);
    }
    document.body.appendChild(el);
  } else if (!on && el) {
    el.remove();
  }
}

export function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function fmtDate(d) {
  return d instanceof Date ? d.toISOString().split('T')[0] : d;
}

export function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

export function todayStr() {
  return fmtDate(new Date());
}

export function netColor(v) {
  return v >= 20 ? 'good' : v >= 12 ? 'mid' : 'low';
}

export function typeLabel(t) {
  return { deneme: '📊 Deneme', soru: '📚 Soru', konu: '🎯 Konu', diger: '⭐ Diğer' }[t] || t;
}

export function om(id) {
  const modalBg = document.getElementById(id);
  modalBg.classList.add('open');
  _wireModalSheet(modalBg);
}

export function cm(id) {
  const modalBg = document.getElementById(id);
  modalBg.classList.remove('open');
  const modal = modalBg.querySelector('.modal');
  if (modal) modal.style.transform = '';
}

// Mobilde tüm .modal'ları alt-çekmeceye çeviren sürükle-kapat tutamacı — tek merkezden bağlanır (app.css'teki bottom-sheet dönüşümüyle birlikte çalışır)
function _wireModalSheet(modalBg) {
  const modal = modalBg.querySelector('.modal');
  if (!modal) return;
  modal.style.transform = '';
  if (modal.querySelector('.modal-drag-handle')) return;
  const handle = document.createElement('div');
  handle.className = 'modal-drag-handle';
  modal.prepend(handle);
  _wireModalDrag(modalBg, modal, handle);
}

function _wireModalDrag(modalBg, modal, handle) {
  let startY = 0, dy = 0, dragging = false;
  handle.addEventListener('touchstart', e => {
    if (window.innerWidth >= 768) return;
    dragging = true;
    startY = e.touches[0].clientY;
    modal.style.transition = 'none';
  }, { passive: true });
  handle.addEventListener('touchmove', e => {
    if (!dragging) return;
    dy = Math.max(0, e.touches[0].clientY - startY);
    modal.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  handle.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    modal.style.transition = '';
    if (dy > 80) modalBg.classList.remove('open');
    modal.style.transform = '';
    dy = 0;
  });
}

// Klavye açıldığında odaklanılan input'un modal içinde görünür kalmasını sağlar (mobil dvh/keyboard-avoidance)
document.addEventListener('focusin', e => {
  const t = e.target;
  if (window.innerWidth >= 768) return;
  if (!(t instanceof HTMLElement) || !['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName)) return;
  if (!t.closest('.modal-bg.open')) return;
  setTimeout(() => t.scrollIntoView({ block: 'center', behavior: 'smooth' }), 300);
});

export function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2300);
}

// Click-outside ve Escape tuşu ile tüm modalları kapatma desteği
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-bg') && e.target.id !== 'trialExpiredModal') {
    e.target.classList.remove('open');
    e.target.querySelector('.modal')?.style.setProperty('transform', '');
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-bg.open').forEach(el => {
      if (el.id !== 'trialExpiredModal') {
        el.classList.remove('open');
        el.querySelector('.modal')?.style.setProperty('transform', '');
      }
    });
  }
});

// TR telefon maskesi: 0 (5XX) XXX XX XX — input'un oninput'unda çağrılır
export function maskPhoneTR(el) {
  let d = el.value.replace(/\D/g, '');
  if (d.startsWith('0')) d = d.slice(1);
  d = d.slice(0, 10);
  let out = '';
  if (d.length > 0) out = '0 (' + d.slice(0, 3);
  if (d.length >= 3) out += ') ' + d.slice(3, 6);
  if (d.length >= 6) out += ' ' + d.slice(6, 8);
  if (d.length >= 8) out += ' ' + d.slice(8, 10);
  el.value = out;
}

// YKS geri sayımı — sınav (yaklaşık 14 Haziran) geçince otomatik sonraki yıla döner
export function getNextYks() {
  const now = new Date();
  let year = now.getFullYear();
  let examDate = new Date(year, 5, 14); // 14 Haziran
  if (now > examDate) {
    year += 1;
    examDate = new Date(year, 5, 14);
  }
  return { year, days: Math.max(1, Math.ceil((examDate - now) / 864e5)) };
}

// Haftalık program başlangıç hesaplama (0=Pazartesi, 6=Pazar)
export function getWeekStart(offset, stuWeekStart = 0) {
  const t = new Date();
  const dow = t.getDay(); // 0=Pazar
  const todayIdx = dow === 0 ? 6 : dow - 1; // Pzt=0..Paz=6
  const diff = todayIdx - stuWeekStart;
  const monday = new Date(t);
  monday.setDate(t.getDate() - ((diff + 7) % 7) + offset * 7);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export function getStudentWeekStart() {
  const s = S.students.find(x => x.id === S.activeStuId);
  return s?.weekStart ?? 0;
}

// Şifre hashleme (SHA-256)
export async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

// Kullanıcı adı normalleştirme
export function normalizeUsername(str) {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/i̇/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/i/g, 'i')
    .replace(/\s+/g, '')
    .replace(/\u0307/g, '');
}

// Bildirim izin talebi
export function requestNotificationPermission() {
  if (!("Notification" in window)) {
    console.log("Bu tarayıcı anlık bildirimleri desteklemiyor.");
    return;
  }
  
  if (Notification.permission !== "granted" && Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showToast("Bildirim izinleri onaylandı ✓");
      }
    });
  } else if (Notification.permission === "granted") {
    showToast("Bildirim izinleri zaten açık ✓");
  } else {
    showToast("Bildirim izinleri tarayıcı ayarlarından engellenmiş.");
  }
}

// Expose to window for HTML inline event handlers
window.saveUI = saveUI;
window.saveS = saveS;
window.showLoading = showLoading;
window.esc = esc;
window.fmtDate = fmtDate;
window.addDays = addDays;
window.todayStr = todayStr;
window.netColor = netColor;
window.typeLabel = typeLabel;
window.om = om;
window.cm = cm;
window.showToast = showToast;
window.getWeekStart = getWeekStart;
window.getNextYks = getNextYks;
window.maskPhoneTR = maskPhoneTR;
window.getStudentWeekStart = getStudentWeekStart;
window.sha256 = sha256;
window.normalizeUsername = normalizeUsername;
window.requestNotificationPermission = requestNotificationPermission;

export function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (input && icon) {
    if (input.type === 'password') {
      input.type = 'text';
      icon.textContent = '🙈';
    } else {
      input.type = 'password';
      icon.textContent = '👁️';
    }
  }
}
window.togglePasswordVisibility = togglePasswordVisibility;

