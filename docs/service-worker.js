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
    "url": "app-drawer-94efb3cae0fcb5e6857b88851d6f7b03.css",
    "revision": "2cec1c2430d4b6d2919cece7f886f1a8"
  }, {
    "url": "app-drawer-bcc49fc44efdea335b09.bundle.js",
    "revision": "f2250f54a740849c3cf5f5a84886ecce"
  }, {
    "url": "index.html",
    "revision": "0ebc21b8af9f10adc85eeabdc0d219f4"
  }, {
    "url": "logo.png",
    "revision": "b259c1b19517f0ae81094d57cd38d7e1"
  }, {
    "url": "main-bcc49fc44efdea335b09.bundle.js",
    "revision": "426c83c0d9c8970829e5f4322fc89cf7"
  }, {
    "url": "main-bcc49fc44efdea335b09.css",
    "revision": "3649271eea7acb84b582fdc3c9e5e5d8"
  }, {
    "url": "manifest.json",
    "revision": "d2a9670703610172fce1c8dce891bc40"
  }, {
    "url": "print-bcc49fc44efdea335b09.bundle.js",
    "revision": "f0b221860840216d99f02e756a82a952"
  }, {
    "url": "runtime-bcc49fc44efdea335b09.bundle.js",
    "revision": "520b002e81c0f2d781a49ffcd7ac7730"
  }, {
    "url": "vendors-bcc49fc44efdea335b09.bundle.js",
    "revision": "ae45db6d5234457b6a2c69fa7a1b0f8a"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
