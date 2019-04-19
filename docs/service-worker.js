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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

importScripts(
  "precache-manifest.d90cccd5fad843716b26502c043d8b35.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts.googleapis.com\/css?family=Montserrat+Alternates:400,900/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/us1.prisma.sh\/boaz-blake-8951e1\/shindigit\/dev/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/sockjs-node\/info/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
