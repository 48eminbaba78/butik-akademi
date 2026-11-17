// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — SERVICE WORKER (PWA + APK)
// Push bildirimleri + Offline cache desteği
// ═══════════════════════════════════════════════

const CACHE_NAME = 'rostrum-v13';
const OFFLINE_URL = '/app.html';

// Uygulama kabuğu — statik varlıklar (HTML ve hashed Vite chunklar hariç)
const SHELL_FILES = [
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(SHELL_FILES).catch(err => {
        console.warn('[SW] Bazı dosyalar cache\'lenemedi:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url || '';
  if (!url.startsWith('http://') && !url.startsWith('https://')) return;
  // API ve Supabase isteklerini ASLA cache'leme (kullanıcı verisi izolasyonu + taze oturum)
  if (url.includes('/api/') || url.includes('supabase.co')) return;
  if (event.request.method !== 'GET') return;

  // HTML navigasyonları vercel.json no-store politikasıyla uyumlu olarak her zaman ağdan taze alınır
  const isHtmlNav = event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html');
  if (isHtmlNav) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Hashed Vite assetleri & statik dosyalar: ağ öncelikli, offline fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.status === 200 && url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone).catch(() => {});
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
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
