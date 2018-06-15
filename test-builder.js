/** Required Node > 4.0 */
'use strict'
let fs = require('fs')
let userAgent = require('./index')
let testUAList = require('./test/resources/ualist.js')
let buildObject = []
testUAList.forEach((item) => {
  let ua = userAgent.analyze(item[0][0])
  buildObject.push([
        [item[0][0]],
    [
      ua.browser.image,
      ua.platform.image,
      ua.device.image,
      ua.os.image,
      ua.platform.dir,
      ua.platform.full,
      ua.browser.name,
      ua.browser.version,
      ua.os.name,
      ua.os.version,
      ua.os.full,
      ua.device.brand,
      ua.device.model,
      ua.device.full
    ]
  ])
})
fs.writeFileSync('./test/resources/ualist.js', `
/*eslint array-element-newline: ["error", { "minItems": 20, "multiline": true }]*/
(function(){var testUAList=${JSON.stringify(buildObject)};
  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = testUAList;
  }
  // AMD
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return testUAList;
    });
  }
  // CMD
  else if (typeof define !== 'undefined' && define.cmd) {
    define([], function(require, exports, module) {
      module.exports = testUAList;
    });
  } else {
    window.testUAList = testUAList;
  }
})();`, 'utf-8')
