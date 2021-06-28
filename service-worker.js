/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7f0efea1f6050aca38fd756847f4c934"
  },
  {
    "url": "annotations.html",
    "revision": "6f85e7b52d5d183a8927a59234002c4b"
  },
  {
    "url": "assets/css/0.styles.8095d402.css",
    "revision": "23eb5fe01105536e3e2c7c08b49cebac"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.006bbd57.js",
    "revision": "af18055309cad434c1d5b5e90c86b8ef"
  },
  {
    "url": "assets/js/11.b613c56a.js",
    "revision": "4ca5dcf955ccfa67308e2278bc57cb78"
  },
  {
    "url": "assets/js/12.357d0ba5.js",
    "revision": "d79c1e925eec98ee32ed5555fa3c4a11"
  },
  {
    "url": "assets/js/13.8d1e6983.js",
    "revision": "e622df1f31f7d9fd53697a7d965db2cc"
  },
  {
    "url": "assets/js/14.361d3799.js",
    "revision": "1ea809781df7228fcc8de06c130623a1"
  },
  {
    "url": "assets/js/15.ee24ce00.js",
    "revision": "42ddda5916d8dfbe04e16731468b70ea"
  },
  {
    "url": "assets/js/16.46d23f66.js",
    "revision": "fda42eaf88b3a18dd8a7612ac218225c"
  },
  {
    "url": "assets/js/17.002f77d1.js",
    "revision": "3fd191514b11bf9f1d48dad058bffa20"
  },
  {
    "url": "assets/js/18.51577473.js",
    "revision": "6a9ec773708501e200b4c8ff5bdc9e3a"
  },
  {
    "url": "assets/js/19.ad8ed279.js",
    "revision": "48fd6d774cc91176cded9f10669a50ee"
  },
  {
    "url": "assets/js/2.80be49a5.js",
    "revision": "5738c1d783205d67c4cccd812ebbb75d"
  },
  {
    "url": "assets/js/20.a59c17cf.js",
    "revision": "6d7d052b25a6b1c0027d59f7dcb14f41"
  },
  {
    "url": "assets/js/21.e9b1560f.js",
    "revision": "c2d42e0f892acfc70599f26abc628f01"
  },
  {
    "url": "assets/js/22.768f5308.js",
    "revision": "6ae57c61ae51b75220d6b841fe44cb9d"
  },
  {
    "url": "assets/js/23.cc6050e2.js",
    "revision": "43cfc9f8391cd116fd32b7ea9c927a83"
  },
  {
    "url": "assets/js/24.054f5663.js",
    "revision": "f119f2be9fe2e43e3ce1606347fdd93f"
  },
  {
    "url": "assets/js/25.26ede546.js",
    "revision": "d3e1ade1a07d35eb0263ce44b63579cd"
  },
  {
    "url": "assets/js/26.81f7206a.js",
    "revision": "9a078a5895261a94359b96a332a25c29"
  },
  {
    "url": "assets/js/3.39377a9e.js",
    "revision": "4b58ce4ec4b87b75bac5aec894bae6e3"
  },
  {
    "url": "assets/js/4.767283c4.js",
    "revision": "0651d9603511aa6a2aa44b3ff5e61ca0"
  },
  {
    "url": "assets/js/5.854c0520.js",
    "revision": "b9b9d56a696f5f6f009fb2ecc7b0c2a5"
  },
  {
    "url": "assets/js/6.e8445b13.js",
    "revision": "77d91070fdb05375c37cf4f2e0dbe497"
  },
  {
    "url": "assets/js/7.3f8df6cc.js",
    "revision": "8b484cfb08dcfad41b6f5bd36c6c6fb4"
  },
  {
    "url": "assets/js/8.98a69bdd.js",
    "revision": "be050d34ffa73e7452268fca9bcab6e2"
  },
  {
    "url": "assets/js/9.5f39e1cf.js",
    "revision": "ac556cbe2f31977a78bf740b28210d49"
  },
  {
    "url": "assets/js/app.172ac33a.js",
    "revision": "b567efc119e7f8cb5e4a9949c2977e4c"
  },
  {
    "url": "authentication.html",
    "revision": "98f5ab2670b373de63745b22d4d13233"
  },
  {
    "url": "decorators.html",
    "revision": "4111c5c9aa311749bf45cbd8f815f92a"
  },
  {
    "url": "descriptions.html",
    "revision": "9bb17e11d3643d8e73d0f378ee011628"
  },
  {
    "url": "di.html",
    "revision": "97274c28e0cc33d46bd31126d5fae196"
  },
  {
    "url": "error-handling.html",
    "revision": "b62d3f803c9170a3968816925f5272da"
  },
  {
    "url": "examples.html",
    "revision": "f69e57a6fe3f900abff1926ead56d942"
  },
  {
    "url": "faq.html",
    "revision": "a4bfe75bf22ca9ff178e5c681b169b15"
  },
  {
    "url": "file-upload.html",
    "revision": "23d3804d7f7dd433ad648d7a9cecce7a"
  },
  {
    "url": "generating.html",
    "revision": "215afb74d527d8ee7bb9e76468ad6488"
  },
  {
    "url": "getting-started.html",
    "revision": "30ee66d99e35a997df0a7166b4aed6ce"
  },
  {
    "url": "index.html",
    "revision": "f00d2c78bdea8be0720b9d35370969f1"
  },
  {
    "url": "introduction.html",
    "revision": "e556eaec774410fab9c48bf9f6dd6d67"
  },
  {
    "url": "live-reloading.html",
    "revision": "acd33932cf9a165665042522591c26aa"
  },
  {
    "url": "path-mapping.html",
    "revision": "6794672ee5c85b5a56e41ff9840789cb"
  },
  {
    "url": "routes.html",
    "revision": "7333f19b64e0d14b75bd733866925047"
  },
  {
    "url": "templates.html",
    "revision": "647f5af9616d28d3623a2068d49e16b5"
  },
  {
    "url": "upgrading.html",
    "revision": "b0af364f487af123f3b6745c1ce9f6f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
