self.addEventListener("install", function (event) {
  console.log("Service worker installed.");
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  console.log("Service worker activated.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
