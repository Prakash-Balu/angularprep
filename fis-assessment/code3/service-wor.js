const appversion = "v1";

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== appversion) {
            return caches.delete(cache);
          }
        })
      );
    })
  );

  return self.clients.claim();
});