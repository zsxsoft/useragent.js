'use strict';
(function (root) {
  var windowsVersion = {
    '6.4': ['10', '6'], // Windows 10 before 10240
    '10.0': ['10', '6'],
    '6.3': ['8.1', '5'],
    '6.2': ['8', '5'],
    '6.1': ['7', '4'],
    '6.0': ['Vista', '3'],
    '5.2': ['Server 2003', '2'],
    '5.1': ['XP', '2'],
    '5.01': ['2000 Service Pack 1', '1'],
    '5.0': ['2000', '1'],
    '4.0': ['NT 4.0', '1'],
    '3.51': ['NT 3.11', '1']
  }

  var osRegEx = new RegExp([
    'BB10', 'BeOS', 'DragonFly', 'FreeBSD', 'Inferno',
    'SunOS', 'Solaris', 'J2ME/MIDP',
    'MorphOS', 'NetBSD', 'OpenBSD', 'Unix', 'webOS'
  ].join('|'), 'i')
  var defaultOSList = {
    bb10: {
      name: 'BlackBerry OS 10',
      image: 'blackberry'
    },
    dragonfly: {
      name: 'DragonFly BSD',
      image: 'dragonflybsd'
    },
    freebsd: {
      name: 'FreeBSD'
    },
    morphos: {
      name: 'MorphOS'
    },
    openbsd: {
      name: 'OpenBSD'
    },
    netbsd: {
      name: 'NetBSD'
    },
    beos: {
      name: 'BeOS'
    },
    webos: {
      name: 'Palm webOS',
      image: 'palm'
    },
    sunos: {
      name: 'Solaris',
      image: 'solaris'
    },
    'j2me/midp': {
      name: 'J2ME/MIDP Device',
      image: 'java'
    }
  }

  var linuxRegEx = new RegExp([
    'Arch ?Linux', 'Chakra', 'Crunchbang', 'Debian', 'Gentoo', 'Kanotix', 'Knoppix', 'Jolla',
    'LindowsOS', 'Linspire', 'Mageia', 'Pardus', 'Rosa', 'Sabayon',
    'Slackware', 'Suse', 'VectorLinux', 'Venenux', 'Xandros', 'Zenwalk'
  ].join('|'), 'i')
  var defaultLinuxList = {
    'arch linux': {
      image: 'archlinux',
      name: 'Arch Linux'
    },
    archlinux: {
      name: 'Arch Linux'
    },
    suse: {
      name: 'openSUSE'
    },
    lindowsos: {
      name: 'LindowsOS'
    },
    linspire: {
      image: 'lindowsos'
    }
  }
  var linuxWithVersion = {
    'centos': ['centos', /.el([.0-9a-zA-Z]+).centos/i],
    'fedora': ['fedora', /.fc([.0-9a-zA-Z]+)/i],
    'foresight linux': ['foresight', /Foresight Linux\/([.0-9a-zA-Z]+)/i],
    'linux mint': ['linuxmint', /Linux Mint\/([.0-9a-zA-Z]+)/i],
    'mandriva': ['mandriva', /mdv\/([.0-9a-zA-Z]+)/i],
    'moonos': ['moonos', /moonos\/([.0-9a-zA-Z]+)/i]
  }
  var linuxWithVersionRegEx = new RegExp('(' + Object.keys(linuxWithVersion).join('|') + ')', 'i')

  var returnWindows = function (ret, version) {
    ret.full += ' ' + windowsVersion[version][0]
    ret.image = 'win-' + windowsVersion[version][1]
    ret.version = version
  }

  var analyzeWindows = function (ret) {
    ret.full = 'Windows'
    ret.name = 'Windows'
    ret.image = 'win-2'
    ret.version = ''
    var rep = null

    if (/Windows Phone|WPDesktop|ZuneWP7|WP7/i.test(ret.ua)) {
      ret.name += ' Phone'
      ret.image = 'windowsphone'

      rep = ret.ua.match(/Windows Phone (OS )?([0-9\.]+)/i)
      if (rep !== null) {
        ret.version = rep[2]
        var intVersion = parseInt(ret.version)
        if (intVersion === 7) {
          ret.image = 'wp7'
        } else if (intVersion === 10) {
          ret.name = 'Windows'
          ret.version = '10 Mobile'
          ret.image = 'win-6'
        }
      }
      ret.full = ret.name + (ret.version === '' ? '' : ' ' + ret.version)
    } else if (/Windows NT/i.test(ret.ua)) {
      ret.name = 'Windows NT'
      rep = ret.ua.match(/Windows NT ([.0-9]+)/i)
      if (rep !== null) {
        if (windowsVersion[rep[1]]) {
          returnWindows(ret, rep[1])
        }
      }
    }

    if (ret.full !== 'Windows') {
      return true
    }

    if (/Windows XP/i.test(ret.ua)) {
      returnWindows(ret, '5.1')
    } else if (/Windows 2000/i.test(ret.ua)) {
      returnWindows(ret, '5.0')
    } else if (/WinNT4.0/i.test(ret.ua)) {
      returnWindows(ret, '4.0')
    } else if (/WinNT3.51/i.test(ret.ua)) {
      returnWindows(ret, '3.51')
    } else if (/Win(dows )?3.11|Win16/i.test(ret.ua)) {
      ret.full += ' 3.11'
      ret.image = 'win-1'
    } else if (/Windows 3.1/i.test(ret.ua)) {
      ret.full += ' 3.1'
      ret.image = 'win-1'
    } else if (/Win 9x 4.90|Windows ME/i.test(ret.ua)) {
      ret.full += ' Me'
      ret.image = 'win-1'
    } else if (/Win98/i.test(ret.ua)) {
      ret.full += ' 98 SE'
      ret.image = 'win-1'
    } else if (/Windows (98|4\.10)/i.test(ret.ua)) {
      ret.full += ' 98'
      ret.image = 'win-1'
    } else if (/Windows 95/i.test(ret.ua) || /Win95/i.test(ret.ua)) {
      ret.full += ' 95'
      ret.image = 'win-1'
    } else if (/Windows CE|Windows .+Mobile/i.test(ret.ua)) {
      ret.full += ' CE'
      ret.image = 'win-2'
            // #JSCOVERAGE_IF false
    } else if (/WM5/i.test(ret.ua)) {
      ret.name += ' Mobile'
      ret.version = '5'
      ret.full = ret.name + ' ' + ret.version
      ret.image = 'win-phone'
            // #JSCOVERAGE_ENDIF
    } else if (/WindowsMobile/i.test(ret.ua)) {
      ret.name += ' Mobile'
      ret.full = ret.name
      ret.image = 'win-phone'
    }
  }

  var analyzeLinux = function (ret) {
    ret.name = ''
    ret.image = ''
    ret.version = ''
    var rep = null
    var res = ret.ua.match(linuxRegEx)
    var name = ''
    linuxWithVersionRegEx.lastIndex = 0

    if (res !== null) {
      name = res[0].toLowerCase()
      ret.name = name.replace(/(\w)/, function (string) {
        return string.toUpperCase()
      })
      ret.image = name

      if (defaultLinuxList[name]) {
        ret.name = defaultLinuxList[name].name || ret.name
        ret.image = defaultLinuxList[name].image || ret.image
      }
    } else if (/(L|K|X|Ed)?Ubuntu/i.test(ret.ua)) { // The count of Ubuntu users is more than others.
      ret.name = 'Ubuntu'
      rep = ret.ua.match(/Ubuntu[\/| ]([.0-9]+[.0-9a-zA-Z]+)/i)

      if (rep) {
        ret.version = rep[1]
        if (parseInt(ret.version) < 10) {
          ret.image = 'ubuntu-1'
        }
      }

      if (ret.image === '') {
        ret.image = 'ubuntu-2'
      }

      rep = ret.ua.match(/(L|K|X|Ed)Ubuntu/i)
      if (rep) {
        var childUbuntuVersion = rep[1].toLowerCase()
        ret.name = childUbuntuVersion + ret.name
        ret.name = ret.name.toLowerCase().replace(/(\w)/, function (m) {
          return m.toUpperCase()
        })
        ret.image = childUbuntuVersion + ret.image
      }
    } else if (linuxWithVersionRegEx.test(ret.ua)) {
      rep = ret.ua.match(linuxWithVersionRegEx)
      name = rep[1].toLowerCase()
      ret.name = rep[1]
      rep = ret.ua.match(linuxWithVersion[name][1])
      if (rep) {
        ret.version = rep[1]
      }
      ret.image = linuxWithVersion[name][0]
    } else if (/Red Hat/i.test(ret.ua) || /RedHat/i.test(ret.ua)) {
      ret.name = 'Red Hat'
      rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)
      if (rep) {
        ret.name += ' Enterprise Linux'
        ret.version = rep[1].replace(/_/g, '.')
      }

      ret.image = 'red-hat'
    } else {
      ret.name = 'GNU/Linux'
      ret.image = 'linux'
    }

    ret.full = ret.name
    if (ret.version !== '') {
      ret.full += ' ' + ret.version
    }
  }

  var analyzeOther = function (ret) {
    ret.name = ''
    ret.image = ''
    ret.version = ''
    ret.full = ''

    var res = ret.ua.match(osRegEx)
    var rep

    if (res !== null) {
      var name = res[0].toLowerCase()
      ret.name = name.replace(/(\w)/, function (string) {
        return string.toUpperCase()
      })
      ret.image = name

      if (defaultOSList[name]) {
        ret.name = defaultOSList[name].name || ret.name
        ret.image = defaultOSList[name].image || ret.image
      }
    }
        // Opera's Useragent does not contains 'Linux'
    else if (/Android|ADR /i.test(ret.ua)) {
      ret.name = 'Android'
      ret.image = 'android'
      rep = ret.ua.match(/(Android|Adr)[ |\/]([.0-9]+)/i)
      if (rep) {
        ret.version = rep[2]
      }
    } else if (/Tizen/i.test(ret.ua)) {
      ret.name = 'Tizen'
      ret.image = 'tizen'
    } else if (/(iPhone|CPU) OS/.test(ret.ua)) {
      ret.name = 'iOS'
      ret.image = 'mac-3'
      rep = ret.ua.match(/(iPhone|CPU) OS ([._0-9]+)/i)
      if (rep) {
        ret.version = rep[2].replace(/_/g, '.')
      }
    } else if (/AmigaOS/i.test(ret.ua)) {
      ret.name = 'AmigaOS'
      rep = ret.ua.match(/AmigaOS ([.0-9a-zA-Z]+)/i)
      if (rep) {
        ret.version = rep[1]
      }
      ret.image = 'amigaos'
    } else if (/\b(?!Mi)CrOS(?!oft)/i.test(ret.ua)) {
      ret.name = 'Google Chrome OS'
      ret.image = 'chromeos'
    } else if (/IRIX/i.test(ret.ua)) {
      ret.name = 'IRIX'
      rep = ret.ua.match(/IRIX(64)? ([.0-9a-zA-Z]+)/i)
      if (rep) {
        if (rep[1] !== undefined && rep[1] !== '') {
          ret.x64 = true
        }
        if (rep[2] !== undefined && rep[2] !== '') {
          ret.version = rep[2]
        }
      }
      ret.image = 'irix'
    } else if (/Mac/i.test(ret.ua) || /Darwin/i.test(ret.ua)) {
      rep = ret.ua.match(/(Mac OS ?X)/i)
      if (rep) {
        ret.version = ret.ua.substr(ret.ua.toLowerCase().indexOf(rep[1].toLowerCase()))
        ret.version = ret.version.substr(0, ret.version.indexOf(')'))
        if (ret.version.indexOf(';') > 0) {
          ret.version = ret.version.substr(0, ret.version.indexOf(';'))
        }
        ret.version = ret.version.replace(/_/g, '.')
        ret.version = ret.version.replace(/Mac OS ?X ?/, '')

        var macVersionArray = ret.version.split('.')
        if (macVersionArray.length > 1) {
          var macMainVersion = parseInt(macVersionArray[0])
          var macSubVersion = parseInt(macVersionArray[1])
          if (macMainVersion >= 10 && macSubVersion >= 12) {
            ret.name = 'macOS'
          }
        }
        if (ret.name === '') {
          ret.name = 'Mac OS X'
        }

        ret.full = ret.name + ' ' + ret.version
        ret.image = rep[1] === 'Mac OSX' ? 'mac-2' : 'mac-3'
      } else if (/Darwin/i.test(ret.ua)) {
        ret.name = 'Mac OS Darwin'
        ret.image = 'mac-1'
      } else {
        ret.name = 'Macintosh'
        ret.image = 'mac-1'
      }
    } else if (/Meego/i.test(ret.ua)) {
      ret.name = 'Meego'
      ret.image = 'meego'
    } else if (/RISC OS/i.test(ret.ua)) {
      ret.name = 'RISC OS'
      ret.image = 'risc'
      rep = ret.ua.match(/RISC OS ([.0-9a-zA-Z]+)/i)
      if (rep) {
        ret.version = rep[1]
      }
    } else if (/Symb(ian)?(OS)?/i.test(ret.ua)) {
      ret.name = 'SymbianOS'
      rep = ret.ua.match(/Symb(ian)?(OS)?\/([.0-9a-zA-Z]+)/i)
      if (rep) {
        ret.version = rep[3]
      }
      ret.image = 'symbian'
    } else {
      ret.name = 'Unknown'
      ret.image = 'null'
    }

    ret.full = ret.name + (ret.version === '' ? '' : ' ' + ret.version)
  }

  var OS = {}

  OS.analyze = function (uaString) {
    var ret = {
      ua: uaString,
      name: '',
      version: '',
      full: '',
      windows: false,
      linux: false,
      x64: false,
      dir: 'os'
    }
    if (/x86_64|Win64; x64|WOW64/i.test(ret.ua)) {
      ret.x64 = true
    }

    if (/Windows|Win(NT|32|95|98|16)|ZuneWP7|WPDesktop/i.test(ret.ua)) {
      ret.windows = true
      analyzeWindows(ret)
    } else if (/Linux/i.test(ret.ua) && !/Android|ADR|Tizen/.test(ret.ua)) {
      ret.linux = true
      analyzeLinux(ret)
    } else {
      analyzeOther(ret)
    }
    if (ret.full === '') {
      ret.full = ret.name
    }
    if (ret.x64) {
      ret.full += ' x64'
    }
    return ret
  }
  /* @covignore */
  if (typeof module !== 'undefined' && module.exports) { // Nodejs / Commonjs
    module.exports = OS
  } else if (typeof define !== 'undefined' && define.amd) { // RequireJS
    define([], function () {
      return OS
    })
  } else if (typeof define !== 'undefined' && define.cmd) { // SeaJS
    define([], function (require, exports, module) {
      module.exports = OS
    })
  } else { // Direct
    root.USERAGENT_OS = function () {}
    root.USERAGENT_OS.prototype.analyze = OS.analyze
  }
})(this)
