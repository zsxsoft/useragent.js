(function (root) {
	var BROWSER = {};
	var browserRegEx = new RegExp([
		'11(4|5)Browser', '2345(Explorer|chrome)', '360se|360ee|360\ aphone\ browser', 'Abolimba', 'Acoo\ Browser', 'ANTFresco',
		'Alienforce', 'Amaya', 'Amiga-AWeb', 'MRCHROME', 'America\ Online\ Browser', 'AmigaVoyager',
		'AOL', 'Arora', 'AtomicBrowser', 'BarcaPro', 'Barca', 'Beamrise',
		'Beonex', 'BA?IDUBrowser|BaiduHD', 'Blackbird', 'BlackHawk', 'Blazer',
		'Bolt', 'BonEcho', 'BrowseX', 'Browzar', 'Bunjalloo', 'Camino',
		'Cayman\ Browser', 'Charon', 'Cheshire', 'Chimera', 'chromeframe', 'ChromePlus',
		'curl', 'Iron', 'Chromium', 'Classilla', 'Coast', 'Columbus',
		'CometBird', 'Comodo_Dragon', 'Conkeror', 'CoolNovo', 'CoRom', 'Crazy\ Browser',
		'CrMo', 'Cruz', 'Cyberdog', 'Deepnet\ Explorer', 'Demeter',
		'DeskBrowse', 'Dillo', 'DoCoMo', 'DocZilla', 'Dolfin', 'Dooble',
		'Doris', 'Dorothy', 'DPlus', 'Edbrowse', 'E?links', 'Element\ Browser',
		'Enigma\ Browser', 'EnigmaFox', 'Epic', 'Epiphany', 'Escape|Espial', 'Fennec',
		'Firebird', 'Fireweb\ Navigator', 'Flock', 'Fluid', 'Galeon', 'GlobalMojo',
		'GoBrowser', 'Google\ Wireless\ Transcoder', 'GoSurf', 'GranParadiso', 'GreenBrowser', 'GSA', 'Hana',
		'HotJava', 'Hv3', 'Hydra\ Browser', 'Iris', 'IBM\ WebExplorer', 'JuziBrowser',
		'MiuiBrowser', 'MxNitro', 'IBrowse', 'iCab', 'IceBrowser', 'Iceape',
		'IceCat', 'IceDragon', 'IceWeasel', 'iNet\ Browser', 'iRider', 'InternetSurfboard',
		'Jasmine', 'K-Meleon', 'K-Ninja', 'Kapiko', 'Kazehakase', 'Strata',
		'KKman', 'Kinza', 'KMail', 'KMLite', 'Konqueror', 'Kylo',
		'LBrowser', 'LBBrowser|Liebaofast', 'LeechCraft', 'Lobo', 'lolifox', 'Lorentz',
		'Lunascape', 'Lynx', 'Madfox', 'Maemo\ Browser', 'Maxthon', '\ MIB\/',
		'Tablet\ browser', 'MicroMessenger', 'Midori', 'Minefield', 'MiniBrowser', 'Minimo',
		'Mosaic', 'MozillaDeveloperPreview', 'Multi-Browser', 'MultiZilla', 'MyIE2', 'myibrow',
		'Namoroka', 'Navigator', 'NetBox', 'NetCaptor', 'NetFront', 'NetNewsWire',
		'NetPositive', 'Netscape', 'NetSurf', 'NF-Browser', 'Nichrome\/self', 'NokiaBrowser',
		'Novarra-Vision', 'Obigo', 'OffByOne', 'OmniWeb', 'OneBrowser', 'Orca',
		'Oregano', 'Origyn\ Web\ Browser', 'osb-browser', 'Otter', '\ Pre\/', 'Palemoon',
		'Patriott\:\:Browser', 'Perk', 'Phaseout', 'Phoenix', 'PlayStation\ 4', 'Podkicker',
		'Podkicker\ Pro', 'Pogo', 'Polaris', 'Polarity', 'Prism', 'M?QQBrowser',
		'QQ(?!Download|Pinyin)', 'QtWeb\ Internet\ Browser', 'QtCarBrowser', 'QupZilla', 'rekonq', 'retawq',
		'RockMelt', 'Ryouko', 'SaaYaa', 'SeaMonkey', 'SEMC-Browser', 'SEMC-java',
		'Shiira', 'Shiretoko', 'SiteKiosk', 'SkipStone', 'Skyfire', 'Sleipnir',
		'Silk', 'SlimBoat', 'SlimBrowser', 'Superbird', 'SmartTV', 'Songbird',
		'Stainless', 'SubStream', 'Sulfur', 'Sundance', 'Sunrise',
		'Surf', 'Swiftfox', 'Swiftweasel', 'Sylera', 'TaoBrowser', 'tear',
		'TeaShark', 'Teleca', 'TenFourFox', 'TheWorld', 'Thunderbird', 'Tizen',
		'Tjusig', 'TencentTraveler', 'UC?\ ?Browser|UCWEB', 'UltraBrowser', 'UP.Browser', 'UP.Link',
		'Usejump', 'uZardWeb', 'uZard', 'uzbl', 'Vimprobable', 'Vivaldi',
		'Vonkeror', 'w3m', 'IEMobile', 'Waterfox', 'WebianShell', 'Webrender',
		'WeltweitimnetzBrowser', 'wKiosk', 'WorldWideWeb', 'wget', 'WhiteHat Aviator', 'Wyzo',
		'X-Smiles', 'Xiino', 'YaBrowser', 'zBrowser', 'ZipZap'
	].join("|"), "i");
	var defaultBrowserList = {
		"360se": {
			"title": "360 Explorer"
		},
		"360ee": {
			"title": "360 Chrome",
			"image": "360se"
		},
		"360 aphone browser": {
			"title": "360 Aphone Browser",
			"image": "360se"
		},
		"abolimba": {
			"title": "Abolimba"
		},
		"acoo browser": {
			"title": "{%Acoo Browser%}",
			"image": "acoobrowser"
		},
		"amiga-aweb": {
			"title": "Amiga {%AWeb%}",
			"image": "amiga-aweb"
		},
		"antfresco": {
			"title": "ANT {%Fresco%}"
		},
		"mrchrome": {
			"title": "Amigo",
			"image": "amigo"
		},
		"myibrow": {
			"title": "{%myibrow%}",
			"image": "my-internet-browser"
		},
		"america online browser": {
			"title": "{%America Online Browser%}",
			"image": "aol"
		},
		"amigavoyager": {
			"title": "Amiga {%Voyager%}"
		},
		"aol": {
			"title": "{%AOL%}"
		},
		"atomicbrowser": {
			"title": "{%AtomicBrowser%}",
			"image": "atomicwebbrowser"
		},
		"barcapro": {
			"title": "{%BarcaPro%}",
			"image": "barca"
		},
		// Baidu Browser Spark does not have own UA.
		"baidubrowser": {
			"image": "bidubrowser"
		},
		"baiduhd": {
			"title": "{%BaiduHD%}",
			"image": "bidubrowser"
		},
		"blackhawk": {
			"title": "{%BlackHawk%}"
		},
		"bonecho": {
			"title": "{%BonEcho%}",
			"image": "firefoxdevpre"
		},
		"browsex": {
			"title": "BrowseX"
		},
		"cayman browser": {
			"title": "{%Cayman Browser%}",
			"image": "caymanbrowser"
		},
		"charon": {
			"image": "null"
		},
		"cheshire": {
			"image": "aol"
		},
		"chimera": {
			"image": "null"
		},
		"chromeframe": {
			"image": "chrome"
		},
		"chromeplus": {
			"title": "{%ChromePlus%}"
		},
		"iron": {
			"title": "SRWare {%Iron%}",
			"image": "srwareiron"
		},
		"cometbird": {
			"title": "{%CometBird%}"
		},
		"comodo_dragon": {
			"title": "Comodo {%Dragon%}",
			"image": "comodo-dragon"
		},
		"coolnovo": {
			"title": "{%CoolNovo%}"
		},
		"corom": {
			"title": "{%CoRom%}"
		},
		"crazy browser": {
			"title": "{%Crazy Browser%}",
			"image": "crazybrowser"
		},
		"crmo": {
			"title": "{%CrMo%}",
			"image": "chrome"
		},
		"dplus": {
			"title": "{%DPlus%}",
			"image": "dillo"
		},
		"deepnet explorer": {
			"title": "{%Deepnet Explorer%}",
			"image": "deepnetexplorer"
		},
		"deskbrowse": {
			"title": "{%DeskBrowse%}"
		},
		"docomo": {
			"title": "{%DoCoMo%}",
			"image": "null"
		},
		"doczilla": {
			"title": "{%DocZilla%}"
		},
		"dolfin": {
			"image": "samsung"
		},
		"dorothy": {
			"image": "dorothybrowser"
		},
		"element browser": {
			"title": "{%Element Browser%}",
			"image": "elementbrowser"
		},
		"enigma browser": {
			"title": "{%Enigma Browser%}",
			"image": "enigmabrowser"
		},
		"enigmafox": {
			"title": "{%EnigmaFox%}",
			"image": "null"
		},
		"epic": {
			"image": "epicbrowser"
		},
		"escape": {
			"image": "espialtvbrowser"
		},
		"espial": {
			"image": "espialtvbrowser"
		},
		"fireweb navigator": {
			"title": "{%Fireweb Navigator%}",
			"image": "firewebnavigator"
		},
		"globalmojo": {
			"title": "{%GlobalMojo%}"
		},
		"gobrowser": {
			"title": "{%GOBrowser%}"
		},
		"google wireless transcoder": {
			"title": "Google Wireless Transcoder",
			"image": "google"
		},
		"gosurf": {
			"title": "{%GoSurf%}"
		},
		"granparadiso": {
			"title": "{%GranParadiso%}",
			"image": "firefoxdevpre"
		},
		"greenbrowser": {
			"title": "{%GreenBrowser%}"
		},
		"gsa": {
			"title": "{%GSA%}",
			"image": "google"
		},
		"hotjava": {
			"title": "{%HotJava%}"
		},
		"hydra browser": {
			"title": "Hydra Browser",
			"image": "hydrabrowser"
		},
		"ibm webexplorer": {
			"title": "IBM {%WebExplorer%}",
			"image": "ibmwebexplorer"
		},
		"juzibrowser": {
			"title": "JuziBrowser"
		},
		"miuibrowser": {
			"title": "{%MiuiBrowser%}"
		},
		"mxnitro": {
			"title": "{%MxNitro%}"
		},
		"ibrowse": {
			"title": "{%IBrowse%}"
		},
		"icab": {
			"title": "{%iCab%}"
		},
		"icebrowser": {
			"title": "{%IceBrowser%}"
		},
		"icecat": {
			"title": "GNU {%IceCat%}"
		},
		"icedragon": {
			"title": "{%IceDragon%}"
		},
		"iceweasel": {
			"title": "{%IceWeasel%}"
		},
		"inet browser": {
			"title": "{%iNet Browser%}",
			"image": "null"
		},
		"irider": {
			"title": "{%iRider%}"
		},
		"internetsurfboard": {
			"title": "{%InternetSurfboard%}"
		},
		"jasmine": {
			"image": "samsung"
		},
		"k-meleon": {
			"title": "{%K-Meleon%}",
			"image": "kmeleon"
		},
		"k-ninja": {
			"title": "{%K-Ninja%}",
			"image": "kninja"
		},
		"strata": {
			"title": "Kirix {%Strata%}",
			"image": "kirix-strata"
		},
		"kkman": {
			"title": "{%KKman%}"
		},
		"kmail": {
			"title": "{%KMail%}"
		},
		"kmlite": {
			"title": "{%KMLite%}",
			"image": "kmeleon"
		},
		"lbrowser": {
			"title": "{%LBrowser%}"
		},
		"links": {
			"image": "null"
		},
		"lbbrowser": {
			"title": "Liebao Browser"
		},
		"liebaofast": {
			"image": "lbbrowser"
		},
		"leechcraft": {
			"title": "LeechCraft",
			"image": "null"
		},
		"lobo": {
			"title": "{%Lobo%}"
		},
		"lolifox": {
			"title": "{%lolifox%}"
		},
		"lorentz": {
			"title": "{%Lorentz%}",
			"image": "firefoxdevpre"
		},
		"maemo browser": {
			"title": "{%Maemo Browser%}",
			"image": "maemo"
		},
		" mib/": {
			"title": "{%MIB%}",
			"image": "mib"
		},
		"tablet browser": {
			"title": "{%Tablet browser%}",
			"image": "microb"
		},
		"micromessenger": {
			"title": "{%MicroMessenger%}",
			"image": "wechat"
		},
		"minibrowser": {
			"title": "{%MiniBrowser%}"
		},
		"mozilladeveloperpreview": {
			"title": "{%MozillaDeveloperPreview%}",
			"image": "firefoxdevpre"
		},
		"mqqbrowser": {
			"title": "{%MQQBrowser%}",
			"image": "qqbrowser"
		},
		"multi-browser": {
			"title": "{%Multi-Browser%}",
			"image": "multi-browserxp"
		},
		"multizilla": {
			"title": "{%MultiZilla%}",
			"image": "mozilla"
		},
		"myie2": {
			"title": "{%MyIE2%}"
		},
		"namoroka": {
			"image": "firefoxdevpre"
		},
		"navigator": {
			"title": "Netscape {%Navigator%}",
			"image": "netscape"
		},
		"netbox": {
			"title": "{%NetBox%}"
		},
		"netcaptor": {
			"title": "{%NetCaptor%}"
		},
		"netfront": {
			"title": "{%NetFront%}"
		},
		"netnewswire": {
			"title": "{%NetNewsWire%}"
		},
		"netpositive": {
			"title": "{%NetPositive%}"
		},
		"netsurf": {
			"title": "{%NetSurf%}"
		},
		"nf-browser": {
			"title": "{%NF-Browser%}",
			"image": "netfront"
		},
		"nichrome/self": {
			"title": "{%Nichrome/self%}",
			"image": "nichromeself"
		},
		"nokiabrowser": {
			"title": "Nokia {%Browser%}",
			"image": "nokia"
		},
		"novarra-vision": {
			"title": "Novarra {%Vision%}",
			"image": "novarra"
		},
		"offbyone": {
			"title": "Off By One"
		},
		"omniweb": {
			"title": "{%OmniWeb%}"
		},
		"onebrowser": {
			"title": "{%OneBrowser%}"
		},
		"origyn web browser": {
			"title": "Oregano Web Browser",
			"image": "owb"
		},
		"osb-browser": {
			"title": "{%osb-browser%}",
			"image": "null"
		},
		" pre/": {
			"title": "Palm {%Pre%}",
			"image": "palmpre"
		},
		"palemoon": {
			"title": "Pale {%Moon%}"
		},
		"patriott::browser": {
			"title": "Patriott {%Browser%}",
			"image": "patriott"
		},
		"phaseout": {
			"title": "Phaseout"
		},
		"playstation 4": {
			"title": "PS4 Web Browser",
			"image": "webkit"
		},
		"podkicker pro": {
			"title": "{%Podkicker Pro%}",
			"image": "podkicker"
		},
		"qqbrowser": {
			"title": "{%QQBrowser%}"
		},
		"qq": {
			"title": "{%QQ%}"
		},
		"qtweb internet browser": {
			"title": "{%QtWeb Internet Browser%}",
			"image": "qtwebinternetbrowser"
		},
		"qtcarbrowser": {
			"title": "{%qtcarbrowser%}",
			"image": "tesla"
		},
		"qupzilla": {
			"title": "{%QupZilla%}"
		},
		"rekonq": {
			"title": "rekonq"
		},
		"retawq": {
			"title": "{%retawq%}",
			"image": "terminal"
		},
		"rockmelt": {
			"title": "{%RockMelt%}"
		},
		"saayaa": {
			"title": "SaaYaa Explorer"
		},
		"seamonkey": {
			"title": "{%SeaMonkey%}"
		},
		"semc-browser": {
			"title": "{%SEMC-Browser%}",
			"image": "semcbrowser"
		},
		"semc-java": {
			"title": "{%SEMC-java%}",
			"image": "semcbrowser"
		},
		"shiretoko": {
			"title": "{%Shiretoko%}",
			"image": "firefoxdevpre"
		},
		"sitekiosk": {
			"title": "{%SiteKiosk%}"
		},
		"skipstone": {
			"title": "{%SkipStone%}"
		},
		"silk": {
			"title": "Amazon {%Silk%}"
		},
		"slimboat": {
			"title": "{%SlimBoat%}"
		},
		"slimbrowser": {
			"title": "{%SlimBrowser%}"
		},
		"smarttv": {
			"title": "{%SmartTV%}",
			"image": "maplebrowser"
		},
		"substream": {
			"title": "{%SubStream%}"
		},
		"sulfur": {
			"title": "Flock {%Sulfur%}",
			"image": "flock"
		},
		"sylera": {
			"title": "{%Sylera%}",
			"image": "null"
		},
		"taobrowser": {
			"title": "{%TaoBrowser%}"
		},
		"tear": {
			"title": "Tear"
		},
		"teashark": {
			"title": "{%TeaShark%}"
		},
		"teleca": {
			"image": "obigo"
		},
		"tencenttraveler": {
			"title": "Tencent {%Traveler%}"
		},
		"tenfourfox": {
			"title": "{%TenFourFox%}"
		},
		"theworld": {
			"title": "TheWorld Browser"
		},
		"ubrowser": {
			"title": "{%UBrowser%}",
			"image": "ucbrowser"
		},
		"ucbrowser": {
			"title": "{%UCBrowser%}"
		},
		"uc browser": {
			"title": "{%UC Browser%}",
			"image": "ucbrowser"
		},
		"ucweb": {
			"title": "{%UCWEB%}",
			"image": "ucbrowser"
		},
		"ultrabrowser": {
			"title": "{%UltraBrowser%}"
		},
		"up.browser": {
			"title": "{%UP.Browser%}",
			"image": "openwave"
		},
		"up.link": {
			"title": "{%UP.Link%}",
			"image": "openwave"
		},
		"uzardweb": {
			"title": "{%uZardWeb%}"
		},
		"uzard": {
			"title": "{%uZard%}",
			"image": "uzardweb"
		},
		"uzbl": {
			"title": "uzbl"
		},
		"vimprobable": {
			"title": "{%Vimprobable%}",
			"image": "null"
		},
		"vonkeror": {
			"title": "{%Vonkeror%}",
			"image": "null"
		},
		"w3m": {
			"title": "{%W3M%}"
		},
		"wget": {
			"title": "{%wget%}",
			"image": "null"
		},
		"curl": {
			"title": "{%curl%}",
			"image": "null"
		},
		"iemobile": {
			"title": "{%IEMobile%}",
			"image": "msie-mobile"
		},
		"waterfox": {
			"title": "{%WaterFox%}"
		},
		"webianshell": {
			"title": "Webian {%Shell%}"
		},
		"webrender": {
			"title": "Webrender"
		},
		"weltweitimnetzbrowser": {
			"title": "Weltweitimnetz {%Browser%}",
			"image": "weltweitimnetzbrowser"
		},
		"whitehat aviator": {
			"title": "{%WhiteHat Aviator%}",
			"image": "aviator"
		},
		"wkiosk": {
			"title": "wKiosk"
		},
		"worldwideweb": {
			"title": "{%WorldWideWeb%}"
		},
		"x-smiles": {
			"title": "{%X-Smiles%}"
		},
		"xiino": {
			"image": "null"
		},
		"yabrowser": {
			"title": "Yandex.{%Browser%}",
			"image": "yandex"
		},
		"zbrowser": {
			"title": "{%zBrowser%}"
		},
		"zipzap": {
			"title": "{%ZipZap%}"
		},
		"abrowse": {
			"title": "{%ABrowse Browser%}"
		},
		"none": {
			"title": "Unknown",
			"image": "unknown"
		}
	};
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
		"barcapro": {
			name: "Barca Pro"
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
			"ua": uaString,
			"name": "",
			"version": "",
			"full": "",
			"image": "",
			"dir": "browser"
		};
		var res = uaString.match(browserRegEx);
		var rep = null;
		if (res !== null) {
			var name = res[0].toLowerCase();
			rep = {};
			if (typeof defaultBrowserList[name] !== 'undefined') {
				rep = defaultBrowserList[name];
			}
			if (typeof rep.title == "undefined") {
				rep.title = "{%" + name.toLowerCase().replace(/[a-z]/, function (m) {
					return m.toUpperCase(); // Repeat dirty code...
				}) + "%}";
			}
			if (typeof rep.image == "undefined") {
				rep.image = name;
			}
			setRetName(ret, rep);
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
		} else if (/Avant\ Browser/i.test(ret.ua)) {
			ret.full = "Avant " + getVersion(ret, 'Browser');
			ret.image = "avantbrowser";
		} else if (/AppleWebkit/i.test(ret.ua) && /Android/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Android Webkit');
			ret.image = "android-webkit";
		} else if (/Windows.+Chrome.+Edge/i.test(ret.ua)) {
			// Project Spartan
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
		} else if (/Safari/i.test(ret.ua) && !/Nokia/i.test(ret.ua)) {
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
		} else if (/Nokia/i.test(ret.ua) && !/Trident/i.test(ret.ua)) {
			ret.full = "Nokia Web Browser";
			ret.image = "maemo";
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