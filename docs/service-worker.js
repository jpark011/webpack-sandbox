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
    "url": "app-drawer-61b7aec0db7a88f1e63d.bundle.js",
    "revision": "6c8c38d085084c23526b95761728da53"
  }, {
    "url": "app-drawer-83ce90033aea6e67913b6707e699b60f.css",
    "revision": "821c4db8669e65e04ff95ef180597799"
  }, {
    "url": "index.html",
    "revision": "31b071cc109de012d346cf49e4ef5ca5"
  }, {
    "url": "logo.png",
    "revision": "b259c1b19517f0ae81094d57cd38d7e1"
  }, {
    "url": "main-61b7aec0db7a88f1e63d.bundle.js",
    "revision": "0c9be1b24a90a646c760d327d835563b"
  }, {
    "url": "main-61b7aec0db7a88f1e63d.css",
    "revision": "d5893faff8a6b40eebbcc74c0676c4ef"
  }, {
    "url": "manifest.json",
    "revision": "d2a9670703610172fce1c8dce891bc40"
  }, {
    "url": "print-61b7aec0db7a88f1e63d.bundle.js",
    "revision": "ce3f9333499adb89b2b60e2e4f775662"
  }, {
    "url": "runtime-61b7aec0db7a88f1e63d.bundle.js",
    "revision": "d1f4186572e0873af94fde13232e0e3e"
  }, {
    "url": "vendors-61b7aec0db7a88f1e63d.bundle.js",
    "revision": "851a427b9d7e9abc888853df7950ad23"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
