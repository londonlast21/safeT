const APP_PREFIX = 'safeT-app-';
const VERSION = 'v1';
const CACHE_NAME = APP_PREFIX + VERSION;
const DATA_CACHE_NAME = "data-cache-" + VERSION;


const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/icons/logo192-192x192',
    '/icons/logo512-512x512',
    '/favicon.ico',

    '/manifest.json',
    

    '/src/App.js',
    '/src/App.css',
    '/src/index.js',
    '/src/index.css',
    '/src/logo.svg',


    '/src/components/CommentForm/index.js',
    '/src/components/CommentList/index.js',
    '/src/components/PostForm/index.js',
    '/src/components/PostList/index.js',
    '/src/components/navbar.js',

    '/src/pages/Home.js',
    '/src/pages/Login.js',
    '/src/pages/NoMatch.js',
    '/src/pages/Profile.js',
    '/src/pages/Signup.js',
    '/src/pages/SinglePost.js',

    '/src/utils/auth.js',
    '/src/utils/hooks.js',
    '/src/utils/mutations.js',
    '/src/utils/queries.js'


];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('installing cache :' + CACHE_NAME);
          return cache.addAll(FILES_TO_CACHE);
        })
    );
  });
  
  // Cache and return requests
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
  
  // // Update a service worker
  self.addEventListener('activate', event => {
    var cacheWhitelist = ['safet-app'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });