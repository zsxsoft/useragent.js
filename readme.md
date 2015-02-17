useragent.js
===========
A simple project that allows you to display details about a computer's operating system or web browser with a user-agent.

##Compatibility
Node.JS

Internet Explorer 6+

Google Chrome

Mozilla Firefox

Apple Safari

##Installion
```bash
$ npm install
```
If you are using in your browser, you should run ```grunt``` to compress it.

##Test
```bash
$ npm test
```

##Run
####In Node
```javascript
var userAgent = require("useragent");
var ua = userAgent.analyze("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36");
console.log("TEST UA: " + ua.ua);
console.log("TEST BROWSER:" + ua.browser.full + " (" + ua.browser.name + " VERSION = " + ua.browser.version + " )");
console.log("TEST OS:" + ua.os.full + " (" + ua.os.name + " VERSION = " + ua.os.version + " )");
console.log("TEST DEVICE:" + ua.device.full);
```


####In Browser
```javascript
(function () {
		var ua = USERAGENT.analyze(navigator.userAgent);
		document.getElementById("#useragent").innerHTML = ua.ua;
		document.getElementById("#browser").innerHTML = ua.browser.full + " (" + ua.browser.name + " VERSION = "  + ua.browser.version + " )";
		document.getElementById("#os").innerHTML = ua.os.full + " (" + ua.os.name + " VERSION = "  + ua.os.version + " )";
		document.getElementById("#device").innerHTML = ua.device.full;
})();
```

####In RequireJS
[Click here](https://github.com/zsxsoft/useragent.js/blob/master/example/requirejs.html)

####In SeaJS
[Click here](https://github.com/zsxsoft/useragent.js/blob/master/example/seajs.html)

####In Classical ASP
I don't know how to create a global variable in a closure... 

##Work with image
Have you noticed it? The returned object has an "image" field. You can copy images from [php-useragent](https://github.com/zsxsoft/php-useragent).