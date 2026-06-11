self.addEventListener('fetch', async event => {	
  console.log(event.request.url);

  event.respondedWith( 
    await caches.match(event.request).then(res => { 
      return res || fetch(event.request);
    })
  );
});