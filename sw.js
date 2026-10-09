// 서랍 서비스 워커: 앱 화면은 최신 버전을 먼저 받고, 오프라인이면 저장해 둔 화면을 쓴다.
const SHELL = 'drawer-shell-v2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('drawer-shell-') && k !== SHELL).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // PDF 뷰어 라이브러리: 한 번 받으면 계속 재사용
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(caches.open(SHELL).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) c.put(req, res.clone());
      return res;
    }));
    return;
  }

  // 같은 사이트의 앱 파일: 네트워크 우선, 실패하면 저장본
  if (url.origin === self.location.origin && !url.pathname.includes('/__f/')) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req.mode === 'navigate' ? './' : req, copy)); }
        return res;
      }).catch(async () => (await caches.match(req)) || (req.mode === 'navigate' ? caches.match('./') : Response.error()))
    );
  }
  // GitHub API 요청은 건드리지 않는다.
});
