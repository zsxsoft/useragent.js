(function() {

	var userAgent = {};


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
		define([], function (require, exports, module) {
			module.exports = ZBP;
		});
	}
	else {
		root.userAgent = userAgent;
	}


})();