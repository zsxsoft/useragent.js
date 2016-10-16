/* global USERAGENT_OS */
/* global USERAGENT_DEVICE */
/* global USERAGENT_BROWSER */
/* global define */
'use strict';
(function (root) {
  var NODE = typeof module !== 'undefined' && module.exports
  var CMD = typeof define !== 'undefined' && define.cmd
  var AMD = typeof define !== 'undefined' && define.amd
  var userAgent = {}

  userAgent.version = '0.5.3'
  userAgent.publishDate = '20160417'

  userAgent.analyze = function (uaString) {
    var returnObject = {}
    returnObject.ua = uaString
    if (this.osDetect) returnObject.os = this.osDetect.analyze(uaString)
    if (this.deviceDetect) returnObject.device = this.deviceDetect.analyze(uaString)
    if (this.browserDetect) returnObject.browser = this.browserDetect.analyze(uaString)
    if (returnObject.device) returnObject.platform = returnObject.device
    if (returnObject.device && returnObject.os && returnObject.device.name === '') returnObject.platform = returnObject.os
    return returnObject
  }

  var requireFunction = function (userAgent, OS, DEVICE, BROWSER) {
    userAgent.osDetect = OS
    userAgent.deviceDetect = DEVICE
    userAgent.browserDetect = BROWSER
  }

// Node.js
  if (NODE) {
    if (process.env.UAJS_COV) {
      var libs = ['-cov/os', '-cov/device', '-cov/browser'] // To prevent webpack pack lib-cov.
      requireFunction(userAgent, require('./lib' + libs[0]), require('./lib' + libs[1]), require('./lib' + libs[2]))
    } else {
      requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'))
    }

    module.exports = userAgent
  }
// AMD
  else if (AMD) {
    define(['./lib/os', './lib/device', './lib/browser'], function (OS, DEVICE, BROWSER) {
      requireFunction(userAgent, OS, DEVICE, BROWSER)
      return userAgent
    })
  }
// CMD
else if (CMD) {
  define(function (require, exports, module) {
    requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'))
    module.exports = userAgent
  })
} else {
  if (typeof USERAGENT_OS !== 'undefined') userAgent.osDetect = new USERAGENT_OS()
  if (typeof USERAGENT_DEVICE !== 'undefined') userAgent.deviceDetect = new USERAGENT_DEVICE()
  if (typeof USERAGENT_BROWSER !== 'undefined') userAgent.browserDetect = new USERAGENT_BROWSER()
  root.USERAGENT = userAgent
}
})(this)
