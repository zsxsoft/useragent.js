'use strict';
(function (root) {
  var BROWSER = {}
  var browserList = [
    '11(4|5)Browser', '2345(Explorer|chrome)', 'Conkeror',
    'Alienforce', 'Amaya', 'Arora',
    'Beamrise',
    'Beonex', 'Blazer', 'bidubrowser', 'Blackbird',
    'Bolt', 'Browzar', 'Bunjalloo', 'Camino',
    'Chromium', 'Classilla', 'Coast', 'Columbus',
    'Cruz', 'Cyberdog', 'Demeter', 'Dooble', 'dillo',
    'Doris', 'Edbrowse', 'E?links',
    'Epiphany', 'Escape|Espial', 'Fennec',
    'Firebird', 'Flock', 'Fluid', 'Galeon',
    'Hv3', 'Iris', 'lolifox',
    'Iceape', 'Hana',
    'Kapiko', 'Kazehakase', 'Kinza', 'Konqueror', 'Kylo',
    'Lunascape', 'Lynx', 'Madfox', 'Maxthon',
    'Midori', 'Minefield', 'Minimo',
    'Mosaic', 'Netscape',
    'Obigo', 'Orca',
    'Oregano', 'Otter',
    'Perk', 'Phoenix', 'Podkicker',
    'Ryouko', 'Sleipnir',
    'Shiira', 'Skyfire',
    'Stainless', 'Sundance', 'Sunrise',
    'Surf', 'Swiftfox', 'Swiftweasel',
    'Thunderbird',
    'Tjusig', 'UC? ?Browser|UCWEB',
    'polarity', 'polaris', 'pogo', 'prism', 'superbird', 'songbird',
    'Usejump', 'Vivaldi', 'Wyzo', 'WhatsApp', 'Weibo'
  ]

  var defaultBrowserList = {
    '360se': {
      title: '360 Explorer'
    },
    '360ee': {
      title: '360 Chrome',
      image: '360se'
    },
    '360 aphone browser': {
      title: '360 Aphone Browser',
      image: '360se'
    },
    'abolimba': {
      title: 'Abolimba'
    },
    'acoo browser': {
      title: '{%Acoo Browser%}',
      image: 'acoobrowser'
    },
    'amiga-aweb': {
      title: 'Amiga {%AWeb%}',
      image: 'amiga-aweb'
    },
    'antfresco': {
      title: 'ANT {%Fresco%}'
    },
    'mrchrome': {
      title: 'Amigo',
      image: 'amigo'
    },
    'myibrow': {
      title: '{%myibrow%}',
      image: 'my-internet-browser'
    },
    'america online browser': {
      title: '{%America Online Browser%}',
      image: 'aol'
    },
    'amigavoyager': {
      title: 'Amiga {%Voyager%}'
    },
    'aol': {
      upper: [0, 1, 2] // AOL
    },
    'atomicbrowser': {
      upper: [0, 6], // AtomicBrowser
      image: 'atomicwebbrowser'
    },
    'barcapro': {
      title: '{%BarcaPro%}',
      image: 'barca'
    },
    'baidubrowser': {
      image: 'bidubrowser'
    },
    'baiduboxapp': {
      title: '{%BaiduBoxApp%}',
      image: 'bidubrowser'
    },
    'baiduhd': {
      title: '{%BaiduHD%}',
      image: 'bidubrowser'
    },
    'blackhawk': {
      upper: [0, 5] // BlackHawk
    },
    'bonecho': {
      title: '{%BonEcho%}',
      image: 'firefoxdevpre'
    },
    'browsex': {
      upper: [0, 6] // BrowseX
    },
    'cayman browser': {
      title: '{%Cayman Browser%}',
      image: 'caymanbrowser'
    },
    'charon': {
      image: 'null'
    },
    'cheshire': {
      image: 'aol'
    },
    'chimera': {
      image: 'null'
    },
    'chromeframe': {
      image: 'chrome'
    },
    'chromeplus': {
      title: '{%ChromePlus%}'
    },
    'iron': {
      title: 'SRWare {%Iron%}',
      image: 'srwareiron'
    },
    'cometbird': {
      upper: [0, 5]
    },
    'comodo_dragon': {
      title: 'Comodo {%Dragon%}',
      image: 'comodo-dragon'
    },
    'coolnovo': {
      upper: [0, 4]
    },
    'corom': {
      upper: [0, 2] // CoRom
    },
    'crazy browser': {
      upper: [0, 6],
      image: 'crazybrowser'
    },
    'crmo': {
      upper: [0, 2], // CrMo
      image: 'chrome'
    },
    'dplus': {
      upper: [0, 1], // DPlus
      image: 'dillo'
    },
    'deepnet explorer': {
      upper: [0, 8],
      image: 'deepnetexplorer'
    },
    'deskbrowse': {
      upper: [0, 4]
    },
    'docomo': {
      upper: [0, 2, 4], // DoCoMo
      image: 'null'
    },
    'doczilla': {
      upper: [0, 3]
    },
    'dolfin': {
      image: 'samsung'
    },
    'dorothy': {
      image: 'dorothybrowser'
    },
    'element browser': {
      upper: [0, 8],
      image: 'elementbrowser'
    },
    'enigma browser': {
      upper: [0, 7],
      image: 'enigmabrowser'
    },
    'enigmafox': {
      upper: [0, 6],
      image: 'null'
    },
    'epic': {
      image: 'epicbrowser'
    },
    'escape': {
      image: 'espialtvbrowser'
    },
    'espial': {
      image: 'espialtvbrowser'
    },
    'fireweb navigator': {
      upper: [0, 8],
      image: 'firewebnavigator'
    },
    'fbav': {
      title: '{%FBAV%}',
      image: 'facebook'
    },
    'globalmojo': {
      upper: [0, 6]
    },
    'gobrowser': {
      upper: [0, 1, 2]
    },
    'google wireless transcoder': {
      title: 'Google Wireless Transcoder',
      image: 'google'
    },
    'google earth': {
      upper: [0, 7],
      image: 'google'
    },
    'google.android.apps': {
      title: 'Google App',
      image: 'google'
    },
    'googleplus': {
      title: 'Google+',
      image: 'google'
    },
    'youtube': {
      title: '{%Youtube%}',
      image: 'google'
    },
    'gosurf': {
      upper: [0, 2]
    },
    'granparadiso': {
      upper: [0, 4],
      image: 'firefoxdevpre'
    },
    'greenbrowser': {
      upper: [0, 5]
    },
    'gsa': {
      upper: [0, 1, 2],
      image: 'google'
    },
    'hotjava': {
      upper: [0, 3]
    },
    'hydra browser': {
      title: 'Hydra Browser',
      image: 'hydrabrowser'
    },
    'ibm webexplorer': {
      title: 'IBM {%WebExplorer%}',
      image: 'ibmwebexplorer'
    },
    'juzibrowser': {
      upper: [0, 4]
    },
    'miuibrowser': {
      upper: [0, 4]
    },
    'mxnitro': {
      upper: [0, 2]
    },
    'ibrowse': {
      upper: [0, 1]
    },
    'icab': {
      upper: [1]
    },
    'icebrowser': {
      upper: [0, 3]
    },
    'icecat': {
      title: 'GNU {%IceCat%}'
    },
    'icedragon': {
      upper: [0, 3]
    },
    'iceweasel': {
      upper: [0, 3]
    },
    'inet browser': {
      upper: [1, 5],
      image: 'null'
    },
    'irider': {
      upper: [1]
    },
    'internetsurfboard': {
      upper: [0, 8]
    },
    'itunes': {
      upper: [1]
    },
    'jasmine': {
      image: 'samsung'
    },
    'k-meleon': {
      upper: [0, 2],
      image: 'kmeleon'
    },
    'k-ninja': {
      upper: [0, 2],
      image: 'kninja'
    },
    'strata': {
      title: 'Kirix {%Strata%}',
      image: 'kirix-strata'
    },
    'sailfishbrowser': {
      title: '{%SailfishBrowser%}',
      upper: [0, 8]
    },
    'kkman': {
      upper: [0, 1]
    },
    'kmail': {
      upper: [0, 1]
    },
    'kmlite': {
      upper: [0, 1, 2],
      image: 'kmeleon'
    },
    'lbrowser': {
      upper: [0, 1]
    },
    'links': {
      image: 'null'
    },
    'lbbrowser': {
      title: 'Liebao Browser'
    },
    'liebaofast': {
      image: 'lbbrowser'
    },
    'leechcraft': {
      title: 'LeechCraft',
      image: 'null'
    },
    'lobo': {
      upper: [0]
    },
    'lorentz': {
      upper: [0],
      image: 'firefoxdevpre'
    },
    'maemo browser': {
      upper: [0, 6],
      image: 'maemo'
    },
    ' mib/': {
      title: '{%MIB%}',
      image: 'mib'
    },
    'micromessenger': {
      upper: [0, 5],
      image: 'wechat'
    },
    'microsoft office': {
      title: '{%Microsoft Office%}',
      upper: [0, 10],
      image: 'office'
    },
    'minibrowser': {
      upper: [0, 5]
    },
    'mozilladeveloperpreview': {
      title: '{%MozillaDeveloperPreview%}',
      image: 'firefoxdevpre'
    },
    'mqqbrowser': {
      upper: [0, 1, 2, 3], // MQQBrowser
      image: 'qqbrowser'
    },
    'multi-browser': {
      upper: [0, 6],
      image: 'multi-browserxp'
    },
    'multizilla': {
      upper: [0, 5],
      image: 'mozilla'
    },
    'myie2': {
      upper: [0, 2, 3]
    },
    'namoroka': {
      image: 'firefoxdevpre'
    },
    'navigator': {
      title: 'Netscape {%Navigator%}',
      image: 'netscape'
    },
    'netbox': {
      upper: [0, 3]
    },
    'netcaptor': {
      upper: [0, 3]
    },
    'netfront': {
      upper: [0, 3]
    },
    'netnewswire': {
      upper: [0, 3, 7]
    },
    'netpositive': {
      upper: [0, 3]
    },
    'netsurf': {
      upper: [0, 3]
    },
    'nf-browser': {
      upper: [0, 1, 2, 4],
      image: 'netfront'
    },
    'nichrome/self': {
      title: '{%Nichrome/self%}',
      image: 'nichromeself'
    },
    'nokiabrowser': {
      title: 'Nokia {%Browser%}',
      image: 'nokia'
    },
    'novarra-vision': {
      title: 'Novarra {%Vision%}',
      image: 'novarra'
    },
    'offbyone': {
      title: 'Off By One'
    },
    'omniweb': {
      upper: [0, 4]
    },
    'onebrowser': {
      upper: [0, 3]
    },
    'origyn web browser': {
      title: 'Oregano Web Browser',
      image: 'owb'
    },
    'osb-browser': {
      image: 'null'
    },
    ' pre/': {
      title: 'Palm {%Pre%}',
      image: 'palmpre'
    },
    'palemoon': {
      title: 'Pale {%Moon%}'
    },
    'patriott::browser': {
      title: 'Patriott {%Browser%}',
      image: 'patriott'
    },
    'phaseout': {
      title: 'Phaseout'
    },
    'playstation 4': {
      title: 'PS4 Web Browser',
      image: 'webkit'
    },
    'podkicker pro': {
      upper: [0, 8],
      image: 'podkicker'
    },
    'qqbrowser': {
      upper: [0, 1, 2]
    },
    'qtweb internet browser': {
      title: '{%QtWeb Internet Browser%}',
      image: 'qtwebinternetbrowser'
    },
    'qtcarbrowser': {
      image: 'tesla'
    },
    'qupzilla': {
      upper: [0, 3]
    },
    'rekonq': {
      title: 'rekonq'
    },
    'retawq': {
      image: 'terminal'
    },
    'rockmelt': {
      upper: [0, 4]
    },
    'saayaa': {
      title: 'SaaYaa Explorer'
    },
    'seamonkey': {
      upper: [0, 3]
    },
    'semc-browser': {
      upper: [0, 1, 2, 3, 5],
      image: 'semcbrowser'
    },
    'semc-java': {
      upper: [0, 1, 2, 3],
      image: 'semcbrowser'
    },
    'shiretoko': {
      upper: [0],
      image: 'firefoxdevpre'
    },
    'sitekiosk': {
      upper: [0, 4]
    },
    'skipstone': {
      upper: [0, 4]
    },
    'silk': {
      title: 'Amazon {%Silk%}'
    },
    'slimboat': {
      upper: [0, 4]
    },
    'slimbrowser': {
      upper: [0, 4]
    },
    'smarttv': {
      upper: [0, 5, 6],
      image: 'maplebrowser'
    },
    'substream': {
      upper: [0, 3]
    },
    'sulfur': {
      title: 'Flock {%Sulfur%}',
      image: 'flock'
    },
    'sylera': {
      upper: [0],
      image: 'null'
    },
    'taobrowser': {
      upper: [0, 3]
    },
    'tear': {
      title: 'Tear'
    },
    'teashark': {
      upper: [0, 3]
    },
    'teleca': {
      image: 'obigo'
    },
    'tencenttraveler': {
      title: 'Tencent {%Traveler%}'
    },
    'tenfourfox': {
      upper: [0, 3, 7]
    },
    'tizenbrowser': {
      title: '{%TizenBrowser%}',
      image: 'tizen'
    },
    'tizen browser': {
      title: '{%Tizen Browser%}',
      image: 'tizen'
    },
    'theworld': {
      title: 'TheWorld Browser'
    },
    'ubrowser': {
      upper: [0, 1],
      image: 'ucbrowser'
    },
    'ucbrowser': {
      upper: [0, 1, 2, 3]
    },
    'uc browser': {
      upper: [0, 1, 2, 4],
      image: 'ucbrowser'
    },
    'ucweb': {
      upper: [0, 1, 2, 3, 4],
      image: 'ucbrowser'
    },
    'ultrabrowser': {
      upper: [0, 5]
    },
    'up.browser': {
      upper: [0, 3],
      image: 'openwave'
    },
    'up.link': {
      upper: [0, 3],
      image: 'openwave'
    },
    'uzardweb': {
      title: '{%uZardWeb%}'
    },
    'uzard': {
      upper: [1],
      image: 'uzardweb'
    },
    'uzbl': {
      title: 'uzbl'
    },
    'vimprobable': {
      upper: [0],
      image: 'null'
    },
    'vonkeror': {
      upper: [0],
      image: 'null'
    },
    'w3m': {
      upper: [0, 2]
    },
    'wget': {
      image: 'null'
    },
    'curl': {
      image: 'null'
    },
    'iemobile': {
      upper: [0, 1, 2],
      image: 'msie-mobile'
    },
    'waterfox': {
      upper: [0, 5]
    },
    'webianshell': {
      title: 'Webian {%Shell%}'
    },
    'webrender': {
      upper: [0]
    },
    'weltweitimnetzbrowser': {
      title: 'Weltweitimnetz {%Browser%}',
      image: 'weltweitimnetzbrowser'
    },
    'whitehat aviator': {
      upper: [0, 5, 9],
      image: 'aviator'
    },
    'wkiosk': {
      title: 'wKiosk'
    },
    'worldwideweb': {
      upper: [0, 5, 9]
    },
    'x-smiles': {
      upper: [0, 2]
    },
    'xiino': {
      image: 'null'
    },
    'yabrowser': {
      upper: [0, 2],
      image: 'yandex'
    },
    'zbrowser': {
      upper: [1]
    },
    'zipzap': {
      upper: [0, 3]
    },
    'abrowse': {
      title: '{%ABrowse Browser%}'
    },
    'none': {
      title: 'Unknown',
      image: 'unknown'
    }
  }
  var browserRegEx = new RegExp(browserList.concat(Object.keys(defaultBrowserList)).join('|'), 'i')

  var displayNameList = {
    'msie': {
      callback: function (rep, ret) {
        if (ret.version === '7.0' && /Trident\/4.0/i.test(ret.ua)) {
          ret.name = ' 8.0 (Compatibility Mode)'
          ret.version = ''
        } else {
          ret.name = ''
        }
      }
    },
    'microsoft office': {
      callback: function (rep, ret) {
        ret.version = '' // Do not detect it
        /**
 * Microsoft Office Upload Center 2013 (15.0.4693) Windows NT 6.2
 * Microsoft Office/15.0 (Windows NT 6.2; Microsoft Excel 15.0.4693; Pro)
 *
 * I can't find the best way to detect the version of Office
 */
      }
    },
    'nf-browser': {
      name: 'NetFront'
    },
    'semc-browser': {
      name: 'SEMC Browser'
    },
    'ucweb': {
      name: 'UC Browser'
    },
    'ubrowser': {
      name: 'UC Browser'
    },
    'ucbrowser': {
      name: 'UC Browser'
    },
    'uc browser': {
      name: 'UC Browser'
    },
    'bidubrowser': {
      name: 'Baidu Browser'
    },
    'baidubrowser': {
      name: 'Baidu Browser'
    },
    'baiduhd': {
      name: 'Baidu Browser'
    },
    'up.browser': {
      name: 'Openwave Mobile Browser'
    },
    'up.link': {
      name: 'Openwave Mobile Browser'
    },
    'chromeframe': {
      name: 'Google Chrome Frame'
    },
    'mozilladeveloperpreview': {
      name: 'Mozilla Developer Preview'
    },
    'opera mobi': {
      name: 'Opera Mobile'
    },
    'osb-browser': {
      name: 'Gtk+ WebCore'
    },
    'tablet browser': {
      name: 'MicroB'
    },
    'crmo': {
      name: 'Chrome Mobile'
    },
    'smarttv': {
      name: 'Maple Browser'
    },
    'miuibrowser': {
      name: 'MIUI Browser'
    },
    'sailfishbrowser': {
      name: 'Sailfish Browser'
    },
    'fbav': {
      name: 'Facebook'
    },
    'atomicbrowser': {
      name: 'Atomic Web Browser'
    },
    'dplus': {
      name: 'D+'
    },
    'micromessenger': {
      name: 'WeChat'
    },
    'nichrome/self': {
      name: 'NiChrome'
    },
    'tizenbrowser': {
      name: 'Tizen Browser'
    },
    'gsa': {
      name: 'Google Search App'
    },
    'opera labs': {
      callback: function (rep, ret) {
        rep = ret.ua.match(/Edition Labs([ ._0-9a-zA-Z]+);/i)
        if (rep !== null) {
          ret.version = rep[1]
        } else {
          ret.version = ''
        }
      }
    },
    'qtcarbrowser': {
      name: 'Tesla Car Browser',
      version: ''
    },
    'iceweasel': {
      callback: function (rep, ret) {
        if (ret.version === 'Firefox') {
          ret.version = ''
        }
      }
    },
    'yabrowser': {
      callback: function (rep, ret) {
        ret.name = 'Yandex.Browser'
      }
    }
  }
  var setRetName = function (ret, rep) {
    ret.image = rep.image
    ret.full = rep.title.replace(/\{%(.+)%\}/, function (match, p1) {
      return getVersion(ret, p1)
    })
  }
  var getVersion = function (ret, title) {
    var lowerTitle = title.toLowerCase()
    var start = lowerTitle
    ret.name = title

    if ((lowerTitle === 'opera' || lowerTitle === 'opera next' || lowerTitle === 'opera developer') && /OPR/i.test(ret.ua)) {
      start = 'OPR'
    } else if (
      ((lowerTitle === 'opera' || lowerTitle === 'opera next' || lowerTitle === 'opera labs') && /Version/i.test(ret.ua)) ||
((lowerTitle === 'opera mobi' && /Version/i.test(ret.ua))) ||
((lowerTitle === 'safari' && /Version/i.test(ret.ua))) ||
((lowerTitle === 'pre' && /Version/i.test(ret.ua))) ||
((lowerTitle === 'android webkit'))
    ) {
      start = 'Version'
    } else if (lowerTitle === 'links') {
      start = 'Links ('
    } else if (lowerTitle === 'smarttv') {
      start = 'WebBrowser'
    } else if (lowerTitle === 'ucweb' && /UCBrowser/i.test(ret.ua)) {
      start = 'UCBrowser'
    } else if (
      (lowerTitle === 'tenfourfox' || lowerTitle === 'classilla' || lowerTitle === 'msie') && / rv:([.0-9a-zA-Z]+)/i.test(ret.ua)
    ) {
      // We have IE11 or newer
      start = ' rv'
    } else if (lowerTitle === 'nichrome/self') {
      start = 'self'
    } else if (lowerTitle === 'edga') {
      ret.name = 'Edge Android'
    } else if (lowerTitle === 'edg') {
      ret.name = 'Edge'
    }
    start = start.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&')
    var regEx = new RegExp(start + '[ |/|:]?([.0-9a-zA-Z]+)', 'i')
    var rep = ret.ua.match(regEx)
    if (rep !== null) {
      ret.version = rep[1]
    } else {
      ret.version = ''
    }

    if (ret.version.toLowerCase() === 'build') { // To Fix some ua like 'Amazon Otter Build/KTU84M'
      ret.version = ''
    }
    if (lowerTitle in displayNameList) {
      if ('callback' in displayNameList[lowerTitle]) {
        displayNameList[lowerTitle].callback(rep, ret)
      } else {
        for (var tempVar in displayNameList[lowerTitle]) {
          ret[tempVar] = displayNameList[lowerTitle][tempVar]
        }
      }
    }

    return ret.name + (ret.version !== '' ? (' ' + ret.version) : '')
  }

  BROWSER.analyze = function (uaString) {
    var ret = {
      ua: uaString,
      name: '',
      version: '',
      full: '',
      image: '',
      dir: 'browser'
    }
    var res = uaString.match(browserRegEx)
    var rep = null
    if (res !== null) {
      var name = res[0].toLowerCase()
      var upper = null

      rep = {}
      if (defaultBrowserList[name]) {
        Object.keys(defaultBrowserList[name]).forEach(function (key) {
          if (key !== 'upper') {
            rep[key] = defaultBrowserList[name][key]
          } else {
            upper = defaultBrowserList[name].upper
          }
        })
      }
      if (!('title' in rep)) {
        if (upper !== null) {
          var upperTitle = name
          upper.forEach(function (letterId) {
            upperTitle = upperTitle.substr(0, letterId) + upperTitle.substr(letterId, 1).toUpperCase() + upperTitle.substr(letterId + 1, upperTitle.length) // fuck IE
          })
          rep.title = '{%' + upperTitle + '%}'
        } else {
          rep.title = '{%' + name.toLowerCase().replace(/[a-z]/, function (m) {
            return m.toUpperCase() // Repeat dirty code...
          }) + '%}'
        }
      }
      if (!('image' in rep)) {
        rep.image = name
      }
      setRetName(ret, rep)
    } else if (/QQ(?!Download|Pinyin)/.test(ret.ua)) {
      ret.full = getVersion(ret, 'QQ')
      ret.image = 'qq'
    } else if (/Galaxy/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Galaxy')
      ret.image = 'galaxy'
    } else if (/Opera Mini/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Opera Mini')
      ret.image = 'opera-2'
    } else if (/Opera Mobi/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Opera Mobi')
      ret.image = 'opera-2'
    } else if (/Opera/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Opera')
      ret.image = 'opera-1'
      if (/Version/i.test(ret.ua)) {
        ret.image = 'opera-2'
      }
    } else if (/OPR/i.test(ret.ua)) {
      if (/(Edition Next)/i.test(ret.ua)) {
        ret.full = getVersion(ret, 'Opera Next')
        ret.image = 'opera-next'
      } else if (/(Edition Developer)/i.test(ret.ua)) {
        ret.full = getVersion(ret, 'Opera Developer')
        ret.image = 'opera-developer'
      } else {
        ret.full = getVersion(ret, 'Opera')
        ret.image = 'opera-1'
      }
    } else if (/SE /i.test(ret.ua) && /MetaSr/i.test(ret.ua)) {
      ret.name = ret.full = 'Sogou Explorer'
      ret.image = 'sogou'
    } else if (((/Ubuntu; Mobile/i.test(ret.ua) || /Ubuntu; Tablet/i.test(ret.ua)) && /WebKit/i.test(ret.ua))) {
      ret.name = ret.full = 'Ubuntu Web Browser'
      ret.image = 'ubuntuwebbrowser'
    } else if (/Avant Browser/i.test(ret.ua)) { // Fuck it
      ret.full = 'Avant ' + getVersion(ret, 'Browser')
      ret.image = 'avantbrowser'
    } else if (/AppleWebkit/i.test(ret.ua) && /Android/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Android Webkit')
      ret.image = 'android-webkit'
    } else if (/Edga/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Edga')
      ret.image = 'edge'
    } else if (/.+Chrome.+Edge/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Edge')
      ret.image = 'edge'
    } else if (/.+Chrome.+Edg/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Edg')
      ret.image = 'edg'
    } else if (/Chrome|crios/i.test(ret.ua)) {
      if (/crios/i.test(ret.ua)) {
        ret.full = 'Google ' + getVersion(ret, 'CriOS')
        ret.image = 'chrome'
      } else {
        ret.full = 'Google ' + getVersion(ret, 'Chrome')
        ret.image = 'chrome'
      }
    } else if (/Nokia/i.test(ret.ua) && !/Trident/i.test(ret.ua)) {
      ret.full = 'Nokia Web Browser'
      ret.image = 'maemo'
    } else if (/Safari/i.test(ret.ua)) {
      ret.name = 'Safari'
      if (/Version/i.test(ret.ua)) {
        ret.full = getVersion(ret, 'Safari')
      } else {
        ret.full = ret.name
      }
      if (/Mobile ?Safari/i.test(ret.ua)) {
        ret.name = 'Mobile ' + ret.name
        ret.full = 'Mobile ' + ret.full
      }
      ret.image = 'safari'
    } else if (/Firefox/i.test(ret.ua)) {
      ret.full = getVersion(ret, 'Firefox')
      ret.image = 'firefox'
    } else if (/MSIE/i.test(ret.ua) || /Trident/i.test(ret.ua)) {
      ret.full = 'Internet Explorer' + getVersion(ret, 'MSIE')
      ret.image = 'msie'
      rep = ret.ua.match(/(MSIE[ |/]?| rv:)([.0-9a-zA-Z]+)/i)
      if (rep !== null) {
        var ieVersion = parseInt(rep[2])
        if (ieVersion >= 11) {
          ret.image = 'msie11'
        } else if (ieVersion >= 10) {
          ret.image = 'msie10'
        } else if (ieVersion >= 9) {
          ret.image = 'msie9'
        } else if (ieVersion >= 7) {
          ret.image = 'msie7'
        } else if (ieVersion >= 6) {
          ret.image = 'msie6'
        } else if (ieVersion >= 4) {
          ret.image = 'msie4'
        } else if (ieVersion >= 3) {
          ret.image = 'msie3'
        } else if (ieVersion >= 2) {
          ret.image = 'msie2'
        }
      }
    } else if (/Mozilla/i.test(ret.ua)) {
      ret.full = 'Mozilla Compatible'
      ret.image = 'mozilla'
    } else {
      ret.name = 'Unknown'
      ret.image = 'null'
      ret.full = ret.name
    }
    return ret
  }

  /* @covignore */
  if (typeof module !== 'undefined' && module.exports) { // Nodejs / Commonjs
    module.exports = BROWSER
  } else if (typeof define !== 'undefined' && define.amd) { // RequireJS
    define([], function () {
      return BROWSER
    })
  } else if (typeof define !== 'undefined' && define.cmd) { // SeaJS
    define([], function (require, exports, module) {
      module.exports = BROWSER
    })
  } else { // Direct
    root.USERAGENT_BROWSER = function () {}
    root.USERAGENT_BROWSER.prototype.analyze = BROWSER.analyze
  }
})(this)
