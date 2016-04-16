'use strict';
(function (root) {
	var BROWSER = {};
	var browserList = [
		'11(4|5)Browser', '2345(Explorer|chrome)', 'Conkeror',
		'Alienforce', 'Amaya', "Arora",
		'Beamrise',
		'Beonex', 'Blazer', "bidubrowser", 'Blackbird',
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
		'Thunderbird', 'Tizen',
		'Tjusig', 'UC?\ ?Browser|UCWEB',
		'polarity', 'polaris', 'pogo', 'prism', 'superbird', 'songbird',
		'Usejump', 'Vivaldi', 'Wyzo',
	];

	var defaultBrowserList = {
		"360se": {
			title: "360 Explorer"
		},
		"360ee": {
			title: "360 Chrome",
			image: "360se"
		},
		"360 aphone browser": {
			title: "360 Aphone Browser",
			image: "360se"
		},
		"abolimba": {
			title: "Abolimba"
		},
		"acoo browser": {
			title: "{%Acoo Browser%}",
			image: "acoobrowser"
		},
		"amiga-aweb": {
			title: "Amiga {%AWeb%}",
			image: "amiga-aweb"
		},
		"antfresco": {
			title: "ANT {%Fresco%}"
		},
		"mrchrome": {
			title: "Amigo",
			image: "amigo"
		},
		"myibrow": {
			title: "{%myibrow%}",
			image: "my-internet-browser"
		},
		"america online browser": {
			title: "{%America Online Browser%}",
			image: "aol"
		},
		"amigavoyager": {
			title: "Amiga {%Voyager%}"
		},
		"aol": {
			upper: [0, 1, 2], // AOL
		},
		"atomicbrowser": {
			upper: [0, 6], // AtomicBrowser
			image: "atomicwebbrowser"
		},
		"barcapro": {
			title: "{%BarcaPro%}",
			image: "barca"
		},
		"baidubrowser": {
			image: "bidubrowser"
		},
		"baiduhd": {
			title: "{%BaiduHD%}",
			image: "bidubrowser"
		},
		"blackhawk": {
			upper: [0, 5] //BlackHawk
		},
		"bonecho": {
			title: "{%BonEcho%}",
			image: "firefoxdevpre"
		},
		"browsex": {
			upper: [0, 6] // BrowseX
		},
		"cayman browser": {
			title: "{%Cayman Browser%}",
			image: "caymanbrowser"
		},
		"charon": {
			image: "null"
		},
		"cheshire": {
			image: "aol"
		},
		"chimera": {
			image: "null"
		},
		"chromeframe": {
			image: "chrome"
		},
		"chromeplus": {
			title: "{%ChromePlus%}"
		},
		"iron": {
			title: "SRWare {%Iron%}",
			image: "srwareiron"
		},
		"cometbird": {
			upper: [0, 5]
		},
		"comodo_dragon": {
			title: "Comodo {%Dragon%}",
			image: "comodo-dragon"
		},
		"coolnovo": {
			upper: [0, 4]
		},
		"corom": {
			upper: [0, 2] // CoRom
		},
		"crazy browser": {
			upper: [0, 6],
			image: "crazybrowser"
		},
		"crmo": {
			upper: [0, 2], // CrMo
			image: "chrome"
		},
		"dplus": {
			upper: [0, 1], // DPlus
			image: "dillo"
		},
		"deepnet explorer": {
			upper: [0, 8],
			image: "deepnetexplorer"
		},
		"deskbrowse": {
			upper: [0, 4],
		},
		"docomo": {
			upper: [0, 2, 4], // DoCoMo
			image: "null"
		},
		"doczilla": {
			upper: [0, 3],
		},
		"dolfin": {
			image: "samsung"
		},
		"dorothy": {
			image: "dorothybrowser"
		},
		"element browser": {
			upper: [0, 8],
			image: "elementbrowser"
		},
		"enigma browser": {
			upper: [0, 7],
			image: "enigmabrowser"
		},
		"enigmafox": {
			upper: [0, 6],
			image: "null"
		},
		"epic": {
			image: "epicbrowser"
		},
		"escape": {
			image: "espialtvbrowser"
		},
		"espial": {
			image: "espialtvbrowser"
		},
		"fireweb navigator": {
			upper: [0, 8],
			image: "firewebnavigator"
		},
		"globalmojo": {
			upper: [0, 6]
		},
		"gobrowser": {
			upper: [0, 1, 2]
		},
		"google wireless transcoder": {
			title: "Google Wireless Transcoder",
			image: "google"
		},
		"gosurf": {
			upper: [0, 2]
		},
		"granparadiso": {
			upper: [0, 4],
			image: "firefoxdevpre"
		},
		"greenbrowser": {
			upper: [0, 5]
		},
		"gsa": {
			upper: [0, 1, 2],
			image: "google"
		},
		"hotjava": {
			upper: [0, 3]
		},
		"hydra browser": {
			title: "Hydra Browser",
			image: "hydrabrowser"
		},
		"ibm webexplorer": {
			title: "IBM {%WebExplorer%}",
			image: "ibmwebexplorer"
		},
		"juzibrowser": {
			upper: [0, 4]
		},
		"miuibrowser": {
			upper: [0, 4]
		},
		"mxnitro": {
			upper: [0, 2]
		},
		"ibrowse": {
			upper: [0, 1]
		},
		"icab": {
			upper: [1]
		},
		"icebrowser": {
			upper: [0, 3]
		},
		"icecat": {
			title: "GNU {%IceCat%}"
		},
		"icedragon": {
			upper: [0, 3]
		},
		"iceweasel": {
			upper: [0, 3]
		},
		"inet browser": {
			upper: [1, 5],
			image: "null"
		},
		"irider": {
			upper: [1]
		},
		"internetsurfboard": {
			upper: [0, 8],
		},
		"jasmine": {
			image: "samsung"
		},
		"k-meleon": {
			upper: [0, 2],
			image: "kmeleon"
		},
		"k-ninja": {
			upper: [0, 2],
			image: "kninja"
		},
		"strata": {
			title: "Kirix {%Strata%}",
			image: "kirix-strata"
		},
		"kkman": {
			upper: [0, 1]
		},
		"kmail": {
			upper: [0, 1]
		},
		"kmlite": {
			upper: [0, 1, 2],
			image: "kmeleon"
		},
		"lbrowser": {
			upper: [0, 1]
		},
		"links": {
			image: "null"
		},
		"lbbrowser": {
			title: "Liebao Browser"
		},
		"liebaofast": {
			image: "lbbrowser"
		},
		"leechcraft": {
			title: "LeechCraft",
			image: "null"
		},
		"lobo": {
			upper: [0]
		},
		"lorentz": {
			upper: [0],
			image: "firefoxdevpre"
		},
		"maemo browser": {
			upper: [0, 6],
			image: "maemo"
		},
		" mib/": {
			title: "{%MIB%}",
			image: "mib"
		},
		"micromessenger": {
			upper: [0, 5],
			image: "wechat"
		},
		"minibrowser": {
			upper: [0, 5]
		},
		"mozilladeveloperpreview": {
			title: "{%MozillaDeveloperPreview%}",
			image: "firefoxdevpre"
		},
		"mqqbrowser": {
			upper: [0, 1, 2, 3], // MQQBrowser
			image: "qqbrowser"
		},
		"multi-browser": {
			upper: [0, 6],
			image: "multi-browserxp"
		},
		"multizilla": {
			upper: [0, 5],
			image: "mozilla"
		},
		"myie2": {
			upper: [0, 2, 3]
		},
		"namoroka": {
			image: "firefoxdevpre"
		},
		"navigator": {
			title: "Netscape {%Navigator%}",
			image: "netscape"
		},
		"netbox": {
			upper: [0, 3]
		},
		"netcaptor": {
			upper: [0, 3]
		},
		"netfront": {
			upper: [0, 3]
		},
		"netnewswire": {
			upper: [0, 3, 7]
		},
		"netpositive": {
			upper: [0, 3]
		},
		"netsurf": {
			upper: [0, 3]
		},
		"nf-browser": {
			upper: [0, 1, 2, 4],
			image: "netfront"
		},
		"nichrome/self": {
			title: "{%Nichrome/self%}",
			image: "nichromeself"
		},
		"nokiabrowser": {
			title: "Nokia {%Browser%}",
			image: "nokia"
		},
		"novarra-vision": {
			title: "Novarra {%Vision%}",
			image: "novarra"
		},
		"offbyone": {
			title: "Off By One"
		},
		"omniweb": {
			upper: [0, 4]
		},
		"onebrowser": {
			upper: [0, 3]
		},
		"origyn web browser": {
			title: "Oregano Web Browser",
			image: "owb"
		},
		"osb-browser": {
			image: "null"
		},
		" pre/": {
			title: "Palm {%Pre%}",
			image: "palmpre"
		},
		"palemoon": {
			title: "Pale {%Moon%}"
		},
		"patriott::browser": {
			title: "Patriott {%Browser%}",
			image: "patriott"
		},
		"phaseout": {
			title: "Phaseout"
		},
		"playstation 4": {
			title: "PS4 Web Browser",
			image: "webkit"
		},
		"podkicker pro": {
			upper: [0, 8],
			image: "podkicker"
		},
		"qqbrowser": {
			upper: [0, 1, 2]
		},
		"qtweb internet browser": {
			title: "{%QtWeb Internet Browser%}",
			image: "qtwebinternetbrowser"
		},
		"qtcarbrowser": {
			image: "tesla"
		},
		"qupzilla": {
			upper: [0, 3]
		},
		"rekonq": {
			title: "rekonq"
		},
		"retawq": {
			image: "terminal"
		},
		"rockmelt": {
			upper: [0, 4]
		},
		"saayaa": {
			title: "SaaYaa Explorer"
		},
		"seamonkey": {
			upper: [0, 3]
		},
		"semc-browser": {
			upper: [0, 1, 2, 3, 5],
			image: "semcbrowser"
		},
		"semc-java": {
			upper: [0, 1, 2, 3],
			image: "semcbrowser"
		},
		"shiretoko": {
			upper: [0],
			image: "firefoxdevpre"
		},
		"sitekiosk": {
			upper: [0, 4]
		},
		"skipstone": {
			upper: [0, 4]
		},
		"silk": {
			title: "Amazon {%Silk%}"
		},
		"slimboat": {
			upper: [0, 4]
		},
		"slimbrowser": {
			upper: [0, 4]
		},
		"smarttv": {
			upper: [0, 5, 6],
			image: "maplebrowser"
		},
		"substream": {
			upper: [0, 3]
		},
		"sulfur": {
			title: "Flock {%Sulfur%}",
			image: "flock"
		},
		"sylera": {
			upper: [0],
			image: "null"
		},
		"taobrowser": {
			upper: [0, 3],
		},
		"tear": {
			title: "Tear"
		},
		"teashark": {
			upper: [0, 3]
		},
		"teleca": {
			image: "obigo"
		},
		"tencenttraveler": {
			title: "Tencent {%Traveler%}"
		},
		"tenfourfox": {
			upper: [0, 3, 7]
		},
		"theworld": {
			title: "TheWorld Browser"
		},
		"ubrowser": {
			upper: [0, 1],
			image: "ucbrowser"
		},
		"ucbrowser": {
			upper: [0, 1, 2, 3],
		},
		"uc browser": {
			upper: [0, 1, 2, 4],
			image: "ucbrowser"
		},
		"ucweb": {
			upper: [0, 1, 2, 3, 4],
			image: "ucbrowser"
		},
		"ultrabrowser": {
			upper: [0, 5],
		},
		"up.browser": {
			upper: [0, 3],
			image: "openwave"
		},
		"up.link": {
			upper: [0, 3],
			image: "openwave"
		},
		"uzardweb": {
			title: "{%uZardWeb%}"
		},
		"uzard": {
			upper: [1],
			image: "uzardweb"
		},
		"uzbl": {
			title: "uzbl"
		},
		"vimprobable": {
			upper: [0],
			image: "null"
		},
		"vonkeror": {
			upper: [0],
			image: "null"
		},
		"w3m": {
			upper: [0, 2]
		},
		"wget": {
			image: "null"
		},
		"curl": {
			image: "null"
		},
		"iemobile": {
			upper: [0, 1, 2],
			image: "msie-mobile"
		},
		"waterfox": {
			upper: [0, 5]
		},
		"webianshell": {
			title: "Webian {%Shell%}"
		},
		"webrender": {
			upper: [0]
		},
		"weltweitimnetzbrowser": {
			title: "Weltweitimnetz {%Browser%}",
			image: "weltweitimnetzbrowser"
		},
		"whitehat aviator": {
			upper: [0, 5, 9],
			image: "aviator"
		},
		"wkiosk": {
			title: "wKiosk"
		},
		"worldwideweb": {
			upper: [0, 5, 9]
		},
		"x-smiles": {
			upper: [0, 2]
		},
		"xiino": {
			image: "null"
		},
		"yabrowser": {
			upper: [0, 2],
			image: "yandex"
		},
		"zbrowser": {
			upper: [1]
		},
		"zipzap": {
			upper: [0, 3]
		},
		"abrowse": {
			title: "{%ABrowse Browser%}"
		},
		"none": {
			title: "Unknown",
			image: "unknown"
		}
	};
	var browserRegEx = new RegExp(browserList.concat(Object.keys(defaultBrowserList)).join("|"), "i");

	var displayNameList = {
		"msie": {
			callback: function (rep, ret) {
				if (ret.version == "7.0" && /Trident\/4.0/i.test(ret.ua)) {
					ret.name = " 8.0 (Compatibility Mode)";
					ret.version = "";
				} else {
					ret.name = "";
				}
			}
		},
		"nf-browser": {
			name: "NetFront"
		},
		"semc-browser": {
			name: "SEMC Browser"
		},
		"ucweb": {
			name: "UC Browser"
		},
		"ubrowser": {
			name: "UC Browser"
		},
		"ucbrowser": {
			name: "UC Browser"
		},
		"uc browser": {
			name: "UC Browser"
		},
		"bidubrowser": {
			name: "Baidu Browser"
		},
		"baidubrowser": {
			name: "Baidu Browser"
		},
		"baiduhd": {
			name: "Baidu Browser"
		},
		"up.browser": {
			name: "Openwave Mobile Browser"
		},
		"up.link": {
			name: "Openwave Mobile Browser"
		},
		"chromeframe": {
			name: "Google Chrome Frame"
		},
		"mozilladeveloperpreview": {
			name: "Mozilla Developer Preview"
		},
		"opera mobi": {
			name: "Opera Mobile"
		},
		"osb-browser": {
			name: "Gtk+ WebCore"
		},
		"tablet browser": {
			name: "MicroB"
		},
		"crmo": {
			name: "Chrome Mobile"
		},
		"smarttv": {
			name: "Maple Browser"
		},
		"atomicbrowser": {
			name: "Atomic Web Browser"
		},
		"dplus": {
			name: "D+"
		},
		"micromessenger": {
			name: "WeChat"
		},
		"nichrome/self": {
			name: "NiChrome"
		},
		"gsa": {
			name: "Google Search App"
		},
		"opera labs": {
			callback: function (rep, ret) {
				rep = ret.ua.match(/Edition\ Labs([\ ._0-9a-zA-Z]+);/i);
				if (rep !== null) {
					ret.version = rep[1];
				} else {
					ret.version = "";
				}
			}
		},
		"qtcarbrowser": {
			name: "Tesla Car Browser",
			version: ""
		},
		"iceweasel": {
			callback: function (rep, ret) {
				if (ret.version == "Firefox") {
					ret.version = "";
				}
			}
		},
		"yabrowser": {
			callback: function (rep, ret) {
				ret.name = "Yandex.Browser";
			}
		}
	};
	var setRetName = function (ret, rep) {
		ret.image = rep.image;
		ret.full = rep.title.replace(/\{\%(.+)\%\}/, function (match, p1) {
			return getVersion(ret, p1);
		});
	};
	var getVersion = function (ret, title) {
		var lowerTitle = title.toLowerCase();
		var start = lowerTitle;
		ret.name = title;

		if ((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera developer") && /OPR/i.test(ret.ua)) {
			start = "OPR";
		} else if (
			((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera labs") && /Version/i.test(ret.ua)) ||
			((lowerTitle == "opera mobi" && /Version/i.test(ret.ua))) ||
			((lowerTitle == "safari" && /Version/i.test(ret.ua))) ||
			((lowerTitle == "pre" && /Version/i.test(ret.ua))) ||
			((lowerTitle == "android webkit"))
		) {
			start = "Version";
		} else if (lowerTitle == "links") {
			start = "Links (";
		} else if (lowerTitle == "smarttv") {
			start = "WebBrowser";
		} else if (lowerTitle == "ucweb" && /UCBrowser/i.test(ret.ua)) {
			start = "UCBrowser";
		} else if (
			lowerTitle == "tenfourfox" ||
			lowerTitle == "classilla" ||
			lowerTitle == "msie" && /\ rv:([.0-9a-zA-Z]+)/i.test(ret.ua)
		) {
			// We have IE11 or newer
			start = " rv";
		} else if (lowerTitle == "nichrome/self") {
			start = "self";
		}
		start = start.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
		var regEx = new RegExp(start + '[\ |\/|\:]?([.0-9a-zA-Z]+)', 'i');
		var rep = ret.ua.match(regEx);
		if (rep !== null) {
			ret.version = rep[1];
		} else {
			ret.version = "";
		}

		if (ret.version.toLowerCase() == "build") { // To Fix some ua like 'Amazon Otter Build/KTU84M'
			ret.version = "";
		}
		if (lowerTitle in displayNameList) {
			if ('callback' in displayNameList[lowerTitle]) {
				displayNameList[lowerTitle].callback(rep, ret);
			} else {
				for (var tempVar in displayNameList[lowerTitle]) {
					ret[tempVar] = displayNameList[lowerTitle][tempVar];
				}
			}
		}

		return ret.name + (ret.version !== "" ? (" " + ret.version) : "");
	};

	BROWSER.analyze = function (uaString) {
		var ret = {
			ua: uaString,
			name: "",
			version: "",
			full: "",
			image: "",
			dir: "browser"
		};
		var res = uaString.match(browserRegEx);
		var rep = null;
		if (res !== null) {
			var name = res[0].toLowerCase();
			var upper = null;

			rep = {};
			if (!!defaultBrowserList[name]) {
				Object.keys(defaultBrowserList[name]).forEach(function (key) {
					if (key !== 'upper') {
						rep[key] = defaultBrowserList[name][key];
					} else {
						upper = defaultBrowserList[name].upper;
					}
				});
			}
			if (!('title' in rep)) {
				if (upper !== null) {
					var upperTitle = name;
					upper.forEach(function (letterId) {
						upperTitle = upperTitle.substr(0, letterId) + upperTitle.substr(letterId, 1).toUpperCase() + upperTitle.substr(letterId + 1, upperTitle.length); // fuck IE
					});
					rep.title = "{%" + upperTitle + "%}";
				} else {
					rep.title = "{%" + name.toLowerCase().replace(/[a-z]/, function (m) {
						return m.toUpperCase(); // Repeat dirty code...
					}) + "%}";
				}
			}
			if (!('image' in rep)) {
				rep.image = name;
			}
			setRetName(ret, rep);
		} else if (/QQ(?!Download|Pinyin)/.test(ret.ua)) {
			ret.full = getVersion(ret, "QQ");
			ret.image = "qq";
		} else if (/Galaxy/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Galaxy');
			ret.image = "galaxy";
		} else if (/Opera Mini/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Opera Mini');
			ret.image = "opera-2";
		} else if (/Opera Mobi/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Opera Mobi');
			ret.image = "opera-2";
		} else if (/Opera/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Opera');
			ret.image = "opera-1";
			if (/Version/i.test(ret.ua)) {
				ret.image = "opera-2";
			}
		} else if (/OPR/i.test(ret.ua)) {
			if (/(Edition Next)/i.test(ret.ua)) {
				ret.full = getVersion(ret, 'Opera Next');
				ret.image = "opera-next";
			} else if (/(Edition Developer)/i.test(ret.ua)) {
				ret.full = getVersion(ret, 'Opera Developer');
				ret.image = "opera-developer";
			} else {
				ret.full = getVersion(ret, 'Opera');
				ret.image = "opera-1";
			}
		} else if (/SE\ /i.test(ret.ua) && /MetaSr/i.test(ret.ua)) {
			ret.name = ret.full = "Sogou Explorer";
			ret.image = "sogou";
		} else if ((/Ubuntu\;\ Mobile/i.test(ret.ua) || /Ubuntu\;\ Tablet/i.test(ret.ua) &&
			/WebKit/i.test(ret.ua))) {
			ret.name = ret.full = "Ubuntu Web Browser";
			ret.image = "ubuntuwebbrowser";
		} else if (/Avant\ Browser/i.test(ret.ua)) { // Fuck it
			ret.full = "Avant " + getVersion(ret, 'Browser');
			ret.image = "avantbrowser";
		} else if (/AppleWebkit/i.test(ret.ua) && /Android/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Android Webkit');
			ret.image = "android-webkit";
		} else if (/Windows.+Chrome.+Edge/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Edge');
			ret.image = "edge";
		} else if (/Chrome|crios/i.test(ret.ua)) {
			if (/crios/i.test(ret.ua)) {
				ret.full = "Google " + getVersion(ret, 'CriOS');
				ret.image = "chrome";
			} else {
				ret.full = "Google " + getVersion(ret, 'Chrome');
				ret.image = "chrome";
			}
		} else if (/Nokia/i.test(ret.ua) && !/Trident/i.test(ret.ua)) {
			ret.full = "Nokia Web Browser";
			ret.image = "maemo";
		} else if (/Safari/i.test(ret.ua)) {
			ret.name = "Safari";
			if (/Version/i.test(ret.ua)) {
				ret.full = getVersion(ret, 'Safari');
			} else {
				ret.full = ret.name;
			}
			if (/Mobile ?Safari/i.test(ret.ua)) {
				ret.name = "Mobile " + ret.name;
				ret.full = "Mobile " + ret.full;
			}
			ret.image = "safari";
		} else if (/Firefox/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Firefox');
			ret.image = "firefox";
		} else if (/MSIE/i.test(ret.ua) || /Trident/i.test(ret.ua)) {
			ret.full = "Internet Explorer" + getVersion(ret, 'MSIE');
			ret.image = "msie";
			rep = ret.ua.match(/(MSIE[\ |\/]?| rv:)([.0-9a-zA-Z]+)/i);
			if (rep !== null) {
				var ieVersion = parseInt(rep[2]);
				if (ieVersion >= 11) {
					ret.image = "msie11";
				} else if (ieVersion >= 10) {
					ret.image = "msie10";
				} else if (ieVersion >= 9) {
					ret.image = "msie9";
				} else if (ieVersion >= 7) {
					ret.image = "msie7";
				} else if (ieVersion >= 6) {
					ret.image = "msie6";
				} else if (ieVersion >= 4) {
					ret.image = "msie4";
				} else if (ieVersion >= 3) {
					ret.image = "msie3";
				} else if (ieVersion >= 2) {
					ret.image = "msie2";
				}
			}
		} else if (/Mozilla/i.test(ret.ua)) {
			ret.full = "Mozilla Compatible";
			ret.image = "mozilla";
		} else {
			ret.name = "Unknown";
			ret.image = "null";
			ret.full = ret.name;
		}
		return ret;
	};
	// Node.js
	//#JSCOVERAGE_IF typeof module !== 'undefined' && module.exports
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = BROWSER;
	}
	//#JSCOVERAGE_ENDIF
	//#JSCOVERAGE_IF typeof define !== 'undefined' && define.amd
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function () {
			return BROWSER;
		});
	}
	//#JSCOVERAGE_ENDIF
	//#JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function (require, exports, module) {
			module.exports = BROWSER;
		});
		//#JSCOVERAGE_ENDIF
		//#JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
	} else {
		root.USERAGENT_BROWSER = function () { };
		USERAGENT_BROWSER.prototype.analyze = BROWSER.analyze;
	}
	//#JSCOVERAGE_ENDIF
})(this);
'use strict';
(function(root) {
    var deviceList = [{
        regEx: /(MEIZU (MX|M9)|M030)|MX-3/i,
        brand: "Meizu",
        image: "meizu"
    }, {
        regEx: /MI-ONE|MI \d|HM NOTE/i,
        brand: "Xiaomi",
        image: "xiaomi",
        childItem: [{
            regEx: /HM NOTE ([A-Z0-9]+)/i,
            model: "HM-NOTE $1"
        }, {
            regEx: /MI ([A-Z0-9]+)/i,
            model: "$1"
        }, {
            regEx: /MI-ONE/i,
            model: "1"
        }]
    }, {
        regEx: /BlackBerry/i,
        brand: "BlackBerry",
        image: "blackberry",
        version: {
            start: "blackberry ?"
        }
    }, {
        regEx: /Coolpad/i,
        brand: "CoolPad",
        image: "coolpad",
        version: {
            start: "CoolPad( |\_)?",
            item: 2
        }
    }, {
        regEx: /Dell/i,
        brand: "Dell",
        image: "dell",
        childItem: [{
            regEx: /Dell Streak/i,
            model: "Streak"
        }]
    }, {
        regEx: /HTC|Desire|Rhodium|WMD\-50433/i,
        brand: "HTC",
        image: "htc",
        childItem: [{
            regEx: /Desire/i,
            model: "Desire"
        }, {
            regEx: /Rhodium|WMD\-50433|HTC[_|\ ]Touch[_|\ ]Pro2/i,
            model: "Touch Pro2"
        }, {
            regEx: /HTC[_|\ ]Touch[_|\ ]Pro/i,
            model: "Touch Pro"
        }, {
            regEx: /Windows Phone .+ by HTC/i,
            version: {
                start: "Windows Phone ",
                end: " by HTC"
            }
        }],
        version: {
            start: "HTC[ |_|-]?"
        }
    }, {
        regEx: /huawei/i,
        brand: "Huawei",
        image: "huawei",
        version: {
            start: "HUAWEI( |\_)?",
            item: 2
        }
    }, {
        regEx: /Kindle/i,
        brand: "Amazon",
        model: "Kindle",
        image: "kindle",
        version: {
            start: "Kindle\/"
        }
    }, {
        regEx: /K-Touch/i,
        brand: "K-Touch",
        image: "k-touch",
        version: {
            start: "k-touch[ _]"
        }
    }, {
        regEx: /Lenovo|lepad/i,
        brand: "Lenovo",
        image: "lenovo",
        childItem: [{
            regEx: "lepad",
            model: "LePad"
        }],
        version: {
            start: "Lenovo[\ |\-|\/|\_]"
        }
    }, {
        regEx: /LG/i,
        brand: "LG",
        image: "lg",
        version: {
            start: "LGE?([- \/])",
            item: 2
        }
    }, {
        regEx: / Droid|XT720|MOT-|MIB|XOOM/i,
        brand: "Motorola",
        image: "motorola",
        childItem: [{
            regEx: / Droid/i,
            model: "Droid"
        }, {
            regEx: /MOT\-|MIB/i,
            version: {
                start: "MOT(O|-)",
                item: 2
            }
        }, {
            regEx: /XOOM/i,
            model: "Xoom"
        }, {
            regEx: /XT720/i,
            model: "XT720"
        }]
    }, {
        regEx: /Microsoft/i,
        brand: "Microsoft",
        image: "microsoft",
        childItem: [{
            regEx: /Lumia/i,
            model: "Lumia",
            version: {
                start: "(Lumia )",
                item: 2
            }
        }],
    }, {
        regEx: /Nintendo/i,
        brand: "Nintendo",
        image: "nintendo",
        childItem: [{
            regEx: /DSi/,
            model: "DSi",
            image: "nintendodsi"
        }, {
            regEx: /DS/,
            model: "DS",
            image: "nintendods"
        }, {
            regEx: /WiiU/,
            model: "Wii U",
            image: "nintendowiiu"
        }, {
            regEx: /Wii/,
            model: "Wii",
            image: "nintendowii"
        }]
    }, {
        regEx: /Nokia/i,
        brand: "Nokia",
        image: "nokia",
        childItem: [{
            regEx: /Nokia 909/i,
            model: "Lumia 1020"
        }, {
            regEx: /IEMobile|WPDesktop|Edge/i,
            model: "Lumia",
            version: {
                start: "(Nokia |Lumia |Nokia;)",
                item: 2
            }
        }],
        version: {
            start: "Nokia",
            item: 1
        }
    }, {
        regEx: /Onda/i,
        brand: "Onda",
        image: "onda"
    }, {
        regEx: /oppo/i,
        brand: "OPPO",
        image: "oppo"
    }, {
        regEx: / Pixi\/| Pre\/|Palm|webos/i,
        brand: "Palm",
        image: "palm",
        childItem: [{
            regEx: /Pixi/i,
            model: "Pixi"
        }, {
            regEx: /Pre/i,
            model: "Pre"
        }]
    }, {
        regEx: /Galaxy Nexus|Smart-?TV|GT-|Samsung/i,
        brand: "Samsung",
        image: "samsung",
        childItem: [{
            regEx: /Smart-?TV/i,
            model: "Smart TV"
        }, {
            regEx: /Galaxy Nexus/i,
            model: "Galaxy Nexus"
        }, {
            regEx: /GT-/i,
            version: {
                start: "GT-"
            }
        }],
        version: {
            start: "Samsung-(SCH-)?",
            item: 2
        }
    }, {
        regEx: /PlayStation/i,
        brand: "Sony",
        model: "PlayStation",
        image: "playstation",
        version: {
            start: "PlayStation "
        }
    }, {
        regEx: /SonyEricsson/i,
        brand: "SonyEricsson",
        image: "sonyericsson",
        version: {
            start: "SonyEricsson"
        }
    }, {
        regEx: /vivo/i,
        brand: "vivo",
        image: "vivo",
        version: {
            start: "VIVO "
        }
    }, {
        regEx: /Xperia/i,
        brand: "Sony",
        model: "Xperia",
        image: "xperia",
        version: {
            start: "Xperia(-T)?( |\_|\-)?",
            item: 3
        }
    }, {
        regEx: /zte/i,
        brand: "ZTE",
        image: "zte",
        version: {
            start: "ZTE "
        }
    }, {
        regEx: /Ubuntu; (Mobile|Tablet)/i,
        brand: "Ubuntu",
        image: "ubuntutouch",
        childItem: [{
            regEx: /Mobile/i,
            model: "Phone"
        }, {
            regEx: /Tablet/i,
            model: "Tablet"
        }]
    }, {
        regEx: /Nexus/i,
        brand: "Google",
        model: "Nexus",
        image: "google-nexusone",
        version: {
            start: "Nexus "
        }
    }];

    var analyzeVersion = function(ret, deviceItem) {
        var rep;

        if (!('end' in deviceItem.version)) deviceItem.version.end = "";
        if (!('item' in deviceItem.version)) deviceItem.version.item = 1;

        var versionRegEx = new RegExp(deviceItem.version.start + "([.0-9a-zA-Z]+)" + deviceItem.version.end, "i");

        if (rep = ret.ua.match(versionRegEx)) {
            ret.model += ret.model === "" ? "" : " " + rep[deviceItem.version.item].replace(/_/g, "");
            //ret.addChild = false; // If it has some supplementary name then do not check child.
        }

    };

    var analyzeItem = function(ret, deviceList) {
        var rep = null;
        var fixedName = "";
        var i = 0;
        var deviceItem = null;
        for (var device in deviceList) { // We can use forEach instead on IE9+.
            deviceItem = deviceList[device];
            if (!(rep = ret.ua.match(deviceItem.regEx))) continue;

            for (var singleName in deviceItem) {
                var singleItem = deviceItem[singleName];
                switch (singleName) {
                    case "childItem":
                    case "version":
                    case "regEx":
                        // Do nothing..
                        break;
                    case "brand":
                    case "model":
                        if (rep.length === 0) continue; // Didn't match

                        if (ret[singleName] !== "") {
                            ret[singleName] += " ";
                        }
                        fixedName = singleItem;
                        for (i = 1; i < rep.length; i++) { // rep[0] is useless
                            fixedName = fixedName.replace(new RegExp("\\$" + i, "g"), rep[i]);
                        }
                        ret[singleName] += fixedName;

                        break;
                    default:
                        ret[singleName] = singleItem;
                        break;
                }
            }

            var checkVersionSwitch = ('version' in deviceItem);
            if ('childItem' in deviceItem) {
                if (analyzeItem(ret, deviceItem.childItem)) {
                    checkVersionSwitch = false;
                }
            }


            if (checkVersionSwitch) {
                analyzeVersion(ret, deviceItem);
            }

            delete ret.addVersion;
            return true;
        }
        return false;
    };

    var analyze = function(ret) {
        var rep = null;
        if (analyzeItem(ret, deviceList)) {
            return;
        }

        // Apple
        else if (/iPad/i.test(ret.ua)) {
            ret.brand = "Apple";
            ret.model = "iPad";
            ret.image = "ipad";
        } else if (/iPod/i.test(ret.ua)) {
            ret.brand = "Apple";
            ret.model = "iPod";
            ret.image = "iphone";
        } else if (/iPhone/i.test(ret.ua)) {
            ret.brand = "Apple";
            ret.model = "iPhone";
            ret.image = "iphone";
        }

        //Some special UA..
        //is MSIE
        else if (/MSIE.+?Windows.+?Trident/i.test(ret.ua) && !/Windows ?Phone/i.test(ret.ua)) {
            ret.brand = "";
            ret.model = "";
            ret.image = "null";
        }
        // No Device match
        else {
            ret.image = "null";
        }
    };



    var DEVICE = {};

    DEVICE.analyze = function(uaString) {
        var ret = {
            "ua": uaString,
            "name": "",
            "image": "",
            "brand": "",
            "model": "",
            "dir": "device"
        };
        analyze(ret);
        ret.name = ret.brand === "" && ret.model === "" ? "" : ret.brand + (ret.model === "" ? "" : " ") + ret.model;
        ret.full = ret.name;
        return ret;
    };


    // Node.js
    //#JSCOVERAGE_IF typeof module !== 'undefined' && module.exports
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = DEVICE;
    }
    //#JSCOVERAGE_ENDIF
    //#JSCOVERAGE_IF typeof define !== 'undefined' && define.amd
    // AMD
    else if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return DEVICE;
        });
    }
    //#JSCOVERAGE_ENDIF
    //#JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
    // CMD
    else if (typeof define !== 'undefined' && define.cmd) {
        define([], function(require, exports, module) {
            module.exports = DEVICE;
        });
        //#JSCOVERAGE_ENDIF
        //#JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
    } else {
        root.USERAGENT_DEVICE = function() {};
        USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
    }
    //#JSCOVERAGE_ENDIF

})(this);

