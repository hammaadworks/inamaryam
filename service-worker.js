self.addEventListener("install", function (event) {
  console.log("Service worker installed.");
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  console.log("Service worker activated.");
});
