var CACHE_NAME = 'pwa-push-test-caches';
var urlsToCache = ['./index.html','./firebasejs/firebase-app.js','./firebasejs/firebase-messaging.js','./images/icon_loader.gif','./css/push.css'];



self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});