'use strict';
(function(root) {
    var windowsVersion = {
        "6.4": ["10", "6"], // Windows 10 before 10240 
        "10.0": ["10", "6"],
        "6.3": ["8.1", "5"],
        "6.2": ["8", "5"],
        "6.1": ["7", "4"],
        "6.0": ["Vista", "3"],
        "5.2": ["Server 2003", "2"],
        "5.1": ["XP", "2"],
        "5.01": ["2000 Service Pack 1", "1"],
        "5.0": ["2000", "1"],
        "4.0": ["NT 4.0", "1"],
        "3.51": ["NT 3.11", "1"],
    };

    var osRegEx = new RegExp([
        "BB10", "BeOS", "DragonFly", "FreeBSD", "Inferno",
        "SunOS", "Solaris", "J2ME\/MIDP",
        "MorphOS", "NetBSD", "OpenBSD", "Unix", "webOS"
    ].join("|"), "i");
    var defaultOSList = {
        bb10: {
            name: "BlackBerry OS 10",
            image: "blackberry"
        },
        dragonfly: {
            name: "DragonFly BSD",
            image: "dragonflybsd"
        },
        freebsd: {
            name: "FreeBSD"
        },
        morphos: {
            name: "MorphOS"
        },
        openbsd: {
            name: "OpenBSD"
        },
        netbsd: {
            name: "NetBSD"
        },
        beos: {
            name: "BeOS"
        },
        webos: {
            name: "Palm webOS",
            image: "palm"
        },
        sunos: {
            name: "Solaris",
            image: "solaris"
        },
        "j2me\/midp": {
            name: "J2ME/MIDP Device",
            image: "java"
        }
    };

    var linuxRegEx = new RegExp([
        "Arch ?Linux", "Chakra", "Crunchbang", "Debian", "Gentoo", "Kanotix", "Knoppix",
        "LindowsOS", "Linspire", "Mageia", "Pardus", "Rosa", "Sabayon",
        "Slackware", "Suse", "VectorLinux", "Venenux", "Xandros", "Zenwalk"
    ].join("|"), "i");
    var defaultLinuxList = {
        "arch linux": {
            image: "archlinux",
            name: "Arch Linux"
        },
        archlinux: {
            name: "Arch Linux"
        },
        suse: {
            name: "openSUSE"
        },
        lindowsos: {
            name: "LindowsOS"
        },
        linspire: {
            image: "lindowsos"
        }
    };
    var linuxWithVersion = {
        "centos": ["centos", /.el([.0-9a-zA-Z]+).centos/i],
        "fedora": ["fedora", /.fc([.0-9a-zA-Z]+)/i],
        "foresight linux": ["foresight", /Foresight\ Linux\/([.0-9a-zA-Z]+)/i],
        "linux mint": ["linuxmint", /Linux\ Mint\/([.0-9a-zA-Z]+)/i],
        "mandriva": ["mandriva", /mdv\/([.0-9a-zA-Z]+)/i],
        "moonos": ["moonos", /moonos\/([.0-9a-zA-Z]+)/i]
    };
    var linuxWithVersionRegEx = new RegExp("(" + Object.keys(linuxWithVersion).join("|") + ")", "i");


    var returnWindows = function(ret, version) {
        ret.full += " " + windowsVersion[version][0];
        ret.image = "win-" + windowsVersion[version][1];
        ret.version = version;
    };

    var analyzeWindows = function(ret) {

        ret.full = "Windows";
        ret.name = "Windows";
        ret.image = 'win-2';
        ret.version = "";
        var rep = null;

        if (/Windows Phone|WPDesktop|ZuneWP7|WP7/i.test(ret.ua)) {
            ret.name += ' Phone';
            ret.image = "windowsphone";

            rep = ret.ua.match(/Windows Phone (OS )?([0-9\.]+)/i);
            if (rep !== null) {
                ret.version = rep[2];
                var intVersion = parseInt(ret.version);
                if (intVersion === 7) {
                    ret.image = "wp7";
                } else if (intVersion === 10) {
                    ret.name = "Windows";
                    ret.version = "10 Mobile";
                    ret.image = "win-6";
                }
            }
            ret.full = ret.name + (ret.version === "" ? '' : " " + ret.version);
        } else if (/Windows NT/i.test(ret.ua)) {
            ret.name = "Windows NT";
            rep = ret.ua.match(/Windows NT ([.0-9]+)/i);
            if (rep !== null) {
                if (windowsVersion[rep[1]]) {
                    returnWindows(ret, rep[1]);
                }
            }
        }

        if (ret.full !== "Windows") {
            return true;
        }

        if (/Windows XP/i.test(ret.ua)) {
            returnWindows(ret, "5.1");
        } else if (/Windows 2000/i.test(ret.ua)) {
            returnWindows(ret, "5.0");
        } else if (/WinNT4.0/i.test(ret.ua)) {
            returnWindows(ret, "4.0");
        } else if (/WinNT3.51/i.test(ret.ua)) {
            returnWindows(ret, "3.51");
        } else if (/Win(dows )?3.11|Win16/i.test(ret.ua)) {
            ret.full += " 3.11";
            ret.image = "win-1";
        } else if (/Windows 3.1/i.test(ret.ua)) {
            ret.full += " 3.1";
            ret.image = "win-1";
        } else if (/Win 9x 4.90|Windows ME/i.test(ret.ua)) {
            ret.full += " Me";
            ret.image = "win-1";
        } else if (/Win98/i.test(ret.ua)) {
            ret.full += " 98 SE";
            ret.image = "win-1";
        } else if (/Windows (98|4\.10)/i.test(ret.ua)) {
            ret.full += " 98";
            ret.image = "win-1";
        } else if (/Windows 95/i.test(ret.ua) || /Win95/i.test(ret.ua)) {
            ret.full += " 95";
            ret.image = "win-1";
        } else if (/Windows CE|Windows .+Mobile/i.test(ret.ua)) {
            ret.full += " CE";
            ret.image = "win-2";
            //#JSCOVERAGE_IF false
        } else if (/WM5/i.test(ret.ua)) {
            ret.name += " Mobile";
            ret.version = "5";
            ret.full = ret.name + " " + ret.version;
            ret.image = "win-phone";
            //#JSCOVERAGE_ENDIF
        } else if (/WindowsMobile/i.test(ret.ua)) {
            ret.name += " Mobile";
            ret.full = ret.name;
            ret.image = "win-phone";
        }
    };


    var analyzeLinux = function(ret) {
        ret.name = '';
        ret.image = '';
        ret.version = '';
        var rep = null;
        var res = ret.ua.match(linuxRegEx);
        var name = "";

        if (res !== null) {
            name = res[0].toLowerCase();
            ret.name = name.replace(/(\w)/, function(string) {
                return string.toUpperCase();
            });
            ret.image = name;

            if (!!defaultLinuxList[name]) {
                ret.name = defaultLinuxList[name].name || ret.name;
                ret.image = defaultLinuxList[name].image || ret.image;
            }

        } else if (/(L|K|X|Ed)?Ubuntu/i.test(ret.ua)) { // The count of Ubuntu users is more than others.

            ret.name = "Ubuntu";

            if (rep = ret.ua.match(/Ubuntu[\/|\ ]([.0-9]+[.0-9a-zA-Z]+)/i)) {
                ret.version = rep[1];
                if (parseInt(ret.version) < 10) {
                    ret.image = "ubuntu-1";
                }
            }

            if (ret.image === '') {
                ret.image = "ubuntu-2";
            }

            if (rep = ret.ua.match(/(L|K|X|Ed)Ubuntu/i)) {
                var childUbuntuVersion = rep[1].toLowerCase();
                ret.name = childUbuntuVersion + ret.name;
                ret.name = ret.name.toLowerCase().replace(/(\w)/, function(m) {
                    return m.toUpperCase();
                });
                ret.image = childUbuntuVersion + ret.image;
            }

        } else if (rep = ret.ua.match(linuxWithVersionRegEx)) {
            name = rep[1].toLowerCase();
            ret.name = rep[1];
            if (rep = ret.ua.match(linuxWithVersion[name][1])) {
                ret.version = rep[1];
            }
            ret.image = linuxWithVersion[name][0];
        } else if (/Red\ Hat/i.test(ret.ua) || /RedHat/i.test(ret.ua)) {
            ret.name = "Red Hat";

            if (rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)) {
                ret.name += " Enterprise Linux";
                ret.version = rep[1].replace(/_/g, ".");
            }

            ret.image = "red-hat";

        } else {
            ret.name = "GNU/Linux";
            ret.image = "linux";
        }

        ret.full = ret.name;
        if (ret.version !== "") {
            ret.full += " " + ret.version;
        }
    };



    var analyzeOther = function(ret) {
        ret.name = '';
        ret.image = '';
        ret.version = '';
        ret.full = "";

        var res = ret.ua.match(osRegEx);
        var rep;

        if (res !== null) {
            var name = res[0].toLowerCase();
            ret.name = name.replace(/(\w)/, function(string) {
                return string.toUpperCase();
            });
            ret.image = name;

            if (!!defaultOSList[name]) {
                ret.name = defaultOSList[name].name || ret.name;
                ret.image = defaultOSList[name].image || ret.image;
            }
        }
        // Opera's Useragent does not contains 'Linux'
        else if (/Android|ADR /i.test(ret.ua)) {
            ret.name = "Android";
            ret.image = "android";
            if (rep = ret.ua.match(/(Android|Adr)[\ |\/]?([.0-9a-zA-Z]+)/i)) {
                ret.version = rep[2];
            }
        } else if (/Tizen/i.test(ret.ua)) {
            ret.name = "Tizen";
            ret.image = "tizen";
        } else if (/(iPhone|CPU)\ OS/.test(ret.ua)) {
            ret.name = "iOS";
            ret.image = "mac-3";
            if (rep = ret.ua.match(/(iPhone|CPU)\ OS\ ([._0-9a-zA-Z]+)/i)) {
                ret.version = rep[2].replace(/_/g, ".");
            }
        } else if (/AmigaOS/i.test(ret.ua)) {
            ret.name = "AmigaOS";
            if (rep = ret.ua.match(/AmigaOS\ ([.0-9a-zA-Z]+)/i)) {
                ret.version = rep[1];
            }
            ret.image = "amigaos";
        } else if (/\b(?!Mi)CrOS(?!oft)/i.test(ret.ua)) {
            ret.name = "Google Chrome OS";
            ret.image = "chromeos";
        } else if (/IRIX/i.test(ret.ua)) {
            ret.name = "IRIX";
            if (rep = ret.ua.match(/IRIX(64)?\ ([.0-9a-zA-Z]+)/i)) {
                if (rep[1] !== undefined && rep[1] !== "") {
                    ret.x64 = true;
                }
                if (rep[2] !== undefined && rep[2] !== "") {
                    ret.version = rep[2];
                }
            }
            ret.image = "irix";
        } else if (/Mac/i.test(ret.ua) || /Darwin/i.test(ret.ua)) {
            if (rep = ret.ua.match(/(Mac OS ?X)/i)) {
                ret.version = ret.ua.substr(ret.ua.toLowerCase().indexOf(rep[1].toLowerCase()));
                ret.version = ret.version.substr(0, ret.version.indexOf(")"));
                if (ret.version.indexOf(";") > 0) {
                    ret.version = ret.version.substr(0, ret.version.indexOf(";"));
                }
                ret.version = ret.version.replace(/_/g, ".");
                ret.version = ret.version.replace(/Mac OS ?X ?/, "");
                ret.name = "Mac OS X";
                ret.full = ret.name + " " + ret.version;
                ret.image = rep[1] == "Mac OSX" ? "mac-2" : "mac-3";
            } else if (/Darwin/i.test(ret.ua)) {
                ret.name = "Mac OS Darwin";
                ret.image = "mac-1";
            } else {
                ret.name = "Macintosh";
                ret.image = "mac-1";
            }
        } else if (/Meego/i.test(ret.ua)) {
            ret.name = "Meego";
            ret.image = "meego";
        } else if (/RISC OS/i.test(ret.ua)) {
            ret.name = "RISC OS";
            ret.image = "risc";
            if (rep = ret.ua.match(/RISC OS ([.0-9a-zA-Z]+)/i)) {
                ret.version = rep[1];
            }
        } else if (/Symb(ian)?(OS)?/i.test(ret.ua)) {
            ret.name = "SymbianOS";
            if (rep = ret.ua.match(/Symb(ian)?(OS)?\/([.0-9a-zA-Z]+)/i)) {
                ret.version = rep[3];
            }
            ret.image = "symbian";
        } else {
            ret.name = "Unknown";
            ret.image = "null";
        }

        ret.full = ret.name + (ret.version === "" ? "" : " " + ret.version);

    };



    var OS = {};

    OS.analyze = function(uaString) {
        var ret = {
            ua: uaString,
            name: "",
            version: "",
            full: "",
            windows: false,
            linux: false,
            x64: false,
            dir: "os"
        };
        if (/x86_64|Win64; x64|WOW64/i.test(ret.ua)) {
            ret.x64 = true;
        }

        if (/Windows|Win(NT|32|95|98|16)|ZuneWP7|WPDesktop/i.test(ret.ua)) {
            ret.windows = true;
            analyzeWindows(ret);
        } else if (/Linux/i.test(ret.ua) && !/Android|ADR|Tizen/.test(ret.ua)) {
            ret.linux = true;
            analyzeLinux(ret);
        } else {
            analyzeOther(ret);
        }
        if (ret.full === "") {
            ret.full = ret.name;
        }
        if (ret.x64) {
            ret.full += ' x64';
        }
        return ret;
    };



    // Node.js
    //#JSCOVERAGE_IF typeof module !== 'undefined' && module.exports
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = OS;
    }
    //#JSCOVERAGE_ENDIF
    //#JSCOVERAGE_IF typeof define !== 'undefined' && define.amd
    // AMD
    else if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return OS;
        });
    }
    //#JSCOVERAGE_ENDIF
    //#JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
    // CMD
    else if (typeof define !== 'undefined' && define.cmd) {
        define([], function(require, exports, module) {
            module.exports = OS;
        });
        //#JSCOVERAGE_ENDIF
        //#JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
    } else {
        root.USERAGENT_OS = function() {};
        USERAGENT_OS.prototype.analyze = OS.analyze;
    }
    //#JSCOVERAGE_ENDIF


})(this);

