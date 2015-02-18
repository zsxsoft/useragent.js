(function(root) {
	"use strict";

	var NODE = typeof module !== 'undefined' && module.exports;
	var CMD = typeof define !== 'undefined' && define.cmd;
	var AMD = typeof define !== 'undefined' && define.amd;
	var userAgent = {};

	userAgent.version = "0.1";
	userAgent.publishDate = "20150217";
	
	userAgent.analyze = function(uaString) {
		var returnObject = {};
		returnObject.ua = uaString;
		if (typeof this.osDetect !== 'undefined') returnObject.os = this.osDetect.analyze(uaString);
		if (typeof this.deviceDetect !== 'undefined') returnObject.device = this.deviceDetect.analyze(uaString);
		if (typeof this.browserDetect !== 'undefined') returnObject.browser = this.browserDetect.analyze(uaString);
		if (typeof returnObject.device !== 'undefined') returnObject.platform = returnObject.device;
		if (typeof returnObject.os !== 'undefined' && returnObject.device.name === "") returnObject.platform = returnObject.os;
		return returnObject;
	};


	var requireFunction = function(userAgent, OS, DEVICE, BROWSER) {
		userAgent.osDetect = OS;
		userAgent.deviceDetect = DEVICE;
		userAgent.browserDetect = BROWSER;
	};


	// Node.js
	if (NODE) {
		requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'));
		module.exports = userAgent;
	}
	// AMD
	else if (AMD) {
		define(['./lib/os', './lib/device', './lib/browser'], function(OS, DEVICE, BROWSER) {
			requireFunction(userAgent, OS, DEVICE, BROWSER);
			console.log(userAgent);
			return userAgent;
		});
	}
	// CMD
	else if (CMD) {
		define(function(require, exports, module) {
			requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'));
			module.exports = userAgent;
		});
	} else {
		if (typeof USERAGENT_OS !== 'undefined') userAgent.osDetect = new USERAGENT_OS();
		if (typeof USERAGENT_DEVICE !== 'undefined') userAgent.deviceDetect = new USERAGENT_DEVICE();
		if (typeof USERAGENT_BROWSER !== 'undefined') userAgent.browserDetect = new USERAGENT_BROWSER();
		root.USERAGENT = userAgent;
	}


})(this);