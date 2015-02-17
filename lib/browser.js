(function() {

	var BROWSER = {};

	BROWSER.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
		}
		return ret;
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = BROWSER;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return BROWSER;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = BROWSER;
		});
	} else {
		window.USERAGENT_BROWSER = function() {}
		USERAGENT_BROWSER.prototype.analyze = BROWSER.analyze;
	}

})();