/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-abaa1409'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "app-drawer-02a411b3b42df04fabe5ff82a27b5a17.css",
    "revision": "8a88ac98770adb8ca4e432615a1e3ac2"
  }, {
    "url": "app-drawer-114f92d7778f1f867f3b.bundle.js",
    "revision": "26cdc3bd1abe971dd779a426fb2f98bd"
  }, {
    "url": "index.html",
    "revision": "77d38297e83ee65c7a7100e21954ba9e"
  }, {
    "url": "logo.png",
    "revision": "b259c1b19517f0ae81094d57cd38d7e1"
  }, {
    "url": "main-114f92d7778f1f867f3b.bundle.js",
    "revision": "2c4c7cdb9aaaaeecf760092254d23055"
  }, {
    "url": "main-114f92d7778f1f867f3b.css",
    "revision": "af7da01181324d475233476b3d51bc28"
  }, {
    "url": "manifest.json",
    "revision": "d2a9670703610172fce1c8dce891bc40"
  }, {
    "url": "print-114f92d7778f1f867f3b.bundle.js",
    "revision": "a4c55e1c689bc4f8b332f670317abaee"
  }, {
    "url": "runtime-114f92d7778f1f867f3b.bundle.js",
    "revision": "4a75473374be7cf7a3bf1bd5a1c6e34b"
  }, {
    "url": "vendors-114f92d7778f1f867f3b.bundle.js",
    "revision": "d80915332246ce41210e402f8efeac02"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
