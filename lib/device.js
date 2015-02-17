(function() {

	var DEVICE = {};

	DEVICE.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
		}
		return ret;
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = DEVICE;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return DEVICE;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = DEVICE;
		});
	} else {
		window.USERAGENT_DEVICE = function() {}
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}

})();