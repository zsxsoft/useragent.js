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
		} else if (lowerTitle == "opera mobi" && /Version/i.test(useragent)) {
			start = "Version";
		} else if (lowerTitle == "safari" && /Version/i.test(useragent)) {
			start = "Version";
		} else if (lowerTitle == "pre" && /Version/i.test(useragent)) {
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
		} else if (lowerTitle == "ucweb" && '/UCBrowser/i'.test(useragent)) {
			start = "UCBrowser";
		} else if (lowerTitle == "msie" && '/\ rv:([.0-9a-zA-Z]+)/i'.test(useragent)) {
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

		if (lowerTitle == "msie" && version == "7.0" && '/Trident\/4.0/i'.test(useragent)) {
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
		} /*elseif (preg_match('/Galaxy/i', $useragent)
			&& !preg_match('/Chrome/i', $useragent)) {
			$link = "http://www.traos.org/";
			$title = self::detect_browser_version(array('', 'Galaxy'));
			$code = "galaxy";
		} elseif (preg_match('/Opera Mini/i', $useragent)) {
			$link = "http://www.opera.com/mini/";
			$title = self::detect_browser_version(array('', 'Opera Mini'));
			$code = "opera-2";
		} elseif (preg_match('/Opera Mobi/i', $useragent)) {
			$link = "http://www.opera.com/mobile/";
			$title = self::detect_browser_version(array('', 'Opera Mobi'));
			$code = "opera-2";
		} elseif (preg_match('/Opera Labs/i', $useragent)
			|| (preg_match('/Opera/i', $useragent)
				&& preg_match('/Edition Labs/i', $useragent))) {
			$link = "http://labs.opera.com/";
			$title = self::detect_browser_version(array('', 'Opera Labs'));
			$code = "opera-next";
		} elseif (preg_match('/Opera Next/i', $useragent)
			|| (preg_match('/Opera/i', $useragent)
				&& preg_match('/Edition Next/i', $useragent))) {
			$link = "http://www.opera.com/support/kb/view/991/";
			$title = self::detect_browser_version(array('', 'Opera Next'));
			$code = "opera-next";
		} elseif (preg_match('/Opera/i', $useragent)) {
			$link = "http://www.opera.com/";
			$title = self::detect_browser_version(array('', 'Opera'));
			$code = "opera-1";
			if (preg_match('/Version/i', $useragent)) {
				$code = "opera-2";
			}

		} elseif (preg_match('/OPR/i', $useragent)) {
			$link = "http://www.opera.com/";
			if (preg_match('/(Edition Next)/i', $useragent)) {
				$title = self::detect_browser_version(array('', 'Opera Next'));
				$code = "opera-next";
			} elseif (preg_match('/(Edition Developer)/i', $useragent)) {
				$title = self::detect_browser_version(array('', 'Opera Developer'));
				$code = "opera-developer";
			} else {
				$title = self::detect_browser_version(array('', 'Opera'));
				$code = "opera-1";
			}

		} elseif (preg_match('/Series60/i', $useragent)
			&& !preg_match('/Symbian/i', $useragent)) {
			$link = "http://en.wikipedia.org/wiki/Web_Browser_for_S60";
			$title = "Nokia " . self::detect_browser_version(array('', 'Series60'));
			$code = "s60";
		} elseif (preg_match('/S60/i', $useragent)
			&& !preg_match('/Symbian/i', $useragent)) {
			$link = "http://en.wikipedia.org/wiki/Web_Browser_for_S60";
			$title = "Nokia " . self::detect_browser_version(array('', 'S60'));
			$code = "s60";
		} elseif (preg_match('/SE\ /i', $useragent)
			&& preg_match('/MetaSr/i', $useragent)) {
			$link = "http://ie.sogou.com/";
			$title = "Sogou Explorer";
			$code = "sogou";

		} elseif ((preg_match('/Ubuntu\;\ Mobile/i', $useragent) || preg_match('/Ubuntu\;\ Tablet/i', $useragent) &&
			preg_match('/WebKit/i', $useragent))) {
			$link = "https://launchpad.net/webbrowser-app";
			$title = "Ubuntu Web Browser";
			$code = "ubuntuwebbrowser";
			$code = "ubuntuwebbrowser";

		} elseif (preg_match('/Avant\ Browser/i', $useragent)) {
			$link = "http://www.avantbrowser.com/";
			$title = "Avant " . self::detect_browser_version(array('', 'Browser'));
			$code = "avantbrowser";
		} elseif (preg_match('/AppleWebkit/i', $useragent)
			&& preg_match('/Android/i', $useragent)
			&& !preg_match('/Chrome/i', $useragent)) {
			$link = "http://developer.android.com/reference/android/webkit/package-summary.html";
			$title = self::detect_browser_version(array('', 'Android Webkit'));
			$code = "android-webkit";
		} elseif (preg_match('/Chrome|crios/i', $useragent)) {

			// Note: For IE11 Experimental Web Platform Features in Windows 10
			// Spartan? Who knows.
			if (preg_match('/Windows NT 1.+Edge/i', $useragent)) {
				$link = "http://www.microsoft.com/windows/products/winfamily/ie/default.mspx";
				$title = "Internet Explorer " . self::detect_browser_version(array('', 'Spartan'));
				$code = "msie11";
			} else if (preg_match('/crios/i', $useragent)) {
				$link = "http://google.com/chrome/";
				$title = "Google " . self::detect_browser_version(array('', 'CriOS'));
				$code = "chrome";
			} else {
				$link = "http://google.com/chrome/";
				$title = "Google " . self::detect_browser_version(array('', 'Chrome'));
				$code = "chrome";
			}
		} elseif (preg_match('/Safari/i', $useragent)
			&& !preg_match('/Nokia/i', $useragent)) {
			$link = "http://www.apple.com/safari/";
			$title = "Safari";

			if (preg_match('/Version/i', $useragent)) {
				$title = self::detect_browser_version(array('', 'Safari'));
			}

			if (preg_match('/Mobile Safari/i', $useragent)) {
				$title = "Mobile " . $title;
			}

			$code = "safari";
		} elseif (preg_match('/Nokia/i', $useragent) && !preg_match('/Trident/i', $useragent)) {
			$link = "http://www.nokia.com/browser";
			$title = "Nokia Web Browser";
			$code = "maemo";
		} elseif (preg_match('/Firefox/i', $useragent)) {
			$link = "http://www.mozilla.org/";
			$title = self::detect_browser_version(array('', 'Firefox'));
			$code = "firefox";
		} elseif (preg_match('/MSIE/i', $useragent) || preg_match('/Trident/i', $useragent)) {
			$link = "http://www.microsoft.com/windows/products/winfamily/ie/default.mspx";
			$title = "Internet Explorer" . self::detect_browser_version(array('', 'MSIE'));

			if (preg_match('/MSIE[\ |\/]?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				// We have IE10 or older
			} elseif (preg_match('/\ rv:([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				// We have IE11 or newer
			}
			$code = "msie";

			if (count($regmatch) > 0) {
				if ($regmatch[1] >= 11) {
					$code = "msie11";
				} elseif ($regmatch[1] >= 10) {
					$code = "msie10";
				} elseif ($regmatch[1] >= 9) {
					$code = "msie9";
				} elseif ($regmatch[1] >= 7) {
					// also ie8
					$code = "msie7";
				} elseif ($regmatch[1] >= 6) {
					$code = "msie6";
				} elseif ($regmatch[1] >= 4) {
					// also ie5
					$code = "msie4";
				} elseif ($regmatch[1] >= 3) {
					$code = "msie3";
				} elseif ($regmatch[1] >= 2) {
					$code = "msie2";
				}
			}
		} elseif (preg_match('/Mozilla/i', $useragent)) {
			$link = "http://www.mozilla.org/";
			$title = "Mozilla Compatible";

			if (preg_match('/rv:([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title = "Mozilla " . $regmatch[1];
			}

			$code = "mozilla";
		} else {
			$link = "#";
			$title = "Unknown";
			$code = "null";
		}*/
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