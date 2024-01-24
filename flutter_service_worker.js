'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "345a02343283f559fff7df205653e450",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "102b7e2adf7965556e716c8b52ec60bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9edfe1e31d529083309078154236f96",
".git/logs/refs/heads/master": "e9edfe1e31d529083309078154236f96",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0a/c024dd0a6428e089ebbb1d2c2c530869ab228b": "efc71dccb1318d9dd691f41772bf921e",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1c/3a7593c21b74433fc45fd01bfaeadded360e34": "aeb6b22a0ff3aedd088e14d47c8449cd",
".git/objects/1c/7c35e602abd140d563951c95b7e9536da31548": "2a3437e9af6db06dea1013dc23ca9bef",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/2a/506189082579d5650604cfbe7b6670c4b2be35": "99616491853e878a96e6c1efe754bd19",
".git/objects/2a/8bbbf0c9fe1c9fa2426e0ab4f5835505410f7f": "5950e5502575b695962f88603a1de4a1",
".git/objects/2b/89a1f7454d7d8487d600cea071aba2c5c386e6": "c782244a3cfaca9972fdd461ad5067d8",
".git/objects/2c/0830775653e9d0076d955d1c68f3d438e57905": "8544ce3a770643dd6396d2b769df01a6",
".git/objects/2c/932401f0b40c1a5766d04d717cd2b0b45467e6": "c5faae5b685fdcca70997b1f9f4191ba",
".git/objects/2f/be135dd079c7f49c655c6f37bba1b7ba8e7e15": "3986856d7a3d97176d738a62950e9a4e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/97ebae0da8681a22bc45de05cbe6acf4010d3e": "61851a2e309293068272d914d86321c8",
".git/objects/3e/56b8b1793d885aed2da96590c6dc7a2182b09a": "67dbb178aa3e7eb104bff3c292ab0a89",
".git/objects/42/267a444c3850415a1f57ea610e69fdb2809172": "d26c4a7bd9b3156e35ca8d0906f58482",
".git/objects/43/7063f48ad4646f4fa7a3322d4eb44cec65683f": "20cbccfb04618aa66a7f75e19b0f9028",
".git/objects/4a/dbfecf758b4159d19fdaeb63ab80a6bd348d8b": "3a279e05e7748e570be203c6e100d989",
".git/objects/4c/0c3fef0563bb73f25af1dafb5519304f1abe3a": "4e2849384d2164851337db2e8e2fc1f7",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5f/7b73ac0f2f056737c791aa9547fcca6b4a0d57": "572c2b3fbd25c2102e2d6bb050fa6f0f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/1b1969f884d77568e1081db72375ae453bec14": "c27895f5e52b65f40fc08fd8af12883b",
".git/objects/65/e6635f22050c1c489196dee3f5b9a6205ad52e": "be4bced1e106f4a24958f0ca14018dff",
".git/objects/6a/54649b2da359810f46a11b2dab739081ecf57b": "c7a57f344f64b97a7a5d7a8a7fea5901",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/f05cedb778077286318e5d2bf9ae6bd77d7bc3": "7fb94b5e86ddd76f4f215b86fcf97596",
".git/objects/7c/be8aefca349f0bfe1965c07a53e5d358f11fed": "4fabd0ada4655eb42c05f6c7c1fc4632",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/b14b3b0645d3b65d29de1ac99c188c272f5377": "20f6f1484fc56fe8fb5e55f6215cee00",
".git/objects/99/3f50fb9c446e8b7c1bcc250d2591e9652472e8": "f20d89f84615159ba61b4f2cc3e049cf",
".git/objects/a7/0410b105263d6602bc8ce3efdabff26972494c": "5ed49b71e6359e6b4732e11ad95247e6",
".git/objects/a7/1f91d44b776e8c49b1e6ac4d36a90dc0f9d416": "4d07706eacda5d108d214dd611345909",
".git/objects/a8/0bf34168b9d3d85e3ed8d097224666d83bab29": "0e59c933adc948fafae84bc9d86e2a9f",
".git/objects/a9/d560721cb944af21afe663fb4a0f9530cd06eb": "faf44abee2499274ec9b5e8dcfd7dee0",
".git/objects/aa/413d388da3d32b366336ab68a1318940850424": "c673d03dbc665492c4edb08dafa39ea0",
".git/objects/ab/5d79d73244e58819367db43641870e06d4dd7d": "9ec137fb8e19bbc68efa819fb1b81410",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4b56023476221fdf61fad887545d0e206a225c": "c94c53bc5d072b102750bdf60323b08a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/53bf3b800fb8dc7e462cb79d173b7d7f9431b8": "01cccfce1cb15d57b654c226205e3019",
".git/objects/c4/4c569d7164ed7bf52252b6b90556b1304ebf2c": "232fccfa7373726d27798c9096658117",
".git/objects/c5/c0166a7e1b62a6a6c9a7069fcf802469ba636b": "0b63e33fe458a7b0c28fea0b0d52825c",
".git/objects/cd/33cd903135b530b06a49062cfdaa57fd352f7f": "b77a25d90324396477a678c71fbc03d0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/2ce858fdc5155ae37bcdd3094685007ccfeeff": "cfce495ecd40001a31c511cf74a292ec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f17ef343f6d3cc4ed86b6ea9dd61aa27e6e3e2": "8e70b7162b64e77549568b44df307feb",
".git/objects/ec/9023abee06049bec6868906e151f9c286766a6": "24c5eca7a763a30c0d5992af1ee36754",
".git/objects/ef/9aa1d7ad87a7628292d60ad22b31964e7b85de": "cd56e3a584334864572f458efcc17485",
".git/objects/f4/9b74dd21f8959c413d9ff08515b9324a72a029": "e74a7f4694b869069077e723991983fd",
".git/objects/f5/df3817ffb44b6dced971d93ae90253a931f01f": "0c80f6bc55008e844a7fac9ddbd26c0d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "0f5933d162f3a18e34092380fe30ce79",
"assets/AssetManifest.bin": "8c8b6043a5abee103593b5356dc5ec06",
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
"assets/NOTICES": "c53a7255779d65072e7d067f5f7d7ad8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "166b0b3782b4199e482b5debde888f98",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f6b067b58f610f92c34801f56fb4571",
"/": "9f6b067b58f610f92c34801f56fb4571",
"main.dart.js": "93c75b6d61f990fccd6027ab009cfaec",
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
