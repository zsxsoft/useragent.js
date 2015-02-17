(function() {

	var BROWSER = {};
	var browserRegEx = new RegExp([
		'11(4|5)Browser', '2345(Explorer|chrome)', '360se|360ee|360\ aphone\ browser', 'Abolimba', 'Acoo\ Browser', 'ANTFresco',
		'Alienforce', 'Amaya', 'Amiga-AWeb', 'MRCHROME', 'America\ Online\ Browser', 'AmigaVoyager',
		'AOL', 'Arora', 'AtomicBrowser', 'BarcaPro', 'Barca', 'Beamrise',
		'Beonex', 'BA?IDUBrowser|BaiduHD', 'BlackBerry', 'Blackbird', 'BlackHawk', 'Blazer',
		'Bolt', 'BonEcho', 'BrowseX', 'Browzar', 'Bunjalloo', 'Camino',
		'Cayman\ Browser', 'Charon', 'Cheshire', 'Chimera', 'chromeframe', 'ChromePlus',
		'curl', 'Iron', 'Chromium', 'Classilla', 'Coast', 'Columbus',
		'CometBird', 'Comodo_Dragon', 'Conkeror', 'CoolNovo', 'CoRom', 'Crazy\ Browser',
		'CrMo', 'Cruz', 'Cyberdog', 'DPlus', 'Deepnet\ Explorer', 'Demeter',
		'DeskBrowse', 'Dillo', 'DoCoMo', 'DocZilla', 'Dolfin', 'Dooble',
		'Doris', 'Dorothy', 'DPlus', 'Edbrowse', 'E?links', 'Element\ Browser',
		'Enigma\ Browser', 'EnigmaFox', 'Epic', 'Epiphany', 'Escape|Espial', 'Fennec',
		'Firebird', 'Fireweb\ Navigator', 'Flock', 'Fluid', 'Galeon', 'GlobalMojo',
		'GoBrowser', 'Google\ Wireless\ Transcoder', 'GoSurf', 'GranParadiso', 'GreenBrowser', 'Hana',
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
		'Stainless', 'SubStream', 'Sulfur', 'Sundance', 'Sunrise', 'Sunrise',
		'Surf', 'Swiftfox', 'Swiftweasel', 'Sylera', 'TaoBrowser', 'tear',
		'TeaShark', 'Teleca', 'TenFourFox', 'TheWorld', 'Thunderbird', 'Tizen',
		'Tjusig', 'TencentTraveler', 'UC?\ ?Browser|UCWEB', 'UltraBrowser', 'UP.Browser', 'UP.Link',
		'Usejump', 'uZardWeb', 'uZard', 'uzbl', 'Vimprobable', 'Vivaldi',
		'Vonkeror', 'w3m', 'IEMobile', 'Waterfox', 'WebianShell', 'Webrender',
		'WeltweitimnetzBrowser', 'wKiosk', 'WorldWideWeb', 'wget', 'WhiteHat Aviator', 'Wyzo',
		'X-Smiles', 'Xiino', 'YaBrowser', 'zBrowser', 'ZipZa'
	].join("|"), "i");

	var defaultBrowserList = {
		"114browser": {
			"title": "{%114Browser%}",
			"image": "114browser",
		},
		"115browser": {
			"title": "{%115Browser%}",
			"image": "115browser",
		},
		"2345explorer": {
			"title": "{%2345Explorer%}",
			"image": "2345explorer",
		},
		"2345chrome": {
			"title": "{%2345Chrome%}",
			"image": "2345chrome",
		},
		"360se": {
			"title": "360 Explorer",
			"image": "360se",
		},
		"360ee": {
			"title": "360 Chrome",
			"image": "360se",
		},
		"360 aphone browser": {
			"title": "360 Aphone Browser",
			"image": "360se",
		},
		"abolimba": {
			"title": "Abolimba",
			"image": "abolimba",
		},
		"acoo browser": {
			"title": "Acoo {%Browser%}",
			"image": "acoobrowser",
		},
		"alienforce": {
			"title": "{%Alienforce%}",
			"image": "alienforce",
		},
		"amaya": {
			"title": "{%Amaya%}",
			"image": "amaya",
		},
		"amiga-aweb": {
			"title": "Amiga {%AWeb%}",
			"image": "amiga-aweb",
		},
		"antfresco": {
			"title": "ANT {%Fresco%}",
			"image": "antfresco",
		},
		"mrchrome": {
			"title": "Amigo",
			"image": "amigo",
		},
		"myibrow": {
			"title": "{%myibrow%}",
			"image": "my-internet-browser",
		},
		"america online browser": {
			"title": "America Online {%Browser%}",
			"image": "aol",
		},
		"amigavoyager": {
			"title": "Amiga {%Voyager%}",
			"image": "amigavoyager",
		},
		"aol": {
			"title": "{%AOL%}",
			"image": "aol",
		},
		"arora": {
			"title": "{%Arora%}",
			"image": "arora",
		},
		"atomicbrowser": {
			"title": "{%AtomicBrowser%}",
			"image": "atomicwebbrowser",
		},
		"barcapro": {
			"title": "{%BarcaPro%}",
			"image": "barca",
		},
		"barca": {
			"title": "{%Barca%}",
			"image": "barca",
		},
		"beamrise": {
			"title": "{%Beamrise%}",
			"image": "beamrise",
		},
		"beonex": {
			"title": "{%Beonex%}",
			"image": "beonex",
		},
		// Baidu Browser Spark does not have own UA.
		"baidubrowser": {
			"title": "{%baidubrowser%}",
			"image": "bidubrowser",
		},
		"bidubrowser": {
			"title": "{%bidubrowser%}",
			"image": "bidubrowser",
		},
		"baiduhd": {
			"title": "{%BaiduHD%}",
			"image": "bidubrowser",
		},
		"blackberry": {
			"title": "{%BlackBerry%}",
			"image": "blackberry",
		},
		"blackbird": {
			"title": "{%Blackbird%}",
			"image": "blackbird",
		},
		"blackhawk": {
			"title": "{%BlackHawk%}",
			"image": "blackhawk",
		},
		"blazer": {
			"title": "{%Blazer%}",
			"image": "blazer",
		},
		"bolt": {
			"title": "{%Bolt%}",
			"image": "bolt",
		},
		"bonecho": {
			"title": "{%BonEcho%}",
			"image": "firefoxdevpre",
		},
		"browsex": {
			"title": "BrowseX",
			"image": "browsex",
		},
		"browzar": {
			"title": "{%Browzar%}",
			"image": "browzar",
		},
		"bunjalloo": {
			"title": "{%Bunjalloo%}",
			"image": "bunjalloo",
		},
		"camino": {
			"title": "{%Camino%}",
			"image": "camino",
		},
		"cayman browser": {
			"title": "Cayman {%Browser%}",
			"image": "caymanbrowser",
		},
		"charon": {
			"title": "{%Charon%}",
			"image": "null",
		},
		"cheshire": {
			"title": "{%Cheshire%}",
			"image": "aol",
		},
		"chimera": {
			"title": "{%Chimera%}",
			"image": "null",
		},
		"chromeframe": {
			"title": "{%chromeframe%}",
			"image": "chrome",
		},
		"chromeplus": {
			"title": "{%ChromePlus%}",
			"image": "chromeplus",
		},
		"iron": {
			"title": "SRWare {%Iron%}",
			"image": "srwareiron",
		},
		"chromium": {
			"title": "{%Chromium%}",
			"image": "chromium",
		},
		"classilla": {
			"title": "{%Classilla%}",
			"image": "classilla",
		},
		"coast": {
			"title": "{%Coast%}",
			"image": "coast",
		},
		"columbus": {
			"title": "{%Columbus%}",
			"image": "columbus",
		},
		"cometbird": {
			"title": "{%CometBird%}",
			"image": "cometbird",
		},
		"comodo_dragon": {
			"title": "Comodo {%Dragon%}",
			"image": "comodo-dragon",
		},
		"conkeror": {
			"title": "{%Conkeror%}",
			"image": "conkeror",
		},
		"coolnovo": {
			"title": "{%CoolNovo%}",
			"image": "coolnovo",
		},
		"corom": {
			"title": "{%CoRom%}",
			"image": "corom",
		},
		"crazy browser": {
			"title": "Crazy {%Browser%}",
			"image": "crazybrowser",
		},
		"crmo": {
			"title": "{%CrMo%}",
			"image": "chrome",
		},
		"cruz": {
			"title": "{%Cruz%}",
			"image": "cruz",
		},
		"cyberdog": {
			"title": "{%Cyberdog%}",
			"image": "cyberdog",
		},
		"dplus": {
			"title": "{%DPlus%}",
			"image": "dillo",
		},
		"deepnet explorer": {
			"title": "{%Deepnet Explorer%}",
			"image": "deepnetexplorer",
		},
		"demeter": {
			"title": "{%Demeter%}",
			"image": "demeter",
		},
		"deskbrowse": {
			"title": "{%DeskBrowse%}",
			"image": "deskbrowse",
		},
		"dillo": {
			"title": "{%Dillo%}",
			"image": "dillo",
		},
		"docomo": {
			"title": "{%DoCoMo%}",
			"image": "null",
		},
		"doczilla": {
			"title": "{%DocZilla%}",
			"image": "doczilla",
		},
		"dolfin": {
			"title": "{%Dolfin%}",
			"image": "samsung",
		},
		"dooble": {
			"title": "{%Dooble%}",
			"image": "dooble",
		},
		"doris": {
			"title": "{%Doris%}",
			"image": "doris",
		},
		"dorothy": {
			"title": "{%Dorothy%}",
			"image": "dorothybrowser",
		},
		"dplus": {
			"title": "{%DPlus%}",
			"image": "dillo",
		},
		"edbrowse": {
			"title": "{%Edbrowse%}",
			"image": "edbrowse",
		},
		"elinks": {
			"title": "{%Elinks%}",
			"image": "elinks",
		},
		"element browser": {
			"title": "Element {%Browser%}",
			"image": "elementbrowser",
		},
		"enigma browser": {
			"title": "Enigma {%Browser%}",
			"image": "enigmabrowser",
		},
		"enigmafox": {
			"title": "{%EnigmaFox%}",
			"image": "null",
		},
		"epic": {
			"title": "{%Epic%}",
			"image": "epicbrowser",
		},
		"epiphany": {
			"title": "{%Epiphany%}",
			"image": "epiphany",
		},
		"escape": {
			"title": "{%Escape%}",
			"image": "espialtvbrowser",
		},
		"espial": {
			"title": "{%Espial%}",
			"image": "espialtvbrowser",
		},
		"fennec": {
			"title": "{%Fennec%}",
			"image": "fennec",
		},
		"firebird": {
			"title": "{%Firebird%}",
			"image": "firebird",
		},
		"fireweb navigator": {
			"title": "{%Fireweb Navigator%}",
			"image": "firewebnavigator",
		},
		"flock": {
			"title": "{%Flock%}",
			"image": "flock",
		},
		"fluid": {
			"title": "{%Fluid%}",
			"image": "fluid",
		},
		"galeon": {
			"title": "{%Galeon%}",
			"image": "galeon",
		},
		"globalmojo": {
			"title": "{%GlobalMojo%}",
			"image": "globalmojo",
		},
		"gobrowser": {
			"title": "GO {%Browser%}",
			"image": "gobrowser",
		},
		"google wireless transcoder": {
			"title": "Google Wireless Transcoder",
			"image": "google",
		},
		"gosurf": {
			"title": "{%GoSurf%}",
			"image": "gosurf",
		},
		"granparadiso": {
			"title": "{%GranParadiso%}",
			"image": "firefoxdevpre",
		},
		"greenbrowser": {
			"title": "{%GreenBrowser%}",
			"image": "greenbrowser",
		},
		"hana": {
			"title": "{%Hana%}",
			"image": "hana",
		},
		"hotjava": {
			"title": "{%HotJava%}",
			"image": "hotjava",
		},
		"hv3": {
			"title": "{%Hv3%}",
			"image": "hv3",
		},
		"hydra browser": {
			"title": "Hydra Browser",
			"image": "hydrabrowser",
		},
		"iris": {
			"title": "{%Iris%}",
			"image": "iris",
		},
		"ibm webexplorer": {
			"title": "IBM {%WebExplorer%}",
			"image": "ibmwebexplorer",
		},
		"juzibrowser": {
			"title": "JuziBrowser",
			"image": "juzibrowser",
		},
		"miuibrowser": {
			"title": "{%MiuiBrowser%}",
			"image": "miuibrowser",
		},
		"mxnitro": {
			"title": "{%MxNitro%}",
			"image": "mxnitro",
		},
		"ibrowse": {
			"title": "{%IBrowse%}",
			"image": "ibrowse",
		},
		"icab": {
			"title": "{%iCab%}",
			"image": "icab",
		},
		"icebrowser": {
			"title": "{%IceBrowser%}",
			"image": "icebrowser",
		},
		"iceape": {
			"title": "{%Iceape%}",
			"image": "iceape",
		},
		"icecat": {
			"title": "GNU {%IceCat%}",
			"image": "icecat",
		},
		"icedragon": {
			"title": "{%IceDragon%}",
			"image": "icedragon",
		},
		"iceweasel": {
			"title": "{%IceWeasel%}",
			"image": "iceweasel",
		},
		"inet browser": {
			"title": "iNet {%Browser%}",
			"image": "null",
		},
		"irider": {
			"title": "{%iRider%}",
			"image": "irider",
		},
		"internetsurfboard": {
			"title": "{%InternetSurfboard%}",
			"image": "internetsurfboard",
		},
		"jasmine": {
			"title": "{%Jasmine%}",
			"image": "samsung",
		},
		"k-meleon": {
			"title": "{%K-Meleon%}",
			"image": "kmeleon",
		},
		"k-ninja": {
			"title": "{%K-Ninja%}",
			"image": "kninja",
		},
		"kapiko": {
			"title": "{%Kapiko%}",
			"image": "kapiko",
		},
		"kazehakase": {
			"title": "{%Kazehakase%}",
			"image": "kazehakase",
		},
		"strata": {
			"title": "Kirix {%Strata%}",
			"image": "kirix-strata",
		},
		"kkman": {
			"title": "{%KKman%}",
			"image": "kkman",
		},
		"kinza": {
			"title": "{%Kinza%}",
			"image": "kinza",
		},
		"kmail": {
			"title": "{%KMail%}",
			"image": "kmail",
		},
		"kmlite": {
			"title": "{%KMLite%}",
			"image": "kmeleon",
		},
		"konqueror": {
			"title": "{%Konqueror%}",
			"image": "konqueror",
		},
		"kylo": {
			"title": "{%Kylo%}",
			"image": "kylo",
		},
		"lbrowser": {
			"title": "{%LBrowser%}",
			"image": "lbrowser",
		},
		"links": {
			"title": "{%Links%}",
			"image": "null",
		},
		"lbbrowser": {
			"title": "Liebao Browser",
			"image": "lbbrowser",
		},
		"liebaofast": {
			"title": "{%Liebaofast%}",
			"image": "lbbrowser",
		},
		"leechcraft": {
			"title": "LeechCraft",
			"image": "null",
		},
		"lobo": {
			"title": "{%Lobo%}",
			"image": "lobo",
		},
		"lolifox": {
			"title": "{%lolifox%}",
			"image": "lolifox",
		},
		"lorentz": {
			"title": "{%Lorentz%}",
			"image": "firefoxdevpre",
		},
		"lunascape": {
			"title": "{%Lunascape%}",
			"image": "lunascape",
		},
		"lynx": {
			"title": "{%Lynx%}",
			"image": "lynx",
		},
		"madfox": {
			"title": "{%Madfox%}",
			"image": "madfox",
		},
		"maemo browser": {
			"title": "{%Maemo Browser%}",
			"image": "maemo",
		},
		"maxthon": {
			"title": "{%Maxthon%}",
			"image": "maxthon",
		},
		" mib/": {
			"title": "{%MIB%}",
			"image": "mib",
		},
		"tablet browser": {
			"title": "{%Tablet browser%}",
			"image": "microb",
		},
		"micromessenger": {
			"title": "{%MicroMessenger%}",
			"image": "wechat",
		},
		"midori": {
			"title": "{%Midori%}",
			"image": "midori",
		},
		"minefield": {
			"title": "{%Minefield%}",
			"image": "minefield",
		},
		"minibrowser": {
			"title": "{%MiniBrowser%}",
			"image": "minibrowser",
		},
		"minimo": {
			"title": "{%Minimo%}",
			"image": "minimo",
		},
		"mosaic": {
			"title": "{%Mosaic%}",
			"image": "mosaic",
		},
		"mozilladeveloperpreview": {
			"title": "{%MozillaDeveloperPreview%}",
			"image": "firefoxdevpre",
		},
		"mqqbrowser": {
			"title": "{%MQQBrowser%}",
			"image": "qqbrowser",
		},
		"multi-browser": {
			"title": "{%Multi-Browser%}",
			"image": "multi-browserxp",
		},
		"multizilla": {
			"title": "{%MultiZilla%}",
			"image": "mozilla",
		},
		"myie2": {
			"title": "{%MyIE2%}",
			"image": "myie2",
		},
		"namoroka": {
			"title": "{%Namoroka%}",
			"image": "firefoxdevpre",
		},
		"navigator": {
			"title": "Netscape {%Navigator%}",
			"image": "netscape",
		},
		"netbox": {
			"title": "{%NetBox%}",
			"image": "netbox",
		},
		"netcaptor": {
			"title": "{%NetCaptor%}",
			"image": "netcaptor",
		},
		"netfront": {
			"title": "{%NetFront%}",
			"image": "netfront",
		},
		"netnewswire": {
			"title": "{%NetNewsWire%}",
			"image": "netnewswire",
		},
		"netpositive": {
			"title": "{%NetPositive%}",
			"image": "netpositive",
		},
		"netscape": {
			"title": "{%Netscape%}",
			"image": "netscape",
		},
		"netsurf": {
			"title": "{%NetSurf%}",
			"image": "netsurf",
		},
		"nf-browser": {
			"title": "{%NF-Browser%}",
			"image": "netfront",
		},
		"nichrome/self": {
			"title": "{%Nichrome/self%}",
			"image": "nichromeself",
		},
		"nokiabrowser": {
			"title": "Nokia {%Browser%}",
			"image": "nokia",
		},
		"novarra-vision": {
			"title": "Novarra {%Vision%}",
			"image": "novarra",
		},
		"obigo": {
			"title": "{%Obigo%}",
			"image": "obigo",
		},
		"offbyone": {
			"title": "Off By One",
			"image": "offbyone",
		},
		"omniweb": {
			"title": "{%OmniWeb%}",
			"image": "omniweb",
		},
		"onebrowser": {
			"title": "{%OneBrowser%}",
			"image": "onebrowser",
		},
		"orca": {
			"title": "{%Orca%}",
			"image": "orca",
		},
		"oregano": {
			"title": "{%Oregano%}",
			"image": "oregano",
		},
		"origyn web browser": {
			"title": "Oregano Web Browser",
			"image": "owb",
		},
		"osb-browser": {
			"title": "{%osb-browser%}",
			"image": "null",
		},
		"otter": {
			"title": "{%Otter%}",
			"image": "otter",
		},
		" pre/": {
			"title": "Palm {%Pre%}",
			"image": "palmpre",
		},
		"palemoon": {
			"title": "Pale {%Moon%}",
			"image": "palemoon",
		},
		"patriott::browser": {
			"title": "Patriott {%Browser%}",
			"image": "patriott",
		},
		"perk": {
			"title": "{%Perk%}",
			"image": "perk",
		},
		"phaseout": {
			"title": "Phaseout",
			"image": "phaseout",
		},
		"phoenix": {
			"title": "{%Phoenix%}",
			"image": "phoenix",
		},
		"playstation 4": {
			"title": "PS4 Web Browser",
			"image": "webkit",
		},
		"podkicker": {
			"title": "{%Podkicker%}",
			"image": "podkicker",
		},
		"podkicker pro": {
			"title": "{%Podkicker Pro%}",
			"image": "podkicker",
		},
		"pogo": {
			"title": "{%Pogo%}",
			"image": "pogo",
		},
		"polaris": {
			"title": "{%Polaris%}",
			"image": "polaris",
		},
		"polarity": {
			"title": "{%Polarity%}",
			"image": "polarity",
		},
		"prism": {
			"title": "{%Prism%}",
			"image": "prism",
		},
		"qqbrowser": {
			"title": "{%QQBrowser%}",
			"image": "qqbrowser",
		},
		"qq": {
			"title": "{%QQ%}",
			"image": "qq",
		},
		"qtweb internet browser": {
			"title": "QtWeb Internet {%Browser%}",
			"image": "qtwebinternetbrowser",
		},
		"qtcarbrowser": {
			"title": "{%qtcarbrowser%}",
			"image": "tesla",
		},
		"qupzilla": {
			"title": "{%QupZilla%}",
			"image": "qupzilla",
		},
		"rekonq": {
			"title": "rekonq",
			"image": "rekonq",
		},
		"retawq": {
			"title": "{%retawq%}",
			"image": "terminal",
		},
		"rockmelt": {
			"title": "{%RockMelt%}",
			"image": "rockmelt",
		},
		"ryouko": {
			"title": "{%Ryouko%}",
			"image": "ryouko",
		},
		"saayaa": {
			"title": "SaaYaa Explorer",
			"image": "saayaa",
		},
		"seamonkey": {
			"title": "{%SeaMonkey%}",
			"image": "seamonkey",
		},
		"semc-browser": {
			"title": "{%SEMC-Browser%}",
			"image": "semcbrowser",
		},
		"semc-java": {
			"title": "{%SEMC-java%}",
			"image": "semcbrowser",
		},
		"shiira": {
			"title": "{%Shiira%}",
			"image": "shiira",
		},
		"shiretoko": {
			"title": "{%Shiretoko%}",
			"image": "firefoxdevpre",
		},
		"sitekiosk": {
			"title": "{%SiteKiosk%}",
			"image": "sitekiosk",
		},
		"skipstone": {
			"title": "{%SkipStone%}",
			"image": "skipstone",
		},
		"skyfire": {
			"title": "{%Skyfire%}",
			"image": "skyfire",
		},
		"sleipnir": {
			"title": "{%Sleipnir%}",
			"image": "sleipnir",
		},
		"silk": {
			"title": "Amazon {%Silk%}",
			"image": "silk",
		},
		"slimboat": {
			"title": "{%SlimBoat%}",
			"image": "slimboat",
		},
		"slimbrowser": {
			"title": "{%SlimBrowser%}",
			"image": "slimbrowser",
		},
		"superbird": {
			"title": "{%Superbird%}",
			"image": "superbird",
		},
		"smarttv": {
			"title": "{%SmartTV%}",
			"image": "maplebrowser",
		},
		"songbird": {
			"title": "{%Songbird%}",
			"image": "songbird",
		},
		"stainless": {
			"title": "{%Stainless%}",
			"image": "stainless",
		},
		"substream": {
			"title": "{%SubStream%}",
			"image": "substream",
		},
		"sulfur": {
			"title": "Flock {%Sulfur%}",
			"image": "flock",
		},
		"sundance": {
			"title": "{%Sundance%}",
			"image": "sundance",
		},
		"sunrise": {
			"title": "{%Sundial%}",
			"image": "sundial",
		},
		"sunrise": {
			"title": "{%Sunrise%}",
			"image": "sunrise",
		},
		"surf": {
			"title": "{%Surf%}",
			"image": "surf",
		},
		"swiftfox": {
			"title": "{%Swiftfox%}",
			"image": "swiftfox",
		},
		"swiftweasel": {
			"title": "{%Swiftweasel%}",
			"image": "swiftweasel",
		},
		"sylera": {
			"title": "{%Sylera%}",
			"image": "null",
		},
		"taobrowser": {
			"title": "{%TaoBrowser%}",
			"image": "taobrowser",
		},
		"tear": {
			"title": "Tear",
			"image": "tear",
		},
		"teashark": {
			"title": "{%TeaShark%}",
			"image": "teashark",
		},
		"teleca": {
			"title": "{%Teleca%}",
			"image": "obigo",
		},
		"tencenttraveler": {
			"title": "Tencent {%Traveler%}",
			"image": "tencenttraveler",
		},
		"tenfourfox": {
			"title": "{%TenFourFox%}",
			"image": "tenfourfox",
		},
		"theworld": {
			"title": "TheWorld Browser",
			"image": "theworld",
		},
		"thunderbird": {
			"title": "{%Thunderbird%}",
			"image": "thunderbird",
		},
		"tizen": {
			"title": "{%Tizen%}",
			"image": "tizen",
		},
		"tjusig": {
			"title": "{%Tjusig%}",
			"image": "tjusig",
		},
		"ubrowser": {
			"title": "{%UBrowser%}",
			"image": "ucbrowser",
		},
		"ucbrowser": {
			"title": "{%UCBrowser%}",
			"image": "ucbrowser",
		},
		"uc browser": {
			"title": "{%UC Browser%}",
			"image": "ucbrowser",
		},
		"ucweb": {
			"title": "{%UCWEB%}",
			"image": "ucbrowser",
		},
		"ultrabrowser": {
			"title": "{%UltraBrowser%}",
			"image": "ultrabrowser",
		},
		"up.browser": {
			"title": "{%UP.Browser%}",
			"image": "openwave",
		},
		"up.link": {
			"title": "{%UP.Link%}",
			"image": "openwave",
		},
		"usejump": {
			"title": "{%Usejump%}",
			"image": "usejump",
		},
		"uzardweb": {
			"title": "{%uZardWeb%}",
			"image": "uzardweb",
		},
		"uzard": {
			"title": "{%uZard%}",
			"image": "uzardweb",
		},
		"uzbl": {
			"title": "uzbl",
			"image": "uzbl",
		},
		"vimprobable": {
			"title": "{%Vimprobable%}",
			"image": "null",
		},
		"vivaldi": {
			"title": "{%Vivaldi%}",
			"image": "vivaldi",
		},
		"vonkeror": {
			"title": "{%Vonkeror%}",
			"image": "null",
		},
		"w3m": {
			"title": "{%W3M%}",
			"image": "w3m",
		},
		"wget": {
			"title": "{%wget%}",
			"image": "null",
		},
		"curl": {
			"title": "{%curl%}",
			"image": "null",
		},
		"iemobile": {
			"title": "{%IEMobile%}",
			"image": "msie-mobile",
		},
		"waterfox": {
			"title": "{%WaterFox%}",
			"image": "waterfox",
		},
		"webianshell": {
			"title": "Webian {%Shell%}",
			"image": "webianshell",
		},
		"webrender": {
			"title": "Webrender",
			"image": "webrender",
		},
		"weltweitimnetzbrowser": {
			"title": "Weltweitimnetz {%Browser%}",
			"image": "weltweitimnetzbrowser",
		},
		"whitehat aviator": {
			"title": "{%WhiteHat Aviator%}",
			"image": "aviator",
		},
		"wkiosk": {
			"title": "wKiosk",
			"image": "wkiosk",
		},
		"worldwideweb": {
			"title": "{%WorldWideWeb%}",
			"image": "worldwideweb",
		},
		"wyzo": {
			"title": "{%Wyzo%}",
			"image": "Wyzo",
		},
		"x-smiles": {
			"title": "{%X-Smiles%}",
			"image": "x-smiles",
		},
		"xiino": {
			"title": "{%Xiino%}",
			"image": "null",
		},
		"yabrowser": {
			"title": "Yandex.{%Browser%}",
			"image": "yandex",
		},
		"zbrowser": {
			"title": "{%zBrowser%}",
			"image": "zbrowser",
		},
		"zipzap": {
			"title": "{%ZipZap%}",
			"image": "zipzap",
		},
		"abrowse": {
			"title": "ABrowse {%Browser%}",
			"image": "abrowse",
		},
		"firefox": {
			"title": "{%Firefox%}",
			"image": "firefox",
		},
		"none": {
			"title": "Unknown",
			"image": "unknown",
		}

	};

	var setRetName = function(ret, rep) {
		ret.image = rep.image;
		ret.full = rep.title.replace(/\{\%(.+)\%\}/, function(match, p1) {
			return getVersion(ret, p1);
		})
	}

	var getVersion = function(ret, title) {
		var lowerTitle = title.toLowerCase();
		ret.name = title;
		var start = lowerTitle;

		if ((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera labs") && preg_match('/Version/i', useragent)) {
			start = "Version";
		} else if ((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera developer") && preg_match('/OPR/i', useragent)) {
			start = "OPR";
		} else if (lowerTitle == "opera mobi" && /Version/i.test(ret.ua)) {
			start = "Version";
		} else if (lowerTitle == "safari" && /Version/i.test(ret.ua)) {
			start = "Version";
		} else if (lowerTitle == "pre" && /Version/i.test(ret.ua)) {
			start = "Version";
		} else if (lowerTitle == "android webkit") {
			start = "Version";
		} else if (lowerTitle == "links") {
			start = "Links (";
		} else if (lowerTitle == "uc browser") {
			start = "UC Browser";
		} else if (lowerTitle == "tenfourfox") {
			start = " rv";
		} else if (lowerTitle == "classilla") {
			start = " rv";
		} else if (lowerTitle == "smarttv") {
			start = "WebBrowser";
		} else if (lowerTitle == "ucweb" && '/UCBrowser/i'.test(ret.ua)) {
			start = "UCBrowser";
		} else if (lowerTitle == "msie" && '/\ rv:([.0-9a-zA-Z]+)/i'.test(ret.ua)) {
			// We have IE11 or newer
			start = " rv";
		} else if (lowerTitle == "spartan") {
			start = "edge";
		} else if (lowerTitle == "nichrome/self") {
			start = "self";
		}

		var version = '';
		start = start.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');

		var regEx = new RegExp(start + '[\ |\/|\:]?([.0-9a-zA-Z]+)', 'i');
		var rep = ret.ua.match(regEx);
		if (rep !== null) {
			ret.version = rep[1];
		} else {
			ret.version = "";
		}

		if (lowerTitle == "msie" && version == "7.0" && '/Trident\/4.0/i'.test(ret.ua)) {
			return " 8.0 (Compatibility Mode)";
		} else if (lowerTitle == "msie") {
			return " " + ret.version;
		} else if (lowerTitle == "nf-browser") {
			ret.name = "NetFront";
			return "NetFront " + ret.version;
		} else if (lowerTitle == "semc-browser") {
			ret.name = "SEMC Browser";
			return "SEMC Browser " + ret.version;
		} else if (lowerTitle == "ucweb" || lowerTitle == "ubrowser" || lowerTitle == "ucbrowser" || lowerTitle == "uc browser") {
			ret.name = "UC Browser";
			return "UC Browser " + ret.version;
		} else if (lowerTitle == "bidubrowser" || lowerTitle == "baidubrowser" || lowerTitle == "baiduhd") {
			ret.name = "Baidu Browser";
			return "Baidu Browser " + ret.version;
		} else if (lowerTitle == "up.browser" || lowerTitle == "up.link") {
			ret.name = "Openwave Mobile Browser";
			return "Openwave Mobile Browser " + ret.version;
		} else if (lowerTitle == "chromeframe") {
			ret.name = "Google Chrome Frame";
			return "Google Chrome Frame " + ret.version;
		} else if (lowerTitle == "mozilladeveloperpreview") {
			ret.name = "Mozilla Developer Preview";
			return "Mozilla Developer Preview " + ret.version;
		} else if (lowerTitle == "opera mobi") {
			ret.name = "Opera Mobile";
			return "Opera Mobile " + ret.version;
		} else if (lowerTitle == "osb-browser") {
			ret.name = "Gtk+ WebCore";
			return "Gtk+ WebCore " + ret.version;
		} else if (lowerTitle == "tablet browser") {
			ret.name = "MicroB";
			return "MicroB " + ret.version;
		} else if (lowerTitle == "crmo") {
			ret.name = "Chrome Mobile";
			return "Chrome Mobile " + ret.version;
		} else if (lowerTitle == "smarttv") {
			ret.name = "Maple Browser";
			return "Maple Browser " + ret.version;
		} else if (lowerTitle == "atomicbrowser") {
			ret.name = "Atomic Web Browser";
			return "Atomic Web Browser " + ret.version;
		} else if (lowerTitle == "barcapro") {
			ret.name = "Barca Pro";
			return "Barca Pro " + ret.version;
		} else if (lowerTitle == "dplus") {
			ret.name = "D+";
			return "D+ " + ret.version;
		} else if (lowerTitle == "micromessenger") {
			ret.name = "WeChat";
			return "WeChat " + ret.version;
		} else if (lowerTitle == "nichrome/self") {
			ret.name = "NiChrome";
			return "NiChrome " + ret.version;
		} else if (lowerTitle == "opera labs") {
			var rep = ret.ua.match('/Edition\ Labs([\ ._0-9a-zA-Z]+);/i');
			if (rep !== null) {
				ret.version = rep[1];
			} else {
				ret.version = "";
			}
			return ret.name + " " + ret.version;
		} else if (lowerTitle == 'qtcarbrowser') {
			return "Tesla Car Browser";
		} else if (lowerTitle == "iceweasel") {
			if (version == "Firefox") {
				version = "";
			}
			return ret.name + " " + ret.version;
		} else {
			console.log(ret);
			return ret.name + " " + ret.version;
		}
	}

	BROWSER.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"version": "",
			"full": "",
			"image": ""
		}

		var res = uaString.match(browserRegEx);
		if (res !== null) {
			var name = res[0].toLowerCase();
			if (typeof defaultBrowserList[name] !== 'undefined') {
				var rep = defaultBrowserList[name];
			} else {
				var rep = defaultBrowserList['none'];
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
		} else if (/Opera Labs/i.test(ret.ua) || (/Opera/i.test(ret.ua) && /Edition Labs/i.test(ret.ua))) {
			ret.full = getVersion(ret, 'Opera Labs');
			ret.image = "opera-next";
		} else if (/Opera Next/i.test(ret.ua) || (/Opera/i.test(ret.ua) && /Edition Next/i.test(ret.ua))) {
			ret.full = getVersion(ret, 'Opera Next');
			ret.image = "opera-next";
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
				ret.full = getVersion(ret, 'Opera Developer')
				ret.image = "opera-developer";
			} else {
				ret.full = getVersion(ret, 'Opera');
				ret.image = "opera-1";
			}
		} else if (/Series60/i.test(ret.ua) && !/Symbian/i.test(ret.ua)) {
			ret.full = "Nokia " + getVersion(ret, 'Series60');
			ret.image = "s60";
		} else if (/S60/i.test(ret.ua) && !/Symbian/i.test(ret.ua)) {
			ret.full = "Nokia " + getVersion(ret, 'S60');
			ret.image = "s60";
		} else if (/SE\ /i.test(ret.ua) && /MetaSr/i.test(ret.ua)) {
			ret.name = ret.full = "Sogou Explorer";
			ret.image = "sogou";
		} else if ((/Ubuntu\;\ Mobile/i.test(ret.ua) || /Ubuntu\;\ Tablet/i.test(ret.ua) &&
			/WebKit/i.test(ret.ua))) {
			ret.name = ret.full = "Ubuntu Web Browser";
			ret.image = "ubuntuwebbrowser";
		} else if (/Avant\ Browser/i.test(ret.ua)) {
			ret.full = "Avant " + getVersion(ret, 'Browser')
			ret.image = "avantbrowser";
		} else if (/AppleWebkit/i.test(ret.ua) && /Android/i.test(ret.ua) && !/Chrome/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Android Webkit')
			ret.image = "android-webkit";
		} else if (/Chrome|crios/i.test(ret.ua)) {

			// Note: For IE11 Experimental Web Platform Features in Windows 10
			// Spartan? Who knows.
			if (/Windows NT 1.+Edge/i.test(ret.ua)) {
				ret.full = "Internet Explorer " + getVersion(ret, 'Spartan')
				ret.image = "msie11";
			} else if (/crios/i.test(ret.ua)) {
				ret.full = "Google " + getVersion(ret, 'CriOS ')
				ret.image = "chrome";
			} else {
				ret.full = "Google " + getVersion(ret, 'Chrome')
				ret.image = "chrome";
			}
		} else if (/Safari/i.test(ret.ua) && !/Nokia/i.test(ret.ua)) {
			ret.name = "Safari";

			if (/Mobile Safari/i.test(ret.ua)) {
				ret.name = "Mobile " + ret.name;
			}

			if (/Version/i.test(ret.ua)) {
				ret.full = getVersion(ret, 'Safari');
			}

			ret.image = "safari";
		} else if (/Nokia/i.test(ret.ua) && !/Trident/i.test(ret.ua)) {
			$title = "Nokia Web Browser";
			ret.image = "maemo";
		} else if (/Firefox/i.test(ret.ua)) {
			ret.full = getVersion(ret, 'Firefox')
			ret.image = "firefox";
		} else if (/MSIE/i.test(ret.ua) || /Trident/i.test(ret.ua)) {
			ret.full = "Internet Explorer" + getVersion(ret, 'MSIE')
			ret.image = "msie";
			var rep = ret.ua.match('/(MSIE[\ |\/]?| rv:)([.0-9a-zA-Z]+)/i');
			if (rep !== null) {
				if (rep[1] >= 11) {
					ret.image = "msie11";
				} else if (rep[1] >= 10) {
					ret.image = "msie10";
				} else if (rep[1] >= 9) {
					ret.image = "msie9";
				} else if (rep[1] >= 7) {
					ret.image = "msie7";
				} else if (rep[1] >= 6) {
					ret.image = "msie6";
				} else if (rep[1] >= 4) {
					ret.image = "msie4";
				} else if (rep[1] >= 3) {
					ret.image = "msie3";
				} else if (rep[1] >= 2) {
					ret.image = "msie2";
				}
			}
		} else if (/Mozilla/i.test(ret.ua)) {
			ret.full = "Mozilla Compatible";
			var rep = ret.ua.match('/rv:([.0-9a-zA-Z]+)/i');
			if (rep !== null) {
				ret.version = rep[1];
				ret.full = "Mozilla " + rep[1];
			}
			ret.image = "mozilla";
		} else {
			ret.name = "Unknown";
			ret.image = "null";
		}
		return ret;
	}



	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = BROWSER;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return BROWSER;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = BROWSER;
		});
	} else {
		window.USERAGENT_BROWSER = function() {}
		USERAGENT_BROWSER.prototype.analyze = BROWSER.analyze;
	}

})();