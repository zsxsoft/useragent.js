(function() {

	var userAgent = {};


	if (typeof require === 'undefined') {
		if (typeof USERAGENT_OS !== 'undefined') var osDetect = new USERAGENT_OS();
		if (typeof USERAGENT_DEVICE !== 'undefined') var deviceDetect = new USERAGENT_DEVICE();
		if (typeof USERAGENT_BROWSER !== 'undefined') var browserDetect = new USERAGENT_BROWSER();
	} else {
		var osDetect = require('./lib/os');
		var deviceDetect = require('./lib/device');
		var browserDetect = require('./lib/browser');
	}


	userAgent.analyze = function(uaString) {
		var returnObject = {};
		if (typeof osDetect !== 'undefined') returnObject.os = osDetect.analyze(uaString);
		if (typeof deviceDetect !== 'undefined') returnObject.device = deviceDetect.analyze(uaString);
		if (typeof browserDetect !== 'undefined') returnObject.browser = browserDetect.analyze(uaString);
		return returnObject;
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = userAgent;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return userAgent;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = userAgent;
		});
	} else {
		window.USERAGENT = userAgent;
	}

})();