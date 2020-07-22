/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-localize-behavior/app-localize-behavior.html","26aac6123dc7d497d2f0fe7272afd63a"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/intl-messageformat/dist/intl-messageformat.min.js","5e1df9cf63096dc7c7d1190abf464545"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","5a6267980413f3ced5dbefaf27cca861"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","23393d4e00f7e48ebc892ed4c754faed"],["bower_components/iron-ajax/iron-ajax.html","4d509e81afdc0270c44eaf4bde5027d6"],["bower_components/iron-ajax/iron-request.html","2e597071670fba100737366ad88480aa"],["bower_components/iron-behaviors/iron-button-state.html","2899f4dfe7b0d046eec83bf8a5fe3c85"],["bower_components/iron-behaviors/iron-control-state.html","57e0b5a1e8109a8bc36955194ff4c780"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","e59a87f70b6eba461b52d52ad4ddb800"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","3bbef8b1929c2a41727e50475b596055"],["bower_components/iron-dropdown/iron-dropdown.html","c24b72551372fbfc3cdd1ba28cdad833"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","baaeb2d2f5e45362ae10be4a2b28d729"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","7fdc2ab3c7921949621e8374a86e2af4"],["bower_components/iron-flex-layout/iron-flex-layout.html","bcac4712061b08d806c1778598ec78c7"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","bddd738878a4556e218b351590c7c421"],["bower_components/iron-icon/iron-icon.html","63ca2f09fb145530d3f4d213b5294465"],["bower_components/iron-icons/av-icons.html","58ba5d3f228fc608f188d3e5330fa1ad"],["bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","706f73c5240b23bf86ea53624b864654"],["bower_components/iron-image/iron-image.html","b7ef5f2e815ea4710d3b90765f96c91c"],["bower_components/iron-input/iron-input.html","6a58b204f7175e1b7d889760302d97cb"],["bower_components/iron-list/iron-list.html","2dfbe3646a2510f1664a75b5665ed88d"],["bower_components/iron-media-query/iron-media-query.html","47f529502b243c2ba39b3691a9157693"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","0652ebb97ea3b04bb0d7412ae194c255"],["bower_components/iron-meta/iron-meta.html","9b6cb25bf069f56919a6ac1afff6650d"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","8e9c0a2f4d14207b45b6d281667f846f"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","9853e0d1d52f57ebecb534f207b7d57e"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","28c8c9c84fb3d9b359f500a8f4c3d193"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","02ba512070242a5f250a52bae9df5d25"],["bower_components/iron-overlay-behavior/iron-scroll-manager.html","96ffa8976e60616857f6beac3fc01907"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","f029df12ba0ea67f44b16ed6b64aed69"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","2cdcbe21edee72bce528cb072a4cf5e3"],["bower_components/iron-selector/iron-multi-selectable.html","69e0d8f4003bbdfac50f8b1d708e56cc"],["bower_components/iron-selector/iron-selectable.html","4c855ca72a680ca7c9d345f1c004cc49"],["bower_components/iron-selector/iron-selection.html","b191786c5a28d981db91daf0aefb0ddb"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","c3224dc628af1ad7446ce2d0a289ca5e"],["bower_components/moment/min/moment-with-locales.min.js","df014714bbfc0e0b8db1d4c1a35e3351"],["bower_components/neon-animation/animations/fade-in-animation.html","742876ac1b4892fae60b4248ff04c604"],["bower_components/neon-animation/animations/fade-out-animation.html","d81e4dda13956089280bb456282af045"],["bower_components/neon-animation/neon-animatable-behavior.html","2a5dd6897cff3d927cf8fced407ede5b"],["bower_components/neon-animation/neon-animation-behavior.html","de04b487b1f692bb2fab5057cd4f3e69"],["bower_components/neon-animation/neon-animation-runner-behavior.html","e3247d25c7cbc520d434597f7072addb"],["bower_components/neon-animation/web-animations.html","aa5266664b17a9a7d7ebf0c4e6fcf8c9"],["bower_components/paper-behaviors/paper-button-behavior.html","0376a2ba23ba0714fbb7821671c49875"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","1d175d2db084f4d6882ed64ececdb54b"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","e6a4b770f731a9f551c160e0d5002646"],["bower_components/paper-behaviors/paper-ripple-behavior.html","5693c96050945b4dd519f0c42c2f04f4"],["bower_components/paper-button/paper-button.html","9c82067c6352f54aea719d1931f03ce1"],["bower_components/paper-card/paper-card.html","b8cf92acc902b55d0675f8524ca082a5"],["bower_components/paper-checkbox/paper-checkbox.html","f25316d3af4b45dbcc2ab07f4cd77b91"],["bower_components/paper-datatable-api/paper-datatable-api-column.html","2d9e8b2f5603ee76717982ae53031b52"],["bower_components/paper-datatable-api/paper-datatable-api-column.js","57abda022ed372d562409c05ef613ed1"],["bower_components/paper-datatable-api/paper-datatable-api-footer.html","303397464142647d8b111635ba6e5816"],["bower_components/paper-datatable-api/paper-datatable-api-footer.js","b986a2b4dcefac9bc0f905d09712dcdc"],["bower_components/paper-datatable-api/paper-datatable-api-icons.html","a7cdbf12f2f3e6892a039e7df0be55a8"],["bower_components/paper-datatable-api/paper-datatable-api-shared-styles.html","f12e282cd24aa0fa2826f802c64b3e17"],["bower_components/paper-datatable-api/paper-datatable-api-th-content.html","44a8c6b373512d342cf58ce569459e4d"],["bower_components/paper-datatable-api/paper-datatable-api-th-content.js","2f03c6ca1a16a0b28b3775f8886877b4"],["bower_components/paper-datatable-api/paper-datatable-api.html","489f24267a5f28fa740a9d7894aef584"],["bower_components/paper-datatable-api/paper-datatable-api.js","a552bfb2665588e75824dcd3772e647d"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","bd8d99e625c1baab3431ae830d788c72"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","62226dde51d0f26f0ccab279cfb89b58"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","206fa369a98149f7dd9f4df950272ffa"],["bower_components/paper-icon-button/paper-icon-button.html","d26c656c5039195a9825d7d4e90fe4e4"],["bower_components/paper-input/paper-input-addon-behavior.html","050639ddd94b164a6da465ee49aa01ef"],["bower_components/paper-input/paper-input-behavior.html","6fc5bff114aacafcea27883b4451d399"],["bower_components/paper-input/paper-input-char-counter.html","e9c98bebc931b20ab91b405398f373f3"],["bower_components/paper-input/paper-input-container.html","ad81652f69c5eccbdd53b67b9e10da8a"],["bower_components/paper-input/paper-input-error.html","dfdc307ca202c3fcfe1e10e26f8f0f0d"],["bower_components/paper-input/paper-input.html","d4cd42c41f9989f5e1afb9ac50a8a7d1"],["bower_components/paper-item/paper-icon-item.html","e5a84379c6c88dcda71319862231c1da"],["bower_components/paper-item/paper-item-behavior.html","7555e8a7d862e0086fc06679381e9103"],["bower_components/paper-item/paper-item-body.html","53903cc740e470a5f0661869d89d2f8f"],["bower_components/paper-item/paper-item-shared-styles.html","b5104778f1e5f558777d7558623493db"],["bower_components/paper-item/paper-item.html","bbcea6a06ad2e50f9d46e45adbe58514"],["bower_components/paper-listbox/paper-listbox.html","500ddcede7814c391d760893d21c8065"],["bower_components/paper-material/paper-material-shared-styles.html","0880145bd868df7784d5cd49963468f6"],["bower_components/paper-material/paper-material.html","20cba828a981b4bb0629a355b48f2644"],["bower_components/paper-menu-button/paper-menu-button-animations.html","bf31ab1bf3c1af49a8904a4142398608"],["bower_components/paper-menu-button/paper-menu-button.html","44afe903187b78dff5e48fe9f7b8a35f"],["bower_components/paper-ripple/paper-ripple.html","0438ebe6074530f3266f583e5a4bdea7"],["bower_components/paper-spinner/paper-spinner-behavior.html","bc519a9b6fc5d9b83f32020702be6700"],["bower_components/paper-spinner/paper-spinner-styles.html","f6b2d42a9d2262fafb034ea0f802fc80"],["bower_components/paper-spinner/paper-spinner.html","acff8d1e71eaac17569976125462ff67"],["bower_components/paper-styles/color.html","549925227bc04f9c17b52e2e35cd2e26"],["bower_components/paper-styles/default-theme.html","5357609d26772a270098c0e3ebb1bb98"],["bower_components/paper-styles/element-styles/paper-material-styles.html","8d8d619e6f98be2c5d7e49ca022e423c"],["bower_components/paper-styles/shadow.html","1f23a65a20ed44812df26a9c16468e3f"],["bower_components/paper-styles/typography.html","195497070df39ff889ce243627cf6589"],["bower_components/polymer/lib/elements/array-selector.html","fc0a6e570a14669de9c7251297f067e4"],["bower_components/polymer/lib/elements/custom-style.html","ccfc388a3e35508e10e10ef2abdc6234"],["bower_components/polymer/lib/elements/dom-bind.html","6dd615663c55506502de236c5f032175"],["bower_components/polymer/lib/elements/dom-if.html","c55e9e3e56b1c33e913728bdb93d482f"],["bower_components/polymer/lib/elements/dom-module.html","2fba0f1c75e18f55189927ae99cbef55"],["bower_components/polymer/lib/elements/dom-repeat.html","31f62fef26c049f1837b0b1fbf3e7b30"],["bower_components/polymer/lib/legacy/class.html","edfac399b94f58562553f31d798bf7c0"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","3ddf169a0b2eb8b67fc83312ce0d547f"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","40abd41981b7c3a064e860fd3740e5a3"],["bower_components/polymer/lib/legacy/polymer-fn.html","8dc7aca67e8bce99c285a4d30b62e1f4"],["bower_components/polymer/lib/legacy/polymer.dom.html","8430a7f9caa80f9df19f54342a41e4bf"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","22ee4f4e866dfc9db7891e948ea5c5fd"],["bower_components/polymer/lib/mixins/dir-mixin.html","a1c659c1ea2d61e90288b19e1f3dca03"],["bower_components/polymer/lib/mixins/element-mixin.html","22c6e2fe5b63fc040462fa13efe1a24a"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","aa4892293c7331ff8b9e2dd5cb9a6440"],["bower_components/polymer/lib/mixins/mutable-data.html","d799b77bf87ea5a609dae982f48f9154"],["bower_components/polymer/lib/mixins/properties-changed.html","daa500be635151178225b2fbfc00919b"],["bower_components/polymer/lib/mixins/properties-mixin.html","ce1bff5d5c244e429fa6a21c567f50ca"],["bower_components/polymer/lib/mixins/property-accessors.html","f96803bfb76e72f7e33090dd82d55bd2"],["bower_components/polymer/lib/mixins/property-effects.html","776ce6432a4dfb761136e1b502e03ab9"],["bower_components/polymer/lib/mixins/template-stamp.html","596f91836fdc67a75d8bafb1ee490b2d"],["bower_components/polymer/lib/utils/array-splice.html","afa19346168491a7318cfcb673889635"],["bower_components/polymer/lib/utils/async.html","3f7e4a969a74c4d2d5bf69080b122bd5"],["bower_components/polymer/lib/utils/boot.html","db365b25ac950ec12e188dabf8bf07a1"],["bower_components/polymer/lib/utils/case-map.html","41983a61da2b243dce03cdc606e11d18"],["bower_components/polymer/lib/utils/debounce.html","77808bf1e765554f0eb40218121b8dbe"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","52d65c0704b7f2be7aaa353107a763e8"],["bower_components/polymer/lib/utils/flush.html","c3c96c8145414d698fe1123daa2b7803"],["bower_components/polymer/lib/utils/gestures.html","f3671216e45fd5051bb5148dc7210a26"],["bower_components/polymer/lib/utils/html-tag.html","0bad32446118363a9e8eb5e5b89f89fc"],["bower_components/polymer/lib/utils/import-href.html","41ca3e20f362932fc71ba40a78e28558"],["bower_components/polymer/lib/utils/mixin.html","0304043315d9aae7969deaf410cb424e"],["bower_components/polymer/lib/utils/path.html","30d2cc2f747c05eec2ac32f0cc21eb12"],["bower_components/polymer/lib/utils/render-status.html","10f7752af5423d14b023651828a9d58a"],["bower_components/polymer/lib/utils/resolve-url.html","1874f8486f3d0146211360b6484dc4b9"],["bower_components/polymer/lib/utils/settings.html","a12c3cdb77f7f9843debac5da37949c3"],["bower_components/polymer/lib/utils/style-gather.html","41fc78d5687e3645e154326892576d0e"],["bower_components/polymer/lib/utils/telemetry.html","91361cdf0095f17c4fa4092bd33d1212"],["bower_components/polymer/lib/utils/templatize.html","a7a989523df3f4ced7840f4412ebbc92"],["bower_components/polymer/lib/utils/unresolved.html","b8c7bf6a6ecd0fa21a24da8876d461eb"],["bower_components/polymer/polymer-element.html","08a7003aea6a4d70ba20306a1e92078e"],["bower_components/polymer/polymer.html","1ed2bae1bf6d43e8c8bc74100ddff270"],["bower_components/range-datepicker/moment-import.html","d313242087c22e7541cf7959438ff530"],["bower_components/range-datepicker/range-datepicker-behavior.html","c036db0dcde86ef851fe66d41a7b461d"],["bower_components/range-datepicker/range-datepicker-behavior.js","369412f04e656a3a6a9b3e015d178d3f"],["bower_components/range-datepicker/range-datepicker-calendar.html","fb7bbf5ed8b0cdce1612eff44b404744"],["bower_components/range-datepicker/range-datepicker-calendar.js","9ff5f4292e30e22f8d9a0a4152a71e08"],["bower_components/range-datepicker/range-datepicker-cell.html","1373f84861f1a1b81ed995c2dfd6a984"],["bower_components/range-datepicker/range-datepicker-cell.js","2b3b80f408dfd6eb3a0935ee3c45f845"],["bower_components/range-datepicker/range-datepicker-input.html","c031eaa6b1de20ad43d8f84af2776177"],["bower_components/range-datepicker/range-datepicker-input.js","1a9b0b07f81586ffffba62594e184ab0"],["bower_components/shadycss/apply-shim.html","5b73ef5bfcac4955f6c24f55ea322eb1"],["bower_components/shadycss/apply-shim.min.js","839109c2c20a9235f9057016eda29ae3"],["bower_components/shadycss/custom-style-interface.html","7e28230b85cdcc2488e87172c3395d52"],["bower_components/shadycss/custom-style-interface.min.js","79736ddaa94d666c0008db19e24c7cae"],["bower_components/web-animations-js/web-animations-next-lite.min.js","e8be01b35d8c67909bff5e4d6eb31c84"],["bower_components/webcomponentsjs/webcomponents-loader.js","596ad3dc06dfb78ecdc6bcee1d653f04"],["index.html","148abaab77d8171996b30480f8320187"],["src/repo-list/repo-list.html","6ed7bad4d4a02e97e4405bb0feac2382"],["src/repo-list/repo-list.js","c981c8cc799663658a664f807a2fcf8d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







