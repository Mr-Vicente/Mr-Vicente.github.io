'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "48cbaa6ca6ab428328e751ecddac080c",
"index.html": "e87c886aa263728b33fec7429642310d",
"/": "e87c886aa263728b33fec7429642310d",
"main.dart.js": "46f30a9d9f4e37d94d0c4dde5d945efa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b254eee72ab593799db2a8e7d9c28072",
".git/config": "000782a7fec64baa7f5cdd119067dfe0",
".git/objects/59/478e60441b51d73ebf6e9acdd7386ffafde7f9": "76dd4fefa6e3072ace8316eaa2c235db",
".git/objects/68/576e5760df71edd329e9d66fba1cd55b56c9b4": "f8c11e8898677db82c254ba653853b9e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/3c/a785397d068ec20b62486b9790cb62e26b8cf4": "a835b1606c6209ebde6177af9b07a821",
".git/objects/60/6adcf793f327fff2351f6088d09142c96538f9": "c7969b528e5ad73445594cc56ef69c02",
".git/objects/33/03850f4b9e3a58aef4524715d19f8b9c807ec6": "a457a0da09e06656fbb39a06b6eb1bda",
".git/objects/02/895cef9f3a6e996f17b6e2ca66608316c59271": "ce2a8a4ae85157499a0e426abfc4c856",
".git/objects/b4/fb98eab0a6cc993b0e1695b05a3b3c7c5f4803": "8ee4cb699d42a15cc44c56092ccf6c0f",
".git/objects/a5/d1b7b37d42cffe491ad930c6da8f61ee3baf24": "bccadb3cb942eb8c30cc6fbc4acaa269",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5f2e6c350bf2989ac615286c98c30299352b23": "020d44efe0bc5f5e1f0581932ec2e17d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/146a63a3f43e9608595c188df444e22b1738d5": "67f95ee5c04738e9728764743e69c0a7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/6ebab2ab2f61b5c53156a198ab692f06a49b7b": "525f995aaae5435bfbc798fa3c5e4309",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/adc111acb6af8a58b700c1077e6a0425e07640": "d851267de08d76dd8e96cfff49131a74",
".git/objects/72/1fb2dc2b5c1a8dcbd587fc1c11ea2f464be9b2": "f3957b2e17ffff06ea24e772ed30dd29",
".git/objects/44/e7e4a806a71a573be9e0a817e614e5eb4926ac": "b4801a69000f1db14474fe52a4b5b206",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/b56cdff68ec31a80a4fde9b174cd9d4b90e2fd": "f33d0c511251be0d153837170308a191",
".git/objects/09/fe147d03a4adbbc1b48f979c14c60da1c7c560": "3272ebeb284e1b1f56b37b0589a7c5fa",
".git/objects/98/85239e298d46a4ed6866e4569827d95bdd5491": "d2f49b82dad134ea354f883c5a0bf763",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/6d/3dffff1ec777bd5128637858d1aef084b24eaf": "1c96b47d4c9154de3a8cb3ad7569bd39",
".git/objects/01/cd37425ce6130fdb4450acb23a58749ab1fc9c": "6c3855d718ff352f242d4738f68b726f",
".git/objects/63/29513270a729ddc2af4273578b272fad02bffa": "203202e2c44d8a5d70d5402688008e7e",
".git/objects/d5/dacf8a0c086057aed69a34c64b15c92ada64f2": "bdbdd3427a4ebde83ea94e3f77c06c39",
".git/objects/aa/6b3a297a62184604e5d53f096acffe8ea63a97": "d98bf3861f9e0d17cde6143dfef2c7a9",
".git/objects/aa/9725bc398e5dbc31fb5a559af3f03d5a677a02": "6edf86e27c62de8a34314440281aafe4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/3c96fb09fbc9fa6e1adc590d5576e73b5feac4": "352c77c697da9af4d7bbd12bbbb7b335",
".git/objects/a6/7bc2698c6a8f7b389a353b3085fe58cbd76d85": "65c792ea22865111ead05f7b3ac60b6f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/dfa33be81e25b813b336485637f562ef5dfa6f": "5664d7b1ac5412f2a7acaadc1a68d568",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/439f4d757003949cf86e9f87a8123a376c3ffc": "1017935342f3588069d460c88856104b",
".git/objects/1e/098b88589a8629ea48be42877967dd15d5088b": "f8c3080df29b4fd999c8b3b7e267ac8c",
".git/objects/23/b68dc8c4749dec920405e47a052e1b955582ac": "ec3149ac067660bbe92a9b48e17cfa42",
".git/objects/13/577e4f9aa1cdd54f116000d88d0252fb2b70a9": "b7382c5f85ea0e9b25104163b605efcd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a69e2e64fe1e38902a3d0201fe0ffd53",
".git/logs/refs/heads/master": "a69e2e64fe1e38902a3d0201fe0ffd53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "3ff6ba9cf6d8e5332978e057559b5562",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8907f2893fd5ede627643c2799b93bf3",
".git/index": "7a5364b60c190b09e7588e4c7dfd14e3",
".git/COMMIT_EDITMSG": "c6f7a5960ab4b258bd39d736a2f50394",
"assets/AssetManifest.json": "41d1dfc06d27f49f214caba8367997dd",
"assets/NOTICES": "13dcdea1262bc8379521c0c8f217f4e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/contact_logo.png": "0254fa7a3bae3b9cb120b3437b67cc36",
"assets/assets/images/WGAN-GP_Cartoon.png": "d68f7a338d53aefe76cead601a581dd6",
"assets/assets/images/fred_logo.png": "e5252a6d4604c1053cbe2383c1c3f67b",
"assets/assets/images/github_logo.png": "724794164fb289dd2f7d69dde7ac3bc0",
"assets/assets/images/linkdin_logo.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/friend.jpg": "ad96ee3f0174ffc121efd40eeea883e4",
"assets/assets/images/profile_pic.JPG": "3f2835fd5bc9ace088ed92942cebc8f3",
"assets/assets/images/instagram_logo.png": "34ada1638ef7bef370e593e45e2cd29a",
"assets/assets/pdfs/frederico_vicente_cv.pdf": "acc3f3dbebd58990d46a395628b323b9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
