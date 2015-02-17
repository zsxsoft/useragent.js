exports.testSomething = function (test) {
	var userAgent = require('../index.js');
	console.log(userAgent.analyze('test'));
	test.done();
}