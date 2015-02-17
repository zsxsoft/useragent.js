(function() {

	var OS = {};

	OS.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
		}
		return ret;
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = OS;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return OS;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = OS;
		});
	} else {
		window.USERAGENT_OS = function() {}
		USERAGENT_OS.prototype.analyze = OS.analyze;
	}

})();