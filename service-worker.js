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

var precacheConfig = [["C:/blog/public/2000/10/13/建站笔记/index.html","8f22d846dc7d531e69cb4a9b726ed6d7"],["C:/blog/public/2019/09/12/使用Github免费搭建图床/index.html","93af35b081cdd3076a9b58240100173c"],["C:/blog/public/2020/08/31/CDN 博客资源加速/index.html","8b49468974c004ea93053abcf34497e7"],["C:/blog/public/2020/10/13/成年后你需要做哪些改变/index.html","79b07b6a7fc75e454196a074ea5f7f83"],["C:/blog/public/2020/11/17/翻墙会不会被抓/index.html","5065b05282ef70a83e29622aa18ccc29"],["C:/blog/public/Space/index.html","3b2b1a5e112833dad8c1b6ebc28377b3"],["C:/blog/public/about/index.html","cf5dcd73521e7169771f3c59a0fdacb2"],["C:/blog/public/archives/2000/10/index.html","b12c3e8f6fae69a44311b1842762492c"],["C:/blog/public/archives/2000/index.html","0a3a1e13bba791dedb9901e08221b186"],["C:/blog/public/archives/2019/09/index.html","d7443f1a9b09c7b293fe40056da2e64d"],["C:/blog/public/archives/2019/index.html","f8733b0c6d535b76d8dcbcb868fba7b5"],["C:/blog/public/archives/2020/08/index.html","0b7a90752125e85c479c998cfb0d9fd6"],["C:/blog/public/archives/2020/10/index.html","90e3dd42ff64b724071448d3b6bf38fa"],["C:/blog/public/archives/2020/11/index.html","f26f58e40fa37e29af8df3c1b63de492"],["C:/blog/public/archives/2020/index.html","25b505604aa09fc139b52d3a076cebb8"],["C:/blog/public/archives/index.html","b74559f4d17e192e330c4636fc1720fd"],["C:/blog/public/categories/index.html","396d52dfc4f17948d44a99ad1a09243a"],["C:/blog/public/categories/安全/index.html","0a9dbca97f374d4833dc4615a592ebdb"],["C:/blog/public/categories/笔记/index.html","eb796c02a3dcfe6d7c45f34f5c43816b"],["C:/blog/public/categories/鸡汤/index.html","dfd777fbe614c942777c56290dee9b99"],["C:/blog/public/css/cyberpunk.css","baea3a72a5e0f45dff62214d4fddd61b"],["C:/blog/public/css/default.css","e34c186380ddd03e9348c0c32a775837"],["C:/blog/public/css/style.css","e34c186380ddd03e9348c0c32a775837"],["C:/blog/public/img/WeChat.png","de24e55f67d6b23e6dc8ff3b0f088186"],["C:/blog/public/img/alipay.png","0395c7c58f64815552032645c8a4fb4c"],["C:/blog/public/img/avatar.png","17214006fd5395f7f0977d32d43c9051"],["C:/blog/public/img/favicon.png","17214006fd5395f7f0977d32d43c9051"],["C:/blog/public/img/images/128.png","17214006fd5395f7f0977d32d43c9051"],["C:/blog/public/img/images/Wechat01.png","de24e55f67d6b23e6dc8ff3b0f088186"],["C:/blog/public/img/images/avatar.png","e5aa95a43799fbf26919d7edd5809325"],["C:/blog/public/img/images/logo.png","759449fbe2291dcc4ec9bdbdb4499c28"],["C:/blog/public/img/images/logo02.png","037379c3cf03e74b500d7e895873d482"],["C:/blog/public/img/images/toux.jpg","1b9576cff070c75a375e08724f48b181"],["C:/blog/public/img/images/toux.png","876908972761ea53e9629e9a13b908c2"],["C:/blog/public/img/images/zhifubao01.png","0395c7c58f64815552032645c8a4fb4c"],["C:/blog/public/img/logo.png","759449fbe2291dcc4ec9bdbdb4499c28"],["C:/blog/public/img/logo02.png","037379c3cf03e74b500d7e895873d482"],["C:/blog/public/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["C:/blog/public/img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["C:/blog/public/img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["C:/blog/public/index.html","ac7d998a549d89e0d9a365b98055793d"],["C:/blog/public/js/algolia.js","88266318b3903eb74b02980f23df1a9a"],["C:/blog/public/js/animation.js","909a13a980da00854b246c544f2f9697"],["C:/blog/public/js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["C:/blog/public/js/google_cse.js","87a5caa1a4df03fa4a86efae49b5e401"],["C:/blog/public/js/insight.js","bcc59d029592345cded5a7d38384e116"],["C:/blog/public/js/main.js","9c71bf221ac2564d00f23716ad0d1cbe"],["C:/blog/public/js/toc.js","6ffd37299744c458c5100faaed8eb153"],["C:/blog/public/tags/CDN/index.html","e39f4a9b721c12366e7fba3d877ffc90"],["C:/blog/public/tags/Hexo/index.html","ca096d0023c4e400b02ac031e602a53b"],["C:/blog/public/tags/Icarus/index.html","53c58c226129664c68951a41c177a05e"],["C:/blog/public/tags/index.html","cedc3925264b1a443bdbca199e2b9f07"],["C:/blog/public/tags/安全/index.html","a2811fae981dc6fc544ee60eb0ba4e0a"],["C:/blog/public/tags/生活/index.html","4879f956e67ca7e317f8e7bb14270fbe"],["C:/blog/public/tags/笔记/index.html","a4ed00c07c742d8456859b01c7c98344"],["C:/blog/public/tags/网络/index.html","40868507bfd05d6a6daf88de6db0a425"],["C:/blog/public/tags/鸡汤/index.html","206730032ff0461b315889c3e4f63557"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
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
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