/* global USERAGENT_OS */
/* global USERAGENT_DEVICE */
/* global USERAGENT_BROWSER */
/* global define */
"use strict";
(function (root) {

	var NODE = typeof module !== 'undefined' && module.exports;
	var CMD = typeof define !== 'undefined' && define.cmd;
	var AMD = typeof define !== 'undefined' && define.amd;
	var userAgent = {};

	userAgent.version = "0.4";
	userAgent.publishDate = "20151128";

	userAgent.analyze = function (uaString) {
		var returnObject = {};
		returnObject.ua = uaString;
		if (this.osDetect) returnObject.os = this.osDetect.analyze(uaString);
		if (this.deviceDetect) returnObject.device = this.deviceDetect.analyze(uaString);
		if (this.browserDetect) returnObject.browser = this.browserDetect.analyze(uaString);
		if (returnObject.device) returnObject.platform = returnObject.device;
		if (returnObject.device && returnObject.os && returnObject.device.name === "") returnObject.platform = returnObject.os;
		return returnObject;
	};


	var requireFunction = function (userAgent, OS, DEVICE, BROWSER) {
		userAgent.osDetect = OS;
		userAgent.deviceDetect = DEVICE;
		userAgent.browserDetect = BROWSER;
	};

	// Node.js
	if (NODE) {
		if (process.env.UAJS_COV) {
			var libs = ["-cov/os", "-cov/device", "-cov/browser"]; // To prevent webpack pack lib-cov.
			requireFunction(userAgent, require('./lib' + libs[0]), require('./lib' + libs[1]), require('./lib' + libs[2]));
		} else {
			requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'));
		}

		module.exports = userAgent;
	}
	// AMD
	else if (AMD) {
		define(['./lib/os', './lib/device', './lib/browser'], function (OS, DEVICE, BROWSER) {
			requireFunction(userAgent, OS, DEVICE, BROWSER);
			return userAgent;
		});
	}
	// CMD
	else if (CMD) {
		define(function (require, exports, module) {
			requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'));
			module.exports = userAgent;
		});
	} else {
		if (typeof USERAGENT_OS !== 'undefined') userAgent.osDetect = new USERAGENT_OS();
		if (typeof USERAGENT_DEVICE !== 'undefined') userAgent.deviceDetect = new USERAGENT_DEVICE();
		if (typeof USERAGENT_BROWSER !== 'undefined') userAgent.browserDetect = new USERAGENT_BROWSER();
		root.USERAGENT = userAgent;
	}


})(this);
