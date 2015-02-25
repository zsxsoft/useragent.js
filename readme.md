useragent.js
===========
[![Coverage Status](https://coveralls.io/repos/zsxsoft/useragent.js/badge.svg)](https://coveralls.io/r/zsxsoft/useragent.js)
[![Build Status](https://travis-ci.org/zsxsoft/useragent.js.svg?branch=master)](https://travis-ci.org/zsxsoft/useragent.js)


A simple project that allows you to display details about a computer's operating system or web browser with a user-agent.

##Compatibility
Node.JS / (Windows) Classical ASP / (Windows) WScript / (Windows) CScript / Internet Explorer 6+ / Google Chrome / Mozilla Firefox / Apple Safari

##Installion
```bash
$ npm install useragent.js
```
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
Have you noticed it? The returned object has an "image" field. You can copy images from [php-useragent](https://github.com/zsxsoft/php-useragent).


## Supported Browsers/Platforms

This list has omission.

Tested Browsers: 114Browser / 115Browser / 2345Chrome / 2345Explorer / 360 Aphone Browser / 360 Explorer / Abolimba / Acoo Browser / Alienforce / Amaya / Amazon Silk / America Online Browser / Amiga / Android Webkit / AOL / Arora / Atomic Web Browser / Avant Browser / Baidu Browser / Barca Proxxxx / BarcaC3 / Beamrise / Beonex / BlackBerry / Blackbird / BlackHawk / Blazer / Bolt / BonEchob2 / BrowseX / Browzar / Bunjalloo / Camino / Charon / Cheshire / Chimera / Chrome Mobile / ChromePlus / Chromium / Classilla / Coast / Columbus / CometBird / Comodo Dragon / Conkeror / CoolNovo / CoRom / Crazy Browser / curl / Cyberdog / Deepnet Explorer / Demeter / DeskBrowse / Dillo / DoCoMo / DocZilla / Dooble / Doris / Dorothy / Edbrowse / Element Browser / Elinks / Enigma / Epic / Epiphany / Escape / Fennec / Firebird / Firefox / Fireweb Navigator / Flock / Fluid / Galaxy / Galaxy Nexus / Galeon / GlobalMojo / GNU IceCat / GO Browser / Google Chrome / Google Chrome Frame / Google CriOS / GoSurf / GranParadiso / GreenBrowser / Gtk+ WebCore / Hana / HotJava / Hv3 Build / IBM WebExplorer / IBrowse / iCab / Iceape / IceBrowser v6 / IceWeasel / IEMobile / iNet Browser / Internet Explorer / Internet Explorer Spartan / InternetSurfboard / iRider / Iris / JuziBrowser / Kapiko / Kazehakase / Kirix Strata / KKman / K-Meleon / KMLite / K-Ninja / Konqueror / LBrowser / LeechCraft / Liebao Browser / Liebaofast / Links / Lobo / lolifox / Lorentz / Lunascape / Lynx / Madfox / Maemo Browser / Maple Browser / Maxthon / Maxthon / MIB / Midori / Midori / Minefieldb4pre / Minimo / MiuiBrowser / Mobile Safari / Mosaic / Mozilla Developer Preview / MQQBrowser / Multi-Browser XP / MultiZilla / MxNitro / myibrowalpha2 / MyIE2 / Namoroka / NetBox / NetFront / NetNewsWire / NetPositive / Netscape / NetSurf / Nokia Browser / Nokia Web Browser / Novarra Vision / Off By One / OmniWeb / OneBrowser / Openwave Mobile Browser / Opera / Opera Developer / Opera Mini / Opera Mobile / Opera Next / Orca / Oregano / Oregano Web Browser / Otter Build / Pale Moon / Palm Pre / Patriott Browser / Phaseout / Phoenix / Podkicker / Pogo / Polaris / Prismb4 / PS4 Web Browser / QQ / QQBrowser / QtWeb Internet Browser / QupZilla / rekonq / retawqc / RockMelt / Ryouko / SaaYaa Explorer / Safari / SeaMonkey / SEMC Browser / Shiira / Shiira Safari / Shiretokopre / SiteKiosk / SkipStone / Skyfire / Sleipnir / SlimBoat / SlimBrowser / Sogou Explorer / Songbird / SRWare Iron / Stainless / Sundance / Sunrise / Surf / Swiftfox / Sylera / TaoBrowser / Tear / TeaShark / Teleca Q7 / Tencent Traveler / TenFourFox / TheWorld Browser / Thunderbird / Tizen / Tjusig / Ubuntu Web Browser / UC Browser / UltraBrowser / Unknown / Usejump / uZard / uZardWeb / uzbl / Vimprobable / Vivaldi / Vonkeror / W3M / Webian Shell / Webrender / Weltweitimnetz Browser / wget / wKiosk / Wyzo / XiinoE / X-Smiles / Yandex.Browser / zBrowser NigtSky / ZipZap

OS: AmigaOS / Android / Arch Linux / BeOS / CentOS / Chakra Linux / Google Chrome OS / Crunchbang / Debian GNU/Linux / DragonFly BSD / Edubuntu / Fedora / Foresight Linux / FreeBSD / Gentoo / Inferno / IRIX Linux / Kanotix / Knoppix / Kubuntu / LindowsOS / Linspire / Linux Mint / Lubuntu / Mac OS Darwin / Macintosh / Mageia / Mandriva / moonOS / MorphOS / NetBSD / Nova / OpenBSD / Oracle / Pardus / PCLinuxOS / Red Hat / Rosa Linux / Sabayon Linux / Slackware / Solaris / Solaris / openSUSE / SymbianOS / Unix / VectorLinux / Venenux GNU Linux / Palm webOS / Windows 10 x64 Edition / Windows 10 / Windows 8.1 x64 Edition / Windows 8.1 / Windows 8 x64 Edition / Windows 8 / Windows 7 x64 Edition / Windows 7 / Windows Vista / Windows XP x64 Edition / Windows Server 2003 x64 Edition / Windows Server 2003 / Windows XP / Windows 2000, Service Pack 1 (SP1) / Windows 2000 / Microsoft Windows NT 4.0 / Microsoft Windows NT 3.11 / Microsoft Windows 3.11 / Microsoft Windows 3.1 / Windows Millennium Edition (Windows Me) / Windows 98 SE / Windows 98 / Windows 95 / Windows CE / Windows Mobile 5 / Windows Mobile / Windows / Xandros / Xubuntu / Zenwalk GNU Linux / Ubuntu / GNU/Linux / J2ME/MIDP Device


Devices: BenQ-Siemens / Meizu（魅族） / Xiaomi（小米） / BlackBerry / CoolPad（酷派） / Dell / Nexus / HTC HTC / Huawei（华为） / Kindle / K-Touch（天语） / Lenovo（联想） / LG / Motorola / Nintendo / Nokia / Onda（昂达） / OPPO / OLPC (XO) / Palm / PlayStation / Samsung / Sony Xperia / SonyEricsson / vivo / ZTE（中兴） / Ubuntu Phone / Ubuntu Tablet / Windows Phone / iPad / iPod / iPhone

