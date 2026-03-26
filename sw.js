const CACHE_NAME = 'baby-shizi-v3';
const assets = [
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js',
  'https://unpkg.com/pinyin-pro'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});