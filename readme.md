useragent.js
===========
[![npm](https://img.shields.io/npm/v/useragent.js.svg)](https://www.npmjs.com/package/useragent.js)
[![Coverage Status](https://coveralls.io/repos/zsxsoft/useragent.js/badge.svg)](https://coveralls.io/r/zsxsoft/useragent.js)
[![Build Status](https://travis-ci.org/zsxsoft/useragent.js.svg?branch=master)](https://travis-ci.org/zsxsoft/useragent.js)
[![David deps](https://david-dm.org/zsxsoft/useragent.js.svg)](https://david-dm.org/zsxsoft/useragent.js)
[![npm](https://img.shields.io/npm/dm/useragent.js.svg)](https://www.npmjs.com/package/useragent.js)
[![GitHub release](https://img.shields.io/github/release/zsxsoft/useragent.js.svg)](https://github.com/zsxsoft/useragent.js/releases)

A simple project that allows you to display details about a computer's operating system or web browser with a user-agent.

##Compatibility
Node.JS / (Windows) Classical ASP / (Windows) WScript / (Windows) CScript / Internet Explorer 6+ / Google Chrome / Mozilla Firefox / Apple Safari

##Installion
npm: ``$ npm install useragent.js``

bower: ``$ bower install useragent.js``

If you are using in your browser, you can run ```grunt``` to compress it.

##Test
```bash
$ npm test
```

##Run
####In Node
```javascript
var userAgent = require("useragent.js");
var ua = userAgent.analyze("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36");
console.log("TEST UA: " + ua.ua);
console.log("TEST BROWSER:" + ua.browser.full + " (" + ua.browser.name + " VERSION = " + ua.browser.version + " )");
console.log("TEST OS:" + ua.os.full + " (" + ua.os.name + " VERSION = " + ua.os.version + " )");
console.log("TEST DEVICE:" + ua.device.full);
```

####In Webpack / browserify
```javascript
import Useragent from 'useragent.js';
console.log(Useragent);
```

####In Browser
[Click here](http://zsxsoft.github.io/useragent.js/basic.html)
```javascript
(function () {
		var ua = USERAGENT.analyze(navigator.userAgent);
		document.getElementById("useragent").innerHTML = ua.ua;
		document.getElementById("browser").innerHTML = ua.browser.full + " (" + ua.browser.name + " VERSION = "  + ua.browser.version + " )";
		document.getElementById("os").innerHTML = ua.os.full + " (" + ua.os.name + " VERSION = "  + ua.os.version + " )";
		document.getElementById("device").innerHTML = ua.device.full;
})();
```

####In RequireJS
[Click here](http://zsxsoft.github.io/useragent.js/requirejs.html)

####In SeaJS
[Click here](http://zsxsoft.github.io/useragent.js/seajs.html)

####In Classical ASP
[Click here](http://zsxsoft.github.io/useragent.js/classicalasp.html)

##Work with image
[Click here](http://zsxsoft.github.io/useragent.js/withimage.html)

You can get images from [php-useragent](https://github.com/zsxsoft/php-useragent).

## Supported Browsers/Platforms

[Click here to see full list.](http://project.zsxsoft.com/useragent.js/supported.html)

Tested Browsers: Amazon Silk / Android Webkit / Avant Browser / Comodo Dragon / curl / Firefox / Google Chrome / Internet Explorer / Microsoft Edge / Links / Lynx / Maxthon / MxNitro / Opera / QQBrowser / Safari SRWare Iron / Teleca Q7 / UC Browser / Vivaldi / W3M / wget / Yandex.Browser and so on.. 

OS: Android / Arch Linux / CentOS / Chrome OS / Debain / Fedora / FreeBSD / OSX / Red Hat / openSUSE / SymbianOS / Unix / Palm webOS / Windows 3.1 - 10 / Ubuntu / Linux and so on..

Devices: Xiaomi / BlackBerry / Nexus / HTC / Huawei / Kindle / Lenovo / LG / Motorola / Nokia / OnePlus / PlayStation / Samsung / Sony Xperia / ZTE / Ubuntu / Windows Phone / Apple Family and so on.