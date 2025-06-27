'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/images/10000p.png": "92b2b05763a412deb858ca441f08453f",
"assets/asset/images/1000p.png": "7ba4f0f7117214b3645cb379d821e715",
"assets/asset/images/2000p.png": "54434e2924991c734f11bcb1f5b614c9",
"assets/asset/images/5000p.png": "2173bf7d320389bc642194a030ccdb50",
"assets/asset/images/background1%2520.png": "57d04fc8a7e13b01fd633be4290f717d",
"assets/asset/images/background2.png": "760fa0aea0f938183cd51909d06c3470",
"assets/asset/images/background3.png": "edc65337b78cf3ef6cee801fcd4d8a58",
"assets/asset/images/box.png": "adfdd11ce8018cdc4c535daf90cbe7cd",
"assets/asset/images/eye.png": "bb8e6498d17a21face18972834122eed",
"assets/asset/images/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/asset/images/hidden.png": "39738cc3f3c6d5da18d4f9f1bec27ed5",
"assets/asset/images/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/asset/images/homeW.png": "038556bfe19b1c22b41343d682a5c6e7",
"assets/asset/images/logo.png": "148877b5269166c99bb78938d7f9f68f",
"assets/asset/images/menu.png": "ac6523bff7bc783ea0359f794f8d2cb5",
"assets/asset/images/message.png": "fe05d829ee36896a2c2f01581f2c2c04",
"assets/asset/images/messageW.png": "847728d1736c5d4f4121fcb405ff4d48",
"assets/asset/images/money-bag.png": "5c60dce198b18c1cc6bf7849d0bd0238",
"assets/asset/images/more.png": "30d747a9b6393f4ba331b152ea0a7ea7",
"assets/asset/images/onboard1.png": "346bce8a1bac972651f12ee30e7b0b71",
"assets/asset/images/onboard2.png": "d3f14f0679f4e500b61acddae13a60be",
"assets/asset/images/onboard3.png": "2a3b89fc07547aa29c0a0dde15e5c540",
"assets/asset/images/phone.png": "dd6793a7e2ac7179633acc59d0041a31",
"assets/asset/images/qrcode.png": "8dd44831dbc3e1e501422b0a49611039",
"assets/asset/images/qrcodeW.png": "07702813c913973e6b27ded3749fca28",
"assets/asset/images/Search.png": "7cc923be3c3a604fa5b276ab68a27712",
"assets/asset/images/setting.png": "6213a20b8bfac504fcf2527e4178a5f6",
"assets/asset/images/surprise.png": "6eba74cecefcc3465305d93e9ff91d34",
"assets/asset/images/surpriseW.png": "01bfc97288592f2606ef93e57fa43965",
"assets/asset/images/user-profile.png": "9110a739c4ebf0ac8c5b4b5c3dd59a4e",
"assets/asset/images/user.png": "684fd88efe3c83cf0a4e7317697d5639",
"assets/asset/images/userW.png": "b2b34eb94c29e6554eb7c2b6e6a31d68",
"assets/AssetManifest.bin": "983d3be3bf32e7846bebdd1a5fdade45",
"assets/AssetManifest.bin.json": "ee183afcda44b00f514b98fdd4e4fbda",
"assets/AssetManifest.json": "09b6d68cc5113d91063bd25edcfaaeff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ccc3fb47ce5278cc740cb25b096af7f",
"assets/NOTICES": "d06109338e1a0199cc7487418e4a1e95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bf827e4a783709726f2250d56deeb014",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35f8e90bbdc9645bd08ec2c405638c0d",
"/": "35f8e90bbdc9645bd08ec2c405638c0d",
"main.dart.js": "2a8bf55ec54c5749346cb30deebf3dd9",
"manifest.json": "96dc8e6a56d2d0c1d6fe0c795b65ebff",
"version.json": "f8008c1e151dc5f758c5f1fde033f695"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
