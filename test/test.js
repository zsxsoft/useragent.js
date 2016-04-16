var userAgent = require('../');
exports.testUserAgents = function(test) {
	var testUAList = require('./resources/ualist.js');
	for (var index in testUAList) {
		var item = testUAList[index];
		var ua = userAgent.analyze(item[0][0]);
		test.equals(item[1][0], ua.browser.image, ua.ua);
		test.equals(item[1][1], ua.platform.image, ua.ua);
		test.equals(item[1][2], ua.device.image, ua.ua);
		test.equals(item[1][3], ua.os.image, ua.ua);

		test.equals(item[1][4], ua.platform.dir, ua.ua);
		test.equals(item[1][5], ua.platform.full, ua.ua);

		test.equals(item[1][6], ua.browser.name, ua.ua);
		test.equals(item[1][7], ua.browser.version, ua.ua);

		test.equals(item[1][8], ua.os.name, ua.ua);
		test.equals(item[1][9], ua.os.version, ua.ua);
		test.equals(item[1][10], ua.os.full, ua.ua);

		test.equals(item[1][11], ua.device.brand, ua.ua);
		test.equals(item[1][12], ua.device.model, ua.ua);
		test.equals(item[1][13], ua.device.full, ua.ua);

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