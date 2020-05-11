var CACHE_NAME = 'pwa-push-test-caches2';
var urlsToCache = ['./index.html','./css/push.css'];



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


self.addEventListener('push', function(event) {
	var data = event.data.json();
	var title = data.title;
	var icon = data.icon;
	var body = data.body;
	self.registration.showNotification(title, {
		icon: icon,
		body: body
	})
})


