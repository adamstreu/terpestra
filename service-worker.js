const CACHE_NAME = "terpstra-cache-v1";

// Activate immediately
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Never cache anything
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});


/*

















const CACHE_NAME = "terpstra-cache-v1";

// Add every file your app needs to run offline.
// IMPORTANT: include audio/image assets your app loads.
const ASSETS = [
  "./",
  "./keys.htm",
  "./keys.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];


// Cache on install
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

// Offline-first fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
        return resp;
      });
    })
  );
});
*/