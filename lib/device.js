'use strict';
(function (root) {
  var deviceList = [{
    regEx: /MEIZU (MX|M9)|MX[0-9]{0,1}[; ]|M0(4|5)\d|M35\d|M\d note/i,
    brand: 'Meizu',
    image: 'meizu',
    childItem: [{
      regEx: /(M(04|05|35)\d)/i,
      model: '$1'
    }, {
      regEx: /(MX[0-9]{0,1})/i,
      model: '$1'
    }, {
      regEx: /(m\d Note)/i,
      model: '$1'
    }]
  }, {
    regEx: /MI-ONE|MI[ -]\d/i,
    brand: 'Xiaomi',
    image: 'xiaomi',
    childItem: [{
      regEx: /MI-ONE/i,
      model: '1'
    }, {
      regEx: /MI[ -]([A-Z0-9]+)/i,
      model: '$1'
    }]
  }, {
    regEx: /HM NOTE|HM \d|Redmi/i,
    brand: 'Redmi',
    image: 'xiaomi',
    childItem: [{
      regEx: /HM NOTE ([A-Z0-9]+)/i,
      model: 'Note $1'
    }, {
      regEx: /HM ([A-Z0-9]+)/i,
      model: '$1'
    }, {
      regEx: /RedMi Note ([A-Z0-9]+)/i,
      model: 'Note $1'
    }]
  }, {
    regEx: /BlackBerry/i,
    brand: 'BlackBerry',
    image: 'blackberry',
    version: {
      start: 'blackberry ?'
    }
  }, {
    regEx: /Coolpad/i,
    brand: 'CoolPad',
    image: 'coolpad',
    version: {
      start: 'CoolPad( |\_)?',
      item: 2
    }
  }, {
    regEx: /Dell/i,
    brand: 'Dell',
    image: 'dell',
    childItem: [{
      regEx: /Dell Streak/i,
      model: 'Streak'
    }]
  }, {
    regEx: /Hasee/i,
    brand: 'Hasee',
    image: 'hasee',
    childItem: [{
      regEx: /Hasee (([^;\/]+) Build|([^;\/)]+)[);\/ ])/i,
      model: '$2'
    }]
  }, {
    regEx: /Hisense|HS-(?:U|EG?|I|T|X)[0-9]+[a-z0-9\-]*/i,
    brand: 'Hisense',
    image: 'hisense',
    childItem: [{
      regEx: /(HS-(?:U|EG?|I|T|X)[0-9]+[a-z0-9\-]*)/i,
      model: '$1'
    }]
  }, {
    regEx: /HTC|Desire|Rhodium|WMD\-50433/i,
    brand: 'HTC',
    image: 'htc',
    childItem: [{
      regEx: /Desire/i,
      model: 'Desire'
    }, {
      regEx: /Rhodium|WMD\-50433|HTC[_|\ ]Touch[_|\ ]Pro2/i,
      model: 'Touch Pro2'
    }, {
      regEx: /HTC[_|\ ]Touch[_|\ ]Pro/i,
      model: 'Touch Pro'
    }, {
      regEx: /Windows Phone .+ by HTC/i,
      version: {
        start: 'Windows Phone ',
        end: ' by HTC'
      }
    }],
    version: {
      start: 'HTC[ |_|-]?'
    }
  }, {
    regEx: /huawei|Honor|Che\d|H60-L/i,
    brand: 'Huawei',
    image: 'huawei',
    version: {
      start: 'HUAWEI( |\_)?',
      item: 2
    },
    childItem: [{
      regEx: /HONOR[\ ]?([A-Za-z0-9]{3,4}\-[A-Za-z0-9]{3,4})|(Che[0-9]{1}-[a-zA-Z0-9]{4})/i,
      model: '$1'
    }, {
      regEx: /(H60-L\d+)/i,
      model: '$1'
    }]
  }, {
    regEx: /Kindle/i,
    brand: 'Amazon',
    model: 'Kindle',
    image: 'kindle',
    version: {
      start: 'Kindle\/'
    }
  }, {
    regEx: /K-Touch/i,
    brand: 'K-Touch',
    image: 'k-touch',
    version: {
      start: 'k-touch[ _]'
    }
  }, {
    regEx: /Lenovo|lepad|Yoga/i,
    brand: 'Lenovo',
    image: 'lenovo',
    childItem: [{
      regEx: 'lepad',
      model: 'LePad'
    }, {
      regEx: /Yoga( Tablet)?[\ |\-|\/|\_]([.0-9a-zA-Z]+)/i,
      model: 'Yoga $2'
    }],
    version: {
      start: 'Lenovo[\ |\-|\/|\_]'
    }
  }, {
    regEx: /Letv/i,
    brand: 'Letv',
    image: 'letv',
    version: {
      start: 'Letv[- \/]'
    }
  }, {
    regEx: /LG/i,
    brand: 'LG',
    image: 'lg',
    version: {
      start: 'LGE?([- \/])',
      item: 2
    }
  }, {
    regEx: / Droid|XT720|MOT-|MIB|XOOM/i,
    brand: 'Motorola',
    image: 'motorola',
    childItem: [{
      regEx: / Droid/i,
      model: 'Droid'
    }, {
      regEx: /MOT\-|MIB/i,
      version: {
        start: 'MOT(O|-)',
        item: 2
      }
    }, {
      regEx: /XOOM/i,
      model: 'Xoom'
    }, {
        regEx: /XT720/i,
        model: 'XT720'
      }]
  }, {
    regEx: /Microsoft/i,
    brand: 'Microsoft',
    image: 'microsoft',
    childItem: [{
      regEx: /Lumia/i,
      model: 'Lumia',
      version: {
        start: '(Lumia )',
        item: 2
      }
    }]
  }, {
    regEx: /Nintendo/i,
    brand: 'Nintendo',
    image: 'nintendo',
    childItem: [{
      regEx: /DSi/,
      model: 'DSi',
      image: 'nintendodsi'
    }, {
        regEx: /DS/,
        model: 'DS',
        image: 'nintendods'
      }, {
        regEx: /WiiU/,
        model: 'Wii U',
        image: 'nintendowiiu'
      }, {
        regEx: /Wii/,
        model: 'Wii',
        image: 'nintendowii'
      }]
  }, {
    regEx: /Nokia/i,
    brand: 'Nokia',
    image: 'nokia',
    childItem: [{
        regEx: /Nokia 909/i,
        model: 'Lumia 1020'
      }, {
        regEx: /IEMobile|WPDesktop|Edge/i,
        model: 'Lumia',
        version: {
          start: '(Nokia |Lumia |Nokia;)',
          item: 2
        }
      }],
    version: {
        start: 'Nokia',
        item: 1
      }
  }, {
      regEx: /Onda/i,
      brand: 'Onda',
      image: 'onda'
    }, {
      regEx: /oppo/i,
      brand: 'OPPO',
      image: 'oppo'
    }, {
      regEx: /A0001|A2005|A3000|E1003|One [A-Z]\d{4}/i,
      brand: 'OnePlus',
      image: 'oneplus',
      childItem: [{
        regEx: /A0001/,
        model: '1'
      }, {
        regEx: /A2005/,
        model: '2'
      }, {
        regEx: /E1003/,
        model: 'X'
      }, {
        regEx: /A3000/,
        model: '3'
      }]
    }, {
      regEx: / Pixi\/| Pre\/|Palm|webos/i,
      brand: 'Palm',
      image: 'palm',
      childItem: [{
        regEx: /Pixi/i,
        model: 'Pixi'
      }, {
        regEx: /Pre/i,
        model: 'Pre'
      }]
    }, {
      regEx: /Galaxy Nexus|Smart-?TV|GT-|SM-|SCH-|SHV-|Samsung/i,
      brand: 'Samsung',
      image: 'samsung',
      childItem: [{
        regEx: /Smart-?TV/i,
        model: 'Smart TV'
      }, {
        regEx: /Galaxy Nexus/i,
        model: 'Galaxy Nexus'
      }],
      version: {
        start: '(Samsung-(SCH-)?|GT-|SM-|SCH-|SHV-)',
        item: 3
      }
    }, {
      regEx: /PlayStation/i,
      brand: 'Sony',
      model: 'PlayStation',
      image: 'playstation',
      version: {
        start: 'PlayStation '
      }
    }, {
      regEx: /SonyEricsson/i,
      brand: 'SonyEricsson',
      image: 'sonyericsson',
      version: {
        start: 'SonyEricsson'
      }
    }, {
      regEx: /TCL/i,
      brand: 'TCL',
      image: 'tcl',
      version: {
        start: 'TCL ?'
      }
    }, {
      regEx: /vivo/i,
      brand: 'vivo',
      image: 'vivo',
      version: {
        start: 'VIVO '
      }
    }, {
      regEx: /Xperia/i,
      brand: 'Sony',
      model: 'Xperia',
      image: 'xperia',
      version: {
        start: 'Xperia(-T)?( |\_|\-)?',
        item: 3
      }
    }, {
      regEx: /zte/i,
      brand: 'ZTE',
      image: 'zte',
      version: {
        start: 'ZTE '
      }
    }, {
      regEx: /Ubuntu; (Mobile|Tablet)/i,
      brand: 'Ubuntu',
      image: 'ubuntutouch',
      childItem: [{
        regEx: /Mobile/i,
        model: 'Phone'
      }, {
        regEx: /Tablet/i,
        model: 'Tablet'
      }]
    }, {
      regEx: /Nexus/i,
      brand: 'Google',
      model: 'Nexus',
      image: 'google-nexusone',
      version: {
        start: 'Nexus '
      }
    }]

  var analyzeVersion = function (ret, deviceItem) {
    var rep

    if (!('end' in deviceItem.version)) deviceItem.version.end = ''
    if (!('item' in deviceItem.version)) deviceItem.version.item = 1

    var versionRegEx = new RegExp(deviceItem.version.start + '([.0-9a-zA-Z]+)' + deviceItem.version.end, 'i')

    if (rep = ret.ua.match(versionRegEx)) {
      ret.model += (ret.model === '' ? '' : ' ') + rep[deviceItem.version.item].replace(/_/g, '')
            // ret.addChild = false; // If it has some supplementary name then do not check child.
    }
  }

  var analyzeItem = function (ret, deviceList) {
    var rep = null
    var fixedName = ''
    var deviceItem = null
    var deviceKeys = Object.keys(deviceList)
    for (var i = 0; i < deviceKeys.length; i++) {
      deviceItem = deviceList[deviceKeys[i]]
      if (!(rep = ret.ua.match(deviceItem.regEx))) continue

      var deviceItems = Object.keys(deviceItem)
      for (var j = 0; j < deviceItems.length; j++) {
        var singleName = deviceItems[j]
        var singleItem = deviceItem[singleName]
        switch (singleName) {
          case 'childItem':
          case 'version':
          case 'regEx':
                        // Do nothing..
            break
          case 'brand':
          case 'model':
            if (rep.length === 0) continue // Didn't match

            if (ret[singleName] !== '') {
              ret[singleName] += ' '
            }
            fixedName = singleItem
            for (var k = 1; k < rep.length; k++) { // rep[0] is useless
              fixedName = fixedName.replace(new RegExp('\\$' + k, 'g'), rep[k])
            }
            ret[singleName] += fixedName

            break
          default:
            ret[singleName] = singleItem
            break
        }
      }

      var checkVersionSwitch = ('version' in deviceItem)
      if ('childItem' in deviceItem) {
        if (analyzeItem(ret, deviceItem.childItem)) {
          checkVersionSwitch = false
        }
      }

      if (checkVersionSwitch) {
        analyzeVersion(ret, deviceItem)
      }

      delete ret.addVersion
      return true
    }
    return false
  }

  var analyze = function (ret) {
    var rep = null
    if (analyzeItem(ret, deviceList)) {
      return
    }

        // Apple
    else if (/iPad/i.test(ret.ua)) {
      ret.brand = 'Apple'
      ret.model = 'iPad'
      ret.image = 'ipad'
    } else if (/iPod/i.test(ret.ua)) {
      ret.brand = 'Apple'
      ret.model = 'iPod'
      ret.image = 'iphone'
    } else if (/iPhone/i.test(ret.ua)) {
      ret.brand = 'Apple'
      ret.model = 'iPhone'
      ret.image = 'iphone'
    }

        // Some special UA..
        // is MSIE
        else if (/MSIE.+?Windows.+?Trident/i.test(ret.ua) && !/Windows ?Phone/i.test(ret.ua)) {
          ret.brand = ''
          ret.model = ''
          ret.image = 'null'
        }
        // No Device match
        else {
          ret.image = 'null'
        }
  }

  var DEVICE = {}

  DEVICE.analyze = function (uaString) {
    var ret = {
      'ua': uaString,
      'name': '',
      'image': '',
      'brand': '',
      'model': '',
      'dir': 'device'
    }
    analyze(ret)
    ret.name = ret.brand === '' && ret.model === '' ? '' : ret.brand + (ret.model === '' ? '' : ' ') + ret.model
    ret.full = ret.name
    return ret
  }

    // Node.js
    // #JSCOVERAGE_IF typeof module !== 'undefined' && module.exports
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEVICE
  }
    // #JSCOVERAGE_ENDIF
    // #JSCOVERAGE_IF typeof define !== 'undefined' && define.amd
    // AMD
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return DEVICE
    })
  }
    // #JSCOVERAGE_ENDIF
    // #JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
    // CMD
    else if (typeof define !== 'undefined' && define.cmd) {
      define([], function (require, exports, module) {
        module.exports = DEVICE
      })
        // #JSCOVERAGE_ENDIF
        // #JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
    } else {
      root.USERAGENT_DEVICE = function () {}
      USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze
    }
    // #JSCOVERAGE_ENDIF
})(this)
