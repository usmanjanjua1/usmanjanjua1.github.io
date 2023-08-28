'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8c8b6043a5abee103593b5356dc5ec06",
"assets/AssetManifest.json": "6915f016d84fcf3ec68079c2a2bdb567",
"assets/assets/app1.png": "f3a64135a684da3944ff1d612f95cdf3",
"assets/assets/appVideo.mp4": "b74556e5c53ac141ced7499f5f714b1a",
"assets/assets/background1.jpg": "ed4cded5f2f2e56dab354c76b8eeec15",
"assets/assets/chat.png": "d0d03cdb678859c7b62ef71b8e10f9ee",
"assets/assets/college.png": "d38c49d46754ce9a78160c9c6bbaa720",
"assets/assets/college1.png": "23d240d50ede471a4317e8269bf3a1a9",
"assets/assets/database.png": "74acd07373ded5552bba033a38a5a788",
"assets/assets/facebook.png": "01710b5fcb0658fc5a81dd19cf2397f6",
"assets/assets/finalfinalfinalImage.jpg": "c48983976c1b65ed15ec513143147169",
"assets/assets/game.png": "44c0616b51361296e0b91493665778fe",
"assets/assets/github.png": "84597e4c4151e7ea8339f3c1568e82e4",
"assets/assets/graduation-hat.png": "e6e2a691e0708d2ff529bb6d86634b36",
"assets/assets/instagram.png": "018d759aed6b7e29e57fb362f4a6e8d1",
"assets/assets/instagram1.png": "1be561f0c670fe46c77e96faf94262b8",
"assets/assets/joystick.png": "2c92461d370432ae415f2bb5f4282a48",
"assets/assets/linkedin.png": "73f7b2c95e09a9ac1c93922dd1cf6801",
"assets/assets/motherboard.png": "da435afc74293c878b4cee784ebb7f49",
"assets/assets/movie.png": "f5dade9cd6f63a27ff18409231745c92",
"assets/assets/myImg.jpg": "32c32b0b4405cc10b17494f13dcd48f6",
"assets/assets/myImg2.jpg": "c7987d47d3984b7de9f12e1046fe7370",
"assets/assets/paper-plane.png": "dce666f0b1ac5a7976a422cc1748b893",
"assets/assets/school.png": "69b185d3892fe3fd8b5c42533b255b35",
"assets/assets/trophy.png": "ddf224f1b3df1c16710d36fdcf33a024",
"assets/assets/trophy1.png": "de6042b82a29a3050db8bf8876fdeb75",
"assets/assets/twitter.png": "bb62afe819b11af8384f2fb814acf28a",
"assets/assets/twitternew.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/web.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"assets/FontManifest.json": "e9938c61dff56c8a28861b9ee29d445e",
"assets/fonts/ArtySignature.otf": "39257aefc6fe54a51ac4b85034717296",
"assets/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf": "df2653c1cb65e1eada0f38a512edab13",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "7a932b1ee7b748c6c17e81ea03b9ef9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d689cb3af398345a91393047ecd9f0a0",
"/": "d689cb3af398345a91393047ecd9f0a0",
"main.dart.js": "4577dfa0960aa29d21d2f528529dc82e",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
