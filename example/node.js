var userAgent = require("../index");
var ua = userAgent.analyze("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36");
console.log("TEST UA: " + ua.ua);
console.log("TEST BROWSER:" + ua.browser.full + " (" + ua.browser.name + " VERSION = " + ua.browser.version + " )");
console.log("TEST OS:" + ua.os.full + " (" + ua.os.name + " VERSION = " + ua.os.version + " )");
console.log("TEST DEVICE:" + ua.device.full);