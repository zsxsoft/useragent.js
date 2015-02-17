exports.testUserAgents = function(test) {
	var userAgent = require('../index.js');
	var testUAList = require('./ualist.js');

	for (var index in testUAList) {
		var item = testUAList[index];
		var ua = userAgent.analyze(item[0][0]);
		test.equals(item[1][2], ua.browser.full, ua.ua);
		test.equals(item[1][3], ua.platform.full, ua.ua);
		/*if (item[1][3] != ua.platform.full) {
			console.log(ua.ua);
			console.log(item[1][3]);
			console.log(ua.platform.full);
			console.log("");
		}*/
	}

	test.done();
}