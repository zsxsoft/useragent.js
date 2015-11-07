(function() {
	var testUAList = [
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 114Browser/5.0'],
			['114browser', 'os', 'win-2', '114Browser 5.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 115Browser/5.1.3'],
			['115browser', 'os', 'win-2', '115Browser 5.1.3', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; 2345Explorer 3.4.0.12519)'],
			['2345explorer', 'os', 'win-5', '2345Explorer 3.4.0.12519', 'Windows 8'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; HM NOTE 1W Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30; 360browser(securitypay,securityinstalled); 360(android,uppayplugin); 360 Aphone Browser (5.4.1)'],
			['360se', 'device', 'xiaomi', '360 Aphone Browser', 'Xiaomi HM-NOTE 1W'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko se5_i) Chrome/31.0.1650.63 Safari/537.36 QIHU 360SE'],
			['360se', 'os', 'win-5', '360 Explorer', 'Windows 8.1 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; America Online Browser 1.1; rev1.2; Windows NT 5.1; SV1; .NET CLR 1.1.4322)'],
			['aol', 'os', 'win-2', 'America Online Browser 1.1', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Linux;u;Android 2.3.7;zh-cn;HTC Desire Build) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'htc', 'Android Webkit 4.0', 'HTC Desire'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; HUAWEI Y516-T00 Build/HUAWEIY516-T00) AppleWebKit/534.24 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.24 T5/2.0 baiduboxapp/6.0.1 (Baidu; P1 4.2.2)'],
			['android-webkit', 'device', 'huawei', 'Android Webkit 4.0', 'Huawei Y516'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; K-Touch T60 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 MxBrowser/4.3.2.2000'],
			['android-webkit', 'device', 'k-touch', 'Android Webkit 4.0', 'K-Touch T60'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; Lenovo A520/S101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'lenovo', 'Android Webkit 4.0', 'Lenovo A520'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; zh-cn; LG-P880 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'lg', 'Android Webkit 4.0', 'LG P880'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'google-nexusone', 'Android Webkit 4.0', 'Nexus One'],
		],
		[
			['Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.22 (KHTML, like Gecko) Ubuntu Chromium/25.0.1364.160 Chrome/25.0.1364.160 Safari/537.22'],
			['chromium', 'os', 'ubuntu-2', 'Chromium 25.0.1364.160', 'Ubuntu'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7 CoolNovo/2.0.0.9'],
			['coolnovo', 'os', 'win-2', 'CoolNovo 2.0.0.9', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Deepnet Explorer)'],
			['deepnetexplorer', 'os', 'win-2', 'Deepnet Explorer', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0'],
			['firefox', 'os', 'ubuntu-2', 'Firefox 20.0', 'Ubuntu x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10'],
			['firefox', 'os', 'ubuntu-2', 'Firefox 3.6.10', 'Ubuntu 10.10'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15'],
			['firefox', 'os', 'win-2', 'Firefox 3.6.15', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; FreeBSD amd64; rv:31.0) Gecko/20100101 Firefox/31.0'],
			['firefox', 'os', 'freebsd', 'Firefox 31.0', 'FreeBSD'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:31.0) Gecko/20100101 Firefox/31.0'],
			['firefox', 'os', 'mac-3', 'Firefox 31.0', 'Mac OS X 10.8'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; Galaxy Nexus Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/5.0 Mb2345Browser/4.0 Mobile Safari/534.30'],
			['galaxy', 'device', 'samsung', 'Galaxy Nexus', 'Samsung Galaxy Nexus'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.3; zh-cn; SAMSUNG-SCH-P709E Build/JLS36C) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36'],
			['chrome', 'device', 'samsung', 'Google Chrome 28.0.1500.94', 'Samsung P709E'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.2; HTC One Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 QvodPlayerBrowser:3.4.19 Mobile-Ser:10086'],
			['chrome', 'device', 'htc', 'Google Chrome 30.0.0.0', 'HTC One'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'],
			['chrome', 'device', 'google-nexusone', 'Google Chrome 33.0.0.0', 'Nexus 4'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.4; MI 4W Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 MxBrowser/4.3.5.2000'],
			['chrome', 'device', 'xiaomi', 'Google Chrome 33.0.0.0', 'Xiaomi 4W'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'],
			['chrome', 'os', 'win-2', 'Google Chrome 39.0.2171.95', 'Windows Server 2003'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; chromeframe/30.0.1599.101; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)'],
			['chrome', 'os', 'win-2', 'Google Chrome Frame 30.0.1599.101', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; MRA 8.0 (build 6019); QQDownload 760; chromeframe/32.0.1700.107; SLCC2; .NET CLR 2.0.50727; InfoPath.2; .NET4.0C; .NET4.0E; .NET CLR 3.5.30729; .NET CLR 3.0.30729; QQBrowser/7.7.26717.400)'],
			['chrome', 'os', 'win-4', 'Google Chrome Frame 32.0.1700.107', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; GreenBrowser)'],
			['greenbrowser', 'os', 'win-4', 'GreenBrowser', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.2.0'],
			['iceweasel', 'os', 'linux', 'IceWeasel 31.2.0', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Nokia 920)'],
			['msie-mobile', 'device', 'nokia', 'IEMobile 10.0', 'Nokia Lumia 920'],
		],
		[
			['Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; HTC; Windows Phone 8S by HTC) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537'],
			['msie-mobile', 'device', 'htc', 'IEMobile 11.0', 'HTC 8S'],
		],
		[
			['Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Nokia 909) like Gecko'],
			['msie-mobile', 'device', 'nokia', 'IEMobile 11.0', 'Nokia Lumia 1020'],
		],
		[
			['Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 1520) like Gecko'],
			['msie-mobile', 'device', 'nokia', 'IEMobile 11.0', 'Nokia Lumia 1520'],
		],
		[
			['Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Nokia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537'],
			['msie-mobile', 'device', 'nokia', 'IEMobile 11.0', 'Nokia Lumia 920'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)'],
			['msie10', 'os', 'windowsphone', 'Internet Explorer 10.0', 'Windows Phone'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; HTC; Windows Phone 8X by HTC) like Gecko'],
			['msie11', 'device', 'htc', 'Internet Explorer 11.0', 'HTC 8X'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; Nokia 920) like Gecko'],
			['msie11', 'device', 'nokia', 'Internet Explorer 11.0', 'Nokia Lumia 920'],
		],
		[
			['Mozilla/5.0 (MSIE 9.0; Windows NT 6.4; WOW64; Trident/7.0; rv:11.0) like Gecko'],
			['msie9', 'os', 'win-6', 'Internet Explorer 11.0', 'Windows 10 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; LCJB; rv:11.0) like Gecko'],
			['msie11', 'os', 'win-5', 'Internet Explorer 11.0', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (MSIE 7.0; Windows NT 6.0; Trident/7.0; rv:11.0) like Gecko'],
			['msie7', 'os', 'win-3', 'Internet Explorer 11.0', 'Windows Vista'],
		],
		[
			['Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)'],
			['msie2', 'os', 'win-1', 'Internet Explorer 2.0', 'Windows 95'],
		],
		[
			['Mozilla/1.22 (compatible; MSIE 2.0d; Windows NT)'],
			['msie2', 'os', 'win-2', 'Internet Explorer 2.0d', 'Windows'],
		],
		[
			['Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; 240x320)'],
			['msie3', 'os', 'win-2', 'Internet Explorer 3.02', 'Windows CE'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 4.0; Windows NT 6.0; Trident/5.0)'],
			['msie4', 'os', 'win-3', 'Internet Explorer 4.0', 'Windows Vista'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.0', 'Windows 3.1'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 6.0; Trident/5.0)'],
			['msie4', 'os', 'win-3', 'Internet Explorer 5.0', 'Windows Vista'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.5', 'Windows NT 4.0'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.5', 'Windows 95'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)'],
			['msie6', 'os', 'win-1', 'Internet Explorer 6.0', 'Windows 2000'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2)'],
			['msie6', 'os', 'win-2', 'Internet Explorer 6.0', 'Windows Server 2003'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/6.0)'],
			['msie7', 'os', 'win-5', 'Internet Explorer 7.0', 'Windows 8'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)'],
			['msie7', 'os', 'win-4', 'Internet Explorer 8.0', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)'],
			['msie7', 'os', 'win-4', 'Internet Explorer 8.0', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)'],
			['msie9', 'os', 'win-2', 'Internet Explorer 9.0', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; JuziBrowser)'],
			['juzibrowser', 'os', 'win-2', 'JuziBrowser', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; KKman2.0)'],
			['kkman', 'os', 'win-2', 'KKman 2.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; rv:24.0) Gecko/20140105 Firefox/24.0 K-Meleon/74.0'],
			['kmeleon', 'os', 'win-4', 'K-Meleon 74.0', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0) LBBROWSER'],
			['lbbrowser', 'os', 'win-3', 'Liebao Browser', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.2; MI 3C) AppleWebKit/535.19 (KHTML, like Gecko) LieBaoFast/2.8.0 Mobile Safari/535.19'],
			['lbbrowser', 'device', 'xiaomi', 'Liebaofast 2.8.0', 'Xiaomi 3C'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Lunascape 6.9.3.27400)'],
			['lunascape', 'os', 'win-4', 'Lunascape 6.9.3.27400', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.12 (KHTML, like Gecko) Maxthon/3.0 Chrome/18.0.966.0 Safari/535.12'],
			['maxthon', 'os', 'win-4', 'Maxthon 3.0', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Maxthon/3.0)'],
			['maxthon', 'os', 'win-4', 'Maxthon 3.0', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; Avant Browser; Maxthon/3.0)'],
			['maxthon', 'os', 'win-2', 'Maxthon 3.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.1 (KHTML, like Gecko) Maxthon/4.1.0.3000 Chrome/26.0.1410.43 Safari/537.1'],
			['maxthon', 'os', 'win-2', 'Maxthon 4.1.0.3000', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.800 Chrome/30.0.1599.101 Safari/537.36'],
			['maxthon', 'os', 'win-4', 'Maxthon 4.4.3.800', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; MI 2SC Build/JRO03L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 XiaoMi/MiuiBrowser/2.1.1'],
			['miuibrowser', 'device', 'xiaomi', 'MiuiBrowser 2.1.1', 'Xiaomi 2SC'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Desire_A8181 Build/FRF91) App3leWebKit/53.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['safari', 'device', 'htc', 'Mobile Safari 4.0', 'HTC Desire'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Oupeng/10.0.1.82018 Mobile Safari/534.30'],
			['safari', 'device', 'iphone', 'Mobile Safari 4.0', 'iPhone iOS 5.1'],
		],
		[
			['Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.2'],
			['mozilla', 'os', 'linux', 'Mozilla Compatible', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (iPad; CPU iPad OS 7.1.2 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/7.1.2 Mobile/9B179 kuaiyongbrowser/1.3'],
			['mozilla', 'device', 'ipad', 'Mozilla Compatible', 'iPad'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D167'],
			['mozilla', 'device', 'ipad', 'Mozilla Compatible', 'iPad iOS 7.1'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1.2; zh-cn; MI-ONE Plus Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 Mobile Safari/537.36'],
			['qqbrowser', 'device', 'xiaomi', 'MQQBrowser 5.4', 'Xiaomi 1'],
		],
		[
			['Mozilla/5.0 (Symbian/3; Series60/5.3 Nokia701/111.030.0609; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.4.2.6 Mobile Safari/533.4 3gpp-gba'],
			['nokia', 'device', 'nokia', 'Nokia Browser 7.4.2.6', 'Nokia 701'],
		],
		[
			['Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'],
			['nokia', 'device', 'nokia', 'Nokia Browser 8.5.0', 'Nokia N9'],
		],
		[
			['Nokia5320di'],
			['maemo', 'device', 'nokia', 'Nokia Web Browser', 'Nokia 5320di'],
		],
		[
			['Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17'],
			['opera-2', 'os', 'win-5', 'Opera 12.17', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.27 Safari/537.36 OPR/26.0.1656.8 (Edition beta)'],
			['opera-1', 'os', 'win-4', 'Opera 26.0.1656.8', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2236.0 Safari/537.36 OPR/28.0.1719.0 (Edition developer)'],
			['opera-developer', 'os', 'mac-3', 'Opera Developer 28.0.1719.0', 'Mac OS X 10.10.1'],
		],
		[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.13400/34.2508; U; zh) Presto/2.8.119 Version/11.10'],
			['opera-2', 'os', 'java', 'Opera Mini 4.2.13400', 'J2ME/MIDP Device'],
		],
		[
			['Opera/9.80 (Android; Opera Mini/7.5.33361/35.6050; U; fa) Presto/2.8.119 Version/11.10'],
			['opera-2', 'os', 'android', 'Opera Mini 7.5.33361', 'Android'],
		],
		[
			['Opera/9.80 (Windows Phone; Opera Mini/7.6.8/35.4970; U; zh) Presto/2.8.119 Version/11.10'],
			['opera-2', 'os', 'windowsphone', 'Opera Mini 7.6.8', 'Windows Phone'],
		],
		[
			['Opera/9.80 (Android 2.3.6; Linux; Opera Mobi/ADR-1306261228) Presto/2.11.355 Version/12.10'],
			['opera-2', 'os', 'android', 'Opera Mobile 12.10', 'Android 2.3.6'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.44 Safari/537.36 OPR/24.0.1558.25 (Edition Next)'],
			['opera-next', 'os', 'win-4', 'Opera Next 24.0.1558.25', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; rv:25.0) Gecko/20141021 Firefox/24.9 PaleMoon/25.0.2'],
			['palemoon', 'os', 'win-4', 'Pale Moon 25.0.2', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 IPadQQ/4.1.1.14'],
			['qq', 'device', 'ipad', 'QQ 4.1.1.14', 'iPad iOS 7.1.2'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; iOCEAN X7 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 V1_AND_SQ_5.0.0_146_YYB_D QQ/5.0.0.2215'],
			['qq', 'os', 'android', 'QQ 5.0.0.2215', 'Android 4.2.2'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B435 QQ/5.1.1.97'],
			['qq', 'device', 'iphone', 'QQ 5.1.1.97', 'iPhone iOS 8.1.1'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.48 Safari/537.36 QQBrowser/7.7.31721.400'],
			['qqbrowser', 'os', 'win-4', 'QQBrowser 7.7.31721.400', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; QQBrowser/8.0.2820.400)'],
			['qqbrowser', 'os', 'win-4', 'QQBrowser 8.0.2820.400', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; LENW8; rv:11.0; SaaYaa) like Gecko'],
			['saayaa', 'os', 'win-5', 'SaaYaa Explorer', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) CasperJS/1.0.2+Phantomjs/1.9.2 Safari/534.34'],
			['safari', 'os', 'linux', 'Safari', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1; zh-CN) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.0.1 Safari/537.36'],
			['safari', 'os', 'win-2', 'Safari 5.0.1', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4'],
			['safari', 'device', 'ipad', 'Safari 8.0', 'iPad iOS 8.1.2'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'],
			['safari', 'device', 'iphone', 'Safari 8.0', 'iPhone iOS 8.0'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5'],
			['safari', 'os', 'mac-3', 'Safari 8.0.2', 'Mac OS X 10.10.1'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1; rv:33.0) Gecko/20100101 Firefox/33.0 SeaMonkey/2.30'],
			['seamonkey', 'os', 'win-2', 'SeaMonkey 2.30', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; GTB7.0; SE 2.X MetaSr 1.0)'],
			['sogou', 'os', 'win-2', 'Sogou Explorer', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Iron/34.0.1850.0 Chrome/34.0.1850.0 Safari/537.36'],
			['srwareiron', 'os', 'win-4', 'SRWare Iron 34.0.1850.0', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/3.2 Safari/536.11'],
			['taobrowser', 'os', 'win-2', 'TaoBrowser 3.2', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; TencentTraveler 4.0)'],
			['tencenttraveler', 'os', 'win-2', 'Tencent Traveler 4.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/6.0; qihu theworld)'],
			['theworld', 'os', 'win-5', 'TheWorld Browser', 'Windows 8 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; TheWorld)'],
			['theworld', 'os', 'win-2', 'TheWorld Browser', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.4; en-US; ZTE V970 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/10.0.0.488 U3/0.8.0 Mobile Safari/533.1'],
			['ucbrowser', 'device', 'zte', 'UC Browser 10.0.0.488', 'ZTE V970'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop) UCBrowser/2.9.0.263'],
			['ucbrowser', 'os', 'windowsphone', 'UC Browser 2.9.0.263', 'Windows Phone'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 UBrowser/3.0.1084.0 Safari/537.36'],
			['ucbrowser', 'os', 'win-4', 'UC Browser 3.0.1084.0', 'Windows 7 x64'],
		],
		[
			['JUC(Linux;U;2.3.7;Zh_cn;lenovo a60;320*480;)UCWEB7.8.1.96/139/800'],
			['ucbrowser', 'device', 'lenovo', 'UC Browser 7.8.1.96', 'Lenovo a60'],
		],
		[
			['NOKIAN95/UCWEB8.9.0.253/28/999'],
			['ucbrowser', 'device', 'nokia', 'UC Browser 8.9.0.253', 'Nokia N95'],
		],
		[
			['NokiaC1-02i/2.0 (04.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 UCWEB/2.0 (Java; U; MIDP-2.0; zh-CN; nokiac1-02i) U2/1.0.0 UCBrowser/9.0.0.261 U2/1.0.0 Mobile UNTRUSTED/1.0'],
			['ucbrowser', 'device', 'nokia', 'UC Browser 9.0.0.261', 'Nokia C1'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X; zh-CN) AppleWebKit/537.51.2 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/11D257 Safari/7534.48.3 UCBrowser/9.9.2.490'],
			['ucbrowser', 'device', 'iphone', 'UC Browser 9.9.2.490', 'iPhone iOS 7.1.2'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; zh-CN; K-Touch T619+ Build/MocorDroid2.3.5) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.8.511 U3/0.8.0 Mobile Safari/534.30'],
			['ucbrowser', 'device', 'k-touch', 'UC Browser 9.9.8.511', 'K-Touch T619'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 YaBrowser/14.7.1916.15705 Safari/537.36'],
			['yandex', 'os', 'win-5', 'Yandex.Browser 14.7.1916.15705', 'Windows 8.1 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'],
			['edge', 'os', 'win-6', 'Edge 12.0', 'Windows 10 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.69 Safari/537.36 2345chrome v2.4.0.2847'],
			['2345chrome', 'os', 'win-2', '2345Chrome v2.4.0.2847', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) MxNitro/1.0.1.600 Chrome/35.0.1849.0 Safari/537.36'],
			['mxnitro', 'os', 'win-2', 'MxNitro 1.0.1.600', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.94.2 Safari/537.36'],
			['vivaldi', 'os', 'win-6', 'Vivaldi 1.0.94.2', 'Windows 10 x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20100121 Firefox/3.5.6 Wyzo/3.5.6.1'],
			['wyzo', 'os', 'win-4', 'Wyzo 3.5.6.1', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR) AppleWebKit/532.4 (KHTML, like Gecko) WeltweitimnetzBrowser/0.25 Safari/532.4'],
			['weltweitimnetzbrowser', 'os', 'win-2', 'Weltweitimnetz Browser 0.25', 'Windows XP'],
		],
		[
			['w3m/0.5.2 (Linux i686; it; Debian-3.0.6-3)'],
			['w3m', 'os', 'debian', 'W3M 0.5.2', 'Debian'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1pre) Gecko/20090629 Vonkeror/1.0'],
			['null', 'os', 'win-2', 'Vonkeror 1.0', 'Windows XP'],
		],
		[
			['Vimprobable/0.9.20.5'],
			['null', 'os', 'null', 'Vimprobable 0.9.20.5', 'Unknown'],
		],
		[
			['Uzbl (X11; U; Arch Linux; de-DE) Webkit/1.1.10'],
			['uzbl', 'os', 'archlinux', 'uzbl', 'Arch Linux'],
		],
		[
			['Mozilla/5.0 ArchLinux (X11; Linux x86_64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1'],
			['chrome', 'os', 'archlinux', 'Google Chrome 13.0.782.41', 'Arch Linux x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; WOW64; SV1; uZardWeb/1.0; Server_CN)'],
			['uzardweb', 'os', 'win-2', 'uZardWeb 1.0', 'Windows Server 2003 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0; uZard/1.0; Server_KO_SKT)'],
			['uzardweb', 'os', 'win-2', 'uZard 1.0', 'Windows Server 2003 x64'],
		],
		[
			['curl/7.8 (i386-redhat-linux-gnu) libcurl 7.8 (OpenSSL 0.9.6b) (ipv6 enabled)'],
			['null', 'os', 'red-hat', 'curl 7.8', 'Red Hat'],
		],
		[
			['Links (1.00pre3; SunOS 5.9 i86pc; 80x24)'],
			['null', 'os', 'solaris', 'Links 1.00pre3', 'Solaris'],
		],
		[
			['Links 2.0 (http://gossamer-threads.com/scripts/links/)'],
			['null', 'os', 'null', 'Links', 'Unknown'],
		],
		[
			['Wget/1.9.1'],
			['null', 'os', 'null', 'wget 1.9.1', 'Unknown'],
		],
		[
			['curl/7.19.6 (i686-pc-cygwin) libcurl/7.19.6 OpenSSL/0.9.8n zlib/1.2.3 libidn/1.18 libssh2/1.2'],
			['null', 'os', 'null', 'curl 7.19.6', 'Unknown'],
		],
		[
			['curl/7.19.5 (i586-pc-mingw32msvc) libcurl/7.19.5 zlib/1.2.3'],
			['null', 'os', 'null', 'curl 7.19.5', 'Unknown'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; nl; rv:1.9.1.11) Gecko/20100714 openSUSE/3.0.6 Thunderbird/3.0.6 ThunderBrowse/3.3.2'],
			['thunderbird', 'os', 'suse', 'Thunderbird 3.0.6', 'openSUSE x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.10) Gecko/20100621 Fedora/3.0.5-1.fc13 Lightning/1.0b2pre Thunderbird/3.0.5'],
			['thunderbird', 'os', 'fedora', 'Thunderbird 3.0.5', 'Fedora 13 x64'],
		],
		[
			['Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.8.1.4) Gecko/20070622 Thunderbird/2.0.0.4'],
			['thunderbird', 'os', 'solaris', 'Thunderbird 2.0.0.4', 'Solaris'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20130620 Thunderbird/17.0.7'],
			['thunderbird', 'os', 'win-5', 'Thunderbird 17.0.7', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (X11; Linux i686; rv:16.0) Gecko/20121011 Thunderbird/16.0.1'],
			['thunderbird', 'os', 'linux', 'Thunderbird 16.0.1', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; fr-FR; rv:1.7.10) Gecko/20050716 Thunderbird/1.0.6'],
			['thunderbird', 'os', 'mac-3', 'Thunderbird 1.0.6', 'Mac OS X Mach-O'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; (R1 1.6); .NET CLR 2.0.50727; TheWorld)'],
			['theworld', 'os', 'win-2', 'TheWorld Browser', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Macintosh; PPC Mac OS X 10.4; rv:10.0.2) Gecko/20120217 Firefox/10.0.2 TenFourFox/G3'],
			['tenfourfox', 'os', 'mac-3', 'TenFourFox 10.0.2', 'Mac OS X 10.4'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; TencentTraveler 4.0; Trident/4.0; SLCC1; Media Center PC 5.0; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30618)'],
			['tencenttraveler', 'os', 'win-3', 'Tencent Traveler 4.0', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/418.9.1 (KHTML, like Gecko) Safari/419.3 TeaShark/0.8'],
			['teashark', 'os', 'mac-3', 'TeaShark 0.8', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.9) Gecko/20071110 Sylera/3.0.20 SeaMonkey/1.1.6'],
			['null', 'os', 'win-1', 'Sylera 3.0.20', 'Windows 2000'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9pre) Gecko/2008040318 Firefox/3.0pre (Swiftfox)'],
			['swiftfox', 'os', 'linux', 'Swiftfox', 'GNU/Linux'],
		],
		[
			['Surf/0.4.1 (X11; U; Unix; en-US) AppleWebKit/531.2+ Compatible (Safari; MSIE 9.0)'],
			['surf', 'os', 'unix', 'Surf 0.4.1', 'Unix'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/125.5.7 (KHTML, like Gecko) SunriseBrowser/0.895'],
			['sunrise', 'os', 'mac-3', 'Sunrise Browser', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr) AppleWebKit/523.12.2 (KHTML, like Gecko) Sunrise/1.6.0 like Safari/523.12.2'],
			['sunrise', 'os', 'mac-3', 'Sunrise 1.6.0', 'Mac OS X'],
		],
		[
			['Sundance/0.9x(Compatible; Windows; U; en-US;)Version/0.9x'],
			['sundance', 'os', 'win-2', 'Sundance 0.9x', 'Windows'],
		],
		[
			['Sundance(Compatible; Windows; U; en-US;) Version/0.9.0.36'],
			['sundance', 'os', 'win-2', 'Sundance', 'Windows'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-us) AppleWebKit/528.16 (KHTML, like Gecko) Stainless/0.5.3 Safari/525.20.1'],
			['stainless', 'os', 'mac-3', 'Stainless 0.5.3', 'Mac OS X 10.5.6'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1250.0 Iron/22.0.2150.0 Safari/537.4'],
			['srwareiron', 'os', 'win-4', 'SRWare Iron 22.0.2150.0', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; SlimBrowser)'],
			['slimbrowser', 'os', 'win-4', 'SlimBrowser', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30618; .NET4.0C; .NET4.0E; Sleipnir/2.9.9)'],
			['sleipnir', 'os', 'win-3', 'Sleipnir 2.9.9', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0'],
			['skyfire', 'os', 'mac-3', 'Skyfire 2.0', 'Mac OS X 10.5.7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.50; Windows NT; SiteKiosk 4.9; SiteCoach 1.0)'],
			['sitekiosk', 'os', 'win-2', 'SiteKiosk 4.9', 'Windows'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.8pre) Gecko/20100112 Shiretoko/3.5.8pre'],
			['firefoxdevpre', 'os', 'linux', 'Shiretoko 3.5.8pre', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/523.15.1 (KHTML, like Gecko) Shiira Safari/125'],
			['shiira', 'os', 'mac-3', 'Shiira Safari', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; ja-jp) AppleWebKit/419 (KHTML, like Gecko) Shiira/1.2.3 Safari/125'],
			['shiira', 'os', 'mac-3', 'Shiira 1.2.3', 'Mac OS X'],
		],
		[
			['SonyEricssonW800i/R1BD001/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['semcbrowser', 'device', 'sonyericsson', 'SEMC Browser 4.2', 'SonyEricsson W800i'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.2; RW; rv:7.0a1) Gecko/20091211 SeaMonkey/9.23a1pre'],
			['seamonkey', 'os', 'win-2', 'SeaMonkey 9.23a1pre', 'Windows Server 2003'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.11) Gecko/20100720 Fedora/2.0.6-1.fc12 SeaMonkey/2.0.6'],
			['seamonkey', 'os', 'fedora', 'SeaMonkey 2.0.6', 'Fedora 12 x64'],
		],
		[
			['Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.9a1) Gecko/20060702 SeaMonkey/1.5a'],
			['seamonkey', 'os', 'beos', 'SeaMonkey 1.5a', 'BeOS'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.9a1) Gecko/20060707 SeaMonkey/1.5a'],
			['seamonkey', 'os', 'mac-3', 'SeaMonkey 1.5a', 'Mac OS X Mach-O'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.9a1) Gecko/20060206 SeaMonkey/1.5a'],
			['seamonkey', 'os', 'win-1', 'SeaMonkey 1.5a', 'Windows 2000'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9a4pre) Gecko/20070404 SeaMonkey/1.5a'],
			['seamonkey', 'os', 'win-2', 'SeaMonkey 1.5a', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1) Gecko/20061101 SeaMonkey/1.1b'],
			['seamonkey', 'os', 'win-1', 'SeaMonkey 1.1b', 'Windows 98 SE'],
		],
		[
			['Mozilla/5.0 (AmigaOS; U; AmigaOS 1.3; en-US; rv:1.8.1.21) Gecko/20090303 SeaMonkey/1.1.15'],
			['seamonkey', 'os', 'amigaos', 'SeaMonkey 1.1.15', 'AmigaOS 1.3'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.0.14eol) Gecko/20120628 CentOS/1.0.9-40.el4.centos SeaMonkey/1.0.9'],
			['seamonkey', 'os', 'centos', 'SeaMonkey 1.0.9', 'CentOS 4 x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.14eol) Gecko/20101004 Red Hat/1.0.9-64.el4 SeaMonkey/1.0.9'],
			['seamonkey', 'os', 'red-hat', 'SeaMonkey 1.0.9', 'Red Hat Enterprise Linux 4'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.10) Gecko/20070223 Fedora/1.0.8-0.5.1.fc5 SeaMonkey/1.0.8'],
			['seamonkey', 'os', 'fedora', 'SeaMonkey 1.0.8', 'Fedora 5'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A'],
			['safari', 'os', 'mac-3', 'Safari 7.0.3', 'Mac OS X 10.9.3'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'],
			['safari', 'device', 'ipad', 'Safari 6.0', 'iPad iOS 6.0'],
		],
		[
			['Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; he-il) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'],
			['safari', 'device', 'iphone', 'Safari 5.0.2', 'iPod iOS 4.2.1'],
		],
		[
			['Mozilla/5.0 (iPhone; U; ru; CPU iPhone OS 4_2_1 like Mac OS X; ru) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148a Safari/6533.18.5'],
			['safari', 'device', 'iphone', 'Safari 5.0.2', 'iPhone iOS 4.2.1'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8'],
			['safari', 'os', 'win-2', 'Safari 5.0.1', 'Windows Server 2003'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+'],
			['safari', 'os', 'linux', 'Safari 5.0', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; HTC-P715a; en-ca) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'],
			['safari', 'device', 'htc', 'Safari 5.0', 'HTC P715a'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/521.32.1 (KHTML, like Gecko) Safari/521.32.1'],
			['safari', 'os', 'mac-3', 'Safari', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) RockMelt/0.9.58.494 Chrome/11.0.696.71 Safari/534.24'],
			['rockmelt', 'os', 'mac-3', 'RockMelt 0.9.58.494', 'Mac OS X 10.6.7'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; ha) AppleWebKit/534.13 (KHTML, like Gecko) RockMelt/0.445.436.1326 Chrome/12.0.632.107 Safari/534.13'],
			['rockmelt', 'os', 'mac-3', 'RockMelt 0.445.436.1326', 'Mac OS X 10.6.4'],
		],
		[
			['retawq/0.2.6c [en] (text)'],
			['terminal', 'os', 'null', 'retawq 0.2.6c', 'Unknown'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) rekonq Safari/533.3'],
			['rekonq', 'os', 'linux', 'rekonq', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR) AppleWebKit/533.3 (KHTML, like Gecko) QtWeb Internet Browser/3.7 http://www.QtWeb.net'],
			['qtwebinternetbrowser', 'os', 'win-2', 'QtWeb Internet Browser 3.7', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.3) Gecko/20100402 Prism/1.0b4'],
			['prism', 'os', 'mac-3', 'Prism 1.0b4', 'Mac OS X 10.6'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080414 Firefox/2.0.0.13 Pogo/2.0.0.13.6866'],
			['pogo', 'os', 'win-2', 'Pogo 2.0.0.13.6866', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.3a) Gecko/20021207 Phoenix/0.5'],
			['phoenix', 'os', 'linux', 'Phoenix 0.5', 'GNU/Linux'],
		],
		[
			['(Windows NT 6.2; WOW64) KHTML/4.11 Gecko/20130308 Firefox/33.0 (PaleMoon/25.1)'],
			['palemoon', 'os', 'win-5', 'Pale Moon 25.1', 'Windows 8 x64'],
		],
		[
			['Mozilla/1.10 [en] (Compatible; RISC OS 3.70; Oregano 1.10)'],
			['oregano', 'os', 'risc', 'Oregano 1.10', 'RISC OS 3.70'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090722 Firefox/3.5.1 Orca/1.2 build 2'],
			['orca', 'os', 'win-4', 'Orca 1.2', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; S60; SymbOS; Opera Mobi/SYB-1107071606; en) Opera 11.10'],
			['opera-2', 'os', 'symbian', 'Opera Mobile SYB', 'SymbianOS'],
		],
		[
			['Mozilla/5.0 (Android 2.2.2; Linux; Opera Mobi/ADR-1103311355; U; en; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 11.00'],
			['opera-2', 'os', 'android', 'Opera Mobile ADR', 'Android 2.2.2'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Android 2.2.2; Linux; Opera Mobi/ADR-1103311355; en) Opera 11.00'],
			['opera-2', 'os', 'android', 'Opera Mobile ADR', 'Android 2.2.2'],
		],
		[
			['Mozilla/5.0 (Linux armv6l; Maemo; Opera Mobi/8; U; en-GB; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 11.00'],
			['opera-2', 'os', 'linux', 'Opera Mobile 8', 'GNU/Linux'],
		],
		[
			['Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50'],
			['opera-2', 'os', 'android', 'Opera Mobile 11.50', 'Android 2.3.3'],
		],
		[
			['Mozilla/4.0 (compatible; Windows Mobile; WCE; Opera Mobi/WMD-50433; U; de) Presto/2.4.13 Version/10.00'],
			['opera-2', 'device', 'htc', 'Opera Mobile 10.00', 'HTC Touch Pro2'],
		],
		[
			['Opera/9.80 (Windows Mobile; WCE; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00'],
			['opera-2', 'os', 'win-2', 'Opera Mobile 10.00', 'Windows'],
		],
		[
			['Opera/9.80 (Windows NT 6.1; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00'],
			['opera-2', 'os', 'win-4', 'Opera Mobile 10.00', 'Windows 7'],
		],
		[
			['Opera/9.80 (Windows NT 6.0; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00'],
			['opera-2', 'os', 'win-3', 'Opera Mobile 10.00', 'Windows Vista'],
		],
		[
			['Opera/9.80 (Windows NT 5.1; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00'],
			['opera-2', 'os', 'win-2', 'Opera Mobile 10.00', 'Windows XP'],
		],
		/*
			[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/SymbianOS/22.478; U; en) Presto/2.5.25 Version/10.54'],
			['opera-2', 'os', 'symbian', 'Opera Mini SymbianOS', 'SymbianOS '],
			],*/
		[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/Nokia2730c-1/22.478; U; en) Presto/2.5.25 Version/10.54'],
			['opera-2', 'device', 'nokia', 'Opera Mini Nokia2730c', 'Nokia 2730c'],
		],
		[
			['Opera/9.80 (iPhone; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10'],
			['opera-2', 'device', 'iphone', 'Opera Mini 7.1.32694', 'iPhone'],
		],
		[
			['Opera/9.80 (iPad; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10'],
			['opera-2', 'device', 'ipad', 'Opera Mini 7.1.32694', 'iPad'],
		],
		[
			['Opera/9.80 (Android; Opera Mini/7.0.29952/28.2075; U; es) Presto/2.8.119 Version/11.10'],
			['opera-2', 'os', 'android', 'Opera Mini 7.0.29952', 'Android'],
		],
		[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/4.0.10031/22.453; U; en) Presto/2.5.25 Version/10.54'],
			['opera-2', 'os', 'java', 'Opera Mini 4.0.10031', 'J2ME/MIDP Device'],
		],
		[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/4.0 (compatible; MSIE 5.0; UNIX) Opera 6.12 [en]/24.838; U; en) Presto/2.5.25 Version/10.54'],
			['opera-2', 'os', 'java', 'Opera Mini 4.0', 'J2ME/MIDP Device'],
		],
		[
			['Opera/9.80 (J2ME/MIDP; Opera Mini/(Windows; U; Windows NT 5.1; en-US) AppleWebKit/23.411; U; en) Presto/2.5.25 Version/10.54'],
			['opera-2', 'os', 'win-2', 'Opera Mini', 'Windows XP'],
		],
		[
			['Opera/9.99 (Windows NT 5.1; U; pl) Presto/9.9.9'],
			['opera-1', 'os', 'win-2', 'Opera 9.99', 'Windows XP'],
		],
		[
			['HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)'],
			['opera-1', 'device', 'htc', 'Opera 9.70', 'HTC HD2'],
		],
		[
			['Opera/9.64 (X11; Linux i686; U; Linux Mint; it) Presto/2.1.1'],
			['opera-1', 'os', 'linuxmint', 'Opera 9.64', 'Linux Mint'],
		],
		[
			['Opera/9.64(Windows NT 5.1; U; en) Presto/2.1.1'],
			['opera-1', 'os', 'win-2', 'Opera 9.64', 'Windows XP'],
		],
		[
			['Opera/9.63 (X11; FreeBSD 7.1-RELEASE i386; U; en) Presto/2.1.1'],
			['opera-1', 'os', 'freebsd', 'Opera 9.63', 'FreeBSD'],
		],
		[
			['Opera/9.30 (Nintendo Wii; U; ; 2071; Wii Shop Channel/1.0; en)'],
			['opera-1', 'device', 'nintendowii', 'Opera 9.30', 'Nintendo Wii'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Sprint:PPC-6700) Opera 8.65 [en]'],
			['opera-1', 'os', 'win-2', 'Opera 8.65', 'Windows CE'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.0; UNIX) Opera 6.12 [en]'],
			['opera-1', 'os', 'unix', 'Opera 6.12', 'Unix'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.0; Windows 98) Opera 6.04 [en]'],
			['opera-1', 'os', 'win-1', 'Opera 6.04', 'Windows 98'],
		],
		[
			['Opera/6.04 (Windows NT 4.0; U) [en]'],
			['opera-1', 'os', 'win-1', 'Opera 6.04', 'Windows NT 4.0'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.0; Windows 2000) Opera 6.0 [en]'],
			['opera-1', 'os', 'win-1', 'Opera 6.0', 'Windows 2000'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0'],
			['omniweb', 'os', 'mac-3', 'OmniWeb v622.8.0', 'Mac OS X 10.5.6'],
		],
		[
			['Mozilla/4.5 (compatible; OmniWeb/4.1-v422; Mac_PowerPC)'],
			['omniweb', 'os', 'mac-1', 'OmniWeb 4.1', 'Macintosh'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/522+ (KHTML, like Gecko) OmniWeb'],
			['omniweb', 'os', 'mac-3', 'OmniWeb', 'Mac OS X'],
		],
		[
			['NokiaE5-00/SymbianOS/9.1 Series60/3.0 3gpp-gba'],
			['maemo', 'device', 'nokia', 'Nokia Web Browser', 'Nokia E5'],
		],
		[
			['NokiaN97/21.1.107 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4'],
			['maemo', 'device', 'nokia', 'Nokia Web Browser', 'Nokia N97'],
		],
		[
			['NokiaN97i/SymbianOS/9.1 Series60/3.0'],
			['maemo', 'device', 'nokia', 'Nokia Web Browser', 'Nokia N97i'],
		],
		[
			['Nokia5250/10.0.011 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba'],
			['maemo', 'device', 'nokia', 'Nokia Web Browser', 'Nokia 5250'],
		],
		[
			['NetSurf/2.0 (Linux; i686)'],
			['netsurf', 'os', 'linux', 'NetSurf 2.0', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.8.1.8pre) Gecko/20071015 Firefox/2.0.0.7 Navigator/9.0'],
			['netscape', 'os', 'win-1', 'Netscape Navigator 9.0', 'Windows Me'],
		],
		[
			['Mozilla/5.0 (Windows; U; Win95; de-DE; rv:1.0.2) Gecko/20030208 Netscape/7.02'],
			['netscape', 'os', 'win-1', 'Netscape 7.02', 'Windows 95'],
		],
		[
			['Mozilla/3.0 (compatible; NetPositive/2.1.1; BeOS)'],
			['netpositive', 'os', 'beos', 'NetPositive 2.1.1', 'BeOS'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; de-de) AppleWebKit/531.22.7 (KHTML, like Gecko) NetNewsWire/3.2.7'],
			['netnewswire', 'os', 'mac-3', 'NetNewsWire 3.2.7', 'Mac OS X 10.6.3'],
		],
		[
			['Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 824x1200;rotate)'],
			['netfront', 'device', 'kindle', 'NetFront 3.4', 'Kindle 2.5'],
		],
		[
			['SAMSUNG-C5212/C5212XDIK1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['netfront', 'device', 'samsung', 'NetFront 3.4', 'Samsung C5212'],
		],
		[
			['Mozilla/4.0 (compatible; Linux 2.6.10) NetFront/3.3 Kindle/1.0 (screen 600x800)'],
			['netfront', 'device', 'kindle', 'NetFront 3.3', 'Kindle 1.0'],
		],
		[
			['SonyEricssonK800c/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['netfront', 'device', 'sonyericsson', 'NetFront 3.3', 'SonyEricsson K800c'],
		],
		[
			['SonyEricssonK530i/R6BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['netfront', 'device', 'sonyericsson', 'NetFront 3.3', 'SonyEricsson K530i'],
		],
		[
			['SonyEricssonK530c/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['netfront', 'device', 'sonyericsson', 'NetFront 3.3', 'SonyEricsson K530c'],
		],
		[
			['SonyEricssonK510c/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['netfront', 'device', 'sonyericsson', 'NetFront 3.3', 'SonyEricsson K510c'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2a2pre) Gecko/20090825 Namoroka/3.6a2pre'],
			['firefoxdevpre', 'os', 'linux', 'Namoroka 3.6a2pre', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.2pre) Gecko/20100312 Namoroka/3.6.2pre (.NET CLR 3.5.30729)'],
			['firefoxdevpre', 'os', 'win-2', 'Namoroka 3.6.2pre', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2) Gecko/20100206 Namoroka/3.6'],
			['firefoxdevpre', 'os', 'linux', 'Namoroka 3.6', 'GNU/Linux'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; MyIE2; .NET CLR 1.1.4322; InfoPath.1)'],
			['myie2', 'os', 'win-2', 'MyIE2', 'Windows Server 2003'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55'],
			['mozilla', 'os', 'win-4', 'MultiZilla 4.33.2.6a', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.2; WOW64; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55'],
			['mozilla', 'os', 'win-5', 'MultiZilla 4.33.2.6a', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55'],
			['mozilla', 'os', 'win-5', 'MultiZilla 4.33.2.6a', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; RW; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55'],
			['mozilla', 'os', 'win-2', 'MultiZilla 4.33.2.6a', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.19) Gecko/20081204 MultiZilla/1.8.3.5c SeaMonkey/1.1.14'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.8.3.5c', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1.23) Gecko/20090825 MultiZilla/1.8.3.4e SeaMonkey/1.1.18'],
			['mozilla', 'os', 'win-1', 'MultiZilla 1.8.3.4e', 'Windows 98 SE'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080201 MultiZilla/1.8.3.4e SeaMonkey/1.1.8'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.8.3.4e', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.21) Gecko/20090403 MultiZilla/1.8.3.4e SeaMonkey/1.1.16'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.8.3.4e', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.16) Gecko/20080702 MultiZilla/1.8.3.4e SeaMonkey/1.1.11'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.8.3.4e', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.8) Gecko/20061030 MultiZilla/1.8.3.0a SeaMonkey/1.0.6'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.8.3.0a', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.8.0.7) Gecko/20060910 MultiZilla/1.8.2.0i SeaMonkey/1.0.5'],
			['mozilla', 'os', 'null', 'MultiZilla 1.8.2.0i', 'Unknown'],
		],
		[
			['Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.8.0.6) Gecko/20060730 MultiZilla/1.8.2.0i SeaMonkey/1.0.4'],
			['mozilla', 'os', 'null', 'MultiZilla 1.8.2.0i', 'Unknown'],
		],
		[
			['Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.9a1) Gecko/20051119 MultiZilla/1.8.1.0s SeaMonkey/1.5a'],
			['mozilla', 'os', 'null', 'MultiZilla 1.8.1.0s', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.7) Gecko/20060910 MultiZilla/1.7.9.0a SeaMonkey/1.0.5'],
			['mozilla', 'os', 'win-2', 'MultiZilla 1.7.9.0a', 'Windows XP'],
		],
		[
			['Mozilla/4.41 (BEOS; U ;Nav)'],
			['mozilla', 'os', 'beos', 'Mozilla Compatible', 'BeOS'],
		],
		[
			['Mozilla/4.8 [en] (FreeBSD; U)'],
			['mozilla', 'os', 'freebsd', 'Mozilla Compatible', 'FreeBSD'],
		],
		[
			['Mozilla/4.8 [en] (X11; U; Linux 2.6.12-1.1372_FC3 i686; Nav)'],
			['mozilla', 'os', 'linux', 'Mozilla Compatible', 'GNU/Linux'],
		],
		[
			['Mozilla/4.04 [en] (X11; I; IRIX 5.3 IP22)'],
			['mozilla', 'os', 'irix', 'Mozilla Compatible', 'IRIX 5.3'],
		],
		[
			['Mozilla/4.76C-SGI [en] (X11; I; IRIX64 6.5 IP30)'],
			['mozilla', 'os', 'irix', 'Mozilla Compatible', 'IRIX 6.5 x64'],
		],
		[
			['Mozilla/4.8 [en] (X11; U; HP-UX B.11.00 9000/785)'],
			['mozilla', 'os', 'null', 'Mozilla Compatible', 'Unknown'],
		],
		[
			['Mozilla/4.8 [en] (Win98; U)'],
			['mozilla', 'os', 'win-1', 'Mozilla Compatible', 'Windows 98 SE'],
		],
		[
			['Mozilla/4.7 [fr] (Win95; I)'],
			['mozilla', 'os', 'win-1', 'Mozilla Compatible', 'Windows 95'],
		],
		[
			['Mozilla/5.0 (PLAYSTATION 3; 3.55)'],
			['mozilla', 'device', 'playstation', 'Mozilla Compatible', 'PlayStation 3'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.7) Gecko/20050427 Red Hat/1.7.7-1.1.3.4'],
			['mozilla', 'os', 'red-hat', 'Mozilla Compatible', 'Red Hat'],
		],
		[
			['NCSA_Mosaic/2.0 (Windows 3.1)'],
			['mosaic', 'os', 'win-1', 'Mosaic 2.0', 'Windows 3.1'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092816 Mobile Safari 1.1.3'],
			['safari', 'os', 'linux', 'Mobile Safari', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux arm7tdmi; rv:1.8.1.11) Gecko/20071130 Minimo/0.025'],
			['minimo', 'os', 'linux', 'Minimo 0.025', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre'],
			['minefield', 'os', 'win-4', 'Minefield 4.0b4pre', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; fr-fr) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori/1.19'],
			['midori', 'os', 'linux', 'Midori 1.19', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; de-at) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori'],
			['midori', 'os', 'linux', 'Midori', 'GNU/Linux x64'],
		],
		[
			['MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1'],
			['mib', 'device', 'motorola', 'MIB 2.2.1', 'Motorola L7'],
		],
		[
			['MOT-V300/0B.09.19R MIB/2.2 Profile/MIDP-2.0 Configuration/CLDC-1.0'],
			['mib', 'device', 'motorola', 'MIB 2.2', 'Motorola V300'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1'],
			['maxthon', 'os', 'win-3', 'Maxthon 3.0.8.2', 'Windows Vista'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MAXTHON 2.0)'],
			['maxthon', 'os', 'win-2', 'Maxthon 2.0', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; Maxthon; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)'],
			['maxthon', 'os', 'win-2', 'Maxthon', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux armv7l; ru-RU; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900'],
			['maemo', 'os', 'linux', 'Maemo Browser 1.7.4.8', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en; rv:1.7.12) Gecko/20050928 Firefox/1.0.7 Madfox/3.0'],
			['madfox', 'os', 'mac-3', 'Madfox 3.0', 'Mac OS X Mach-O'],
		],
		[
			['Lynx/2.8.1pre.9 libwww-FM/2.14'],
			['lynx', 'os', 'null', 'Lynx 2.8.1pre.9', 'Unknown'],
		],
		[
			['Lynx (textmode)'],
			['lynx', 'os', 'null', 'Lynx', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.28) Gecko/20120410 Firefox/3.6.28 Lunascape/6.7.1.25446'],
			['lunascape', 'os', 'win-4', 'Lunascape 6.7.1.25446', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Lunascape 6.7.1.25446)'],
			['lunascape', 'os', 'win-4', 'Lunascape 6.7.1.25446', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; ko; rv:1.9.2.16) Gecko/20110325 Firefox/3.6.16 Lunascape/6.4.5.23569'],
			['lunascape', 'os', 'win-2', 'Lunascape 6.4.5.23569', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Lunascape/6.4.2.23236 Safari/533.3'],
			['lunascape', 'os', 'win-4', 'Lunascape 6.4.2.23236', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.3pre) Gecko/20100403 Lorentz/3.6.3plugin2pre (.NET CLR 4.0.20506)'],
			['firefoxdevpre', 'os', 'win-4', 'Lorentz 3.6.3plugin2pre', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.1.17) Gecko/20110123 Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2) Gecko/20070225 lolifox/0.32'],
			['lolifox', 'os', 'win-4', 'lolifox 0.32', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows XP 5.1) Lobo/0.98.4'],
			['lobo', 'os', 'win-2', 'Lobo 0.98.4', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Linux 2.6.26-1-amd64) Lobo/0.98.3'],
			['lobo', 'os', 'linux', 'Lobo 0.98.3', 'GNU/Linux'],
		],
		[
			['LeechCraft (X11; U; Linux; ru_RU) (LeechCraft/Poshuku 0.3.95-1-g84cc6b7; WebKit 4.7.1/4.7.1)'],
			['null', 'os', 'linux', 'LeechCraft', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; Linux 3.5.4-1-ARCH i686; es) KHTML/4.9.1 (like Gecko) Konqueror/4.9'],
			['konqueror', 'os', 'linux', 'Konqueror 4.9', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu'],
			['konqueror', 'os', 'kubuntu-2', 'Konqueror 4.4', 'Kubuntu'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/4.2; Linux) KHTML/4.2.4 (like Gecko) Slackware/13.0'],
			['konqueror', 'os', 'slackware', 'Konqueror 4.2', 'Slackware'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/4.1; DragonFly) KHTML/4.1.4 (like Gecko)'],
			['konqueror', 'os', 'dragonflybsd', 'Konqueror 4.1', 'DragonFly BSD'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.3 (like Gecko) (Kubuntu package 4:3.4.3-0ubuntu2)'],
			['konqueror', 'os', 'kubuntu-2', 'Konqueror 3.4', 'Kubuntu'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.3 (like Gecko) (Kubuntu package 4:3.4.3-0ubuntu1)'],
			['konqueror', 'os', 'kubuntu-2', 'Konqueror 3.4', 'Kubuntu'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/3.4; SunOS) KHTML/3.4.1 (like Gecko)'],
			['konqueror', 'os', 'solaris', 'Konqueror 3.4', 'Solaris'],
		],
		[
			['Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1.4pre) Gecko/20070404 K-Ninja/2.1.3'],
			['kninja', 'os', 'win-1', 'K-Ninja 2.1.3', 'Windows 98 SE'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.19) Gecko/20081217 KMLite/1.1.2'],
			['kmeleon', 'os', 'win-1', 'KMLite 1.1.2', 'Windows 2000'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.21pre) Gecko K-Meleon/1.7.0'],
			['kmeleon', 'os', 'win-2', 'K-Meleon 1.7.0', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; KKMAN3.2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)'],
			['kkman', 'os', 'win-4', 'KKman 3.2', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6'],
			['kazehakase', 'os', 'fedora', 'Kazehakase 0.5.6', 'Fedora 10'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0'],
			['kapiko', 'os', 'win-2', 'Kapiko 3.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20'],
			['iris', 'os', 'win-2', 'Iris 1.1.7', 'Windows'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; iRider 2.60.0008; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)'],
			['irider', 'os', 'win-4', 'iRider 2.60.0008', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/4.0; GTB7.4; InfoPath.3; SV1; .NET CLR 3.1.76908; WOW64; en-US)'],
			['msie9', 'os', 'win-3', 'Internet Explorer 9.0', 'Windows Vista x64'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/4.0; FBSMTWB; .NET CLR 2.0.34861; .NET CLR 3.0.3746.3218; .NET CLR 3.5.33652; msn OptimizedIE8;ENUS)'],
			['msie7', 'os', 'win-1', 'Internet Explorer 8.0 (Compatibility Mode)', 'Windows 2000'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)'],
			['msie7', 'os', 'win-2', 'Internet Explorer 7.0b', 'Windows Server 2003'],
		],
		[
			['Mozilla/4.0 (Mozilla/4.0; MSIE 7.0; Windows NT 5.1; FDM; SV1)'],
			['msie7', 'os', 'win-2', 'Internet Explorer 7.0', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.1)'],
			['msie6', 'os', 'win-2', 'Internet Explorer 6.0', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.5', 'Windows 98'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.14; Mac_PowerPC)'],
			['msie4', 'os', 'mac-1', 'Internet Explorer 5.14', 'Macintosh'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 3.51)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.05', 'Windows NT 3.11'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 4.0)'],
			['msie4', 'os', 'win-1', 'Internet Explorer 5.05', 'Windows NT 4.0'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 4.01; Windows CE)'],
			['msie4', 'os', 'win-2', 'Internet Explorer 4.01', 'Windows CE'],
		],
		[
			['Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'],
			['msie11', 'os', 'win-5', 'Internet Explorer 11.0', 'Windows 8.1'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Macintosh; Intel Mac OS X 10_7_3; Trident/6.0)'],
			['msie10', 'os', 'mac-3', 'Internet Explorer 10.0', 'Mac OS X 10.7.3'],
		],
		[
			['Mozilla/6.0 (Future Star Technologies Corp. Star-Blade OS; U; en-US) iNet Browser 2.5'],
			['null', 'os', 'null', 'iNet Browser 2.5', 'Unknown'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'],
			['msie-mobile', 'os', 'wp7', 'IEMobile 9.0', 'Windows Phone 7.5'],
		],
		[
			['HTC_Touch_3G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)'],
			['msie-mobile', 'device', 'htc', 'IEMobile 7.11', 'HTC Touch'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)'],
			['msie-mobile', 'device', 'nokia', 'IEMobile 7.0', 'Nokia Lumia N70'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.0.7) Gecko/2009030814 Iceweasel Firefox/3.0.7 (Debian-3.0.7-1)'],
			['iceweasel', 'os', 'debian', 'IceWeasel', 'Debian'],
		],
		[
			['Mozilla/5.0 (X11; Linux i686; rv:9.0a2) Gecko/20111104 Firefox/9.0a2 Iceweasel/9.0a2'],
			['iceweasel', 'os', 'linux', 'IceWeasel 9.0a2', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.13) Gecko/20100916 Iceape/2.0.8'],
			['iceape', 'os', 'linux', 'Iceape 2.0.8', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) iCab/4.8 Safari/533.16'],
			['icab', 'os', 'mac-3', 'iCab 4.8', 'Mac OS X 10.6.8'],
		],
		[
			['iCab/4.5 (Macintosh; U; Mac OS X Leopard 10.5.8)'],
			['icab', 'os', 'mac-3', 'iCab 4.5', 'Mac OS X Leopard 10.5.8'],
		],
		[
			['Mozilla/5.0 (compatible; IBrowse 3.0; AmigaOS4.0)'],
			['ibrowse', 'os', 'amigaos', 'IBrowse 3.0', 'AmigaOS'],
		],
		[
			['IBM WebExplorer /v0.94'],
			['ibmwebexplorer', 'os', 'null', 'IBM WebExplorer', 'Unknown'],
		],
		[
			['HotJava/1.1.2 FCS'],
			['hotjava', 'os', 'null', 'HotJava 1.1.2', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.9 (KHTML, like Gecko) Hana/1.1'],
			['hana', 'os', 'mac-3', 'Hana 1.1', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/146.1 (KHTML, like Gecko) osb-browser/0.5'],
			['null', 'os', 'linux', 'Gtk+ WebCore 0.5', 'GNU/Linux'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; InfoPath.2; .NET CLR 3.0.30729; GreenBrowser)'],
			['greenbrowser', 'os', 'win-3', 'GreenBrowser', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux ppc; en-US; rv:1.9a8) Gecko/2007100620 GranParadiso/3.1'],
			['firefoxdevpre', 'os', 'linux', 'GranParadiso 3.1', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/13.0.782.215)'],
			['chrome', 'os', 'win-4', 'Google Chrome Frame 13.0.782.215', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; chromeframe; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MAXTHON 2.0)'],
			['chrome', 'os', 'win-4', 'Google Chrome Frame', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'],
			['chrome', 'device', 'ipad', 'Google Chrome 34.0.1847.116', 'iPad iOS 3.2'],
		],
		[
			['Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36'],
			['chrome', 'os', 'chromeos', 'Google Chrome 29.0.1547.57', 'Google Chrome OS'],
		],
		[
			['Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36'],
			['chrome', 'os', 'netbsd', 'Google Chrome 27.0.1453.116', 'NetBSD'],
		],
		[
			['Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (KHTML, like Gecko) Slackware/Chrome/12.0.742.100 Safari/534.30'],
			['chrome', 'os', 'slackware', 'Google Chrome 12.0.742.100', 'Slackware'],
		],
		[
			['NokiaE66/GoBrowser/2.0.297'],
			['gobrowser', 'device', 'nokia', 'GO Browser 2.0.297', 'Nokia E66'],
		],
		[
			['Nokia5800XpressMusic/GoBrowser/1.6.0.46'],
			['gobrowser', 'device', 'nokia', 'GO Browser 1.6.0.46', 'Nokia 5800XpressMusic'],
		],
		[
			['Mozilla/5.0 (Android 2.2; zh-cn; HTC Desire)/GoBrowser'],
			['gobrowser', 'device', 'htc', 'GO Browser', 'HTC Desire'],
		],
		[
			['NokiaX6/GoBrowser'],
			['gobrowser', 'device', 'nokia', 'GO Browser', 'Nokia X6'],
		],
		[
			['NokiaN97_mini/GoBrowser'],
			['gobrowser', 'device', 'nokia', 'GO Browser', 'Nokia N97'],
		],
		[
			['NokiaC5-00/GoBrowser'],
			['gobrowser', 'device', 'nokia', 'GO Browser', 'Nokia C5'],
		],
		[
			['Nokia6120c/GoBrowser'],
			['gobrowser', 'device', 'nokia', 'GO Browser', 'Nokia 6120c'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)'],
			['icecat', 'os', 'zenwalk', 'GNU IceCat 3.6.13', 'Zenwalk'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko/20090327 Galeon/2.0.7'],
			['galeon', 'os', 'linux', 'Galeon 2.0.7', 'GNU/Linux'],
		],
		[
			['Galaxy/1.0 [en] (Mac OS X 10.5.6)'],
			['galaxy', 'os', 'mac-3', 'Galaxy 1.0', 'Mac OS X 10.5.6'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Flock/3.5.3.4628 Chrome/7.0.517.450 Safari/534.7'],
			['flock', 'os', 'mac-3', 'Flock 3.5.3.4628', 'Mac OS X 10.6.6'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Flock/3.5.2.4599 Chrome/7.0.517.442 Safari/534.7'],
			['flock', 'os', 'win-4', 'Flock 3.5.2.4599', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:2.0) Treco/20110515 Fireweb Navigator/2.4'],
			['firewebnavigator', 'os', 'win-2', 'Fireweb Navigator 2.4', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0a2) Gecko/20111101 Firefox/9.0a2'],
			['firefox', 'os', 'mac-3', 'Firefox 9.0a2', 'Mac OS X 10.6'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0'],
			['firefox', 'os', 'win-5', 'Firefox 36.0', 'Windows 8.1'],
		],
		[
			['Mozilla/5.0 (X11; U; DragonFly i386; de; rv:1.9.1b2) Gecko/20081201 Firefox/3.1b2'],
			['firefox', 'os', 'dragonflybsd', 'Firefox 3.1b2', 'DragonFly BSD'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; tr-TR; rv:1.9.0) Gecko/2008061600 SUSE/3.0-1.2 Firefox/3.0'],
			['firefox', 'os', 'suse', 'Firefox 3.0', 'openSUSE'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0) Gecko/2008061600 SUSE/3.0-1.2 Firefox/3.0'],
			['firefox', 'os', 'suse', 'Firefox 3.0', 'openSUSE x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.5) Gecko/2008121622 Slackware/2.6.27-PiP Firefox/3.0'],
			['firefox', 'os', 'slackware', 'Firefox 3.0', 'Slackware'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.10) Gecko/20060410 Firefox/1.0.8 Mandriva/1.0.6-16.5.20060mdk (2006.0)'],
			['firefox', 'os', 'mandriva', 'Firefox 1.0.8', 'Mandriva'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.5) Gecko/20041215 Firefox/1.0 Red Hat/1.0-12.EL4'],
			['firefox', 'os', 'red-hat', 'Firefox 1.0', 'Red Hat Enterprise Linux 4'],
		],
		[
			['Mozilla/5.0 (X11; U; Gentoo Linux x86_64; pl-PL) Gecko Firefox'],
			['firefox', 'os', 'gentoo', 'Firefox', 'Gentoo x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; x64; fr; rv:1.9.2.13) Gecko/20101203 Firebird/3.6.13'],
			['firebird', 'os', 'win-4', 'Firebird 3.6.13', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/20111216 Firefox/9.0 Fennec/9.0'],
			['fennec', 'os', 'android', 'Fennec 9.0', 'Android'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; WOW64; rv:7.0a1) Gecko/20110623 Firefox/7.0a1 Fennec/7.0a1'],
			['fennec', 'os', 'win-4', 'Fennec 7.0a1', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.23; Macintosh; PPC) Escape 5.1.8'],
			['espialtvbrowser', 'os', 'mac-1', 'Escape 5.1.8', 'Macintosh'],
		],
		[
			['Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.5 AQUOSBrowser/2.0 (US01DTV;V;0001;0001)'],
			['espialtvbrowser', 'os', 'null', 'Espial 6.1.5', 'Unknown'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7'],
			['epiphany', 'os', 'linux', 'Epiphany 2.30.6', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-gb) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) epiphany-webkit'],
			['epiphany', 'os', 'linux', 'Epiphany', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.0.13) Gecko/2009073022 EnigmaFox/3.0.13'],
			['null', 'os', 'win-3', 'EnigmaFox 3.0.13', 'Windows Vista'],
		],
		[
			['Enigma Browser'],
			['enigmabrowser', 'os', 'null', 'Enigma Browser', 'Unknown'],
		],
		[
			['ELinks/0.9.3 (textmode; Linux 2.6.9-kanotix-8 i686; 127x41)'],
			['elinks', 'os', 'kanotix', 'Elinks 0.9.3', 'Kanotix'],
		],
		[
			['ELinks (0.11.3; Linux 2.6.23-gentoo-r6 i686; 128x48)'],
			['elinks', 'os', 'gentoo', 'Elinks', 'Gentoo'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533+ (KHTML, like Gecko) Element Browser 5.0'],
			['elementbrowser', 'os', 'win-4', 'Element Browser 5.0', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Mobile; Dorothy Browser; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/533.3'],
			['dorothybrowser', 'os', 'win-2', 'Dorothy Browser', 'Windows'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows CE; Mobile; like Android; ko-kr) AppleWebKit/533.3 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.3 Dorothy'],
			['dorothybrowser', 'os', 'win-2', 'Dorothy', 'Windows CE'],
		],
		/*
			[
			['Mozilla/5.0 (Windows; U; Windows CE; Mobile; like iPhone; ko-kr) AppleWebKit/533.3 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.3 Dorothy'],
			['dorothybrowser', 'os', 'win-2', 'Dorothy', 'Windows CE'],
			],*/
		[
			['Doris/1.15 [en] (Symbian)'],
			['doris', 'os', 'symbian', 'Doris 1.15', 'SymbianOS'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) Dooble/1.40 Safari/534.34'],
			['dooble', 'os', 'win-2', 'Dooble 1.40', 'Windows XP'],
		],
		[
			['Dooble/0.07 (de_CH) WebKit'],
			['dooble', 'os', 'null', 'Dooble 0.07', 'Unknown'],
		],
		[
			['Dillo/2.0'],
			['dillo', 'os', 'null', 'Dillo 2.0', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; pl-pl) AppleWebKit/312.8 (KHTML, like Gecko, Safari) DeskBrowse/1.0'],
			['deskbrowse', 'os', 'mac-3', 'DeskBrowse 1.0', 'Mac OS X'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; Deepnet Explorer 1.5.3; Smart 2x2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)'],
			['deepnetexplorer', 'os', 'win-4', 'Deepnet Explorer 1.5.3', 'Windows 7 x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Deepnet Explorer 1.5.3; Smart 2x2; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)'],
			['deepnetexplorer', 'os', 'win-2', 'Deepnet Explorer 1.5.3', 'Windows XP'],
		],
		[
			['Cyberdog/2.0 (Macintosh; PPC)'],
			['cyberdog', 'os', 'mac-1', 'Cyberdog 2.0', 'Macintosh'],
		],
		[
			['Cyberdog/2.0 (Macintosh; 68k)'],
			['cyberdog', 'os', 'mac-1', 'Cyberdog 2.0', 'Macintosh'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; SV1; Crazy Browser 9.0.04)'],
			['crazybrowser', 'os', 'win-3', 'Crazy Browser 9.0.04', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Crazy Browser 3.1.0)'],
			['crazybrowser', 'os', 'win-5', 'Crazy Browser 3.1.0', 'Windows 8'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; InfoPath.2; Crazy Browser 3.0.5)'],
			['crazybrowser', 'os', 'win-2', 'Crazy Browser 3.0.5', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Crazy Browser 3.0.5) ; .NET CLR 3.0.04506.30; InfoPath.2; InfoPath.3; .NET CLR 1.1.4322; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727)'],
			['crazybrowser', 'os', 'win-2', 'Crazy Browser 3.0.5', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; Q312461; Crazy Browser 1.0.5; .NET CLR 1.0.3705)'],
			['crazybrowser', 'os', 'win-1', 'Crazy Browser 1.0.5', 'Windows 2000'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Q312461; Crazy Browser 1.0.5)'],
			['crazybrowser', 'os', 'win-2', 'Crazy Browser 1.0.5', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Avant Browser [avantbrowser.com]; Crazy Browser 1.0.5)'],
			['crazybrowser', 'os', 'win-2', 'Crazy Browser .com', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; rv:16.0) Gecko/20121010 conkeror/1.0pre'],
			['conkeror', 'os', 'win-4', 'Conkeror 1.0pre', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (X11; Linux x86_64; rv:6.0.1) Gecko/20110831 conkeror/0.9.3'],
			['conkeror', 'os', 'linux', 'Conkeror 0.9.3', 'GNU/Linux x64'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.14) Gecko/20101020 Conkeror/0.9.2 (Debian-0.9.2+git100804-1)'],
			['conkeror', 'os', 'debian', 'Conkeror 0.9.2', 'Debian x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7'],
			['comodo-dragon', 'os', 'win-5', 'Comodo Dragon 16.1.1.0', 'Windows 8'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.0; it; rv:1.9.2.16) Gecko/20110325 Firefox/3.6.16 CometBird/3.6.16'],
			['cometbird', 'os', 'win-3', 'CometBird 3.6.16', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC; en-US; mimic; rv:9.3.0) Clecko/20120101 Classilla/CFM'],
			['classilla', 'os', 'mac-1', 'Classilla 9.3.0', 'Macintosh'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Ubuntu/10.10 Chromium/9.0.600.0 Chrome/9.0.600.0 Safari/534.14'],
			['chromium', 'os', 'ubuntu-2', 'Chromium 9.0.600.0', 'Ubuntu 10.10 x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 ChromePlus/4.0.222.3 Chrome/4.0.222.3 Safari/525.28.3'],
			['chromeplus', 'os', 'win-2', 'ChromePlus 4.0.222.3', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20021111 Chimera/0.6'],
			['null', 'os', 'mac-3', 'Chimera 0.6', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/418.9 (KHTML, like Gecko, Safari) Cheshire/1.0.UNOFFICIAL'],
			['aol', 'os', 'mac-3', 'Cheshire 1.0.UNOFFICIAL', 'Mac OS X'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/419 (KHTML, like Gecko, Safari/125) Cheshire/1.0.ALPHA'],
			['aol', 'os', 'mac-3', 'Cheshire 1.0.ALPHA', 'Mac OS X'],
		],
		[
			['Mozilla/4.08 (Charon; Inferno)'],
			['null', 'os', 'inferno', 'Charon', 'Inferno'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.8; it; rv:1.93.26.2658) Gecko/20141026 Camino/2.176.223 (MultiLang) (like Firefox/3.64.2268)0'],
			['camino', 'os', 'mac-3', 'Camino 2.176.223', 'Mac OS X 10.8'],
		],
		[
			['Bunjalloo/0.7.6(Nintendo DS;U;en)'],
			['bunjalloo', 'device', 'nintendods', 'Bunjalloo 0.7.6', 'Nintendo DS'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; Browzar)'],
			['browzar', 'os', 'win-2', 'Browzar', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; nl; rv:1.8.1b2) Gecko/20060821 BonEcho/2.0b2 (Debian-1.99+2.0b2+dfsg-1)'],
			['firefoxdevpre', 'os', 'debian', 'BonEcho 2.0b2', 'Debian'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.340) AppleWebKit/530+ (KHTML, like Gecko) Version/4.0 Safari/530.17 UNTRUSTED/1.0 3gpp-gba'],
			['bolt', 'os', 'win-2', 'Bolt 2.340', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows 95; PalmSource; Blazer 3.0) 16; 160x160'],
			['blazer', 'device', 'palm', 'Blazer 3.0', 'Palm'],
		],
		[
			['Mozilla/5.0 (Windows; U; WinNT; en; rv:1.0.2) Gecko/20030311 Beonex/0.8.2-stable'],
			['beonex', 'os', 'win-2', 'Beonex 0.8.2', 'Windows'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; Avant Browser; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)'],
			['avantbrowser', 'os', 'win-4', 'Avant Browser', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.8.0'],
			['arora', 'os', 'linux', 'Arora 0.8.0', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (X11; U; UNICOS lcLinux; en-US) Gecko/20140730 (KHTML, like Gecko, Safari/419.3) Arora/0.8.0'],
			['arora', 'os', 'linux', 'Arora 0.8.0', 'GNU/Linux'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; AOL 9.7; AOLBuild 4343.27; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)'],
			['aol', 'os', 'win-2', 'AOL 9.7', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; AOL 7.0; Windows NT 5.0)'],
			['aol', 'os', 'win-1', 'AOL 7.0', 'Windows 2000'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; AOL 7.0; Windows 98; Win 9x 4.90; .NET CLR 1.1.4322)'],
			['aol', 'os', 'win-1', 'AOL 7.0', 'Windows Me'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'lg', 'Android Webkit 4.0', 'LG L160L'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'htc', 'Android Webkit 4.0', 'HTC Sensation'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9'],
			['android-webkit', 'os', 'android', 'Android Webkit', 'Android 2.3'],
		],
		[
			['AmigaVoyager/3.2 (AmigaOS/MC680x0)'],
			['amigavoyager', 'os', 'amigaos', 'Amiga Voyager 3.2', 'AmigaOS'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; America Online Browser 1.1; rev1.5; Windows NT 5.1; SV1; .NET CLR 1.1.4322; InfoPath.1)'],
			['aol', 'os', 'win-2', 'America Online Browser 1.1', 'Windows XP'],
		],
		[
			['amaya/10 libwww/5.4.0'],
			['amaya', 'os', 'null', 'Amaya 10', 'Unknown'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; Acoo Browser 1.98.744; .NET CLR 3.5.30729)'],
			['acoobrowser', 'os', 'win-3', 'Acoo Browser 1.98.744', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 480X800 LGE VX11000'],
			['obigo', 'device', 'lg', 'Teleca Q7', 'LG VX11000'],
		],
		[
			['Mozilla/5.0 (Ubuntu; Mobile) WebKit/537.21'],
			['ubuntuwebbrowser', 'device', 'ubuntutouch', 'Ubuntu Web Browser', 'Ubuntu Phone'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; Acoo Browser 1.98.744; .NET CLR 3.5.30729)'],
			['acoobrowser', 'os', 'win-3', 'Acoo Browser 1.98.744', 'Windows Vista'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; http://www.Abolimba.de; .NET CLR 1.1.4322)'],
			['abolimba', 'os', 'win-2', 'Abolimba', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 Alienforce/9.0.1'],
			['alienforce', 'os', 'win-5', 'Alienforce 9.0.1', 'Windows 8 x64'],
		],
		[
			['Amiga-AWeb/3.4.167SE'],
			['amiga-aweb', 'os', 'null', 'Amiga AWeb 3.4.167SE', 'Unknown'],
		],
		[
			['BarcaPro/1.4.xxxx'],
			['barca', 'os', 'null', 'Barca Pro 1.4.xxxx', 'Unknown'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SIMBARCA5238C3-B76C-4BCE-8B03-0CE1EA1E621D; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)'],
			['barca', 'os', 'win-2', 'Barca 5238C3', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML like Gecko) Chrome/32.0.1700.77 Beamrise/32.2.1700.77 Safari/537.36'],
			['beamrise', 'os', 'win-5', 'Beamrise 32.2.1700.77', 'Windows 8'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 BIDUBrowser/7.0 Safari/537.36'],
			['bidubrowser', 'os', 'win-2', 'Baidu Browser 7.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1.1; ar-eg; BlackBird I9000 Build/IMM76D) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30'],
			['blackbird', 'os', 'android', 'Blackbird I9000', 'Android 4.1.1'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML like Gecko) BlackHawk/1.0.195.0 Chrome/127.0.0.1 Safari/52916320.534'],
			['blackhawk', 'os', 'win-4', 'BlackHawk 1.0.195.0', 'Windows 7'],
		],
		[
			['Mozilla/4.61 [en] (X11; U; ) - BrowseX (2.0.0 Windows)'],
			['browsex', 'os', 'win-2', 'BrowseX', 'Windows'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Coast/1.0.2.62956 Mobile/10B329 Safari/7534.48.3'],
			['coast', 'device', 'ipad', 'Coast 1.0.2.62956', 'iPad iOS 6.1.3'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.34 (KHTML like Gecko) Columbus/1.5.0.0 Safari/534.34'],
			['columbus', 'os', 'win-5', 'Columbus 1.5.0.0', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML like Gecko) coccocbrowser/42.0 CoRom/36.0.1985.149 Chrome/36.0.1985.149 Safari/537.36'],
			['corom', 'os', 'win-5', 'CoRom 36.0.1985.149', 'Windows 8.1'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; Transformer Prime TF201 Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Safari/535.7'],
			['chrome', 'os', 'android', 'Chrome Mobile 16.0.912.75', 'Android 4.0.3'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.3.7; en-gb; E15i Build/4.0.1.A.0.283; GingerCruzt) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1'],
			['cruz', 'os', 'android', 'Cruz t', 'Android 2.3.7'],
		],
		[
			['Mozilla/4.0 (compatible; DPlus 0.5a)'],
			['dillo', 'os', 'null', 'D+ 0.5a', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1056; en-us) AppleWebKit/525.27.1 (KHTML like Gecko) Demeter/1.0.9 Safari/125'],
			['demeter', 'os', 'mac-3', 'Demeter 1.0.9', 'Mac OS X 1056'],
		],
		[
			['Mozilla/3.01 (compatible; Netbox/3.5 R92; Linux 2.2)'],
			['netbox', 'os', 'linux', 'NetBox 3.5', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.3a5) Gecko/20100610 MozillaDeveloperPreview/3.7a5'],
			['firefoxdevpre', 'os', 'win-3', 'Mozilla Developer Preview 3.7a5', 'Windows Vista'],
		],
		[
			['Mozilla/4.7 (compatible; OffByOne; Windows )'],
			['offbyone', 'os', 'win-2', 'Off By One', 'Windows'],
		],
		[
			['OneBrowser/4.2.0/Adr(Linux; U; Android 4.1.2; cs-cz; C2105 Build/15.0.A.1.31) AppleWebKit/533.1 (KHTML, like Gecko) Mobile Safari/533.1'],
			['onebrowser', 'os', 'android', 'OneBrowser 4.2.0', 'Android 4.1.2'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36 OPR/19.0.1326.39 (Edition Next)'],
			['opera-next', 'os', 'mac-3', 'Opera Next 19.0.1326.39', 'Mac OS X 10.9.1'],
		],
		[
			['Mozilla/5.0 (compatible; Origyn Web Browser; AmigaOS 4.1; PPC; U) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+)'],
			['owb', 'os', 'amigaos', 'Oregano Web Browser', 'AmigaOS 4.1'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.3; Amazon Otter Build/KTU84M) AppleWebKit/537.36 (KHTML like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36'],
			['otter', 'os', 'android', 'Otter Build', 'Android 4.4.3'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) SlimBoat/1.0.8 Version/5.1 Safari/533.3'],
			['slimboat', 'os', 'win-4', 'SlimBoat 1.0.8', 'Windows 7'],
		],
		[
			['KDDI-KC31 UP.Browser/6.2.0.5 (GUI) MMP/2.0'],
			['openwave', 'os', 'null', 'Openwave Mobile Browser 6.2.0.5', 'Unknown'],
		],
		[
			['HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en) UP.Link/6.3.1.17.0'],
			['openwave', 'device', 'htc', 'Openwave Mobile Browser 6.3.1.17.0', 'HTC ST7377'],
		],
		[
			['Mozilla/5.0 (X11; Linux x86_64; rv:2.0) Gecko/20110318 WebianShell/0.'],
			['webianshell', 'os', 'linux', 'Webian Shell 0.', 'GNU/Linux x64'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; QQDownload 1.7; GTB6.6; TencentTraveler 4.0; SLCC1; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.5.30729; .NET CLR 3.0.30729)'],
			['tencenttraveler', 'os', 'win-3', 'Tencent Traveler 4.0', 'Windows Vista'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Tjusig 2.40.164; Avant Browser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)'],
			['tjusig', 'os', 'win-1', 'Tjusig 2.40.164', 'Windows 98'],
		],
		[
			['Mozilla/5.0 (Linux; U; Tizen 2.0; en-us) AppleWebKit/537.1 (KHTML, like Gecko) Mobile TizenBrowser/2.0'],
			['tizen', 'os', 'linux', 'Tizen 2.0', 'GNU/Linux'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; AspTear 1.5)'],
			['tear', 'os', 'win-1', 'Tear', 'Windows 2000'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.8.1.9) Gecko/20071110 Sylera/3.0.20 SeaMonkey/1.1.6'],
			['null', 'os', 'win-4', 'Sylera 3.0.20', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2) AppleWebKit/534.34 (KHTML like Gecko) SlimBoat/1.1.53 Chrome/25.0.1364.97 Version/5.1 Safari/534.34'],
			['slimboat', 'os', 'win-5', 'SlimBoat 1.1.53', 'Windows 8'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true'],
			['silk', 'os', 'mac-3', 'Amazon Silk 1.0.13.81', 'Mac OS X 10.6.3'],
		],
		[
			['DoCoMo/2.0 F2051(c100;TD)'],
			['null', 'os', 'null', 'DoCoMo 2.0', 'Unknown'],
		],
		[
			['DocZilla/1.0 (Windows; U; WinNT4.0; en-US; rv:1.0.0)'],
			['doczilla', 'os', 'win-1', 'DocZilla 1.0', 'Windows NT 4.0'],
		],
		[
			['Mozilla/5.0 (iPad; CPU OS 613 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Mobile/10B329 Safari/6533.18.5 SecuredBrowser/jp.co.obayashi.clomosecuredbrowser'],
			['edbrowse', 'device', 'ipad', 'Edbrowse r', 'iPad iOS 613'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X 1095) AppleWebKit/537.36 (KHTML like Gecko) Chrome/34.0.1771.0 Safari/537.36 Epic'],
			['epicbrowser', 'os', 'mac-3', 'Epic', 'Mac OS X 1095'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1; nl-nl) AppleWebKit/532.3+ (KHTML, like Gecko) Fluid/0.9.6 Safari/532.3+'],
			['fluid', 'os', 'mac-3', 'Fluid 0.9.6', 'Mac OS X 10.6.1'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.10) Gecko/20100923 Firefox/3.6.10 compat GlobalMojo/2.0.7 GlobalMojoExt/2.0.7'],
			['globalmojo', 'os', 'win-4', 'GlobalMojo 2.0.7', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; GTB7.5; GOSURF; Foxy/1; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30618)'],
			['gosurf', 'os', 'win-3', 'GoSurf', 'Windows Vista'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; en-us ; HV3 Build/JDQ39) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1/UCBrowser/8.6.1.262/145/355'],
			['hv3', 'os', 'android', 'Hv3 Build', 'Android 4.2.2'],
		],
		[
			['Mozilla/5.0 (Java 1.6.0_01; Windows XP 5.1 x86; en) ICEbrowser/v6_1_2'],
			['icebrowser', 'os', 'win-2', 'IceBrowser v6', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 712 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Mobile/11D257 FBAN/FBIOS;FBAV/14.0.0.25.26;FBBV/4017285;FBDV/iPhone61;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/Strata;FBID/phone;FBLC/enUS;FBOP/5'],
			['kirix-strata', 'device', 'iphone', 'Kirix Strata', 'iPhone iOS 712'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/31.0.1650.63 Safari/537.36'],
			['chrome', 'os', 'win-5', 'Google Chrome 31.0.1650.63', 'Windows 8 x64'],
		],
		[
			['Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; LEGALBROWSER)'],
			['lbrowser', 'os', 'win-4', 'LBrowser', 'Windows 7 x64'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; cs; rv:1.9.2.6) Gecko/20100628 myibrow/4alpha2'],
			['my-internet-browser', 'os', 'win-4', 'myibrow 4alpha2', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; ru-RU) AppleWebKit/533.3 (KHTML like Gecko) InternetSurfboard/0.4 Safari/533.3'],
			['internetsurfboard', 'os', 'win-4', 'InternetSurfboard 0.4', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; SkipStone 0.8.3) Gecko/20020615 Debian/1.0.0-3'],
			['skipstone', 'os', 'debian', 'SkipStone 0.8.3', 'Debian'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 5.1; cs; rv:1.9.0.5) Gecko/2009021916 Songbird/1.1.2 (20090331142126)'],
			['songbird', 'os', 'win-2', 'Songbird 1.1.2', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.12 (KHTML, like Gecko) Chrome/9.0.571.0 Safari/534.12 ZipZap 3.1'],
			['zipzap', 'os', 'win-4', 'ZipZap 3.1', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; UltraBrowser 11.0; BTRS123574; InfoPath.2)'],
			['ultrabrowser', 'os', 'win-2', 'UltraBrowser 11.0', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (en-us) AppleWebKit/537.36(KHTML like Gecko; Google-Adwords-DisplayAds-WebRender;) Chrome/27.0.1453Safari/537.36'],
			['webrender', 'os', 'null', 'Webrender', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1067; it-it) AppleWebKit/533.20.25 (KHTML like Gecko) Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1067; en) AppleWebKit/533.20.25 (KHTML like Gecko) "wKiosk for Mac"'],
			['wkiosk', 'os', 'mac-3', 'wKiosk', 'Mac OS X 1067'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.2 Ryouko/1.2.4 Safari/534.34'],
			['ryouko', 'os', 'win-2', 'Ryouko 1.2.4', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) QupZilla/1.4.3 Safari/534.34'],
			['qupzilla', 'os', 'mac-3', 'QupZilla 1.4.3', 'Mac OS X'],
		],
		[
			['Podkicker/1.0.3 Android/4.0.4'],
			['podkicker', 'os', 'android', 'Podkicker 1.0.3', 'Android 4.0.4'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; PhaseOut-www.phaseout.net)'],
			['phaseout', 'os', 'win-2', 'Phaseout', 'Windows XP'],
		],
		[
			['Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M330; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1 Novarra-Vision/8.0'],
			['polaris', 'device', 'samsung', 'Polaris 6.1', 'Samsung'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) Patriott::Browser/1.0.0 Safari/533.3'],
			['patriott', 'os', 'win-4', 'Patriott Browser 1.0.0', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; fa-IR) AppleWebKit/532.4 (KHTML like Gecko) Usejump/0.10.4 Safari/532.4'],
			['usejump', 'os', 'win-4', 'Usejump 0.10.4', 'Windows 7'],
		],
		[
			['Xiino/1.0.9E [en] (v. 3.5.2H6.0; 153x130; c8)'],
			['null', 'os', 'null', 'Xiino 1.0.9E', 'Unknown'],
		],
		[
			['X-Smiles/1.2-20081113'],
			['x-smiles', 'os', 'null', 'X-Smiles 1.2', 'Unknown'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.34 (KHTML, like Gecko) zBrowser/NigtSky-0.0.2 Safari/534.34'],
			['zbrowser', 'os', 'win-4', 'zBrowser NigtSky', 'Windows 7'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Pro'],
			['opera-1', 'device', 'htc', 'Opera 9.5', 'HTC Touch Pro'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2.2; de-de; Dell Streak Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'dell', 'Android Webkit 4.0', 'Dell Streak'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.5; Trident/3.1; IEMobile/7.0; DELL; Venue Pro)'],
			['msie-mobile', 'device', 'dell', 'IEMobile 7.0', 'Dell'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'htc', 'Android Webkit 4.0', 'HTC Sensation'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2; fr-lu; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'htc', 'Android Webkit 4.0', 'HTC Legend'],
		],
		[
			['UA: Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Tattoo 1.67.164.9 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'],
			['android-webkit', 'device', 'htc', 'Android Webkit 3.1.2', 'HTC Tattoo'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2; xx-xx; lepad_001b Build/PQXU100.4.0097.042211) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'lenovo', 'Android Webkit 4.0', 'Lenovo LePad'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'],
			['android-webkit', 'device', 'motorola', 'Android Webkit 4.0', 'Motorola Droid'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'],
			['android-webkit', 'device', 'motorola', 'Android Webkit 4.0', 'Motorola Xoom'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17'],
			['android-webkit', 'device', 'motorola', 'Android Webkit 4.0', 'Motorola XT720'],
		],
		[
			['Opera/9.50 (Nintendo DSi; Opera/483; U; en-US)'],
			['opera-1', 'device', 'nintendodsi', 'Opera 9.50', 'Nintendo DSi'],
		],
		[
			['Mozilla/5.0 (Nintendo WiiU) AppleWebKit/534.52 (KHTML, like Gecko) NX/2.1.0.8.23 NintendoBrowser/1.1.0.7579.EU'],
			['mozilla', 'device', 'nintendowiiu', 'Mozilla Compatible', 'Nintendo Wii U'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1; xx-xx; ONDA MID Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30'],
			['android-webkit', 'device', 'onda', 'Android Webkit 4.0', 'Onda'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-CN; OPPO R833T Build/baijiazai) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1'],
			['ucbrowser', 'device', 'oppo', 'UC Browser 9.9.5.489', 'OPPO'],
		],
		[
			['Mozilla/5.0 (webOS/1.3.5.1; U; xx-xx) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.1'],
			['safari', 'device', 'palm', 'Safari 1.0', 'Palm Pixi'],
		],
		[
			['Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0'],
			['palmpre', 'device', 'palm', 'Palm Pre 1.0', 'Palm Pre'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; zh-CN; Coolpad 8670 Build/JDQ39) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.2.467 U3/0.8.0 Mobile Safari/533.1'],
			['ucbrowser', 'device', 'coolpad', 'UC Browser 9.9.2.467', 'CoolPad 8670'],
		],
		[
			['CoolPad8736_CMCC_TD/1.0 Linux/3.0.8 Android/4.2 Release/6.25.2013 Browser/AppleWebkit534.30'],
			['android-webkit', 'device', 'coolpad', 'Android Webkit', 'CoolPad 8736'],
		],
		[
			['Mozilla/5.0 (Ubuntu; Tablet) WebKit/537.21'],
			['ubuntuwebbrowser', 'device', 'ubuntutouch', 'Ubuntu Web Browser', 'Ubuntu Tablet'],
		],
		[
			['UCWEB/2.0 (Linux; U; Android 4.2.1; zh-CN; vivo X3t) U2/1.0.0 UCBrowser/9.9.4.484 U2/1.0.0 Mobile'],
			['ucbrowser', 'device', 'vivo', 'UC Browser 9.9.4.484', 'vivo X3t'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; vivo X3L Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'vivo', 'Android Webkit 4.0', 'vivo X3L'],
		],
		[
			['HUAWEI_P6-T00_TD/5.0 Android/4.2.2 (Linux; U; Android 4.2.2; zh-cn) Release/03.20.2013 Browser/WAP2.0 (AppleWebKit/534.30) Mobile Safari/534.30'],
			['android-webkit', 'device', 'huawei', 'Android Webkit', 'Huawei P6'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19'],
			['chrome', 'device', 'samsung', 'Google Chrome 18.0.1025.133', 'Samsung Galaxy Nexus'],
		],
		[
			['Mozilla/5.0 (SmartHub; SMART-TV; U; Linux/SmartTV) AppleWebKit/531.2+ (KHTML, like Gecko) WebBrowser/1.0 SmartTV Safari/531.2+'],
			['maplebrowser', 'device', 'samsung', 'Maple Browser 1.0', 'Samsung Smart TV'],
		],
		[
			['Mozilla/5.0 (SMART-TV; X11; Linux i686) AppleWebKit/535.20+ (KHTML, like Gecko) Version/5.0 Safari/535.20+'],
			['safari', 'device', 'samsung', 'Safari 5.0', 'Samsung Smart TV'],
		],
		[
			['Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2'],
			['silk', 'device', 'playstation', 'Amazon Silk 3.2', 'PlayStation Vita'],
		],
		[
			['PSP (PlayStation Portable); 2.00'],
			['null', 'device', 'playstation', 'Unknown', 'PlayStation Portable'],
		],
		[
			['Mozilla/4.0 (PSP (PlayStation Portable); 2.00)'],
			['mozilla', 'device', 'playstation', 'Mozilla Compatible', 'PlayStation Portable'],
		],
		[
			['Mozilla/5.0 (PlayStation 4 1.51) AppleWebKit/536.26 (KHTML, like Gecko)'],
			['webkit', 'device', 'playstation', 'PS4 Web Browser', 'PlayStation 4'],
		],
		[
			['Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'],
			['chrome', 'device', 'iphone', 'Google CriOS 19.0.1084.60', 'iPhone iOS 5.1.1'],
		],
		[
			['Mozilla/5.0 (compatible; Konqueror/2.2.2; Linux 2.4.18; X11; i686; AffiliateCashGen/1.0; en) LindowsOS (Lindows.com, Inc.)'],
			['konqueror', 'os', 'lindowsos', 'Konqueror 2.2.2', 'LindowsOS'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en; rv:1.9b5) Gecko Foresight Linux Epiphany/2.22'],
			['epiphany', 'os', 'foresight', 'Epiphany 2.22', 'Foresight Linux'],
		],
		[
			['AmigaVoyager/3.4.4 (MorphOS/PPC native) user-agent'],
			['amigavoyager', 'os', 'morphos', 'Amiga Voyager 3.4.4', 'MorphOS'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.12) Gecko/20100826 moonOS/3.0 (Makara) Firefox/3.5.2'],
			['firefox', 'os', 'moonos', 'Firefox 3.5.2', 'moonOS 3.0'],
		],
		[
			['Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.7.10) Gecko/20050919 (No IDN) Firefox/1.0.6'],
			['firefox', 'os', 'openbsd', 'Firefox 1.0.6', 'OpenBSD'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1) Gecko/20090619 Pardus/2009 Firefox/3.5'],
			['firefox', 'os', 'pardus', 'Firefox 3.5', 'Pardus'],
		],
		[
			['Mozilla/2.0 (Compatible; AOL-IWENG 3.0; Win16)'],
			['aol', 'os', 'win-1', 'AOL', 'Windows 3.11'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)'],
			['icecat', 'os', 'zenwalk', 'GNU IceCat 3.6.13', 'Zenwalk'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)'],
			['icecat', 'os', 'zenwalk', 'GNU IceCat 3.6.13', 'Zenwalk'],
		],
		[
			['Mozilla/5.0 (X11; U; Linux i686; nl-NL; rv:1.6) Gecko/20050714 Linspire/1.6-5.1.0.50.linspire2.70'],
			['mozilla', 'os', 'lindowsos', 'Mozilla Compatible', 'Linspire'],
		],
		[
			['Mozilla/5.0 (X11; U; Mac OSX; it; rv:1.9.0.7) Gecko/2009030422 Firefox/3.0.7'],
			['firefox', 'os', 'mac-2', 'Firefox 3.0.7', 'Mac OS X'],
		],
		[
			['MobileSafari/9537.53 CFNetwork/672.1.13 Darwin/13.1.0'],
			['safari', 'os', 'mac-1', 'Mobile Safari', 'Mac OS Darwin'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; MEIZU MX Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobiile Safari/533.1'],
			['android-webkit', 'device', 'meizu', 'Android Webkit 4.0', 'Meizu'],
		],
		[
			['Mozilla/5.0 (Linux; Android 4.4.4; Xperia SP Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 YiXin/3.2.0'],
			['chrome', 'device', 'xperia', 'Google Chrome 33.0.0.0', 'Xperia SP'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; Xperia Z Build/KTU84Q) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'xperia', 'Android Webkit 4.0', 'Xperia Z'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; GT-I9300I Build/JLS36C) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 Mobile Safari/537.36'],
			['qqbrowser', 'device', 'samsung', 'MQQBrowser 5.4', 'Samsung I9300I'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1.2; zh-CN; GT-N7100 Build/JZO54K) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.2.467 U3/0.8.0 Mobile Safari/533.1'],
			['ucbrowser', 'device', 'samsung', 'UC Browser 9.9.2.467', 'Samsung N7100'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.2.2; nl-nl; GT-I9505 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'],
			['android-webkit', 'device', 'samsung', 'Android Webkit 4.0', 'Samsung I9505'],
		],
		[
			['AtomicBrowser/7.0.1 CFNetwork/672.0.8 Darwin/14.0.0'],
			['atomicwebbrowser', 'os', 'mac-1', 'Atomic Web Browser 7.0.1', 'Mac OS Darwin'],
		],
		[
			['Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Multi-Browser XP 10.2 (www.multibrowser.de); Avant Browser; .NET CLR 2.0.50727; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 3.0.04506.30)'],
			['multi-browserxp', 'os', 'win-2', 'Multi-Browser XP', 'Windows XP'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 MicroMessenger/5.0.1'],
			['wechat', 'device', 'iphone', 'WeChat 5.0.1', 'iPhone iOS 6.1.3'],
		],
		[
			['Mozilla/5.0 (Linux; U; Android 4.1.2; zh-cn; MI-ONE Plus Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 MicroMessenger/5.0.1.352'],
			['wechat', 'device', 'xiaomi', 'WeChat 5.0.1.352', 'Xiaomi 1'],
		],
		[
			['Mozilla/3.04 (compatible; ANTFresco/2.13; RISC OS 4.02)'],
			['antfresco', 'os', 'risc', 'ANT Fresco 2.13', 'RISC OS 4.02'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) WhiteHat Aviator/35.0.1916.114 Chrome/35.0.1916.114 Safari/537.36'],
			['aviator', 'os', 'win-5', 'WhiteHat Aviator 35.0.1916.114', 'Windows 8.1 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.1; rv:20.0) Gecko/20100101 Firefox/20.0 IceDragon/20.0.1.14'],
			['icedragon', 'os', 'win-4', 'IceDragon 20.0.1.14', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36 Kinza/1.2.0'],
			['kinza', 'os', 'win-5', 'Kinza 1.2.0', 'Windows 8.1 x64'],
		],
		[
			// I didn't install the latest version.
			// The latest version of Polarity Browser was based on Chromium.
			['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.12) Gecko/20101026 Villanova/1.9.2.12 Polarity/3.0.0 Firefox/4.0'],
			['polarity', 'os', 'win-4', 'Polarity 3.0.0', 'Windows 7'],
		],
		[
			['Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.46 Safari/536.5 Nichrome/self/19'],
			['nichromeself', 'os', 'win-2', 'NiChrome 19', 'Windows XP'],
		],
		// WOW!
		[
			['Mozilla/5.0 (X11; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) QtCarBrowser Safari/533.3'],
			['tesla', 'os', 'linux', 'Tesla Car Browser', 'GNU/Linux'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:35.0) Gecko/20100101 Firefox/35.0 Waterfox/35.0'],
			['waterfox', 'os', 'win-5', 'WaterFox 35.0', 'Windows 8.1 x64'],
		],
		[
			['Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Superbird/37.0.2062.90 Chrome/37.0.2062.90 Safari/537.36'],
			['superbird', 'os', 'win-5', 'Superbird 37.0.2062.90', 'Windows 8.1 x64'],
		],
		[
			['Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+'],
			['safari', 'device', 'blackberry', 'Mobile Safari 7.1.0.346', 'BlackBerry 9900']
		],
		[
			['Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+'],
			['safari', 'os', 'blackberry', 'Mobile Safari 10.0.9.2372', 'BlackBerry OS 10']
		],
		[
			['Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; NOKIA; Nokia 920) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0'],
			['edge', 'device', 'nokia', 'Edge 12.0', 'Nokia Lumia 920'],
		],
		[
			['Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) GSA/3.2.1.25875 Mobile/11D167 Safari/8536.25'],
			['google', 'device', 'iphone', 'Google Search App 3.2.1.25875', 'iPhone iOS 7.1'],
		],
	];

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
})();