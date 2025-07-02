'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "ce3ab0fcbc847284523eca0468adf5c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "55748d9a953fd7d38986727d920a50ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18c8f32cdb9d9df06a57ffe60d08b2f2",
".git/logs/refs/heads/main": "6da55aa9fd7debf4f9c05c32a77f4ee6",
".git/logs/refs/remotes/origin/main": "43daa70af6596761d52fd0db6224faf3",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/103781529f5985f03940bee1f5b8c873d1c2cb": "eb9d7473b21f34d5850f03537af3451e",
".git/objects/07/47d1eb92b1e9ece9bcced5b5850506d398ed22": "4b0e8cd2657c05ea43ef098302a735ee",
".git/objects/07/a228c0310ccd92c913d0dcd6bcfe012262ec36": "014b0cbfd30b097569972c43cce5f138",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/266d013c0fdd3586769adf7cca420a31592e5b": "c9e954fcb7bed4da33927774658612c4",
".git/objects/1b/826a5cade8f71d4db71672e26a0b63766dfcbd": "6ab0dc608999626ce953110bdd3c756e",
".git/objects/1d/53249ce14f3c148cf532edab8bd28c6ff7351a": "13e011f36f9e673d8d89d8c3012e0c7f",
".git/objects/28/e857308361bbc878554e7b4206fed135c1b4b2": "92ab0d7e6a09c5db0fa95007933c317f",
".git/objects/29/6efab9c5a56ce345185fe9573af34ec5a27a67": "ecbb5a2604fd6ce1f032f8a6313da1c0",
".git/objects/2c/8df16b805a5d9d2b25afec780218bb38886991": "e28537076ecafbb4cc863f6abc68ae1b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/adaf1e4573fcd15aaa7b8db43678058c5f8399": "dac92936fb898bd2c7f24b15f50a98ed",
".git/objects/38/77140a5c7d50ee3873741acfd48d7d025db2bc": "129415a19a6a3b67947987afa696dc10",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/dfaf60c442ff04a5b085174d2063fe2d2a68b3": "50fad1a0a90be1dfff9ec992be542125",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/84ca255bdbf830746685f1a83baa2e73fd4c66": "454915091998d321faf3bbcb552f7463",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5a/2babc87663b5dd29d172febb2683fde512a89d": "adf77766a7e3de8265870788323d5288",
".git/objects/66/c07f3eb7a071c9ecff1f76c5ed7f4560e6d044": "96e88ccf1796e14fc1c658319728dcd8",
".git/objects/6a/15278b1dc6e346768ed0bda247462d1646b8db": "334c3e7f6a1d7244fef9045316326409",
".git/objects/6a/df1487c5f651683a05eeba405bc620dde3c764": "a79566f1f8840af8be680bdabb23ca16",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/dab3cb7ceb3259ff07a04b0430aea63cd1f979": "50d377cca03f98d1d2d0be69167b0af2",
".git/objects/77/5a263561e997d36b167f9ce4ae0a9f6006d6d7": "f1d64c20d58a63a860c5dd65365583a6",
".git/objects/7a/53f117d5012a504ee82593936a82358e304bf1": "3ec3d792a3d1d9be212b2a345b6864e5",
".git/objects/7d/71841d871c02f9fe2cd1a50022262ffbebc6cf": "76e451395de405ca3b48571c149d2fdd",
".git/objects/7d/cca7c628b931bd1a3a7a319e7de8ca89814414": "c4b4519b424b374e5a605579dbd14609",
".git/objects/84/34b7fc8193ac4de88faaef7f3959db166292a4": "9f1cb2f6cfcbacf9dee322f6c060ae83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5636b066bb20494abb0fc64204a0b776346fd5": "3927a50f17868b7f1d17b35fbad2c366",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/686ac393deb0c79a3702c2043f03f5a6a781cf": "88cf7febd5ea889e8fa250b98267b7c8",
".git/objects/a6/e2e8406520f74571da541507f04e103655ed68": "f4b0dbb49a262da0cf35fa8c04435053",
".git/objects/a6/ef8e289b57ed91a8d168142f44cd5b3c7a008c": "6202945bd8133268d7d6f38234ad8f80",
".git/objects/ab/90b558192201bd0cc04fc6939d50387f8940f8": "9aa34f1f27cadacfd09c8de06389314c",
".git/objects/ae/9eec2e488d07ddfdf6a9ce6b89d16ab22e893c": "76ae71253038b8d9cea78e24d2637a35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/68382463763229977a273d894f6379e87f79c8": "ef5a43d07b9a133b821864d0e2e6dfb1",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/2dd7cf3b5d0832b7a0ea1df6acb98a50b14b2e": "aa822843e811832cac9ff1c35aba1c87",
".git/objects/c0/b73179cb16229d6c546375b71890bcf94255b7": "374ef59edc12455a019347420799729a",
".git/objects/c2/f9e5d0f7e0d6516853178d66a2ca9effb17025": "6b924d9bc762473a121236a58e384cdd",
".git/objects/c3/650b541d98f04f621ae6ef7e4d195cd560fcc1": "50ae87d8897ae491becefc80bfa7a8ab",
".git/objects/c5/0e2e07ae2eb8385cdd6474367b339e16ff7200": "4ead77e3dad80fa4615c50899726145f",
".git/objects/c5/9ebec0bc32a4bc0710981fc2158b8d24a98583": "3466f263e85bee3e43a1c8ab8dfbd5c3",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/7068ed01143188cae360519fe44c5764f36058": "285c4feb8c5bc8bc75dbd301020b8ce3",
".git/objects/cf/c2057c9443c1c6ed4896b42d76a2d83a8b2d46": "a28be2b9164ceb6564814cd29a820bf5",
".git/objects/d1/22e7b0d15fefe572e1254a1aa409024c43a687": "a129730bdd87085941d114c25c922895",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/c60e953d19469ae048517b5724ab1e8b33cf10": "e3218cda304034b9bfa1dc47b038975d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1e77cd9353ba0f01283f8a429a5dfa87e4f69a": "7c509dced17dcd1aaae2632b4dfe5793",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/e83015c6dcdf2094860c3aaabf923890d0e294": "a71549216bca0e686c27c1a6a3ebcd36",
".git/objects/e0/3a38158e9c1ec22d79468a997a500d6c345252": "d0f594e7c08c8e08876b4c5405c45f35",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/c455b0596f66311209e42ea4e49dda9118da42": "e10fc0bccc490107dab4b25e99401830",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2c24da42836c3f71665d472fce4c926b1002dd": "e3d27da9d4d0e4270dfae0d7b4b480d5",
".git/objects/f3/71b77cbf0ce38a5b75cded0356575d9e0a2a2f": "6da8d554e7421b664d59675e990f9770",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/89b104a6e98d8b432f03157d5bece58da2de9e": "eff8fa2abec0806d1dc4a4fcbe22ef60",
".git/objects/f8/22446a736b14c435196a5fb95aed5c67df0a1e": "5100129d76c2440ac36ea226ea272ee4",
".git/objects/f8/42a04e8be02d1c61f84cf7c3b88c58c63b2cfe": "5585a033537f1231aea0787abe3dc2ef",
".git/refs/heads/main": "0c35654a1fb5aad160bed042049d9d82",
".git/refs/remotes/origin/main": "0c35654a1fb5aad160bed042049d9d82",
"assets/asset/images/10000p.png": "92b2b05763a412deb858ca441f08453f",
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
"assets/fonts/MaterialIcons-Regular.otf": "fc991cd60abee0fb08d77e3514ec5f2a",
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
"flutter_bootstrap.js": "b35915c4c8bbdaa5f1aaea47df98d52e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35f8e90bbdc9645bd08ec2c405638c0d",
"/": "35f8e90bbdc9645bd08ec2c405638c0d",
"main.dart.js": "14c1ae3b6d9f5fb4ea3fc25f7be9b1c4",
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
