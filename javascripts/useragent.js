(function(root) {

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
		'X-Smiles', 'Xiino', 'YaBrowser', 'zBrowser', 'ZipZap'
	].join("|"), "i");

	var defaultBrowserList = {
		"114browser": {
			"title": "{%114Browser%}",
			"image": "114browser"
		},
		"115browser": {
			"title": "{%115Browser%}",
			"image": "115browser"
		},
		"2345explorer": {
			"title": "{%2345Explorer%}",
			"image": "2345explorer"
		},
		"2345chrome": {
			"title": "{%2345Chrome%}",
			"image": "2345chrome"
		},
		"360se": {
			"title": "360 Explorer",
			"image": "360se"
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
			"title": "Abolimba",
			"image": "abolimba"
		},
		"acoo browser": {
			"title": "Acoo {%Browser%}",
			"image": "acoobrowser"
		},
		"alienforce": {
			"title": "{%Alienforce%}",
			"image": "alienforce"
		},
		"amaya": {
			"title": "{%Amaya%}",
			"image": "amaya"
		},
		"amiga-aweb": {
			"title": "Amiga {%AWeb%}",
			"image": "amiga-aweb"
		},
		"antfresco": {
			"title": "ANT {%Fresco%}",
			"image": "antfresco"
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
			"title": "America Online {%Browser%}",
			"image": "aol"
		},
		"amigavoyager": {
			"title": "Amiga {%Voyager%}",
			"image": "amigavoyager"
		},
		"aol": {
			"title": "{%AOL%}",
			"image": "aol"
		},
		"arora": {
			"title": "{%Arora%}",
			"image": "arora"
		},
		"atomicbrowser": {
			"title": "{%AtomicBrowser%}",
			"image": "atomicwebbrowser"
		},
		"barcapro": {
			"title": "{%BarcaPro%}",
			"image": "barca"
		},
		"barca": {
			"title": "{%Barca%}",
			"image": "barca"
		},
		"beamrise": {
			"title": "{%Beamrise%}",
			"image": "beamrise"
		},
		"beonex": {
			"title": "{%Beonex%}",
			"image": "beonex"
		},
		// Baidu Browser Spark does not have own UA.
		"baidubrowser": {
			"title": "{%baidubrowser%}",
			"image": "bidubrowser"
		},
		"bidubrowser": {
			"title": "{%bidubrowser%}",
			"image": "bidubrowser"
		},
		"baiduhd": {
			"title": "{%BaiduHD%}",
			"image": "bidubrowser"
		},
		"blackbird": {
			"title": "{%Blackbird%}",
			"image": "blackbird"
		},
		"blackhawk": {
			"title": "{%BlackHawk%}",
			"image": "blackhawk"
		},
		"blazer": {
			"title": "{%Blazer%}",
			"image": "blazer"
		},
		"bolt": {
			"title": "{%Bolt%}",
			"image": "bolt"
		},
		"bonecho": {
			"title": "{%BonEcho%}",
			"image": "firefoxdevpre"
		},
		"browsex": {
			"title": "BrowseX",
			"image": "browsex"
		},
		"browzar": {
			"title": "{%Browzar%}",
			"image": "browzar"
		},
		"bunjalloo": {
			"title": "{%Bunjalloo%}",
			"image": "bunjalloo"
		},
		"camino": {
			"title": "{%Camino%}",
			"image": "camino"
		},
		"cayman browser": {
			"title": "Cayman {%Browser%}",
			"image": "caymanbrowser"
		},
		"charon": {
			"title": "{%Charon%}",
			"image": "null"
		},
		"cheshire": {
			"title": "{%Cheshire%}",
			"image": "aol"
		},
		"chimera": {
			"title": "{%Chimera%}",
			"image": "null"
		},
		"chromeframe": {
			"title": "{%chromeframe%}",
			"image": "chrome"
		},
		"chromeplus": {
			"title": "{%ChromePlus%}",
			"image": "chromeplus"
		},
		"iron": {
			"title": "SRWare {%Iron%}",
			"image": "srwareiron"
		},
		"chromium": {
			"title": "{%Chromium%}",
			"image": "chromium"
		},
		"classilla": {
			"title": "{%Classilla%}",
			"image": "classilla"
		},
		"coast": {
			"title": "{%Coast%}",
			"image": "coast"
		},
		"columbus": {
			"title": "{%Columbus%}",
			"image": "columbus"
		},
		"cometbird": {
			"title": "{%CometBird%}",
			"image": "cometbird"
		},
		"comodo_dragon": {
			"title": "Comodo {%Dragon%}",
			"image": "comodo-dragon"
		},
		"conkeror": {
			"title": "{%Conkeror%}",
			"image": "conkeror"
		},
		"coolnovo": {
			"title": "{%CoolNovo%}",
			"image": "coolnovo"
		},
		"corom": {
			"title": "{%CoRom%}",
			"image": "corom"
		},
		"crazy browser": {
			"title": "Crazy {%Browser%}",
			"image": "crazybrowser"
		},
		"crmo": {
			"title": "{%CrMo%}",
			"image": "chrome"
		},
		"cruz": {
			"title": "{%Cruz%}",
			"image": "cruz"
		},
		"cyberdog": {
			"title": "{%Cyberdog%}",
			"image": "cyberdog"
		},
		"dplus": {
			"title": "{%DPlus%}",
			"image": "dillo"
		},
		"deepnet explorer": {
			"title": "{%Deepnet Explorer%}",
			"image": "deepnetexplorer"
		},
		"demeter": {
			"title": "{%Demeter%}",
			"image": "demeter"
		},
		"deskbrowse": {
			"title": "{%DeskBrowse%}",
			"image": "deskbrowse"
		},
		"dillo": {
			"title": "{%Dillo%}",
			"image": "dillo"
		},
		"docomo": {
			"title": "{%DoCoMo%}",
			"image": "null"
		},
		"doczilla": {
			"title": "{%DocZilla%}",
			"image": "doczilla"
		},
		"dolfin": {
			"title": "{%Dolfin%}",
			"image": "samsung"
		},
		"dooble": {
			"title": "{%Dooble%}",
			"image": "dooble"
		},
		"doris": {
			"title": "{%Doris%}",
			"image": "doris"
		},
		"dorothy": {
			"title": "{%Dorothy%}",
			"image": "dorothybrowser"
		},
		"dplus": {
			"title": "{%DPlus%}",
			"image": "dillo"
		},
		"edbrowse": {
			"title": "{%Edbrowse%}",
			"image": "edbrowse"
		},
		"elinks": {
			"title": "{%Elinks%}",
			"image": "elinks"
		},
		"element browser": {
			"title": "Element {%Browser%}",
			"image": "elementbrowser"
		},
		"enigma browser": {
			"title": "Enigma {%Browser%}",
			"image": "enigmabrowser"
		},
		"enigmafox": {
			"title": "{%EnigmaFox%}",
			"image": "null"
		},
		"epic": {
			"title": "{%Epic%}",
			"image": "epicbrowser"
		},
		"epiphany": {
			"title": "{%Epiphany%}",
			"image": "epiphany"
		},
		"escape": {
			"title": "{%Escape%}",
			"image": "espialtvbrowser"
		},
		"espial": {
			"title": "{%Espial%}",
			"image": "espialtvbrowser"
		},
		"fennec": {
			"title": "{%Fennec%}",
			"image": "fennec"
		},
		"firebird": {
			"title": "{%Firebird%}",
			"image": "firebird"
		},
		"fireweb navigator": {
			"title": "{%Fireweb Navigator%}",
			"image": "firewebnavigator"
		},
		"flock": {
			"title": "{%Flock%}",
			"image": "flock"
		},
		"fluid": {
			"title": "{%Fluid%}",
			"image": "fluid"
		},
		"galeon": {
			"title": "{%Galeon%}",
			"image": "galeon"
		},
		"globalmojo": {
			"title": "{%GlobalMojo%}",
			"image": "globalmojo"
		},
		"gobrowser": {
			"title": "GO {%Browser%}",
			"image": "gobrowser"
		},
		"google wireless transcoder": {
			"title": "Google Wireless Transcoder",
			"image": "google"
		},
		"gosurf": {
			"title": "{%GoSurf%}",
			"image": "gosurf"
		},
		"granparadiso": {
			"title": "{%GranParadiso%}",
			"image": "firefoxdevpre"
		},
		"greenbrowser": {
			"title": "{%GreenBrowser%}",
			"image": "greenbrowser"
		},
		"hana": {
			"title": "{%Hana%}",
			"image": "hana"
		},
		"hotjava": {
			"title": "{%HotJava%}",
			"image": "hotjava"
		},
		"hv3": {
			"title": "{%Hv3%}",
			"image": "hv3"
		},
		"hydra browser": {
			"title": "Hydra Browser",
			"image": "hydrabrowser"
		},
		"iris": {
			"title": "{%Iris%}",
			"image": "iris"
		},
		"ibm webexplorer": {
			"title": "IBM {%WebExplorer%}",
			"image": "ibmwebexplorer"
		},
		"juzibrowser": {
			"title": "JuziBrowser",
			"image": "juzibrowser"
		},
		"miuibrowser": {
			"title": "{%MiuiBrowser%}",
			"image": "miuibrowser"
		},
		"mxnitro": {
			"title": "{%MxNitro%}",
			"image": "mxnitro"
		},
		"ibrowse": {
			"title": "{%IBrowse%}",
			"image": "ibrowse"
		},
		"icab": {
			"title": "{%iCab%}",
			"image": "icab"
		},
		"icebrowser": {
			"title": "{%IceBrowser%}",
			"image": "icebrowser"
		},
		"iceape": {
			"title": "{%Iceape%}",
			"image": "iceape"
		},
		"icecat": {
			"title": "GNU {%IceCat%}",
			"image": "icecat"
		},
		"icedragon": {
			"title": "{%IceDragon%}",
			"image": "icedragon"
		},
		"iceweasel": {
			"title": "{%IceWeasel%}",
			"image": "iceweasel"
		},
		"inet browser": {
			"title": "iNet {%Browser%}",
			"image": "null"
		},
		"irider": {
			"title": "{%iRider%}",
			"image": "irider"
		},
		"internetsurfboard": {
			"title": "{%InternetSurfboard%}",
			"image": "internetsurfboard"
		},
		"jasmine": {
			"title": "{%Jasmine%}",
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
		"kapiko": {
			"title": "{%Kapiko%}",
			"image": "kapiko"
		},
		"kazehakase": {
			"title": "{%Kazehakase%}",
			"image": "kazehakase"
		},
		"strata": {
			"title": "Kirix {%Strata%}",
			"image": "kirix-strata"
		},
		"kkman": {
			"title": "{%KKman%}",
			"image": "kkman"
		},
		"kinza": {
			"title": "{%Kinza%}",
			"image": "kinza"
		},
		"kmail": {
			"title": "{%KMail%}",
			"image": "kmail"
		},
		"kmlite": {
			"title": "{%KMLite%}",
			"image": "kmeleon"
		},
		"konqueror": {
			"title": "{%Konqueror%}",
			"image": "konqueror"
		},
		"kylo": {
			"title": "{%Kylo%}",
			"image": "kylo"
		},
		"lbrowser": {
			"title": "{%LBrowser%}",
			"image": "lbrowser"
		},
		"links": {
			"title": "{%Links%}",
			"image": "null"
		},
		"lbbrowser": {
			"title": "Liebao Browser",
			"image": "lbbrowser"
		},
		"liebaofast": {
			"title": "{%Liebaofast%}",
			"image": "lbbrowser"
		},
		"leechcraft": {
			"title": "LeechCraft",
			"image": "null"
		},
		"lobo": {
			"title": "{%Lobo%}",
			"image": "lobo"
		},
		"lolifox": {
			"title": "{%lolifox%}",
			"image": "lolifox"
		},
		"lorentz": {
			"title": "{%Lorentz%}",
			"image": "firefoxdevpre"
		},
		"lunascape": {
			"title": "{%Lunascape%}",
			"image": "lunascape"
		},
		"lynx": {
			"title": "{%Lynx%}",
			"image": "lynx"
		},
		"madfox": {
			"title": "{%Madfox%}",
			"image": "madfox"
		},
		"maemo browser": {
			"title": "{%Maemo Browser%}",
			"image": "maemo"
		},
		"maxthon": {
			"title": "{%Maxthon%}",
			"image": "maxthon"
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
		"midori": {
			"title": "{%Midori%}",
			"image": "midori"
		},
		"minefield": {
			"title": "{%Minefield%}",
			"image": "minefield"
		},
		"minibrowser": {
			"title": "{%MiniBrowser%}",
			"image": "minibrowser"
		},
		"minimo": {
			"title": "{%Minimo%}",
			"image": "minimo"
		},
		"mosaic": {
			"title": "{%Mosaic%}",
			"image": "mosaic"
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
			"title": "{%MyIE2%}",
			"image": "myie2"
		},
		"namoroka": {
			"title": "{%Namoroka%}",
			"image": "firefoxdevpre"
		},
		"navigator": {
			"title": "Netscape {%Navigator%}",
			"image": "netscape"
		},
		"netbox": {
			"title": "{%NetBox%}",
			"image": "netbox"
		},
		"netcaptor": {
			"title": "{%NetCaptor%}",
			"image": "netcaptor"
		},
		"netfront": {
			"title": "{%NetFront%}",
			"image": "netfront"
		},
		"netnewswire": {
			"title": "{%NetNewsWire%}",
			"image": "netnewswire"
		},
		"netpositive": {
			"title": "{%NetPositive%}",
			"image": "netpositive"
		},
		"netscape": {
			"title": "{%Netscape%}",
			"image": "netscape"
		},
		"netsurf": {
			"title": "{%NetSurf%}",
			"image": "netsurf"
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
		"obigo": {
			"title": "{%Obigo%}",
			"image": "obigo"
		},
		"offbyone": {
			"title": "Off By One",
			"image": "offbyone"
		},
		"omniweb": {
			"title": "{%OmniWeb%}",
			"image": "omniweb"
		},
		"onebrowser": {
			"title": "{%OneBrowser%}",
			"image": "onebrowser"
		},
		"orca": {
			"title": "{%Orca%}",
			"image": "orca"
		},
		"oregano": {
			"title": "{%Oregano%}",
			"image": "oregano"
		},
		"origyn web browser": {
			"title": "Oregano Web Browser",
			"image": "owb"
		},
		"osb-browser": {
			"title": "{%osb-browser%}",
			"image": "null"
		},
		"otter": {
			"title": "{%Otter%}",
			"image": "otter"
		},
		" pre/": {
			"title": "Palm {%Pre%}",
			"image": "palmpre"
		},
		"palemoon": {
			"title": "Pale {%Moon%}",
			"image": "palemoon"
		},
		"patriott::browser": {
			"title": "Patriott {%Browser%}",
			"image": "patriott"
		},
		"perk": {
			"title": "{%Perk%}",
			"image": "perk"
		},
		"phaseout": {
			"title": "Phaseout",
			"image": "phaseout"
		},
		"phoenix": {
			"title": "{%Phoenix%}",
			"image": "phoenix"
		},
		"playstation 4": {
			"title": "PS4 Web Browser",
			"image": "webkit"
		},
		"podkicker": {
			"title": "{%Podkicker%}",
			"image": "podkicker"
		},
		"podkicker pro": {
			"title": "{%Podkicker Pro%}",
			"image": "podkicker"
		},
		"pogo": {
			"title": "{%Pogo%}",
			"image": "pogo"
		},
		"polaris": {
			"title": "{%Polaris%}",
			"image": "polaris"
		},
		"polarity": {
			"title": "{%Polarity%}",
			"image": "polarity"
		},
		"prism": {
			"title": "{%Prism%}",
			"image": "prism"
		},
		"qqbrowser": {
			"title": "{%QQBrowser%}",
			"image": "qqbrowser"
		},
		"qq": {
			"title": "{%QQ%}",
			"image": "qq"
		},
		"qtweb internet browser": {
			"title": "QtWeb Internet {%Browser%}",
			"image": "qtwebinternetbrowser"
		},
		"qtcarbrowser": {
			"title": "{%qtcarbrowser%}",
			"image": "tesla"
		},
		"qupzilla": {
			"title": "{%QupZilla%}",
			"image": "qupzilla"
		},
		"rekonq": {
			"title": "rekonq",
			"image": "rekonq"
		},
		"retawq": {
			"title": "{%retawq%}",
			"image": "terminal"
		},
		"rockmelt": {
			"title": "{%RockMelt%}",
			"image": "rockmelt"
		},
		"ryouko": {
			"title": "{%Ryouko%}",
			"image": "ryouko"
		},
		"saayaa": {
			"title": "SaaYaa Explorer",
			"image": "saayaa"
		},
		"seamonkey": {
			"title": "{%SeaMonkey%}",
			"image": "seamonkey"
		},
		"semc-browser": {
			"title": "{%SEMC-Browser%}",
			"image": "semcbrowser"
		},
		"semc-java": {
			"title": "{%SEMC-java%}",
			"image": "semcbrowser"
		},
		"shiira": {
			"title": "{%Shiira%}",
			"image": "shiira"
		},
		"shiretoko": {
			"title": "{%Shiretoko%}",
			"image": "firefoxdevpre"
		},
		"sitekiosk": {
			"title": "{%SiteKiosk%}",
			"image": "sitekiosk"
		},
		"skipstone": {
			"title": "{%SkipStone%}",
			"image": "skipstone"
		},
		"skyfire": {
			"title": "{%Skyfire%}",
			"image": "skyfire"
		},
		"sleipnir": {
			"title": "{%Sleipnir%}",
			"image": "sleipnir"
		},
		"silk": {
			"title": "Amazon {%Silk%}",
			"image": "silk"
		},
		"slimboat": {
			"title": "{%SlimBoat%}",
			"image": "slimboat"
		},
		"slimbrowser": {
			"title": "{%SlimBrowser%}",
			"image": "slimbrowser"
		},
		"superbird": {
			"title": "{%Superbird%}",
			"image": "superbird"
		},
		"smarttv": {
			"title": "{%SmartTV%}",
			"image": "maplebrowser"
		},
		"songbird": {
			"title": "{%Songbird%}",
			"image": "songbird"
		},
		"stainless": {
			"title": "{%Stainless%}",
			"image": "stainless"
		},
		"substream": {
			"title": "{%SubStream%}",
			"image": "substream"
		},
		"sulfur": {
			"title": "Flock {%Sulfur%}",
			"image": "flock"
		},
		"sundance": {
			"title": "{%Sundance%}",
			"image": "sundance"
		},
		"sunrise": {
			"title": "{%Sundial%}",
			"image": "sundial"
		},
		"sunrise": {
			"title": "{%Sunrise%}",
			"image": "sunrise"
		},
		"surf": {
			"title": "{%Surf%}",
			"image": "surf"
		},
		"swiftfox": {
			"title": "{%Swiftfox%}",
			"image": "swiftfox"
		},
		"swiftweasel": {
			"title": "{%Swiftweasel%}",
			"image": "swiftweasel"
		},
		"sylera": {
			"title": "{%Sylera%}",
			"image": "null"
		},
		"taobrowser": {
			"title": "{%TaoBrowser%}",
			"image": "taobrowser"
		},
		"tear": {
			"title": "Tear",
			"image": "tear"
		},
		"teashark": {
			"title": "{%TeaShark%}",
			"image": "teashark"
		},
		"teleca": {
			"title": "{%Teleca%}",
			"image": "obigo"
		},
		"tencenttraveler": {
			"title": "Tencent {%Traveler%}",
			"image": "tencenttraveler"
		},
		"tenfourfox": {
			"title": "{%TenFourFox%}",
			"image": "tenfourfox"
		},
		"theworld": {
			"title": "TheWorld Browser",
			"image": "theworld"
		},
		"thunderbird": {
			"title": "{%Thunderbird%}",
			"image": "thunderbird"
		},
		"tizen": {
			"title": "{%Tizen%}",
			"image": "tizen"
		},
		"tjusig": {
			"title": "{%Tjusig%}",
			"image": "tjusig"
		},
		"ubrowser": {
			"title": "{%UBrowser%}",
			"image": "ucbrowser"
		},
		"ucbrowser": {
			"title": "{%UCBrowser%}",
			"image": "ucbrowser"
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
			"title": "{%UltraBrowser%}",
			"image": "ultrabrowser"
		},
		"up.browser": {
			"title": "{%UP.Browser%}",
			"image": "openwave"
		},
		"up.link": {
			"title": "{%UP.Link%}",
			"image": "openwave"
		},
		"usejump": {
			"title": "{%Usejump%}",
			"image": "usejump"
		},
		"uzardweb": {
			"title": "{%uZardWeb%}",
			"image": "uzardweb"
		},
		"uzard": {
			"title": "{%uZard%}",
			"image": "uzardweb"
		},
		"uzbl": {
			"title": "uzbl",
			"image": "uzbl"
		},
		"vimprobable": {
			"title": "{%Vimprobable%}",
			"image": "null"
		},
		"vivaldi": {
			"title": "{%Vivaldi%}",
			"image": "vivaldi"
		},
		"vonkeror": {
			"title": "{%Vonkeror%}",
			"image": "null"
		},
		"w3m": {
			"title": "{%W3M%}",
			"image": "w3m"
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
			"title": "{%WaterFox%}",
			"image": "waterfox"
		},
		"webianshell": {
			"title": "Webian {%Shell%}",
			"image": "webianshell"
		},
		"webrender": {
			"title": "Webrender",
			"image": "webrender"
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
			"title": "wKiosk",
			"image": "wkiosk"
		},
		"worldwideweb": {
			"title": "{%WorldWideWeb%}",
			"image": "worldwideweb"
		},
		"wyzo": {
			"title": "{%Wyzo%}",
			"image": "Wyzo"
		},
		"x-smiles": {
			"title": "{%X-Smiles%}",
			"image": "x-smiles"
		},
		"xiino": {
			"title": "{%Xiino%}",
			"image": "null"
		},
		"yabrowser": {
			"title": "Yandex.{%Browser%}",
			"image": "yandex"
		},
		"zbrowser": {
			"title": "{%zBrowser%}",
			"image": "zbrowser"
		},
		"zipzap": {
			"title": "{%ZipZap%}",
			"image": "zipzap"
		},
		"abrowse": {
			"title": "ABrowse {%Browser%}",
			"image": "abrowse"
		},
		"firefox": {
			"title": "{%Firefox%}",
			"image": "firefox"
		},
		"none": {
			"title": "Unknown",
			"image": "unknown"
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

		if ((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera labs") && /Version/i.test(ret.ua)) {
			start = "Version";
		} else if ((lowerTitle == "opera" || lowerTitle == "opera next" || lowerTitle == "opera developer") && /OPR/i.test(ret.ua)) {
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
		} else if (lowerTitle == "ucweb" && /UCBrowser/i.test(ret.ua)) {
			start = "UCBrowser";
		} else if (lowerTitle == "msie" && /\ rv:([.0-9a-zA-Z]+)/i.test(ret.ua)) {
			// We have IE11 or newer
			start = " rv";
		} else if (lowerTitle == "spartan") {
			start = "edge";
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

		if (lowerTitle == "msie" && ret.version == "7.0" && /Trident\/4.0/i.test(ret.ua)) {
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
			if (ret.version == "Firefox") {
				ret.version = "";
			}
			return ret.name + " " + ret.version;
		} else {
			return ret.name + " " + ret.version;
		}
	}

	BROWSER.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"version": "",
			"full": "",
			"image": "",
			"dir": "browser"
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
				ret.full = "Google " + getVersion(ret, 'CriOS')
				ret.image = "chrome";
			} else {
				ret.full = "Google " + getVersion(ret, 'Chrome')
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
			ret.full = ret.name;
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
		root.USERAGENT_BROWSER = function() {}
		USERAGENT_BROWSER.prototype.analyze = BROWSER.analyze;
	}

})(this);;(function(root) {

	var analyze = function(ret) {

		// meizu
		if (/(MEIZU (MX|M9)|M030)|MX-3/i.test(ret.ua)) {
			ret.name = "Meizu";
			ret.image = "meizu";
		}

		// xiaomi
		else if (/MI-ONE|MI \d|HM NOTE/i.test(ret.ua)) {
			ret.name = "Xiaomi";

			if (rep = ret.ua.match(/HM NOTE ([A-Z0-9]+)/i)) {
				ret.name += " HM-NOTE " + rep[1];
			} else if (rep = ret.ua.match(/MI ([A-Z0-9]+)/i)) {
				ret.name += " " + rep[1];
			} else if (rep = ret.ua.match(/MI-ONE/i)) {
				ret.name += " 1";
			}

			ret.image = "xiaomi";
		}

		// BlackBerry
		else if (/BlackBerry/i.test(ret.ua)) {
			ret.name = "BlackBerry";

			if (rep = ret.ua.match(/blackberry ?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "blackberry";
		}
		// Coolpad
		else if (/Coolpad/i.test(ret.ua)) {
			ret.name = "CoolPad";

			if (rep = ret.ua.match(/CoolPad( |\_)?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[2];
			}

			ret.image = "coolpad";
		}

		// Dell
		else if (/Dell Streak/i.test(ret.ua)) {
			ret.name = "Dell Streak";
			ret.image = "dell";
		} else if (/Dell/i.test(ret.ua)) {
			ret.name = "Dell";
			ret.image = "dell";
		}

		// HTC
		else if (/Desire/i.test(ret.ua)) {
			ret.name = "HTC Desire";
			ret.image = "htc";
		} else if (/Rhodium/i.test(ret.ua) || /HTC[_|\ ]Touch[_|\ ]Pro2/i.test(ret.ua) || /WMD-50433/i.test(ret.ua)) {
			ret.name = "HTC Touch Pro2";
			ret.image = "htc";
		} else if (/HTC[_|\ ]Touch[_|\ ]Pro/i.test(ret.ua)) {
			ret.name = "HTC Touch Pro";
			ret.image = "htc";
		} else if (/Windows Phone .+ by HTC/i.test(ret.ua)) {
			ret.name = "HTC";
			if (rep = ret.ua.match(/Windows Phone ([0-9A-Za-z]+) by HTC/i)) {
				ret.name += " " + rep[1];
			}
			ret.image = "htc";
		} else if (/HTC/i.test(ret.ua)) {
			ret.name = "HTC";

			if (rep = ret.ua.match(/HTC[\ |_|-]?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			} else if (rep = ret.ua.match(/HTC([._0-9a-zA-Z]+)/i)) {
				ret.name += rep[1].repalce(/_/g, " ");
			}

			ret.image = "htc";
		}
		// huawei
		else if (/Huawei/i.test(ret.ua)) {
			ret.name = "Huawei";
			ret.image = "huawei";
			if (rep = ret.ua.match(/HUAWEI( |\_)?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[2];
			}
		}
		// Kindle
		else if (/Kindle/i.test(ret.ua)) {
			ret.name = "Kindle";

			if (rep = ret.ua.match(/Kindle\/([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "kindle";
		}
		// K-Touch
		else if (/k-touch/i.test(ret.ua)) {
			ret.name = "K-Touch";
			ret.image = "k-touch";
			if (rep = ret.ua.match(/k-touch[ _]([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}
		}
		// Lenovo
		else if (/Lenovo|lepad/i.test(ret.ua)) {
			ret.name = "Lenovo";

			if (rep = ret.ua.match(/Lenovo[\ |\-|\/|\_]([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			} else if (/lepad/i.test(ret.ua)) {
				ret.name += ' LePad';
			}

			ret.image = "lenovo";

		}
		// LG
		else if (/LG/i.test(ret.ua)) {
			ret.name = "LG";

			if (rep = ret.ua.match(/LGE?([- \/])([0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[2];
			}

			ret.image = "lg";
		}

		// Motorola
		else if (/\ Droid/i.test(ret.ua)) {
			ret.name += "Motorola Droid";
			ret.image = "motorola";
		} else if (/XT720/i.test(ret.ua)) {
			ret.name += "Motorola XT720";
			ret.image = "motorola";
		} else if (/MOT-/i.test(ret.ua) || /MIB/i.test(ret.ua)) {
			ret.name = "Motorola";

			if (rep = ret.ua.match(/MOTO([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}
			if (rep = ret.ua.match(/MOT-([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "motorola";
		} else if (/XOOM/i.test(ret.ua)) {
			ret.name += "Motorola Xoom";
			ret.image = "motorola";
		}

		// Nintendo
		else if (/Nintendo/i.test(ret.ua)) {
			ret.name = "Nintendo";
			ret.image = "nintendo";

			if (/Nintendo DSi/i.test(ret.ua)) {
				ret.name += " DSi";
				ret.image = "nintendodsi";
			} else if (/Nintendo DS/i.test(ret.ua)) {
				ret.name += " DS";
				ret.image = "nintendods";
			} else if (/Nintendo WiiU/i.test(ret.ua)) {
				ret.name += " Wii U";
				ret.image = "nintendowiiu";
			} else if (/Nintendo Wii/i.test(ret.ua)) {
				ret.name += " Wii";
				ret.image = "nintendowii";
			}
		}

		// Nokia
		else if (/Nokia/i.test(ret.ua)) {
			ret.name = "Nokia";
			ret.image = "nokia";
			if (rep = ret.ua.match(/Nokia(E|N| )?([0-9]+)/i)) {
				if (/IEMobile|WPDesktop/i.test(ret.ua)) {
					// Nokia Windows Phone
					if (rep[2] == '909') {
						rep[2] = '1020';
					}
					// Lumia 1020
					ret.name += " Lumia " + rep[2];
				} else {
					ret.name += " " + (typeof rep[1] === "undefined" ? "" : rep[1]) + rep[2];
				}
			} else if (rep = ret.ua.match(/Lumia ([0-9]+)/i)) {
				ret.name += " Lumia " + rep[1];
			}
		}

		// Onda
		else if (/onda/i.test(ret.ua)) {
			ret.name = "Onda";
			ret.image = "onda";
		}
		// Onda
		else if (/oppo/i.test(ret.ua)) {
			ret.name = "OPPO";
			ret.image = "oppo";
		}

		// Palm
		else if (/\ Pixi\//i.test(ret.ua)) {
			ret.name = "Palm Pixi";
			ret.image = "palm";
		} else if (/\ Pre\//i.test(ret.ua)) {
			ret.name = "Palm Pre";
			ret.image = "palm";
		} else if (/Palm/i.test(ret.ua)) {
			ret.name = "Palm";
			ret.image = "palm";
		} else if (/webos/i.test(ret.ua)) {
			ret.name = "Palm";
			ret.image = "palm";
		}

		// Playstation
		else if (/PlayStation/i.test(ret.ua)) {
			ret.name = "PlayStation";

			if (/[PS|PlayStation\ ]3/i.test(ret.ua)) {
				ret.name += " 3";
			} else if (/[PS|PlayStation\ ]4/i.test(ret.ua)) {
				ret.name += " 4";
			} else if (/PlayStation Portable|PSP/i.test(ret.ua)) {
				ret.name += " Portable";
			} else if (/PlayStation Vita|PSVita/i.test(ret.ua)) {
				ret.name += " Vita";
			} else {}

			ret.image = "playstation";
		}

		// Samsung
		else if (/Galaxy Nexus/i.test(ret.ua)) {
			ret.name = "Galaxy Nexus";
			ret.image = "samsung";
		} else if (/Smart-?TV/i.test(ret.ua)) {
			ret.name = "Samsung Smart TV";
			ret.image = "samsung";
		} else if (/GT-/i.test(ret.ua)) {
			ret.name = "Samsung";

			if (rep = ret.ua.match(/GT-([.\-0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "samsung";
		} else if (/Samsung/i.test(ret.ua)) {
			ret.name = "Samsung";

			if (rep = ret.ua.match(/Samsung-([.\-0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "samsung";
		}

		// Sony Ericsson
		else if (/SonyEricsson/i.test(ret.ua)) {
			ret.name = "SonyEricsson";

			if (rep = ret.ua.match(/SonyEricsson([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}

			ret.image = "sonyericsson";
		}

		// vivo
		else if (/vivo/i.test(ret.ua)) {
			ret.name = "vivo";
			ret.image = "vivo";
			if (rep = ret.ua.match(/VIVO ([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}
		}

		// Xperia
		else if (/Xperia/i.test(ret.ua)) {
			ret.name = "Xperia";
			ret.image = "xperia";
			if (rep = ret.ua.match(/Xperia(-T)?( |\_|\-)?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[3];
			}
		}
		// ZTE
		else if (/zte/i.test(ret.ua)) {
			ret.name = "ZTE";
			ret.image = "zte";
			if (rep = ret.ua.match(/ZTE(-T)?( |\_|\-)?([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[3];
			}
		}

		// Ubuntu Phone/Tablet
		else if (/Ubuntu\;\ Mobile/i.test(ret.ua)) {
			ret.name = "Ubuntu Phone";
			ret.image = "ubuntutouch";
		} else if (/Ubuntu\;\ Tablet/i.test(ret.ua)) {
			ret.name = "Ubuntu Tablet";
			ret.image = "ubuntutouch";
		}

		// Google
		else if (/Nexus/i.test(ret.ua)) {
			ret.name = "Nexus";
			ret.image = "google-nexusone";
			if (rep = ret.ua.match(/Nexus ([.0-9a-zA-Z]+)/i)) {
				ret.name += " " + rep[1];
			}
		}

		// Apple
		else if (/iPad/i.test(ret.ua)) {
			ret.name = "iPad";

			if (rep = ret.ua.match(/CPU\ OS\ ([._0-9a-zA-Z]+)/i)) {
				ret.name += " iOS " + rep[1].replace(/_/g, ".");
			}

			ret.image = "ipad";
		} else if (/iPod/i.test(ret.ua)) {
			ret.name = "iPod";

			if (rep = ret.ua.match(/iPhone\ OS\ ([._0-9a-zA-Z]+)/i)) {
				ret.name += " iOS " + rep[1].replace(/_/g, ".");
			}

			ret.image = "iphone";
		} else if (/iPhone/i.test(ret.ua)) {
			ret.name = "iPhone";

			if (rep = ret.ua.match(/iPhone\ OS\ ([._0-9a-zA-Z]+)/i)) {
				ret.name += " iOS " + rep[1].replace(/_/g, ".");
			}

			ret.image = "iphone";
		}

		//Some special UA..
		//is MSIE
		else if (/MSIE.+?Windows.+?Trident/i.test(ret.ua) && !/Windows ?Phone/i.test(ret.ua)) {
			ret.name = "";
			ret.image = "null";
		}
		// No Device match
		else {
			ret.image = "null";
		}
	}



	var DEVICE = {};

	DEVICE.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"image": "",
			"dir": "device"
		}
		analyze(ret);
		ret.full = ret.name;
		return ret;
	}


	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = DEVICE;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return DEVICE;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = DEVICE;
		});
	} else {
		root.USERAGENT_DEVICE = function() {}
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}

})(this);;(function(root) {

	var analyzeWindows = function(ret) {
		ret.full = "Windows";
		ret.name = "Windows";
		ret.image = 'win-2';
		ret.version = "";

		if (/Windows Phone|WPDesktop|ZuneWP7|WP7/i.test(ret.ua)) {
			ret.name += ' Phone';
			ret.image = "windowsphone";

			var rep = ret.ua.match(/Windows Phone (OS )?([0-9\.]+)/i);
			if (rep !== null) {
				ret.version = rep[2];
				if (parseInt(ret.version) == 7) {
					ret.image = "wp7";
				}
			}
			ret.full = ret.name + (ret.version == "" ? '' : " " + ret.version);
		} else if (/Windows NT/i.test(ret.ua)) {
			ret.name = "Windows NT";
			var rep = ret.ua.match(/Windows NT ([.0-9]+)/i);
			if (rep !== null) {
				switch (rep[1]) {
					case "6.4":
					case "10.0":
						ret.full = "Windows 10";
						ret.image = "win-5";
						break;
					case "6.3":
						ret.full = "Windows 8.1";
						ret.image = "win-5";
						break;
					case "6.2":
						ret.full = "Windows 8";
						ret.image = "win-5";
						break;
					case "6.1":
						ret.full = "Windows 7";
						ret.image = "win-4";
						break;
					case "6.0":
						ret.full = "Windows Vista";
						ret.image = "win-3";
						break;
					case "5.2":
						ret.full = "Windows Server 2003";
						ret.image = "win-2";
						break;
					case "5.1":
						ret.full = "Windows XP";
						ret.image = "win-2";
						break;
					case "5.01":
						ret.full = "Windows 2000 Service Pack 1";
						ret.image = "win-1";
						break;
					case "5.0":
						ret.full = "Windows 2000";
						ret.image = "win-1";
						break;
					case "4.0":
						ret.full = "Windows NT 4.0";
						ret.image = "win-1";
						break;
					case "3.51":
						ret.full = "Windows NT 3.11";
						ret.image = "win-1";
						break;
				}
				ret.version = rep[1];
			} else {

			}
		} else if (/Windows XP/i.test(ret.ua)) {
			ret.version = "5.1";
			ret.name = "Windows NT";
			ret.full = "Windows XP";
			ret.image = "win-2";
			// @codeCoverageIgnoreStart
		} else if (/Windows 2000/i.test(ret.ua)) {
			ret.version = "5.0";
			ret.name = "Windows NT";
			ret.full = "Windows 2000";
			ret.image = "win-1";
		} else if (/WinNT4.0/i.test(ret.ua)) {
			ret.version = "4.0";
			ret.name = "Windows NT";
			ret.full = "Windows NT 4.0";
			ret.image = "win-1";
		} else if (/WinNT3.51/i.test(ret.ua)) {
			ret.version = "3.51";
			ret.name = "Windows NT";
			ret.full = "Windows NT 3.11";
			ret.image = "win-1";
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
			// @codeCoverageIgnoreStart
		} else if (/WM5/i.test(ret.ua)) {
			ret.name += " Mobile";
			ret.version = "5";
			ret.full = ret.name + " " + ret.version;
			ret.image = "win-phone";
		} else if (/WindowsMobile/i.test(ret.ua)) {
			ret.name += " Mobile";
			ret.full = ret.name;
			ret.image = "win-phone";
		}
		// @codeCoverageIgnoreEnd
	}


	var analyzeLinux = function(ret) {
		ret.name = '';
		ret.image = '';
		ret.version = '';
		var rep = null;

		if (/[^A-Za-z]Arch/i.test(ret.ua)) {
			ret.name = "Arch Linux";
			ret.image = "archlinux";
		} else if (/CentOS/i.test(ret.ua)) {
			ret.name = "CentOS";

			if (rep = ret.ua.match(/.el([.0-9a-zA-Z]+).centos/i)) {
				ret.version = rep[1];
			}

			ret.image = "centos";
			// @codeCoverageIgnoreStart
		} else if (/Chakra/i.test(ret.ua)) {
			ret.name = "Chakra Linux";
			ret.image = "chakra";
			// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Crunchbang/i.test(ret.ua)) {
			ret.name = "Crunchbang";
			ret.image = "crunchbang";
			// @codeCoverageIgnoreEnd
		} else if (/Debian/i.test(ret.ua)) {
			ret.name = "Debian GNU/Linux";
			ret.image = "debian";
			// @codeCoverageIgnoreStart
		} else if (/Edubuntu/i.test(ret.ua)) {
			ret.name = "Edubuntu";

			if (rep = ret.ua.match(/Edubuntu[\/|\ ]([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			if (parseInt(ret.version) < 10) {
				ret.image = "edubuntu-1";
			} else {
				ret.image = "edubuntu-2";
			}

			// @codeCoverageIgnoreEnd
		} else if (/Fedora/i.test(ret.ua)) {
			ret.name = "Fedora";

			if (rep = ret.ua.match(/.fc([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "fedora";
		} else if (/Foresight\ Linux/i.test(ret.ua)) {
			ret.name = "Foresight Linux";

			if (rep = ret.ua.match(/Foresight\ Linux\/([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "foresight";
		} else if (/Gentoo/i.test(ret.ua)) {
			ret.name = "Gentoo";
			ret.image = "gentoo";

		} else if (/Kanotix/i.test(ret.ua)) {
			ret.name = "Kanotix";
			ret.image = "kanotix";
			// @codeCoverageIgnoreStart
		} else if (/Knoppix/i.test(ret.ua)) {
			ret.name = "Knoppix";
			ret.image = "knoppix";
			// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Kubuntu/i.test(ret.ua)) {
			ret.name = "Kubuntu";

			if (rep = ret.ua.match(/Kubuntu[\/|\ ]([.0-9]+)/i)) {
				ret.version = rep[1];

				if (parseInt(ret.version) < 10) {
					ret.image = "kubuntu-1";
				} else {
					ret.image = "kubuntu-2";
				}
			} else {
				ret.image = "kubuntu-2";
			}

			// @codeCoverageIgnoreEnd
		} else if (/LindowsOS/i.test(ret.ua)) {
			ret.name = "LindowsOS";
			ret.image = "lindowsos";

		} else if (/Linspire/i.test(ret.ua)) {
			ret.name = "Linspire";
			ret.image = "lindowsos";

		} else if (/Linux\ Mint/i.test(ret.ua)) {
			ret.name = "Linux Mint";

			if (rep = ret.ua.match(/Linux\ Mint\/([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "linuxmint";
			// @codeCoverageIgnoreStart

		} else if (/Lubuntu/i.test(ret.ua)) {
			ret.name = "Lubuntu";

			if (rep = ret.ua.match(/Lubuntu[\/|\ ]([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			if (parseInt(ret.version) < 10) {
				ret.image = "lubuntu-1";
			} else {
				ret.image = "lubuntu-2";
			}

			// @codeCoverageIgnoreEnd

			// @codeCoverageIgnoreStart

		} else if (/Mageia/i.test(ret.ua)) {
			ret.name = "Mageia";
			ret.image = "mageia";
			// @codeCoverageIgnoreEnd
		} else if (/Mandriva/i.test(ret.ua)) {
			ret.name = "Mandriva";
			// @codeCoverageIgnoreStart

			if (rep = ret.ua.match(/mdv([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}
			// @codeCoverageIgnoreEnd

			ret.image = "mandriva";

		} else if (/moonOS/i.test(ret.ua)) {
			ret.name = "moonOS";

			if (rep = ret.ua.match(/moonOS\/([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "moonos";
		} else if (/Nova/i.test(ret.ua)) {
			ret.name = "Nova";

			if (rep = ret.ua.match(/Nova[\/|\ ]([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "nova";
			// @codeCoverageIgnoreStart

		} else if (/Oracle/i.test(ret.ua)) {
			ret.name = "Oracle";

			if (rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)) {
				ret.name += " Enterprise Linux";
				ret.version = rep[1].replace(/_/g, ".");
			} else {
				ret.name += " Linux";
			}
			ret.image = "oracle";
			// @codeCoverageIgnoreEnd

		} else if (/Pardus/i.test(ret.ua)) {
			ret.name = "Pardus";
			ret.image = "pardus";
			// @codeCoverageIgnoreStart

		} else if (/PCLinuxOS/i.test(ret.ua)) {
			ret.name = "PCLinuxOS";

			if (rep = ret.ua.match(/PCLinuxOS\/[.\-0-9a-zA-Z]+pclos([.\-0-9a-zA-Z]+)/i)) {
				ret.version = rep[1].replace(/_/g, ".");
			}

			ret.image = "pclinuxos";
			// @codeCoverageIgnoreEnd

		} else if (/Red\ Hat/i.test(ret.ua) || /RedHat/i.test(ret.ua)) {
			ret.name = "Red Hat";

			if (rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)) {
				ret.name += " Enterprise Linux";
				ret.version = rep[1].replace(/_/g, ".");
			}

			ret.image = "red-hat";
			// @codeCoverageIgnoreStart

		} else if (/Rosa/i.test(ret.ua)) {
			ret.name = "Rosa Linux";
			ret.image = "rosa";
			// @codeCoverageIgnoreEnd

			// @codeCoverageIgnoreStart

		} else if (/Sabayon/i.test(ret.ua)) {
			ret.name = "Sabayon Linux";
			ret.image = "sabayon";
			// @codeCoverageIgnoreEnd

		} else if (/Slackware/i.test(ret.ua)) {
			ret.name = "Slackware";
			ret.image = "slackware";
		} else if (/Suse/i.test(ret.ua)) {
			ret.name = "openSUSE";
			ret.image = "suse";
			// @codeCoverageIgnoreStart
		} else if (/VectorLinux/i.test(ret.ua)) {
			ret.name = "VectorLinux";
			ret.image = "vectorlinux";
			// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Venenux/i.test(ret.ua)) {
			ret.name = "Venenux GNU Linux";
			ret.image = "venenux";
			// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Xandros/i.test(ret.ua)) {
			ret.name = "Xandros";
			ret.image = "xandros";
			// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Xubuntu/i.test(ret.ua)) {
			ret.name = "Xubuntu";

			if (rep = ret.ua.match(/Xubuntu[\/|\ ]([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			if (parseInt(ret.version) < 10) {
				ret.image = "xubuntu-1";
			} else {
				ret.image = "xubuntu-2";
			}

			// @codeCoverageIgnoreEnd
		} else if (/Zenwalk/i.test(ret.ua)) {
			ret.name = "Zenwalk GNU Linux";
			ret.image = "zenwalk";
		}

		// Pulled out of order to help ensure better detection for above platforms
		else if (/Ubuntu/i.test(ret.ua)) {
			ret.name = "Ubuntu";

			if (rep = ret.ua.match(/Ubuntu[\/|\ ]([.0-9]+[.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
				if (parseInt(ret.version) < 10) {
					ret.image = "ubuntu-1";
				}
			}

			if (ret.image == '') {
				ret.image = "ubuntu-2";
			}

		} else {
			ret.name = "GNU/Linux";
			ret.image = "linux";
		}

		ret.full = ret.name;
		if (ret.version != "") {
			ret.full += " " + ret.version;
		}
	}



	var analyzeOther = function(ret) {
		ret.name = '';
		ret.image = '';
		ret.version = '';
		ret.full = "";

		// Opera's Useragent does not contains 'Linux'
		if (/Android|ADR /i.test(ret.ua)) {
			ret.name = "Android";
			ret.image = "android";
			if (rep = ret.ua.match(/(Android|Adr)[\ |\/]?([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[2];
			}
		} else if (/AmigaOS/i.test(ret.ua)) {
			ret.name = "AmigaOS";
			if (rep = ret.ua.match(/AmigaOS\ ([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}
			ret.image = "amigaos";
		} else if (/BB10/i.test(ret.ua)) {
			ret.name = "BlackBerry OS 10";
			ret.image = "blackberry";
		} else if (/BeOS/i.test(ret.ua)) {
			ret.name = "BeOS";
			ret.image = "beos";
		} else if (/\b(?!Mi)CrOS(?!oft)/i.test(ret.ua)) {
			ret.name = "Google Chrome OS";
			ret.image = "chromeos";
		} else if (/DragonFly/i.test(ret.ua)) {
			ret.name = "DragonFly BSD";
			ret.image = "dragonflybsd";
		} else if (/FreeBSD/i.test(ret.ua)) {
			ret.name = "FreeBSD";
			ret.image = "freebsd";
		} else if (/Inferno/i.test(ret.ua)) {
			ret.name = "Inferno";
			ret.image = "inferno";
		} else if (/IRIX/i.test(ret.ua)) {
			ret.name = "IRIX";
			if (rep = ret.ua.match(/IRIX(64)?\ ([.0-9a-zA-Z]+)/i)) {
				if (rep[1] != undefined) {
					ret.x64 = true;
				}
				if (rep[2] != undefined) {
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
		} else if (/MorphOS/i.test(ret.ua)) {
			ret.name = "MorphOS";
			ret.image = "morphos";
		} else if (/NetBSD/i.test(ret.ua)) {
			ret.name = "NetBSD";
			ret.image = "netbsd";
		} else if (/OpenBSD/i.test(ret.ua)) {
			ret.name = "OpenBSD";
			ret.image = "openbsd";
		} else if (/RISC OS/i.test(ret.ua)) {
			ret.name = "RISC OS";
			ret.image = "risc";
			if (rep = ret.ua.match(/RISC OS ([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}
		} else if (/Solaris|SunOS/i.test(ret.ua)) {
			ret.name = "Solaris";
			ret.image = "solaris";
		} else if (/Symb(ian)?(OS)?/i.test(ret.ua)) {
			ret.name = "SymbianOS";
			if (rep = ret.ua.match(/Symb(ian)?(OS)?\/([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[3];
			}
			ret.image = "symbian";
		} else if (/Unix/i.test(ret.ua)) {
			ret.name = "Unix";
			ret.image = "unix";
			// @codeCoverageIgnoreStart
		} else if (/webOS/i.test(ret.ua)) {
			ret.name = "Palm webOS";
			ret.image = "palm";
		} else if (/J2ME\/MIDP/i.test(ret.ua)) {
			ret.name = "J2ME/MIDP Device";
			ret.image = "java";
		} else {
			ret.name = "Unknown";
			ret.image = "null";
		}

		ret.full = ret.name + (ret.version == "" ? "" : " " + ret.version);

	}



	var OS = {};

	OS.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"version": "",
			"full": "",
			"windows": false,
			"linux": false,
			"x64": false,
			"dir": "os"
		}
		if (/x86_64|Win64; x64|WOW64/i.test(ret.ua)) {
			ret.x64 = true;
		}

		if (/Windows|Win(NT|32|95|98|16)|ZuneWP7|WPDesktop/i.test(ret.ua)) {
			ret.windows = true;
			analyzeWindows(ret);
		} else if (/Linux/i.test(ret.ua) && !/Android|ADR/.test(ret.ua)) {
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
	}



	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = OS;
	}
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return OS;
		});
	}
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = OS;
		});
	} else {
		root.USERAGENT_OS = function() {}
		USERAGENT_OS.prototype.analyze = OS.analyze;
	}

})(this);;(function(root) {
	"use strict";

	var NODE = typeof module !== 'undefined' && module.exports;
	var CMD = typeof define !== 'undefined' && define.cmd;
	var AMD = typeof define !== 'undefined' && define.amd;
	var userAgent = {};


	userAgent.analyze = function(uaString) {
		var returnObject = {};
		returnObject.version = "0.1";
		returnObject.publishDate = "20150217";
		returnObject.ua = uaString;
		if (typeof this.osDetect !== 'undefined') returnObject.os = this.osDetect.analyze(uaString);
		if (typeof this.deviceDetect !== 'undefined') returnObject.device = this.deviceDetect.analyze(uaString);
		if (typeof this.browserDetect !== 'undefined') returnObject.browser = this.browserDetect.analyze(uaString);
		if (typeof returnObject.device !== 'undefined') returnObject.platform = returnObject.device;
		if (typeof returnObject.os !== 'undefined' && returnObject.device.name == "") returnObject.platform = returnObject.os;
		return returnObject;
	}


	var requireFunction = function(userAgent, OS, DEVICE, BROWSER) {
		userAgent.osDetect = OS;
		userAgent.deviceDetect = DEVICE;
		userAgent.browserDetect = BROWSER;
	}


	// Node.js
	if (NODE) {
		requireFunction(userAgent, require('./lib/os'), require('./lib/device'), require('./lib/browser'));
		module.exports = userAgent;
	}
	// AMD
	else if (AMD) {
		define(['./lib/os', './lib/device', './lib/browser'], function(OS, DEVICE, BROWSER) {
			requireFunction(userAgent, OS, DEVICE, BROWSER);
			console.log(userAgent);
			return userAgent;
		});
	}
	// CMD
	else if (CMD) {
		define(function(require, exports, module) {
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