const CACHE_NAME = "v1_cache_degradados_app_vue"
const urlsToCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "./img/background.jpg",
    "./img/icon16.png",
    "./css/css.css",
    "./img/icon32.png",
    "./img/icon64.png",
    "./img/icon128.png",
    "./img/icon192.png",
    "./img/icon256.png",
    "./img/icon512.png",
    "./img/icon1024.png",
    "./js/app.js",
    "./js/auth.js",
    "./js/firebaseconf.js",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js",
    "https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js",
    "https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js",
    "https://www.facebook.com/JuannHerrerad-100313778901414",
    "https://twitter.com/JuanNHerreraD",
    "https://www.linkedin.com/in/juannherrerad/",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    "manifest.json",
];

self.addEventListener('install',e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log(err)
            )
        )
    )
})

self.addEventListener("activate", e =>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhitelist.indexOf(cacheName) === -1){
                                return caches.delete(cacheName)
                            }
                        }
                    )
                )
            }
        )
        .then(
            () => self.clients.claim()
        )
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(
            (res) => {
                if(res){
                    return res;
                }    
                return fetch(e.request);
            })
    );
});