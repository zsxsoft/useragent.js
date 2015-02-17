define(["../index.js"], function(USERAGENT) {
	var userAgent = USERAGENT;
	var ua = userAgent.analyze(navigator.userAgent);
	document.querySelector("#useragent").innerHTML = ua.ua;
	document.querySelector("#browser").innerHTML = ua.browser.full + " (" + ua.browser.name + " VERSION = " + ua.browser.version + " )";
	document.querySelector("#os").innerHTML = ua.os.full + " (" + ua.os.name + " VERSION = " + ua.os.version + " )";
	document.querySelector("#device").innerHTML = ua.device.full;
});