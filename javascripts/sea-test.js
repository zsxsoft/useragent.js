define(function(require, exports, module) {
	var userAgent = require("./useragent/index");
	var ua = userAgent.analyze(navigator.userAgent);
	document.getElementById("useragent").innerHTML = ua.ua;
	document.getElementById("browser").innerHTML = '<img src="img/16/browser/' + ua.browser.image + '.png" alt="' + ua.browser.name + '" />' + ua.browser.full;
	document.getElementById("platform").innerHTML = '<img src="img/16/' + ua.platform.dir + '/' + ua.platform.image + '.png" alt="' + ua.platform.name + '" />' + ua.platform.full;
});