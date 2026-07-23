// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — SERVICE WORKER (PWA + APK)
// Push bildirimleri + Offline cache desteği
// ═══════════════════════════════════════════════

const CACHE_NAME = 'rostrum-v10';
const OFFLINE_URL = '/app.html';

// Uygulama kabuğu — bu dosyalar her zaman cache'lenir
const SHELL_FILES = [
  '/',
  '/app.html',
  '/app.css',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// ── INSTALL: Temel dosyaları cache'le ──
self.addEventListener('install', (event) => {
  console.log('[SW] Install — cache oluşturuluyor v10');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(SHELL_FILES).catch(err => {
        console.warn('[SW] Bazı dosyalar cache\'lenemedi:', err);
      });
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: Eski cache'leri temizle ──
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate — eski cache temizleniyor v10');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// ── FETCH: Network-first stratejisi ──
self.addEventListener('fetch', (event) => {
  // Chrome extensions & non-http/https isteklerini filtrele
  if (!event.request.url.startsWith('http://') && !event.request.url.startsWith('https://')) return;
  // API isteklerini cache'leme
  if (event.request.url.includes('/api/')) return;
  // POST isteklerini cache'leme
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Başarılı yanıtı cache'e kaydet
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone).catch(() => {});
          });
        }
        return response;
      })
      .catch(() => {
        // Offline ise cache'den dön
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // HTML isteklerinde offline sayfayı göster
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});

// ── PUSH NOTIFICATION ──
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Bildirimi Alındı.');
  
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { 
        title: 'Rostrum Akademi', 
        body: event.data.text() 
      };
    }
  }

  const title = data.title || 'Rostrum Akademi';
  const options = {
    body: data.body || 'Yeni bir bildiriminiz var!',
    icon: data.icon || '/icons/icon-192x192.png',
    badge: data.badge || '/icons/icon-96x96.png',
    data: data.url || '/app.html',
    vibrate: [100, 50, 100],
    actions: [
      { action: 'open', title: 'Görüntüle' },
      { action: 'close', title: 'Kapat' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Bildirim Tıklandı.');
  event.notification.close();

  if (event.action === 'close') return;

  const targetUrl = event.notification.data || '/app.html';

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      // Eğer uygulama sekmesi zaten açıksa, hangi sohbetin açılacağını
      // postMessage ile bildirip oraya odaklan — sadece focus() ile pencere
      // öne gelir ama neredeyse kaldıysa orada kalır (ör. Ana Sayfa).
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url.includes('/app.html') && 'focus' in client) {
          client.postMessage({ type: 'push-open', url: targetUrl });
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
