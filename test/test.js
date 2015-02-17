var userAgent = require('../index.js');
exports.testUserAgents = function(test) {
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

exports.testWindows = function(test) {
	var ua = userAgent.analyze("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36");
	test.equals(true, ua.os.windows);
	test.done();
}

exports.testLinux = function(test) {
	test.equals(true, userAgent.analyze("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0").os.linux);
	test.equals(false, userAgent.analyze("Mozilla/5.0 (Linux; Android 4.4.2; HTC One Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36").os.linux);

	test.done();
}

exports.testX64 = function(test) {
	test.equals(true, userAgent.analyze("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0").os.x64);
	test.equals(false, userAgent.analyze("Mozilla/5.0 (Linux; Android 4.4.2; HTC One Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36").os.x64);
	test.equals(true, userAgent.analyze("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36").os.x64);
	test.equals(true, userAgent.analyze("WIN64; X64").os.x64);

	test.done();
}