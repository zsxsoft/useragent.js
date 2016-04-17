(function() {
    var testUAList = [
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 114Browser/5.0"],
            ["114browser", "win-2", "null", "win-2", "os", "Windows XP", "114Browser", "5.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 115Browser/5.1.3"],
            ["115browser", "win-2", "null", "win-2", "os", "Windows XP", "115Browser", "5.1.3", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; 2345Explorer 3.4.0.12519)"],
            ["2345explorer", "win-5", "null", "win-5", "os", "Windows 8", "2345Explorer", "3.4.0.12519", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; HM NOTE 1W Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30; 360browser(securitypay,securityinstalled); 360(android,uppayplugin); 360 Aphone Browser (5.4.1)"],
            ["360se", "xiaomi", "xiaomi", "android", "device", "Xiaomi HM-NOTE 1W", "", "", "Android", "4.2.2", "Android 4.2.2", "Xiaomi", "HM-NOTE 1W", "Xiaomi HM-NOTE 1W"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko se5_i) Chrome/31.0.1650.63 Safari/537.36 QIHU 360SE"],
            ["360se", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "", "", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; America Online Browser 1.1; rev1.2; Windows NT 5.1; SV1; .NET CLR 1.1.4322)"],
            ["aol", "win-2", "null", "win-2", "os", "Windows XP", "America Online Browser", "1.1", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux;u;Android 2.3.7;zh-cn;HTC Desire Build) AppleWebKit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "htc", "htc", "android", "device", "HTC Desire", "Android Webkit", "4.0", "Android", "2.3.7", "Android 2.3.7", "HTC", "Desire", "HTC Desire"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; HUAWEI Y516-T00 Build/HUAWEIY516-T00) AppleWebKit/534.24 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.24 T5/2.0 baiduboxapp/6.0.1 (Baidu; P1 4.2.2)"],
            ["android-webkit", "huawei", "huawei", "android", "device", "Huawei Y516", "Android Webkit", "4.0", "Android", "4.2.2", "Android 4.2.2", "Huawei", "Y516", "Huawei Y516"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; K-Touch T60 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 MxBrowser/4.3.2.2000"],
            ["android-webkit", "k-touch", "k-touch", "android", "device", "K-Touch T60", "Android Webkit", "4.0", "Android", "4.2.2", "Android 4.2.2", "K-Touch", "T60", "K-Touch T60"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; Lenovo A520/S101) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "lenovo", "lenovo", "android", "device", "Lenovo A520", "Android Webkit", "4.0", "Android", "2.3.5", "Android 2.3.5", "Lenovo", "A520", "Lenovo A520"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; zh-cn; LG-P880 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "lg", "lg", "android", "device", "LG P880", "Android Webkit", "4.0", "Android", "4.0.3", "Android 4.0.3", "LG", "P880", "LG P880"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "google-nexusone", "google-nexusone", "android", "device", "Google Nexus One", "Android Webkit", "4.0", "Android", "2.2", "Android 2.2", "Google", "Nexus One", "Google Nexus One"]
        ],
        [
            ["Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.22 (KHTML, like Gecko) Ubuntu Chromium/25.0.1364.160 Chrome/25.0.1364.160 Safari/537.22"],
            ["chromium", "ubuntu-2", "null", "ubuntu-2", "os", "Ubuntu", "Chromium", "25.0.1364.160", "Ubuntu", "", "Ubuntu", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7 CoolNovo/2.0.0.9"],
            ["coolnovo", "win-2", "null", "win-2", "os", "Windows XP", "CoolNovo", "2.0.0.9", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Deepnet Explorer)"],
            ["deepnetexplorer", "win-2", "null", "win-2", "os", "Windows XP", "Deepnet Explorer", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0"],
            ["firefox", "ubuntu-2", "null", "ubuntu-2", "os", "Ubuntu x64", "Firefox", "20.0", "Ubuntu", "", "Ubuntu x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10"],
            ["firefox", "ubuntu-2", "null", "ubuntu-2", "os", "Ubuntu 10.10", "Firefox", "3.6.10", "Ubuntu", "10.10", "Ubuntu 10.10", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15"],
            ["firefox", "win-2", "null", "win-2", "os", "Windows XP", "Firefox", "3.6.15", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; FreeBSD amd64; rv:31.0) Gecko/20100101 Firefox/31.0"],
            ["firefox", "freebsd", "null", "freebsd", "os", "FreeBSD", "Firefox", "31.0", "FreeBSD", "", "FreeBSD", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:31.0) Gecko/20100101 Firefox/31.0"],
            ["firefox", "mac-3", "null", "mac-3", "os", "Mac OS X 10.8", "Firefox", "31.0", "Mac OS X", "10.8", "Mac OS X 10.8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; Galaxy Nexus Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/5.0 Mb2345Browser/4.0 Mobile Safari/534.30"],
            ["galaxy", "samsung", "samsung", "android", "device", "Samsung Galaxy Nexus", "Galaxy", "Nexus", "Android", "4.2.2", "Android 4.2.2", "Samsung", "Galaxy Nexus", "Samsung Galaxy Nexus"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.3; zh-cn; SAMSUNG-SCH-P709E Build/JLS36C) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36"],
            ["chrome", "samsung", "samsung", "android", "device", "Samsung P709E", "Chrome", "28.0.1500.94", "Android", "4.3", "Android 4.3", "Samsung", "P709E", "Samsung P709E"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.4.2; HTC One Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 QvodPlayerBrowser:3.4.19 Mobile-Ser:10086"],
            ["chrome", "htc", "htc", "android", "device", "HTC One", "Chrome", "30.0.0.0", "Android", "4.4.2", "Android 4.4.2", "HTC", "One", "HTC One"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36"],
            ["chrome", "google-nexusone", "google-nexusone", "android", "device", "Google Nexus 4", "Chrome", "33.0.0.0", "Android", "4.4.4", "Android 4.4.4", "Google", "Nexus 4", "Google Nexus 4"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.4.4; MI 4W Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 MxBrowser/4.3.5.2000"],
            ["chrome", "xiaomi", "xiaomi", "android", "device", "Xiaomi 4W", "Chrome", "33.0.0.0", "Android", "4.4.4", "Android 4.4.4", "Xiaomi", "4W", "Xiaomi 4W"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"],
            ["chrome", "win-2", "null", "win-2", "os", "Windows Server 2003", "Chrome", "39.0.2171.95", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; chromeframe/30.0.1599.101; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)"],
            ["chrome", "win-2", "null", "win-2", "os", "Windows XP", "Google Chrome Frame", "30.0.1599.101", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; MRA 8.0 (build 6019); QQDownload 760; chromeframe/32.0.1700.107; SLCC2; .NET CLR 2.0.50727; InfoPath.2; .NET4.0C; .NET4.0E; .NET CLR 3.5.30729; .NET CLR 3.0.30729; QQBrowser/7.7.26717.400)"],
            ["chrome", "win-4", "null", "win-4", "os", "Windows 7 x64", "Google Chrome Frame", "32.0.1700.107", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; GreenBrowser)"],
            ["greenbrowser", "win-4", "null", "win-4", "os", "Windows 7 x64", "GreenBrowser", "", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.2.0"],
            ["iceweasel", "linux", "null", "linux", "os", "GNU/Linux x64", "IceWeasel", "31.2.0", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Nokia 920)"],
            ["msie-mobile", "nokia", "nokia", "windowsphone", "device", "Nokia Lumia 920", "IEMobile", "10.0", "Windows Phone", "8.0", "Windows Phone 8.0", "Nokia", "Lumia 920", "Nokia Lumia 920"]
        ],
        [
            ["Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; HTC; Windows Phone 8S by HTC) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"],
            ["msie-mobile", "htc", "htc", "windowsphone", "device", "HTC 8S", "IEMobile", "11.0", "Windows Phone", "8.1", "Windows Phone 8.1", "HTC", "8S", "HTC 8S"]
        ],
        [
            ["Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Nokia 909) like Gecko"],
            ["msie-mobile", "nokia", "nokia", "windowsphone", "device", "Nokia Lumia 1020", "IEMobile", "11.0", "Windows Phone", "8.1", "Windows Phone 8.1", "Nokia", "Lumia 1020", "Nokia Lumia 1020"]
        ],
        [
            ["Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 1520) like Gecko"],
            ["msie-mobile", "nokia", "nokia", "windowsphone", "device", "Nokia Lumia 1520", "IEMobile", "11.0", "Windows Phone", "8.1", "Windows Phone 8.1", "Nokia", "Lumia 1520", "Nokia Lumia 1520"]
        ],
        [
            ["Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Nokia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"],
            ["msie-mobile", "nokia", "nokia", "windowsphone", "device", "Nokia Lumia 920", "IEMobile", "11.0", "Windows Phone", "8.1", "Windows Phone 8.1", "Nokia", "Lumia 920", "Nokia Lumia 920"]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)"],
            ["msie10", "windowsphone", "null", "windowsphone", "os", "Windows Phone", "", "10.0", "Windows Phone", "", "Windows Phone", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; HTC; Windows Phone 8X by HTC) like Gecko"],
            ["msie11", "htc", "htc", "windowsphone", "device", "HTC 8X", "", "11.0", "Windows Phone", "8", "Windows Phone 8", "HTC", "8X", "HTC 8X"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; Nokia 920) like Gecko"],
            ["msie11", "nokia", "nokia", "windowsphone", "device", "Nokia Lumia 920", "", "11.0", "Windows Phone", "", "Windows Phone", "Nokia", "Lumia 920", "Nokia Lumia 920"]
        ],
        [
            ["Mozilla/5.0 (MSIE 9.0; Windows NT 6.4; WOW64; Trident/7.0; rv:11.0) like Gecko"],
            ["msie9", "win-6", "null", "win-6", "os", "Windows 10 x64", "", "11.0", "Windows NT", "6.4", "Windows 10 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; LCJB; rv:11.0) like Gecko"],
            ["msie11", "win-5", "null", "win-5", "os", "Windows 8 x64", "", "11.0", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (MSIE 7.0; Windows NT 6.0; Trident/7.0; rv:11.0) like Gecko"],
            ["msie7", "win-3", "null", "win-3", "os", "Windows Vista", "", "11.0", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)"],
            ["msie2", "win-1", "null", "win-1", "os", "Windows 95", "", "2.0", "Windows", "", "Windows 95", "", "", ""]
        ],
        [
            ["Mozilla/1.22 (compatible; MSIE 2.0d; Windows NT)"],
            ["msie2", "win-2", "null", "win-2", "os", "Windows", "", "2.0d", "Windows NT", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; 240x320)"],
            ["msie3", "win-2", "null", "win-2", "os", "Windows CE", "", "3.02", "Windows", "", "Windows CE", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 4.0; Windows NT 6.0; Trident/5.0)"],
            ["msie4", "win-3", "null", "win-3", "os", "Windows Vista", "", "4.0", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows 3.1", "", "5.0", "Windows", "", "Windows 3.1", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 6.0; Trident/5.0)"],
            ["msie4", "win-3", "null", "win-3", "os", "Windows Vista", "", "5.0", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows NT 4.0", "", "5.5", "Windows NT", "4.0", "Windows NT 4.0", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows 95", "", "5.5", "Windows", "", "Windows 95", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)"],
            ["msie6", "win-1", "null", "win-1", "os", "Windows 2000", "", "6.0", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2)"],
            ["msie6", "win-2", "null", "win-2", "os", "Windows Server 2003", "", "6.0", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/6.0)"],
            ["msie7", "win-5", "null", "win-5", "os", "Windows 8", "", "7.0", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)"],
            ["msie7", "win-4", "null", "win-4", "os", "Windows 7", "", "8.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)"],
            ["msie7", "win-4", "null", "win-4", "os", "Windows 7 x64", "", "8.0", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)"],
            ["msie9", "win-2", "null", "win-2", "os", "Windows XP", "", "9.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; JuziBrowser)"],
            ["juzibrowser", "win-2", "null", "win-2", "os", "Windows XP", "JuziBrowser", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; KKman2.0)"],
            ["kkman", "win-2", "null", "win-2", "os", "Windows XP", "KKman", "2.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; rv:24.0) Gecko/20140105 Firefox/24.0 K-Meleon/74.0"],
            ["kmeleon", "win-4", "null", "win-4", "os", "Windows 7", "K-Meleon", "74.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0) LBBROWSER"],
            ["lbbrowser", "win-3", "null", "win-3", "os", "Windows Vista", "", "", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.4.2; MI 3C) AppleWebKit/535.19 (KHTML, like Gecko) LieBaoFast/2.8.0 Mobile Safari/535.19"],
            ["lbbrowser", "xiaomi", "xiaomi", "android", "device", "Xiaomi 3C", "Liebaofast", "2.8.0", "Android", "4.4.2", "Android 4.4.2", "Xiaomi", "3C", "Xiaomi 3C"]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Lunascape 6.9.3.27400)"],
            ["lunascape", "win-4", "null", "win-4", "os", "Windows 7 x64", "Lunascape", "6.9.3.27400", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.12 (KHTML, like Gecko) Maxthon/3.0 Chrome/18.0.966.0 Safari/535.12"],
            ["maxthon", "win-4", "null", "win-4", "os", "Windows 7", "Maxthon", "3.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Maxthon/3.0)"],
            ["maxthon", "win-4", "null", "win-4", "os", "Windows 7 x64", "Maxthon", "3.0", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; Avant Browser; Maxthon/3.0)"],
            ["maxthon", "win-2", "null", "win-2", "os", "Windows XP", "Maxthon", "3.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.1 (KHTML, like Gecko) Maxthon/4.1.0.3000 Chrome/26.0.1410.43 Safari/537.1"],
            ["maxthon", "win-2", "null", "win-2", "os", "Windows XP", "Maxthon", "4.1.0.3000", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.800 Chrome/30.0.1599.101 Safari/537.36"],
            ["maxthon", "win-4", "null", "win-4", "os", "Windows 7 x64", "Maxthon", "4.4.3.800", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; MI 2SC Build/JRO03L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 XiaoMi/MiuiBrowser/2.1.1"],
            ["miuibrowser", "xiaomi", "xiaomi", "android", "device", "Xiaomi 2SC", "MIUI Browser", "2.1.1", "Android", "4.1.1", "Android 4.1.1", "Xiaomi", "2SC", "Xiaomi 2SC"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Desire_A8181 Build/FRF91) App3leWebKit/53.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["safari", "htc", "htc", "android", "device", "HTC Desire", "Mobile Safari", "4.0", "Android", "2.2", "Android 2.2", "HTC", "Desire", "HTC Desire"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Oupeng/10.0.1.82018 Mobile Safari/534.30"],
            ["safari", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Mobile Safari", "4.0", "iOS", "5.1", "iOS 5.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.2"],
            ["mozilla", "linux", "null", "linux", "os", "GNU/Linux x64", "", "", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU iPad OS 7.1.2 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/7.1.2 Mobile/9B179 kuaiyongbrowser/1.3"],
            ["mozilla", "ipad", "ipad", "mac-3", "device", "Apple iPad", "", "", "Mac OS X", "", "Mac OS X", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D167"],
            ["mozilla", "ipad", "ipad", "mac-3", "device", "Apple iPad", "", "", "iOS", "7.1", "iOS 7.1", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1.2; zh-cn; MI-ONE Plus Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 Mobile Safari/537.36"],
            ["qqbrowser", "xiaomi", "xiaomi", "android", "device", "Xiaomi 1", "MQQBrowser", "5.4", "Android", "4.1.2", "Android 4.1.2", "Xiaomi", "1", "Xiaomi 1"]
        ],
        [
            ["Mozilla/5.0 (Symbian/3; Series60/5.3 Nokia701/111.030.0609; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.4.2.6 Mobile Safari/533.4 3gpp-gba"],
            ["nokia", "nokia", "nokia", "symbian", "device", "Nokia 701", "Browser", "7.4.2.6", "SymbianOS", "3", "SymbianOS 3", "Nokia", "701", "Nokia 701"]
        ],
        [
            ["Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13"],
            ["nokia", "nokia", "nokia", "meego", "device", "Nokia N9", "Browser", "8.5.0", "Meego", "", "Meego", "Nokia", "N9", "Nokia N9"]
        ],
        [
            ["Nokia5320di"],
            ["maemo", "nokia", "nokia", "null", "device", "Nokia 5320di", "", "", "Unknown", "", "Unknown", "Nokia", "5320di", "Nokia 5320di"]
        ],
        [
            ["Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17"],
            ["opera-2", "win-5", "null", "win-5", "os", "Windows 8 x64", "Opera", "12.17", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.27 Safari/537.36 OPR/26.0.1656.8 (Edition beta)"],
            ["opera-1", "win-4", "null", "win-4", "os", "Windows 7 x64", "Opera", "26.0.1656.8", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2236.0 Safari/537.36 OPR/28.0.1719.0 (Edition developer)"],
            ["opera-developer", "mac-3", "null", "mac-3", "os", "Mac OS X 10.10.1", "Opera Developer", "28.0.1719.0", "Mac OS X", "10.10.1", "Mac OS X 10.10.1", "", "", ""]
        ],
        [
            ["Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.13400/34.2508; U; zh) Presto/2.8.119 Version/11.10"],
            ["opera-2", "java", "null", "java", "os", "J2ME/MIDP Device", "Opera Mini", "4.2.13400", "J2ME/MIDP Device", "", "J2ME/MIDP Device", "", "", ""]
        ],
        [
            ["Opera/9.80 (Android; Opera Mini/7.5.33361/35.6050; U; fa) Presto/2.8.119 Version/11.10"],
            ["opera-2", "android", "null", "android", "os", "Android", "Opera Mini", "7.5.33361", "Android", "", "Android", "", "", ""]
        ],
        [
            ["Opera/9.80 (Windows Phone; Opera Mini/7.6.8/35.4970; U; zh) Presto/2.8.119 Version/11.10"],
            ["opera-2", "windowsphone", "null", "windowsphone", "os", "Windows Phone", "Opera Mini", "7.6.8", "Windows Phone", "", "Windows Phone", "", "", ""]
        ],
        [
            ["Opera/9.80 (Android 2.3.6; Linux; Opera Mobi/ADR-1306261228) Presto/2.11.355 Version/12.10"],
            ["opera-2", "android", "null", "android", "os", "Android 2.3.6", "Opera Mobile", "12.10", "Android", "2.3.6", "Android 2.3.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.44 Safari/537.36 OPR/24.0.1558.25 (Edition Next)"],
            ["opera-next", "win-4", "null", "win-4", "os", "Windows 7 x64", "Opera Next", "24.0.1558.25", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; rv:25.0) Gecko/20141021 Firefox/24.9 PaleMoon/25.0.2"],
            ["palemoon", "win-4", "null", "win-4", "os", "Windows 7", "Moon", "25.0.2", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 IPadQQ/4.1.1.14"],
            ["qq", "ipad", "ipad", "mac-3", "device", "Apple iPad", "QQ", "4.1.1.14", "iOS", "7.1.2", "iOS 7.1.2", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-cn; iOCEAN X7 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 V1_AND_SQ_5.0.0_146_YYB_D QQ/5.0.0.2215"],
            ["qq", "android", "null", "android", "os", "Android 4.2.2", "QQ", "5.0.0.2215", "Android", "4.2.2", "Android 4.2.2", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B435 QQ/5.1.1.97"],
            ["qq", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "QQ", "5.1.1.97", "iOS", "8.1.1", "iOS 8.1.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.48 Safari/537.36 QQBrowser/7.7.31721.400"],
            ["qqbrowser", "win-4", "null", "win-4", "os", "Windows 7", "QQBrowser", "7.7.31721.400", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; QQBrowser/8.0.2820.400)"],
            ["qqbrowser", "win-4", "null", "win-4", "os", "Windows 7", "QQBrowser", "8.0.2820.400", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; LENW8; rv:11.0; SaaYaa) like Gecko"],
            ["saayaa", "win-5", "null", "win-5", "os", "Windows 8 x64", "", "", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) CasperJS/1.0.2+Phantomjs/1.9.2 Safari/534.34"],
            ["safari", "linux", "null", "linux", "os", "GNU/Linux x64", "Safari", "", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1; zh-CN) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.0.1 Safari/537.36"],
            ["safari", "win-2", "null", "win-2", "os", "Windows XP", "Safari", "5.0.1", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4"],
            ["safari", "ipad", "ipad", "mac-3", "device", "Apple iPad", "Safari", "8.0", "iOS", "8.1.2", "iOS 8.1.2", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"],
            ["safari", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Safari", "8.0", "iOS", "8.0", "iOS 8.0", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5"],
            ["safari", "mac-3", "null", "mac-3", "os", "Mac OS X 10.10.1", "Safari", "8.0.2", "Mac OS X", "10.10.1", "Mac OS X 10.10.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1; rv:33.0) Gecko/20100101 Firefox/33.0 SeaMonkey/2.30"],
            ["seamonkey", "win-2", "null", "win-2", "os", "Windows XP", "SeaMonkey", "2.30", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; GTB7.0; SE 2.X MetaSr 1.0)"],
            ["sogou", "win-2", "null", "win-2", "os", "Windows XP", "Sogou Explorer", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Iron/34.0.1850.0 Chrome/34.0.1850.0 Safari/537.36"],
            ["srwareiron", "win-4", "null", "win-4", "os", "Windows 7 x64", "Iron", "34.0.1850.0", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/3.2 Safari/536.11"],
            ["taobrowser", "win-2", "null", "win-2", "os", "Windows XP", "TaoBrowser", "3.2", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; TencentTraveler 4.0)"],
            ["tencenttraveler", "win-2", "null", "win-2", "os", "Windows XP", "Traveler", "4.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/6.0; qihu theworld)"],
            ["theworld", "win-5", "null", "win-5", "os", "Windows 8 x64", "", "", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; TheWorld)"],
            ["theworld", "win-2", "null", "win-2", "os", "Windows XP", "", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.4; en-US; ZTE V970 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/10.0.0.488 U3/0.8.0 Mobile Safari/533.1"],
            ["ucbrowser", "zte", "zte", "android", "device", "ZTE V970", "UC Browser", "10.0.0.488", "Android", "4.0.4", "Android 4.0.4", "ZTE", "V970", "ZTE V970"]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop) UCBrowser/2.9.0.263"],
            ["ucbrowser", "windowsphone", "null", "windowsphone", "os", "Windows Phone", "UC Browser", "2.9.0.263", "Windows Phone", "", "Windows Phone", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 UBrowser/3.0.1084.0 Safari/537.36"],
            ["ucbrowser", "win-4", "null", "win-4", "os", "Windows 7 x64", "UC Browser", "3.0.1084.0", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["JUC(Linux;U;2.3.7;Zh_cn;lenovo a60;320*480;)UCWEB7.8.1.96/139/800"],
            ["ucbrowser", "lenovo", "lenovo", "linux", "device", "Lenovo a60", "UC Browser", "7.8.1.96", "GNU/Linux", "", "GNU/Linux", "Lenovo", "a60", "Lenovo a60"]
        ],
        [
            ["NOKIAN95/UCWEB8.9.0.253/28/999"],
            ["ucbrowser", "nokia", "nokia", "null", "device", "Nokia N95", "UC Browser", "8.9.0.253", "Unknown", "", "Unknown", "Nokia", "N95", "Nokia N95"]
        ],
        [
            ["NokiaC1-02i/2.0 (04.10) Profile/MIDP-2.1 Configuration/CLDC-1.1 UCWEB/2.0 (Java; U; MIDP-2.0; zh-CN; nokiac1-02i) U2/1.0.0 UCBrowser/9.0.0.261 U2/1.0.0 Mobile UNTRUSTED/1.0"],
            ["ucbrowser", "nokia", "nokia", "null", "device", "Nokia C1", "UC Browser", "9.0.0.261", "Unknown", "", "Unknown", "Nokia", "C1", "Nokia C1"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X; zh-CN) AppleWebKit/537.51.2 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/11D257 Safari/7534.48.3 UCBrowser/9.9.2.490"],
            ["ucbrowser", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "UC Browser", "9.9.2.490", "iOS", "7.1.2", "iOS 7.1.2", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; zh-CN; K-Touch T619+ Build/MocorDroid2.3.5) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.8.511 U3/0.8.0 Mobile Safari/534.30"],
            ["ucbrowser", "k-touch", "k-touch", "android", "device", "K-Touch T619", "UC Browser", "9.9.8.511", "Android", "4.0.3", "Android 4.0.3", "K-Touch", "T619", "K-Touch T619"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 YaBrowser/14.7.1916.15705 Safari/537.36"],
            ["yandex", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "Yandex.Browser", "14.7.1916.15705", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0"],
            ["edge", "win-6", "null", "win-6", "os", "Windows 10 x64", "Edge", "12.0", "Windows NT", "10.0", "Windows 10 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.69 Safari/537.36 2345chrome v2.4.0.2847"],
            ["2345chrome", "win-2", "null", "win-2", "os", "Windows XP", "2345Chrome", "v2.4.0.2847", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) MxNitro/1.0.1.600 Chrome/35.0.1849.0 Safari/537.36"],
            ["mxnitro", "win-2", "null", "win-2", "os", "Windows XP", "MxNitro", "1.0.1.600", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.94.2 Safari/537.36"],
            ["vivaldi", "win-6", "null", "win-6", "os", "Windows 10 x64", "Vivaldi", "1.0.94.2", "Windows NT", "10.0", "Windows 10 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20100121 Firefox/3.5.6 Wyzo/3.5.6.1"],
            ["wyzo", "win-4", "null", "win-4", "os", "Windows 7", "Wyzo", "3.5.6.1", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR) AppleWebKit/532.4 (KHTML, like Gecko) WeltweitimnetzBrowser/0.25 Safari/532.4"],
            ["weltweitimnetzbrowser", "win-2", "null", "win-2", "os", "Windows XP", "Browser", "0.25", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["w3m/0.5.2 (Linux i686; it; Debian-3.0.6-3)"],
            ["w3m", "debian", "null", "debian", "os", "Debian", "W3M", "0.5.2", "Debian", "", "Debian", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1pre) Gecko/20090629 Vonkeror/1.0"],
            ["null", "win-2", "null", "win-2", "os", "Windows XP", "Vonkeror", "1.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Vimprobable/0.9.20.5"],
            ["null", "null", "null", "null", "os", "Unknown", "Vimprobable", "0.9.20.5", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Uzbl (X11; U; Arch Linux; de-DE) Webkit/1.1.10"],
            ["uzbl", "archlinux", "null", "archlinux", "os", "Arch Linux", "", "", "Arch Linux", "", "Arch Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 ArchLinux (X11; Linux x86_64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1"],
            ["chrome", "archlinux", "null", "archlinux", "os", "Arch Linux x64", "Chrome", "13.0.782.41", "Arch Linux", "", "Arch Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; WOW64; SV1; uZardWeb/1.0; Server_CN)"],
            ["uzardweb", "win-2", "null", "win-2", "os", "Windows Server 2003 x64", "uZardWeb", "1.0", "Windows NT", "5.2", "Windows Server 2003 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0; uZard/1.0; Server_KO_SKT)"],
            ["uzardweb", "win-2", "null", "win-2", "os", "Windows Server 2003 x64", "uZard", "1.0", "Windows NT", "5.2", "Windows Server 2003 x64", "", "", ""]
        ],
        [
            ["curl/7.8 (i386-redhat-linux-gnu) libcurl 7.8 (OpenSSL 0.9.6b) (ipv6 enabled)"],
            ["null", "red-hat", "null", "red-hat", "os", "Red Hat", "Curl", "7.8", "Red Hat", "", "Red Hat", "", "", ""]
        ],
        [
            ["Links (1.00pre3; SunOS 5.9 i86pc; 80x24)"],
            ["null", "solaris", "null", "solaris", "os", "Solaris", "Links", "1.00pre3", "Solaris", "", "Solaris", "", "", ""]
        ],
        [
            ["Links 2.0 (http://gossamer-threads.com/scripts/links/)"],
            ["null", "null", "null", "null", "os", "Unknown", "Links", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Wget/1.9.1"],
            ["null", "null", "null", "null", "os", "Unknown", "Wget", "1.9.1", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["curl/7.19.6 (i686-pc-cygwin) libcurl/7.19.6 OpenSSL/0.9.8n zlib/1.2.3 libidn/1.18 libssh2/1.2"],
            ["null", "null", "null", "null", "os", "Unknown", "Curl", "7.19.6", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["curl/7.19.5 (i586-pc-mingw32msvc) libcurl/7.19.5 zlib/1.2.3"],
            ["null", "null", "null", "null", "os", "Unknown", "Curl", "7.19.5", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; nl; rv:1.9.1.11) Gecko/20100714 openSUSE/3.0.6 Thunderbird/3.0.6 ThunderBrowse/3.3.2"],
            ["thunderbird", "suse", "null", "suse", "os", "openSUSE x64", "Thunderbird", "3.0.6", "openSUSE", "", "openSUSE x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.10) Gecko/20100621 Fedora/3.0.5-1.fc13 Lightning/1.0b2pre Thunderbird/3.0.5"],
            ["thunderbird", "fedora", "null", "fedora", "os", "Fedora 13 x64", "Thunderbird", "3.0.5", "Fedora", "13", "Fedora 13 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.8.1.4) Gecko/20070622 Thunderbird/2.0.0.4"],
            ["thunderbird", "solaris", "null", "solaris", "os", "Solaris", "Thunderbird", "2.0.0.4", "Solaris", "", "Solaris", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20130620 Thunderbird/17.0.7"],
            ["thunderbird", "win-5", "null", "win-5", "os", "Windows 8 x64", "Thunderbird", "17.0.7", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Linux i686; rv:16.0) Gecko/20121011 Thunderbird/16.0.1"],
            ["thunderbird", "linux", "null", "linux", "os", "GNU/Linux", "Thunderbird", "16.0.1", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; fr-FR; rv:1.7.10) Gecko/20050716 Thunderbird/1.0.6"],
            ["thunderbird", "mac-3", "null", "mac-3", "os", "Mac OS X Mach-O", "Thunderbird", "1.0.6", "Mac OS X", "Mach-O", "Mac OS X Mach-O", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; (R1 1.6); .NET CLR 2.0.50727; TheWorld)"],
            ["theworld", "win-2", "null", "win-2", "os", "Windows XP", "", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; PPC Mac OS X 10.4; rv:10.0.2) Gecko/20120217 Firefox/10.0.2 TenFourFox/G3"],
            ["tenfourfox", "mac-3", "null", "mac-3", "os", "Mac OS X 10.4", "TenFourFox", "10.0.2", "Mac OS X", "10.4", "Mac OS X 10.4", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; TencentTraveler 4.0; Trident/4.0; SLCC1; Media Center PC 5.0; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30618)"],
            ["tencenttraveler", "win-3", "null", "win-3", "os", "Windows Vista", "Traveler", "4.0", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/418.9.1 (KHTML, like Gecko) Safari/419.3 TeaShark/0.8"],
            ["teashark", "mac-3", "null", "mac-3", "os", "Mac OS X", "TeaShark", "0.8", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.9) Gecko/20071110 Sylera/3.0.20 SeaMonkey/1.1.6"],
            ["null", "win-1", "null", "win-1", "os", "Windows 2000", "Sylera", "3.0.20", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9pre) Gecko/2008040318 Firefox/3.0pre (Swiftfox)"],
            ["swiftfox", "linux", "null", "linux", "os", "GNU/Linux", "Swiftfox", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Surf/0.4.1 (X11; U; Unix; en-US) AppleWebKit/531.2+ Compatible (Safari; MSIE 9.0)"],
            ["surf", "unix", "null", "unix", "os", "Unix", "Surf", "0.4.1", "Unix", "", "Unix", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/125.5.7 (KHTML, like Gecko) SunriseBrowser/0.895"],
            ["sunrise", "mac-3", "null", "mac-3", "os", "Mac OS X", "Sunrise", "Browser", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr) AppleWebKit/523.12.2 (KHTML, like Gecko) Sunrise/1.6.0 like Safari/523.12.2"],
            ["sunrise", "mac-3", "null", "mac-3", "os", "Mac OS X", "Sunrise", "1.6.0", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Sundance/0.9x(Compatible; Windows; U; en-US;)Version/0.9x"],
            ["sundance", "win-2", "null", "win-2", "os", "Windows", "Sundance", "0.9x", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Sundance(Compatible; Windows; U; en-US;) Version/0.9.0.36"],
            ["sundance", "win-2", "null", "win-2", "os", "Windows", "Sundance", "", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-us) AppleWebKit/528.16 (KHTML, like Gecko) Stainless/0.5.3 Safari/525.20.1"],
            ["stainless", "mac-3", "null", "mac-3", "os", "Mac OS X 10.5.6", "Stainless", "0.5.3", "Mac OS X", "10.5.6", "Mac OS X 10.5.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1250.0 Iron/22.0.2150.0 Safari/537.4"],
            ["srwareiron", "win-4", "null", "win-4", "os", "Windows 7 x64", "Iron", "22.0.2150.0", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; SlimBrowser)"],
            ["slimbrowser", "win-4", "null", "win-4", "os", "Windows 7", "SlimBrowser", "", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30618; .NET4.0C; .NET4.0E; Sleipnir/2.9.9)"],
            ["sleipnir", "win-3", "null", "win-3", "os", "Windows Vista", "Sleipnir", "2.9.9", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0"],
            ["skyfire", "mac-3", "null", "mac-3", "os", "Mac OS X 10.5.7", "Skyfire", "2.0", "Mac OS X", "10.5.7", "Mac OS X 10.5.7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.50; Windows NT; SiteKiosk 4.9; SiteCoach 1.0)"],
            ["sitekiosk", "win-2", "null", "win-2", "os", "Windows", "SiteKiosk", "4.9", "Windows NT", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.8pre) Gecko/20100112 Shiretoko/3.5.8pre"],
            ["firefoxdevpre", "linux", "null", "linux", "os", "GNU/Linux x64", "Shiretoko", "3.5.8pre", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/523.15.1 (KHTML, like Gecko) Shiira Safari/125"],
            ["shiira", "mac-3", "null", "mac-3", "os", "Mac OS X", "Shiira", "Safari", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; ja-jp) AppleWebKit/419 (KHTML, like Gecko) Shiira/1.2.3 Safari/125"],
            ["shiira", "mac-3", "null", "mac-3", "os", "Mac OS X", "Shiira", "1.2.3", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["SonyEricssonW800i/R1BD001/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["semcbrowser", "sonyericsson", "sonyericsson", "null", "device", "SonyEricsson W800i", "SEMC Browser", "4.2", "Unknown", "", "Unknown", "SonyEricsson", "W800i", "SonyEricsson W800i"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.2; RW; rv:7.0a1) Gecko/20091211 SeaMonkey/9.23a1pre"],
            ["seamonkey", "win-2", "null", "win-2", "os", "Windows Server 2003", "SeaMonkey", "9.23a1pre", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.11) Gecko/20100720 Fedora/2.0.6-1.fc12 SeaMonkey/2.0.6"],
            ["seamonkey", "fedora", "null", "fedora", "os", "Fedora 12 x64", "SeaMonkey", "2.0.6", "Fedora", "12", "Fedora 12 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.9a1) Gecko/20060702 SeaMonkey/1.5a"],
            ["seamonkey", "beos", "null", "beos", "os", "BeOS", "SeaMonkey", "1.5a", "BeOS", "", "BeOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.9a1) Gecko/20060707 SeaMonkey/1.5a"],
            ["seamonkey", "mac-3", "null", "mac-3", "os", "Mac OS X Mach-O", "SeaMonkey", "1.5a", "Mac OS X", "Mach-O", "Mac OS X Mach-O", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.9a1) Gecko/20060206 SeaMonkey/1.5a"],
            ["seamonkey", "win-1", "null", "win-1", "os", "Windows 2000", "SeaMonkey", "1.5a", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9a4pre) Gecko/20070404 SeaMonkey/1.5a"],
            ["seamonkey", "win-2", "null", "win-2", "os", "Windows XP", "SeaMonkey", "1.5a", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1) Gecko/20061101 SeaMonkey/1.1b"],
            ["seamonkey", "win-1", "null", "win-1", "os", "Windows 98 SE", "SeaMonkey", "1.1b", "Windows", "", "Windows 98 SE", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (AmigaOS; U; AmigaOS 1.3; en-US; rv:1.8.1.21) Gecko/20090303 SeaMonkey/1.1.15"],
            ["seamonkey", "amigaos", "null", "amigaos", "os", "AmigaOS 1.3", "SeaMonkey", "1.1.15", "AmigaOS", "1.3", "AmigaOS 1.3", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.0.14eol) Gecko/20120628 CentOS/1.0.9-40.el4.centos SeaMonkey/1.0.9"],
            ["seamonkey", "centos", "null", "centos", "os", "CentOS 4 x64", "SeaMonkey", "1.0.9", "CentOS", "4", "CentOS 4 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.14eol) Gecko/20101004 Red Hat/1.0.9-64.el4 SeaMonkey/1.0.9"],
            ["seamonkey", "red-hat", "null", "red-hat", "os", "Red Hat Enterprise Linux 4", "SeaMonkey", "1.0.9", "Red Hat Enterprise Linux", "4", "Red Hat Enterprise Linux 4", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.10) Gecko/20070223 Fedora/1.0.8-0.5.1.fc5 SeaMonkey/1.0.8"],
            ["seamonkey", "fedora", "null", "fedora", "os", "Fedora 5", "SeaMonkey", "1.0.8", "Fedora", "5", "Fedora 5", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A"],
            ["safari", "mac-3", "null", "mac-3", "os", "Mac OS X 10.9.3", "Safari", "7.0.3", "Mac OS X", "10.9.3", "Mac OS X 10.9.3", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25"],
            ["safari", "ipad", "ipad", "mac-3", "device", "Apple iPad", "Safari", "6.0", "iOS", "6.0", "iOS 6.0", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; he-il) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5"],
            ["safari", "iphone", "iphone", "mac-3", "device", "Apple iPod", "Safari", "5.0.2", "iOS", "4.2.1", "iOS 4.2.1", "Apple", "iPod", "Apple iPod"]
        ],
        [
            ["Mozilla/5.0 (iPhone; U; ru; CPU iPhone OS 4_2_1 like Mac OS X; ru) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148a Safari/6533.18.5"],
            ["safari", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Safari", "5.0.2", "iOS", "4.2.1", "iOS 4.2.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8"],
            ["safari", "win-2", "null", "win-2", "os", "Windows Server 2003", "Safari", "5.0.1", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+"],
            ["safari", "linux", "null", "linux", "os", "GNU/Linux x64", "Safari", "5.0", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; HTC-P715a; en-ca) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16"],
            ["safari", "htc", "htc", "mac-3", "device", "HTC P715a", "Safari", "5.0", "Mac OS X", "10.6.3", "Mac OS X 10.6.3", "HTC", "P715a", "HTC P715a"]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/521.32.1 (KHTML, like Gecko) Safari/521.32.1"],
            ["safari", "mac-3", "null", "mac-3", "os", "Mac OS X", "Safari", "", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) RockMelt/0.9.58.494 Chrome/11.0.696.71 Safari/534.24"],
            ["rockmelt", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.7", "RockMelt", "0.9.58.494", "Mac OS X", "10.6.7", "Mac OS X 10.6.7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; ha) AppleWebKit/534.13 (KHTML, like Gecko) RockMelt/0.445.436.1326 Chrome/12.0.632.107 Safari/534.13"],
            ["rockmelt", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.4", "RockMelt", "0.445.436.1326", "Mac OS X", "10.6.4", "Mac OS X 10.6.4", "", "", ""]
        ],
        [
            ["retawq/0.2.6c [en] (text)"],
            ["terminal", "null", "null", "null", "os", "Unknown", "Retawq", "0.2.6c", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) rekonq Safari/533.3"],
            ["rekonq", "linux", "null", "linux", "os", "GNU/Linux x64", "", "", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR) AppleWebKit/533.3 (KHTML, like Gecko) QtWeb Internet Browser/3.7 http://www.QtWeb.net"],
            ["qtwebinternetbrowser", "win-2", "null", "win-2", "os", "Windows XP", "QtWeb Internet Browser", "3.7", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.3) Gecko/20100402 Prism/1.0b4"],
            ["prism", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6", "Prism", "1.0b4", "Mac OS X", "10.6", "Mac OS X 10.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080414 Firefox/2.0.0.13 Pogo/2.0.0.13.6866"],
            ["pogo", "win-2", "null", "win-2", "os", "Windows XP", "Pogo", "2.0.0.13.6866", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.3a) Gecko/20021207 Phoenix/0.5"],
            ["phoenix", "linux", "null", "linux", "os", "GNU/Linux", "Phoenix", "0.5", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["(Windows NT 6.2; WOW64) KHTML/4.11 Gecko/20130308 Firefox/33.0 (PaleMoon/25.1)"],
            ["palemoon", "win-5", "null", "win-5", "os", "Windows 8 x64", "Moon", "25.1", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/1.10 [en] (Compatible; RISC OS 3.70; Oregano 1.10)"],
            ["oregano", "risc", "null", "risc", "os", "RISC OS 3.70", "Oregano", "1.10", "RISC OS", "3.70", "RISC OS 3.70", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090722 Firefox/3.5.1 Orca/1.2 build 2"],
            ["orca", "win-4", "null", "win-4", "os", "Windows 7", "Orca", "1.2", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; S60; SymbOS; Opera Mobi/SYB-1107071606; en) Opera 11.10"],
            ["opera-2", "symbian", "null", "symbian", "os", "SymbianOS", "Opera Mobile", "SYB", "SymbianOS", "", "SymbianOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Android 2.2.2; Linux; Opera Mobi/ADR-1103311355; U; en; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 11.00"],
            ["opera-2", "android", "null", "android", "os", "Android 2.2.2", "Opera Mobile", "ADR", "Android", "2.2.2", "Android 2.2.2", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Android 2.2.2; Linux; Opera Mobi/ADR-1103311355; en) Opera 11.00"],
            ["opera-2", "android", "null", "android", "os", "Android 2.2.2", "Opera Mobile", "ADR", "Android", "2.2.2", "Android 2.2.2", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux armv6l; Maemo; Opera Mobi/8; U; en-GB; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 11.00"],
            ["opera-2", "linux", "null", "linux", "os", "GNU/Linux", "Opera Mobile", "8", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50"],
            ["opera-2", "android", "null", "android", "os", "Android 2.3.3", "Opera Mobile", "11.50", "Android", "2.3.3", "Android 2.3.3", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; Windows Mobile; WCE; Opera Mobi/WMD-50433; U; de) Presto/2.4.13 Version/10.00"],
            ["opera-2", "htc", "htc", "win-2", "device", "HTC Touch Pro2", "Opera Mobile", "10.00", "Windows", "", "Windows", "HTC", "Touch Pro2", "HTC Touch Pro2"]
        ],
        [
            ["Opera/9.80 (Windows Mobile; WCE; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00"],
            ["opera-2", "win-2", "null", "win-2", "os", "Windows", "Opera Mobile", "10.00", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Opera/9.80 (Windows NT 6.1; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00"],
            ["opera-2", "win-4", "null", "win-4", "os", "Windows 7", "Opera Mobile", "10.00", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Opera/9.80 (Windows NT 6.0; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00"],
            ["opera-2", "win-3", "null", "win-3", "os", "Windows Vista", "Opera Mobile", "10.00", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Opera/9.80 (Windows NT 5.1; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00"],
            ["opera-2", "win-2", "null", "win-2", "os", "Windows XP", "Opera Mobile", "10.00", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Opera/9.80 (J2ME/MIDP; Opera Mini/Nokia2730c-1/22.478; U; en) Presto/2.5.25 Version/10.54"],
            ["opera-2", "nokia", "nokia", "java", "device", "Nokia 2730c", "Opera Mini", "Nokia2730c", "J2ME/MIDP Device", "", "J2ME/MIDP Device", "Nokia", "2730c", "Nokia 2730c"]
        ],
        [
            ["Opera/9.80 (iPhone; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10"],
            ["opera-2", "iphone", "iphone", "null", "device", "Apple iPhone", "Opera Mini", "7.1.32694", "Unknown", "", "Unknown", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Opera/9.80 (iPad; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10"],
            ["opera-2", "ipad", "ipad", "null", "device", "Apple iPad", "Opera Mini", "7.1.32694", "Unknown", "", "Unknown", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Opera/9.80 (Android; Opera Mini/7.0.29952/28.2075; U; es) Presto/2.8.119 Version/11.10"],
            ["opera-2", "android", "null", "android", "os", "Android", "Opera Mini", "7.0.29952", "Android", "", "Android", "", "", ""]
        ],
        [
            ["Opera/9.80 (J2ME/MIDP; Opera Mini/4.0.10031/22.453; U; en) Presto/2.5.25 Version/10.54"],
            ["opera-2", "java", "null", "java", "os", "J2ME/MIDP Device", "Opera Mini", "4.0.10031", "J2ME/MIDP Device", "", "J2ME/MIDP Device", "", "", ""]
        ],
        [
            ["Opera/9.80 (J2ME/MIDP; Opera Mini/4.0 (compatible; MSIE 5.0; UNIX) Opera 6.12 [en]/24.838; U; en) Presto/2.5.25 Version/10.54"],
            ["opera-2", "java", "null", "java", "os", "J2ME/MIDP Device", "Opera Mini", "4.0", "J2ME/MIDP Device", "", "J2ME/MIDP Device", "", "", ""]
        ],
        [
            ["Opera/9.80 (J2ME/MIDP; Opera Mini/(Windows; U; Windows NT 5.1; en-US) AppleWebKit/23.411; U; en) Presto/2.5.25 Version/10.54"],
            ["opera-2", "win-2", "null", "win-2", "os", "Windows XP", "Opera Mini", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Opera/9.99 (Windows NT 5.1; U; pl) Presto/9.9.9"],
            ["opera-1", "win-2", "null", "win-2", "os", "Windows XP", "Opera", "9.99", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)"],
            ["opera-1", "htc", "htc", "win-2", "device", "HTC HD2", "Opera", "9.70", "Windows NT", "5.1", "Windows XP", "HTC", "HD2", "HTC HD2"]
        ],
        [
            ["Opera/9.64 (X11; Linux i686; U; Linux Mint; it) Presto/2.1.1"],
            ["opera-1", "linuxmint", "null", "linuxmint", "os", "Linux Mint", "Opera", "9.64", "Linux Mint", "", "Linux Mint", "", "", ""]
        ],
        [
            ["Opera/9.64(Windows NT 5.1; U; en) Presto/2.1.1"],
            ["opera-1", "win-2", "null", "win-2", "os", "Windows XP", "Opera", "9.64", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Opera/9.63 (X11; FreeBSD 7.1-RELEASE i386; U; en) Presto/2.1.1"],
            ["opera-1", "freebsd", "null", "freebsd", "os", "FreeBSD", "Opera", "9.63", "FreeBSD", "", "FreeBSD", "", "", ""]
        ],
        [
            ["Opera/9.30 (Nintendo Wii; U; ; 2071; Wii Shop Channel/1.0; en)"],
            ["opera-1", "nintendowii", "nintendowii", "null", "device", "Nintendo Wii", "Opera", "9.30", "Unknown", "", "Unknown", "Nintendo", "Wii", "Nintendo Wii"]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Sprint:PPC-6700) Opera 8.65 [en]"],
            ["opera-1", "win-2", "null", "win-2", "os", "Windows CE", "Opera", "8.65", "Windows", "", "Windows CE", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.0; UNIX) Opera 6.12 [en]"],
            ["opera-1", "unix", "null", "unix", "os", "Unix", "Opera", "6.12", "Unix", "", "Unix", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.0; Windows 98) Opera 6.04 [en]"],
            ["opera-1", "win-1", "null", "win-1", "os", "Windows 98", "Opera", "6.04", "Windows", "", "Windows 98", "", "", ""]
        ],
        [
            ["Opera/6.04 (Windows NT 4.0; U) [en]"],
            ["opera-1", "win-1", "null", "win-1", "os", "Windows NT 4.0", "Opera", "6.04", "Windows NT", "4.0", "Windows NT 4.0", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.0; Windows 2000) Opera 6.0 [en]"],
            ["opera-1", "win-1", "null", "win-1", "os", "Windows 2000", "Opera", "6.0", "Windows", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0"],
            ["omniweb", "mac-3", "null", "mac-3", "os", "Mac OS X 10.5.6", "OmniWeb", "v622.8.0", "Mac OS X", "10.5.6", "Mac OS X 10.5.6", "", "", ""]
        ],
        [
            ["Mozilla/4.5 (compatible; OmniWeb/4.1-v422; Mac_PowerPC)"],
            ["omniweb", "mac-1", "null", "mac-1", "os", "Macintosh", "OmniWeb", "4.1", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/522+ (KHTML, like Gecko) OmniWeb"],
            ["omniweb", "mac-3", "null", "mac-3", "os", "Mac OS X", "OmniWeb", "", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["NokiaE5-00/SymbianOS/9.1 Series60/3.0 3gpp-gba"],
            ["maemo", "nokia", "nokia", "symbian", "device", "Nokia E5", "", "", "SymbianOS", "9.1", "SymbianOS 9.1", "Nokia", "E5", "Nokia E5"]
        ],
        [
            ["NokiaN97/21.1.107 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4"],
            ["maemo", "nokia", "nokia", "symbian", "device", "Nokia N97", "", "", "SymbianOS", "9.4", "SymbianOS 9.4", "Nokia", "N97", "Nokia N97"]
        ],
        [
            ["NokiaN97i/SymbianOS/9.1 Series60/3.0"],
            ["maemo", "nokia", "nokia", "symbian", "device", "Nokia N97i", "", "", "SymbianOS", "9.1", "SymbianOS 9.1", "Nokia", "N97i", "Nokia N97i"]
        ],
        [
            ["Nokia5250/10.0.011 (SymbianOS/9.4; U; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Safari/525 3gpp-gba"],
            ["maemo", "nokia", "nokia", "symbian", "device", "Nokia 5250", "", "", "SymbianOS", "9.4", "SymbianOS 9.4", "Nokia", "5250", "Nokia 5250"]
        ],
        [
            ["NetSurf/2.0 (Linux; i686)"],
            ["netsurf", "linux", "null", "linux", "os", "GNU/Linux", "NetSurf", "2.0", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.8.1.8pre) Gecko/20071015 Firefox/2.0.0.7 Navigator/9.0"],
            ["netscape", "win-1", "null", "win-1", "os", "Windows Me", "Navigator", "9.0", "Windows", "", "Windows Me", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Win95; de-DE; rv:1.0.2) Gecko/20030208 Netscape/7.02"],
            ["netscape", "win-1", "null", "win-1", "os", "Windows 95", "Netscape", "7.02", "Windows", "", "Windows 95", "", "", ""]
        ],
        [
            ["Mozilla/3.0 (compatible; NetPositive/2.1.1; BeOS)"],
            ["netpositive", "beos", "null", "beos", "os", "BeOS", "NetPositive", "2.1.1", "BeOS", "", "BeOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; de-de) AppleWebKit/531.22.7 (KHTML, like Gecko) NetNewsWire/3.2.7"],
            ["netnewswire", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.3", "NetNewsWire", "3.2.7", "Mac OS X", "10.6.3", "Mac OS X 10.6.3", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 824x1200;rotate)"],
            ["netfront", "kindle", "kindle", "linux", "device", "Amazon Kindle 2.5", "NetFront", "3.4", "GNU/Linux", "", "GNU/Linux", "Amazon", "Kindle 2.5", "Amazon Kindle 2.5"]
        ],
        [
            ["SAMSUNG-C5212/C5212XDIK1 NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["netfront", "samsung", "samsung", "null", "device", "Samsung C5212", "NetFront", "3.4", "Unknown", "", "Unknown", "Samsung", "C5212", "Samsung C5212"]
        ],
        [
            ["Mozilla/4.0 (compatible; Linux 2.6.10) NetFront/3.3 Kindle/1.0 (screen 600x800)"],
            ["netfront", "kindle", "kindle", "linux", "device", "Amazon Kindle 1.0", "NetFront", "3.3", "GNU/Linux", "", "GNU/Linux", "Amazon", "Kindle 1.0", "Amazon Kindle 1.0"]
        ],
        [
            ["SonyEricssonK800c/R8BF Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["netfront", "sonyericsson", "sonyericsson", "null", "device", "SonyEricsson K800c", "NetFront", "3.3", "Unknown", "", "Unknown", "SonyEricsson", "K800c", "SonyEricsson K800c"]
        ],
        [
            ["SonyEricssonK530i/R6BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["netfront", "sonyericsson", "sonyericsson", "null", "device", "SonyEricsson K530i", "NetFront", "3.3", "Unknown", "", "Unknown", "SonyEricsson", "K530i", "SonyEricsson K530i"]
        ],
        [
            ["SonyEricssonK530c/R8BA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["netfront", "sonyericsson", "sonyericsson", "null", "device", "SonyEricsson K530c", "NetFront", "3.3", "Unknown", "", "Unknown", "SonyEricsson", "K530c", "SonyEricsson K530c"]
        ],
        [
            ["SonyEricssonK510c/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["netfront", "sonyericsson", "sonyericsson", "null", "device", "SonyEricsson K510c", "NetFront", "3.3", "Unknown", "", "Unknown", "SonyEricsson", "K510c", "SonyEricsson K510c"]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2a2pre) Gecko/20090825 Namoroka/3.6a2pre"],
            ["firefoxdevpre", "linux", "null", "linux", "os", "GNU/Linux", "Namoroka", "3.6a2pre", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.2pre) Gecko/20100312 Namoroka/3.6.2pre (.NET CLR 3.5.30729)"],
            ["firefoxdevpre", "win-2", "null", "win-2", "os", "Windows XP", "Namoroka", "3.6.2pre", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2) Gecko/20100206 Namoroka/3.6"],
            ["firefoxdevpre", "linux", "null", "linux", "os", "GNU/Linux", "Namoroka", "3.6", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; MyIE2; .NET CLR 1.1.4322; InfoPath.1)"],
            ["myie2", "win-2", "null", "win-2", "os", "Windows Server 2003", "MyIE2", "", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55"],
            ["mozilla", "win-4", "null", "win-4", "os", "Windows 7", "MultiZilla", "4.33.2.6a", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.2; WOW64; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55"],
            ["mozilla", "win-5", "null", "win-5", "os", "Windows 8 x64", "MultiZilla", "4.33.2.6a", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55"],
            ["mozilla", "win-5", "null", "win-5", "os", "Windows 8 x64", "MultiZilla", "4.33.2.6a", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; RW; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "4.33.2.6a", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.19) Gecko/20081204 MultiZilla/1.8.3.5c SeaMonkey/1.1.14"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.8.3.5c", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1.23) Gecko/20090825 MultiZilla/1.8.3.4e SeaMonkey/1.1.18"],
            ["mozilla", "win-1", "null", "win-1", "os", "Windows 98 SE", "MultiZilla", "1.8.3.4e", "Windows", "", "Windows 98 SE", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080201 MultiZilla/1.8.3.4e SeaMonkey/1.1.8"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.8.3.4e", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.21) Gecko/20090403 MultiZilla/1.8.3.4e SeaMonkey/1.1.16"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.8.3.4e", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.16) Gecko/20080702 MultiZilla/1.8.3.4e SeaMonkey/1.1.11"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.8.3.4e", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.8) Gecko/20061030 MultiZilla/1.8.3.0a SeaMonkey/1.0.6"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.8.3.0a", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.8.0.7) Gecko/20060910 MultiZilla/1.8.2.0i SeaMonkey/1.0.5"],
            ["mozilla", "null", "null", "null", "os", "Unknown", "MultiZilla", "1.8.2.0i", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.8.0.6) Gecko/20060730 MultiZilla/1.8.2.0i SeaMonkey/1.0.4"],
            ["mozilla", "null", "null", "null", "os", "Unknown", "MultiZilla", "1.8.2.0i", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.9a1) Gecko/20051119 MultiZilla/1.8.1.0s SeaMonkey/1.5a"],
            ["mozilla", "null", "null", "null", "os", "Unknown", "MultiZilla", "1.8.1.0s", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.7) Gecko/20060910 MultiZilla/1.7.9.0a SeaMonkey/1.0.5"],
            ["mozilla", "win-2", "null", "win-2", "os", "Windows XP", "MultiZilla", "1.7.9.0a", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.41 (BEOS; U ;Nav)"],
            ["mozilla", "beos", "null", "beos", "os", "BeOS", "", "", "BeOS", "", "BeOS", "", "", ""]
        ],
        [
            ["Mozilla/4.8 [en] (FreeBSD; U)"],
            ["mozilla", "freebsd", "null", "freebsd", "os", "FreeBSD", "", "", "FreeBSD", "", "FreeBSD", "", "", ""]
        ],
        [
            ["Mozilla/4.8 [en] (X11; U; Linux 2.6.12-1.1372_FC3 i686; Nav)"],
            ["mozilla", "linux", "null", "linux", "os", "GNU/Linux", "", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/4.04 [en] (X11; I; IRIX 5.3 IP22)"],
            ["mozilla", "irix", "null", "irix", "os", "IRIX 5.3", "", "", "IRIX", "5.3", "IRIX 5.3", "", "", ""]
        ],
        [
            ["Mozilla/4.76C-SGI [en] (X11; I; IRIX64 6.5 IP30)"],
            ["mozilla", "irix", "null", "irix", "os", "IRIX 6.5 x64", "", "", "IRIX", "6.5", "IRIX 6.5 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.8 [en] (X11; U; HP-UX B.11.00 9000/785)"],
            ["mozilla", "null", "null", "null", "os", "Unknown", "", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/4.8 [en] (Win98; U)"],
            ["mozilla", "win-1", "null", "win-1", "os", "Windows 98 SE", "", "", "Windows", "", "Windows 98 SE", "", "", ""]
        ],
        [
            ["Mozilla/4.7 [fr] (Win95; I)"],
            ["mozilla", "win-1", "null", "win-1", "os", "Windows 95", "", "", "Windows", "", "Windows 95", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (PLAYSTATION 3; 3.55)"],
            ["mozilla", "playstation", "playstation", "null", "device", "Sony PlayStation 3", "", "", "Unknown", "", "Unknown", "Sony", "PlayStation 3", "Sony PlayStation 3"]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.7) Gecko/20050427 Red Hat/1.7.7-1.1.3.4"],
            ["mozilla", "red-hat", "null", "red-hat", "os", "Red Hat", "", "", "Red Hat", "", "Red Hat", "", "", ""]
        ],
        [
            ["NCSA_Mosaic/2.0 (Windows 3.1)"],
            ["mosaic", "win-1", "null", "win-1", "os", "Windows 3.1", "Mosaic", "2.0", "Windows", "", "Windows 3.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092816 Mobile Safari 1.1.3"],
            ["safari", "linux", "null", "linux", "os", "GNU/Linux", "Mobile Safari", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux arm7tdmi; rv:1.8.1.11) Gecko/20071130 Minimo/0.025"],
            ["minimo", "linux", "null", "linux", "os", "GNU/Linux", "Minimo", "0.025", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre"],
            ["minefield", "win-4", "null", "win-4", "os", "Windows 7 x64", "Minefield", "4.0b4pre", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; fr-fr) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori/1.19"],
            ["midori", "linux", "null", "linux", "os", "GNU/Linux", "Midori", "1.19", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; de-at) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori"],
            ["midori", "linux", "null", "linux", "os", "GNU/Linux x64", "Midori", "", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["MOT-L7/NA.ACR_RB MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1"],
            ["mib", "motorola", "motorola", "null", "device", "Motorola L7", "MIB", "2.2.1", "Unknown", "", "Unknown", "Motorola", "L7", "Motorola L7"]
        ],
        [
            ["MOT-V300/0B.09.19R MIB/2.2 Profile/MIDP-2.0 Configuration/CLDC-1.0"],
            ["mib", "motorola", "motorola", "null", "device", "Motorola V300", "MIB", "2.2", "Unknown", "", "Unknown", "Motorola", "V300", "Motorola V300"]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1"],
            ["maxthon", "win-3", "null", "win-3", "os", "Windows Vista", "Maxthon", "3.0.8.2", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MAXTHON 2.0)"],
            ["maxthon", "win-2", "null", "win-2", "os", "Windows XP", "Maxthon", "2.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; Maxthon; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"],
            ["maxthon", "win-2", "null", "win-2", "os", "Windows XP", "Maxthon", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux armv7l; ru-RU; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900"],
            ["maemo", "linux", "null", "linux", "os", "GNU/Linux", "Maemo Browser", "1.7.4.8", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en; rv:1.7.12) Gecko/20050928 Firefox/1.0.7 Madfox/3.0"],
            ["madfox", "mac-3", "null", "mac-3", "os", "Mac OS X Mach-O", "Madfox", "3.0", "Mac OS X", "Mach-O", "Mac OS X Mach-O", "", "", ""]
        ],
        [
            ["Lynx/2.8.1pre.9 libwww-FM/2.14"],
            ["lynx", "null", "null", "null", "os", "Unknown", "Lynx", "2.8.1pre.9", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Lynx (textmode)"],
            ["lynx", "null", "null", "null", "os", "Unknown", "Lynx", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.28) Gecko/20120410 Firefox/3.6.28 Lunascape/6.7.1.25446"],
            ["lunascape", "win-4", "null", "win-4", "os", "Windows 7", "Lunascape", "6.7.1.25446", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Lunascape 6.7.1.25446)"],
            ["lunascape", "win-4", "null", "win-4", "os", "Windows 7 x64", "Lunascape", "6.7.1.25446", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; ko; rv:1.9.2.16) Gecko/20110325 Firefox/3.6.16 Lunascape/6.4.5.23569"],
            ["lunascape", "win-2", "null", "win-2", "os", "Windows XP", "Lunascape", "6.4.5.23569", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Lunascape/6.4.2.23236 Safari/533.3"],
            ["lunascape", "win-4", "null", "win-4", "os", "Windows 7", "Lunascape", "6.4.2.23236", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.3pre) Gecko/20100403 Lorentz/3.6.3plugin2pre (.NET CLR 4.0.20506)"],
            ["firefoxdevpre", "win-4", "null", "win-4", "os", "Windows 7", "Lorentz", "3.6.3plugin2pre", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.1.17) Gecko/20110123 Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2) Gecko/20070225 lolifox/0.32"],
            ["lolifox", "win-4", "null", "win-4", "os", "Windows 7", "Lolifox", "0.32", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows XP 5.1) Lobo/0.98.4"],
            ["lobo", "win-2", "null", "win-2", "os", "Windows XP", "Lobo", "0.98.4", "Windows", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Linux 2.6.26-1-amd64) Lobo/0.98.3"],
            ["lobo", "linux", "null", "linux", "os", "GNU/Linux", "Lobo", "0.98.3", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["LeechCraft (X11; U; Linux; ru_RU) (LeechCraft/Poshuku 0.3.95-1-g84cc6b7; WebKit 4.7.1/4.7.1)"],
            ["null", "linux", "null", "linux", "os", "GNU/Linux", "", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Linux 3.5.4-1-ARCH i686; es) KHTML/4.9.1 (like Gecko) Konqueror/4.9"],
            ["konqueror", "linux", "null", "linux", "os", "GNU/Linux", "Konqueror", "4.9", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu"],
            ["konqueror", "kubuntu-2", "null", "kubuntu-2", "os", "Kubuntu", "Konqueror", "4.4", "Kubuntu", "", "Kubuntu", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/4.2; Linux) KHTML/4.2.4 (like Gecko) Slackware/13.0"],
            ["konqueror", "slackware", "null", "slackware", "os", "Slackware", "Konqueror", "4.2", "Slackware", "", "Slackware", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/4.1; DragonFly) KHTML/4.1.4 (like Gecko)"],
            ["konqueror", "dragonflybsd", "null", "dragonflybsd", "os", "DragonFly BSD", "Konqueror", "4.1", "DragonFly BSD", "", "DragonFly BSD", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.3 (like Gecko) (Kubuntu package 4:3.4.3-0ubuntu2)"],
            ["konqueror", "kubuntu-2", "null", "kubuntu-2", "os", "Kubuntu", "Konqueror", "3.4", "Kubuntu", "", "Kubuntu", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.3 (like Gecko) (Kubuntu package 4:3.4.3-0ubuntu1)"],
            ["konqueror", "kubuntu-2", "null", "kubuntu-2", "os", "Kubuntu", "Konqueror", "3.4", "Kubuntu", "", "Kubuntu", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/3.4; SunOS) KHTML/3.4.1 (like Gecko)"],
            ["konqueror", "solaris", "null", "solaris", "os", "Solaris", "Konqueror", "3.4", "Solaris", "", "Solaris", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8.1.4pre) Gecko/20070404 K-Ninja/2.1.3"],
            ["kninja", "win-1", "null", "win-1", "os", "Windows 98 SE", "K-Ninja", "2.1.3", "Windows", "", "Windows 98 SE", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.19) Gecko/20081217 KMLite/1.1.2"],
            ["kmeleon", "win-1", "null", "win-1", "os", "Windows 2000", "KMLite", "1.1.2", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.21pre) Gecko K-Meleon/1.7.0"],
            ["kmeleon", "win-2", "null", "win-2", "os", "Windows XP", "K-Meleon", "1.7.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; KKMAN3.2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)"],
            ["kkman", "win-4", "null", "win-4", "os", "Windows 7", "KKman", "3.2", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6"],
            ["kazehakase", "fedora", "null", "fedora", "os", "Fedora 10", "Kazehakase", "0.5.6", "Fedora", "10", "Fedora 10", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0"],
            ["kapiko", "win-2", "null", "win-2", "os", "Windows XP", "Kapiko", "3.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20"],
            ["iris", "win-2", "null", "win-2", "os", "Windows", "Iris", "1.1.7", "Windows NT", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; iRider 2.60.0008; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)"],
            ["irider", "win-4", "null", "win-4", "os", "Windows 7", "iRider", "2.60.0008", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/4.0; GTB7.4; InfoPath.3; SV1; .NET CLR 3.1.76908; WOW64; en-US)"],
            ["msie9", "win-3", "null", "win-3", "os", "Windows Vista x64", "", "9.0", "Windows NT", "6.0", "Windows Vista x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/4.0; FBSMTWB; .NET CLR 2.0.34861; .NET CLR 3.0.3746.3218; .NET CLR 3.5.33652; msn OptimizedIE8;ENUS)"],
            ["msie7", "win-1", "null", "win-1", "os", "Windows 2000", " 8.0 (Compatibility Mode)", "", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)"],
            ["msie7", "win-2", "null", "win-2", "os", "Windows Server 2003", "", "7.0b", "Windows NT", "5.2", "Windows Server 2003", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (Mozilla/4.0; MSIE 7.0; Windows NT 5.1; FDM; SV1)"],
            ["msie7", "win-2", "null", "win-2", "os", "Windows XP", "", "7.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.1)"],
            ["msie6", "win-2", "null", "win-2", "os", "Windows XP", "", "6.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows 98", "", "5.5", "Windows", "", "Windows 98", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.14; Mac_PowerPC)"],
            ["msie4", "mac-1", "null", "mac-1", "os", "Macintosh", "", "5.14", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 3.51)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows NT 3.11", "", "5.05", "Windows NT", "3.51", "Windows NT 3.11", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 4.0)"],
            ["msie4", "win-1", "null", "win-1", "os", "Windows NT 4.0", "", "5.05", "Windows NT", "4.0", "Windows NT 4.0", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 4.01; Windows CE)"],
            ["msie4", "win-2", "null", "win-2", "os", "Windows CE", "", "4.01", "Windows", "", "Windows CE", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"],
            ["msie11", "win-5", "null", "win-5", "os", "Windows 8.1", "", "11.0", "Windows NT", "6.3", "Windows 8.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Macintosh; Intel Mac OS X 10_7_3; Trident/6.0)"],
            ["msie10", "mac-3", "null", "mac-3", "os", "Mac OS X 10.7.3", "", "10.0", "Mac OS X", "10.7.3", "Mac OS X 10.7.3", "", "", ""]
        ],
        [
            ["Mozilla/6.0 (Future Star Technologies Corp. Star-Blade OS; U; en-US) iNet Browser 2.5"],
            ["null", "null", "null", "null", "os", "Unknown", "iNet Browser", "2.5", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"],
            ["msie-mobile", "wp7", "null", "wp7", "os", "Windows Phone 7.5", "IEMobile", "9.0", "Windows Phone", "7.5", "Windows Phone 7.5", "", "", ""]
        ],
        [
            ["HTC_Touch_3G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)"],
            ["msie-mobile", "htc", "htc", "win-2", "device", "HTC Touch", "IEMobile", "7.11", "Windows", "", "Windows CE", "HTC", "Touch", "HTC Touch"]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)"],
            ["msie-mobile", "nokia", "nokia", "wp7", "device", "Nokia Lumia N70", "IEMobile", "7.0", "Windows Phone", "7.0", "Windows Phone 7.0", "Nokia", "Lumia N70", "Nokia Lumia N70"]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.0.7) Gecko/2009030814 Iceweasel Firefox/3.0.7 (Debian-3.0.7-1)"],
            ["iceweasel", "debian", "null", "debian", "os", "Debian", "IceWeasel", "", "Debian", "", "Debian", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Linux i686; rv:9.0a2) Gecko/20111104 Firefox/9.0a2 Iceweasel/9.0a2"],
            ["iceweasel", "linux", "null", "linux", "os", "GNU/Linux", "IceWeasel", "9.0a2", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.13) Gecko/20100916 Iceape/2.0.8"],
            ["iceape", "linux", "null", "linux", "os", "GNU/Linux x64", "Iceape", "2.0.8", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) iCab/4.8 Safari/533.16"],
            ["icab", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.8", "iCab", "4.8", "Mac OS X", "10.6.8", "Mac OS X 10.6.8", "", "", ""]
        ],
        [
            ["iCab/4.5 (Macintosh; U; Mac OS X Leopard 10.5.8)"],
            ["icab", "mac-3", "null", "mac-3", "os", "Mac OS X Leopard 10.5.8", "iCab", "4.5", "Mac OS X", "Leopard 10.5.8", "Mac OS X Leopard 10.5.8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; IBrowse 3.0; AmigaOS4.0)"],
            ["ibrowse", "amigaos", "null", "amigaos", "os", "AmigaOS", "IBrowse", "3.0", "AmigaOS", "", "AmigaOS", "", "", ""]
        ],
        [
            ["IBM WebExplorer /v0.94"],
            ["ibmwebexplorer", "null", "null", "null", "os", "Unknown", "WebExplorer", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["HotJava/1.1.2 FCS"],
            ["hotjava", "null", "null", "null", "os", "Unknown", "HotJava", "1.1.2", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.9 (KHTML, like Gecko) Hana/1.1"],
            ["hana", "mac-3", "null", "mac-3", "os", "Mac OS X", "Hana", "1.1", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/146.1 (KHTML, like Gecko) osb-browser/0.5"],
            ["null", "linux", "null", "linux", "os", "GNU/Linux", "Gtk+ WebCore", "0.5", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; InfoPath.2; .NET CLR 3.0.30729; GreenBrowser)"],
            ["greenbrowser", "win-3", "null", "win-3", "os", "Windows Vista", "GreenBrowser", "", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux ppc; en-US; rv:1.9a8) Gecko/2007100620 GranParadiso/3.1"],
            ["firefoxdevpre", "linux", "null", "linux", "os", "GNU/Linux", "GranParadiso", "3.1", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/13.0.782.215)"],
            ["chrome", "win-4", "null", "win-4", "os", "Windows 7", "Google Chrome Frame", "13.0.782.215", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; chromeframe; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MAXTHON 2.0)"],
            ["chrome", "win-4", "null", "win-4", "os", "Windows 7 x64", "Google Chrome Frame", "", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10"],
            ["chrome", "ipad", "ipad", "win-2", "device", "Apple iPad", "Chrome", "34.0.1847.116", "Windows NT", "5.1", "Windows XP", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"],
            ["chrome", "chromeos", "null", "chromeos", "os", "Google Chrome OS", "Chrome", "29.0.1547.57", "Google Chrome OS", "", "Google Chrome OS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36"],
            ["chrome", "netbsd", "null", "netbsd", "os", "NetBSD", "Chrome", "27.0.1453.116", "NetBSD", "", "NetBSD", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (KHTML, like Gecko) Slackware/Chrome/12.0.742.100 Safari/534.30"],
            ["chrome", "slackware", "null", "slackware", "os", "Slackware", "Chrome", "12.0.742.100", "Slackware", "", "Slackware", "", "", ""]
        ],
        [
            ["NokiaE66/GoBrowser/2.0.297"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia E66", "GOBrowser", "2.0.297", "Unknown", "", "Unknown", "Nokia", "E66", "Nokia E66"]
        ],
        [
            ["Nokia5800XpressMusic/GoBrowser/1.6.0.46"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia 5800XpressMusic", "GOBrowser", "1.6.0.46", "Unknown", "", "Unknown", "Nokia", "5800XpressMusic", "Nokia 5800XpressMusic"]
        ],
        [
            ["Mozilla/5.0 (Android 2.2; zh-cn; HTC Desire)/GoBrowser"],
            ["gobrowser", "htc", "htc", "android", "device", "HTC Desire", "GOBrowser", "", "Android", "2.2", "Android 2.2", "HTC", "Desire", "HTC Desire"]
        ],
        [
            ["NokiaX6/GoBrowser"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia X6", "GOBrowser", "", "Unknown", "", "Unknown", "Nokia", "X6", "Nokia X6"]
        ],
        [
            ["NokiaN97_mini/GoBrowser"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia N97", "GOBrowser", "", "Unknown", "", "Unknown", "Nokia", "N97", "Nokia N97"]
        ],
        [
            ["NokiaC5-00/GoBrowser"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia C5", "GOBrowser", "", "Unknown", "", "Unknown", "Nokia", "C5", "Nokia C5"]
        ],
        [
            ["Nokia6120c/GoBrowser"],
            ["gobrowser", "nokia", "nokia", "null", "device", "Nokia 6120c", "GOBrowser", "", "Unknown", "", "Unknown", "Nokia", "6120c", "Nokia 6120c"]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)"],
            ["icecat", "zenwalk", "null", "zenwalk", "os", "Zenwalk", "IceCat", "3.6.13", "Zenwalk", "", "Zenwalk", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko/20090327 Galeon/2.0.7"],
            ["galeon", "linux", "null", "linux", "os", "GNU/Linux", "Galeon", "2.0.7", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Galaxy/1.0 [en] (Mac OS X 10.5.6)"],
            ["galaxy", "mac-3", "null", "mac-3", "os", "Mac OS X 10.5.6", "Galaxy", "1.0", "Mac OS X", "10.5.6", "Mac OS X 10.5.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Flock/3.5.3.4628 Chrome/7.0.517.450 Safari/534.7"],
            ["flock", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.6", "Flock", "3.5.3.4628", "Mac OS X", "10.6.6", "Mac OS X 10.6.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Flock/3.5.2.4599 Chrome/7.0.517.442 Safari/534.7"],
            ["flock", "win-4", "null", "win-4", "os", "Windows 7", "Flock", "3.5.2.4599", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:2.0) Treco/20110515 Fireweb Navigator/2.4"],
            ["firewebnavigator", "win-2", "null", "win-2", "os", "Windows XP", "Fireweb Navigator", "2.4", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0a2) Gecko/20111101 Firefox/9.0a2"],
            ["firefox", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6", "Firefox", "9.0a2", "Mac OS X", "10.6", "Mac OS X 10.6", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0"],
            ["firefox", "win-5", "null", "win-5", "os", "Windows 8.1", "Firefox", "36.0", "Windows NT", "6.3", "Windows 8.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; DragonFly i386; de; rv:1.9.1b2) Gecko/20081201 Firefox/3.1b2"],
            ["firefox", "dragonflybsd", "null", "dragonflybsd", "os", "DragonFly BSD", "Firefox", "3.1b2", "DragonFly BSD", "", "DragonFly BSD", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; tr-TR; rv:1.9.0) Gecko/2008061600 SUSE/3.0-1.2 Firefox/3.0"],
            ["firefox", "suse", "null", "suse", "os", "openSUSE", "Firefox", "3.0", "openSUSE", "", "openSUSE", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0) Gecko/2008061600 SUSE/3.0-1.2 Firefox/3.0"],
            ["firefox", "suse", "null", "suse", "os", "openSUSE x64", "Firefox", "3.0", "openSUSE", "", "openSUSE x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.5) Gecko/2008121622 Slackware/2.6.27-PiP Firefox/3.0"],
            ["firefox", "slackware", "null", "slackware", "os", "Slackware", "Firefox", "3.0", "Slackware", "", "Slackware", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.10) Gecko/20060410 Firefox/1.0.8 Mandriva/1.0.6-16.5.20060mdk (2006.0)"],
            ["firefox", "mandriva", "null", "mandriva", "os", "Mandriva", "Firefox", "1.0.8", "Mandriva", "", "Mandriva", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.5) Gecko/20041215 Firefox/1.0 Red Hat/1.0-12.EL4"],
            ["firefox", "red-hat", "null", "red-hat", "os", "Red Hat Enterprise Linux 4", "Firefox", "1.0", "Red Hat Enterprise Linux", "4", "Red Hat Enterprise Linux 4", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Gentoo Linux x86_64; pl-PL) Gecko Firefox"],
            ["firefox", "gentoo", "null", "gentoo", "os", "Gentoo x64", "Firefox", "", "Gentoo", "", "Gentoo x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; x64; fr; rv:1.9.2.13) Gecko/20101203 Firebird/3.6.13"],
            ["firebird", "win-4", "null", "win-4", "os", "Windows 7", "Firebird", "3.6.13", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/20111216 Firefox/9.0 Fennec/9.0"],
            ["fennec", "android", "null", "android", "os", "Android", "Fennec", "9.0", "Android", "", "Android", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; WOW64; rv:7.0a1) Gecko/20110623 Firefox/7.0a1 Fennec/7.0a1"],
            ["fennec", "win-4", "null", "win-4", "os", "Windows 7 x64", "Fennec", "7.0a1", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.23; Macintosh; PPC) Escape 5.1.8"],
            ["espialtvbrowser", "mac-1", "null", "mac-1", "os", "Macintosh", "Escape", "5.1.8", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (DTV) AppleWebKit/531.2+ (KHTML, like Gecko) Espial/6.1.5 AQUOSBrowser/2.0 (US01DTV;V;0001;0001)"],
            ["espialtvbrowser", "null", "null", "null", "os", "Unknown", "Espial", "6.1.5", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"],
            ["epiphany", "linux", "null", "linux", "os", "GNU/Linux", "Epiphany", "2.30.6", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-gb) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) epiphany-webkit"],
            ["epiphany", "linux", "null", "linux", "os", "GNU/Linux", "Epiphany", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.9.0.13) Gecko/2009073022 EnigmaFox/3.0.13"],
            ["null", "win-3", "null", "win-3", "os", "Windows Vista", "EnigmaFox", "3.0.13", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Enigma Browser"],
            ["enigmabrowser", "null", "null", "null", "os", "Unknown", "Enigma Browser", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["ELinks/0.9.3 (textmode; Linux 2.6.9-kanotix-8 i686; 127x41)"],
            ["elinks", "kanotix", "null", "kanotix", "os", "Kanotix", "Elinks", "0.9.3", "Kanotix", "", "Kanotix", "", "", ""]
        ],
        [
            ["ELinks (0.11.3; Linux 2.6.23-gentoo-r6 i686; 128x48)"],
            ["elinks", "gentoo", "null", "gentoo", "os", "Gentoo", "Elinks", "", "Gentoo", "", "Gentoo", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533+ (KHTML, like Gecko) Element Browser 5.0"],
            ["elementbrowser", "win-4", "null", "win-4", "os", "Windows 7", "Element Browser", "5.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Mobile; Dorothy Browser; en-US) AppleWebKit/533.3 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/533.3"],
            ["dorothybrowser", "win-2", "null", "win-2", "os", "Windows", "Dorothy", "Browser", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows CE; Mobile; like Android; ko-kr) AppleWebKit/533.3 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.3 Dorothy"],
            ["dorothybrowser", "win-2", "null", "win-2", "os", "Windows CE", "Dorothy", "", "Windows", "", "Windows CE", "", "", ""]
        ],
        [
            ["Doris/1.15 [en] (Symbian)"],
            ["doris", "symbian", "null", "symbian", "os", "SymbianOS", "Doris", "1.15", "SymbianOS", "", "SymbianOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) Dooble/1.40 Safari/534.34"],
            ["dooble", "win-2", "null", "win-2", "os", "Windows XP", "Dooble", "1.40", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Dooble/0.07 (de_CH) WebKit"],
            ["dooble", "null", "null", "null", "os", "Unknown", "Dooble", "0.07", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Dillo/2.0"],
            ["dillo", "null", "null", "null", "os", "Unknown", "Dillo", "2.0", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; pl-pl) AppleWebKit/312.8 (KHTML, like Gecko, Safari) DeskBrowse/1.0"],
            ["deskbrowse", "mac-3", "null", "mac-3", "os", "Mac OS X", "DeskBrowse", "1.0", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; Deepnet Explorer 1.5.3; Smart 2x2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)"],
            ["deepnetexplorer", "win-4", "null", "win-4", "os", "Windows 7 x64", "Deepnet Explorer", "1.5.3", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Deepnet Explorer 1.5.3; Smart 2x2; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)"],
            ["deepnetexplorer", "win-2", "null", "win-2", "os", "Windows XP", "Deepnet Explorer", "1.5.3", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Cyberdog/2.0 (Macintosh; PPC)"],
            ["cyberdog", "mac-1", "null", "mac-1", "os", "Macintosh", "Cyberdog", "2.0", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Cyberdog/2.0 (Macintosh; 68k)"],
            ["cyberdog", "mac-1", "null", "mac-1", "os", "Macintosh", "Cyberdog", "2.0", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; SV1; Crazy Browser 9.0.04)"],
            ["crazybrowser", "win-3", "null", "win-3", "os", "Windows Vista", "Crazy Browser", "9.0.04", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Crazy Browser 3.1.0)"],
            ["crazybrowser", "win-5", "null", "win-5", "os", "Windows 8", "Crazy Browser", "3.1.0", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Avant Browser [avantbrowser.com]; Crazy Browser 1.0.5)"],
            ["crazybrowser", "win-2", "null", "win-2", "os", "Windows XP", "Crazy Browser", "1.0.5", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; rv:16.0) Gecko/20121010 conkeror/1.0pre"],
            ["conkeror", "win-4", "null", "win-4", "os", "Windows 7", "Conkeror", "1.0pre", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.14) Gecko/20101020 Conkeror/0.9.2 (Debian-0.9.2+git100804-1)"],
            ["conkeror", "debian", "null", "debian", "os", "Debian x64", "Conkeror", "0.9.2", "Debian", "", "Debian x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7"],
            ["comodo-dragon", "win-5", "null", "win-5", "os", "Windows 8", "Dragon", "16.1.1.0", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.0; it; rv:1.9.2.16) Gecko/20110325 Firefox/3.6.16 CometBird/3.6.16"],
            ["cometbird", "win-3", "null", "win-3", "os", "Windows Vista", "CometBird", "3.6.16", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC; en-US; mimic; rv:9.3.0) Clecko/20120101 Classilla/CFM"],
            ["classilla", "mac-1", "null", "mac-1", "os", "Macintosh", "Classilla", "9.3.0", "Macintosh", "", "Macintosh", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Ubuntu/10.10 Chromium/9.0.600.0 Chrome/9.0.600.0 Safari/534.14"],
            ["chromium", "ubuntu-2", "null", "ubuntu-2", "os", "Ubuntu 10.10 x64", "Chromium", "9.0.600.0", "Ubuntu", "10.10", "Ubuntu 10.10 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 ChromePlus/4.0.222.3 Chrome/4.0.222.3 Safari/525.28.3"],
            ["chromeplus", "win-2", "null", "win-2", "os", "Windows XP", "ChromePlus", "4.0.222.3", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20021111 Chimera/0.6"],
            ["null", "mac-3", "null", "mac-3", "os", "Mac OS X", "Chimera", "0.6", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/418.9 (KHTML, like Gecko, Safari) Cheshire/1.0.UNOFFICIAL"],
            ["aol", "mac-3", "null", "mac-3", "os", "Mac OS X", "Cheshire", "1.0.UNOFFICIAL", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/419 (KHTML, like Gecko, Safari/125) Cheshire/1.0.ALPHA"],
            ["aol", "mac-3", "null", "mac-3", "os", "Mac OS X", "Cheshire", "1.0.ALPHA", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Mozilla/4.08 (Charon; Inferno)"],
            ["null", "inferno", "null", "inferno", "os", "Inferno", "Charon", "", "Inferno", "", "Inferno", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.8; it; rv:1.93.26.2658) Gecko/20141026 Camino/2.176.223 (MultiLang) (like Firefox/3.64.2268)0"],
            ["camino", "mac-3", "null", "mac-3", "os", "Mac OS X 10.8", "Camino", "2.176.223", "Mac OS X", "10.8", "Mac OS X 10.8", "", "", ""]
        ],
        [
            ["Bunjalloo/0.7.6(Nintendo DS;U;en)"],
            ["bunjalloo", "nintendods", "nintendods", "null", "device", "Nintendo DS", "Bunjalloo", "0.7.6", "Unknown", "", "Unknown", "Nintendo", "DS", "Nintendo DS"]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; Browzar)"],
            ["browzar", "win-2", "null", "win-2", "os", "Windows XP", "Browzar", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; nl; rv:1.8.1b2) Gecko/20060821 BonEcho/2.0b2 (Debian-1.99+2.0b2+dfsg-1)"],
            ["firefoxdevpre", "debian", "null", "debian", "os", "Debian", "BonEcho", "2.0b2", "Debian", "", "Debian", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.340) AppleWebKit/530+ (KHTML, like Gecko) Version/4.0 Safari/530.17 UNTRUSTED/1.0 3gpp-gba"],
            ["bolt", "win-2", "null", "win-2", "os", "Windows XP", "Bolt", "2.340", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows 95; PalmSource; Blazer 3.0) 16; 160x160"],
            ["blazer", "palm", "palm", "win-1", "device", "Palm", "Blazer", "3.0", "Windows", "", "Windows 95", "Palm", "", "Palm"]
        ],
        [
            ["Mozilla/5.0 (Windows; U; WinNT; en; rv:1.0.2) Gecko/20030311 Beonex/0.8.2-stable"],
            ["beonex", "win-2", "null", "win-2", "os", "Windows", "Beonex", "0.8.2", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; Avant Browser; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)"],
            ["avantbrowser", "win-4", "null", "win-4", "os", "Windows 7", "Browser", "", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.8.0"],
            ["arora", "linux", "null", "linux", "os", "GNU/Linux", "Arora", "0.8.0", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; UNICOS lcLinux; en-US) Gecko/20140730 (KHTML, like Gecko, Safari/419.3) Arora/0.8.0"],
            ["arora", "linux", "null", "linux", "os", "GNU/Linux", "Arora", "0.8.0", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; AOL 9.7; AOLBuild 4343.27; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"],
            ["aol", "win-2", "null", "win-2", "os", "Windows XP", "AOL", "9.7", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; AOL 7.0; Windows NT 5.0)"],
            ["aol", "win-1", "null", "win-1", "os", "Windows 2000", "AOL", "7.0", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; AOL 7.0; Windows 98; Win 9x 4.90; .NET CLR 1.1.4322)"],
            ["aol", "win-1", "null", "win-1", "os", "Windows Me", "AOL", "7.0", "Windows", "", "Windows Me", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "lg", "lg", "android", "device", "LG L160L", "Android Webkit", "4.0", "Android", "4.0.3", "Android 4.0.3", "LG", "L160L", "LG L160L"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "htc", "htc", "android", "device", "HTC Sensation", "Android Webkit", "4.0", "Android", "4.0.3", "Android 4.0.3", "HTC", "Sensation", "HTC Sensation"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9"],
            ["android-webkit", "android", "null", "android", "os", "Android 2.3", "Android Webkit", "", "Android", "2.3", "Android 2.3", "", "", ""]
        ],
        [
            ["AmigaVoyager/3.2 (AmigaOS/MC680x0)"],
            ["amigavoyager", "amigaos", "null", "amigaos", "os", "AmigaOS", "Voyager", "3.2", "AmigaOS", "", "AmigaOS", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; America Online Browser 1.1; rev1.5; Windows NT 5.1; SV1; .NET CLR 1.1.4322; InfoPath.1)"],
            ["aol", "win-2", "null", "win-2", "os", "Windows XP", "America Online Browser", "1.1", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["amaya/10 libwww/5.4.0"],
            ["amaya", "null", "null", "null", "os", "Unknown", "Amaya", "10", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; Acoo Browser 1.98.744; .NET CLR 3.5.30729)"],
            ["acoobrowser", "win-3", "null", "win-3", "os", "Windows Vista", "Acoo Browser", "1.98.744", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Teleca Q7; Brew 3.1.5; U; en) 480X800 LGE VX11000"],
            ["obigo", "lg", "lg", "null", "device", "LG VX11000", "Teleca", "Q7", "Unknown", "", "Unknown", "LG", "VX11000", "LG VX11000"]
        ],
        [
            ["Mozilla/5.0 (Ubuntu; Mobile) WebKit/537.21"],
            ["ubuntuwebbrowser", "ubuntutouch", "ubuntutouch", "null", "device", "Ubuntu Phone", "Ubuntu Web Browser", "", "Unknown", "", "Unknown", "Ubuntu", "Phone", "Ubuntu Phone"]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; Acoo Browser 1.98.744; .NET CLR 3.5.30729)"],
            ["acoobrowser", "win-3", "null", "win-3", "os", "Windows Vista", "Acoo Browser", "1.98.744", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; http://www.Abolimba.de; .NET CLR 1.1.4322)"],
            ["abolimba", "win-2", "null", "win-2", "os", "Windows XP", "", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 Alienforce/9.0.1"],
            ["alienforce", "win-5", "null", "win-5", "os", "Windows 8 x64", "Alienforce", "9.0.1", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Amiga-AWeb/3.4.167SE"],
            ["amiga-aweb", "null", "null", "null", "os", "Unknown", "AWeb", "3.4.167SE", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["BarcaPro/1.4.xxxx"],
            ["barca", "null", "null", "null", "os", "Unknown", "BarcaPro", "1.4.xxxx", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML like Gecko) Chrome/32.0.1700.77 Beamrise/32.2.1700.77 Safari/537.36"],
            ["beamrise", "win-5", "null", "win-5", "os", "Windows 8", "Beamrise", "32.2.1700.77", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 BIDUBrowser/7.0 Safari/537.36"],
            ["bidubrowser", "win-2", "null", "win-2", "os", "Windows XP", "Baidu Browser", "7.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1.1; ar-eg; BlackBird I9000 Build/IMM76D) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["blackbird", "android", "null", "android", "os", "Android 4.1.1", "Blackbird", "I9000", "Android", "4.1.1", "Android 4.1.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML like Gecko) BlackHawk/1.0.195.0 Chrome/127.0.0.1 Safari/52916320.534"],
            ["blackhawk", "win-4", "null", "win-4", "os", "Windows 7", "BlackHawk", "1.0.195.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.61 [en] (X11; U; ) - BrowseX (2.0.0 Windows)"],
            ["browsex", "win-2", "null", "win-2", "os", "Windows", "BrowseX", "", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Coast/1.0.2.62956 Mobile/10B329 Safari/7534.48.3"],
            ["coast", "ipad", "ipad", "mac-3", "device", "Apple iPad", "Coast", "1.0.2.62956", "iOS", "6.1.3", "iOS 6.1.3", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.34 (KHTML like Gecko) Columbus/1.5.0.0 Safari/534.34"],
            ["columbus", "win-5", "null", "win-5", "os", "Windows 8 x64", "Columbus", "1.5.0.0", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML like Gecko) coccocbrowser/42.0 CoRom/36.0.1985.149 Chrome/36.0.1985.149 Safari/537.36"],
            ["corom", "win-5", "null", "win-5", "os", "Windows 8.1", "CoRom", "36.0.1985.149", "Windows NT", "6.3", "Windows 8.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; Transformer Prime TF201 Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Safari/535.7"],
            ["chrome", "android", "null", "android", "os", "Android 4.0.3", "Chrome Mobile", "16.0.912.75", "Android", "4.0.3", "Android 4.0.3", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.3.7; en-gb; E15i Build/4.0.1.A.0.283; GingerCruzt) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["cruz", "android", "null", "android", "os", "Android 2.3.7", "Cruz", "t", "Android", "2.3.7", "Android 2.3.7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; DPlus 0.5a)"],
            ["dillo", "null", "null", "null", "os", "Unknown", "D+", "0.5a", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1056; en-us) AppleWebKit/525.27.1 (KHTML like Gecko) Demeter/1.0.9 Safari/125"],
            ["demeter", "mac-3", "null", "mac-3", "os", "Mac OS X 1056", "Demeter", "1.0.9", "Mac OS X", "1056", "Mac OS X 1056", "", "", ""]
        ],
        [
            ["Mozilla/3.01 (compatible; Netbox/3.5 R92; Linux 2.2)"],
            ["netbox", "linux", "null", "linux", "os", "GNU/Linux", "NetBox", "3.5", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.3a5) Gecko/20100610 MozillaDeveloperPreview/3.7a5"],
            ["firefoxdevpre", "win-3", "null", "win-3", "os", "Windows Vista", "Mozilla Developer Preview", "3.7a5", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.7 (compatible; OffByOne; Windows )"],
            ["offbyone", "win-2", "null", "win-2", "os", "Windows", "", "", "Windows", "", "Windows", "", "", ""]
        ],
        [
            ["OneBrowser/4.2.0/Adr(Linux; U; Android 4.1.2; cs-cz; C2105 Build/15.0.A.1.31) AppleWebKit/533.1 (KHTML, like Gecko) Mobile Safari/533.1"],
            ["onebrowser", "android", "null", "android", "os", "Android 4.1.2", "OneBrowser", "4.2.0", "Android", "4.1.2", "Android 4.1.2", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36 OPR/19.0.1326.39 (Edition Next)"],
            ["opera-next", "mac-3", "null", "mac-3", "os", "Mac OS X 10.9.1", "Opera Next", "19.0.1326.39", "Mac OS X", "10.9.1", "Mac OS X 10.9.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; Origyn Web Browser; AmigaOS 4.1; PPC; U) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+)"],
            ["owb", "amigaos", "null", "amigaos", "os", "AmigaOS 4.1", "", "", "AmigaOS", "4.1", "AmigaOS 4.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/538.1 (KHTML, like Gecko) Otter/0.9.08"],
            ["otter", "win-5", "null", "win-5", "os", "Windows 8 x64", "Otter", "0.9.08", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) SlimBoat/1.0.8 Version/5.1 Safari/533.3"],
            ["slimboat", "win-4", "null", "win-4", "os", "Windows 7", "SlimBoat", "1.0.8", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["KDDI-KC31 UP.Browser/6.2.0.5 (GUI) MMP/2.0"],
            ["openwave", "null", "null", "null", "os", "Unknown", "Openwave Mobile Browser", "6.2.0.5", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en) UP.Link/6.3.1.17.0"],
            ["openwave", "htc", "htc", "win-2", "device", "HTC ST7377", "Openwave Mobile Browser", "6.3.1.17.0", "Windows NT", "5.1", "Windows XP", "HTC", "ST7377", "HTC ST7377"]
        ],
        [
            ["Mozilla/5.0 (X11; Linux x86_64; rv:2.0) Gecko/20110318 WebianShell/0."],
            ["webianshell", "linux", "null", "linux", "os", "GNU/Linux x64", "Shell", "0.", "GNU/Linux", "", "GNU/Linux x64", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; QQDownload 1.7; GTB6.6; TencentTraveler 4.0; SLCC1; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.5.30729; .NET CLR 3.0.30729)"],
            ["tencenttraveler", "win-3", "null", "win-3", "os", "Windows Vista", "Traveler", "4.0", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Tjusig 2.40.164; Avant Browser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"],
            ["tjusig", "win-1", "null", "win-1", "os", "Windows 98", "Tjusig", "2.40.164", "Windows", "", "Windows 98", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Tizen 2.0; en-us) AppleWebKit/537.1 (KHTML, like Gecko) Mobile TizenBrowser/2.0"],
            ["tizenbrowser", "tizen", "null", "tizen", "os", "Tizen", "Tizen Browser", "2.0", "Tizen", "", "Tizen", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; AspTear 1.5)"],
            ["tear", "win-1", "null", "win-1", "os", "Windows 2000", "", "", "Windows NT", "5.0", "Windows 2000", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.8.1.9) Gecko/20071110 Sylera/3.0.20 SeaMonkey/1.1.6"],
            ["null", "win-4", "null", "win-4", "os", "Windows 7", "Sylera", "3.0.20", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2) AppleWebKit/534.34 (KHTML like Gecko) SlimBoat/1.1.53 Chrome/25.0.1364.97 Version/5.1 Safari/534.34"],
            ["slimboat", "win-5", "null", "win-5", "os", "Windows 8", "SlimBoat", "1.1.53", "Windows NT", "6.2", "Windows 8", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"],
            ["silk", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.3", "Silk", "1.0.13.81", "Mac OS X", "10.6.3", "Mac OS X 10.6.3", "", "", ""]
        ],
        [
            ["DoCoMo/2.0 F2051(c100;TD)"],
            ["null", "null", "null", "null", "os", "Unknown", "DoCoMo", "2.0", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["DocZilla/1.0 (Windows; U; WinNT4.0; en-US; rv:1.0.0)"],
            ["doczilla", "win-1", "null", "win-1", "os", "Windows NT 4.0", "DocZilla", "1.0", "Windows", "4.0", "Windows NT 4.0", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad; CPU OS 613 like Mac OS X) AppleWebKit/536.26 (KHTML like Gecko) Mobile/10B329 Safari/6533.18.5 SecuredBrowser/jp.co.obayashi.clomosecuredbrowser"],
            ["edbrowse", "ipad", "ipad", "mac-3", "device", "Apple iPad", "Edbrowse", "r", "iOS", "613", "iOS 613", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X 1095) AppleWebKit/537.36 (KHTML like Gecko) Chrome/34.0.1771.0 Safari/537.36 Epic"],
            ["epicbrowser", "mac-3", "null", "mac-3", "os", "Mac OS X 1095", "Epic", "", "Mac OS X", "1095", "Mac OS X 1095", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1; nl-nl) AppleWebKit/532.3+ (KHTML, like Gecko) Fluid/0.9.6 Safari/532.3+"],
            ["fluid", "mac-3", "null", "mac-3", "os", "Mac OS X 10.6.1", "Fluid", "0.9.6", "Mac OS X", "10.6.1", "Mac OS X 10.6.1", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.10) Gecko/20100923 Firefox/3.6.10 compat GlobalMojo/2.0.7 GlobalMojoExt/2.0.7"],
            ["globalmojo", "win-4", "null", "win-4", "os", "Windows 7", "GlobalMojo", "2.0.7", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; GTB7.5; GOSURF; Foxy/1; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30618)"],
            ["gosurf", "win-3", "null", "win-3", "os", "Windows Vista", "GoSurf", "", "Windows NT", "6.0", "Windows Vista", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; en-us ; HV3 Build/JDQ39) AppleWebKit/533.1 (KHTML like Gecko) Version/4.0 Mobile Safari/533.1/UCBrowser/8.6.1.262/145/355"],
            ["hv3", "android", "null", "android", "os", "Android 4.2.2", "Hv3", "", "Android", "4.2.2", "Android 4.2.2", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Java 1.6.0_01; Windows XP 5.1 x86; en) ICEbrowser/v6_1_2"],
            ["icebrowser", "win-2", "null", "win-2", "os", "Windows XP", "IceBrowser", "v6", "Windows", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 712 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Mobile/11D257 FBAN/FBIOS;FBAV/14.0.0.25.26;FBBV/4017285;FBDV/iPhone61;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/Strata;FBID/phone;FBLC/enUS;FBOP/5"],
            ["facebook", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Facebook", "14.0.0.25.26", "iOS", "712", "iOS 712", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/31.0.1650.63 Safari/537.36"],
            ["chrome", "win-5", "null", "win-5", "os", "Windows 8 x64", "Chrome", "31.0.1650.63", "Windows NT", "6.2", "Windows 8 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; LEGALBROWSER)"],
            ["lbrowser", "win-4", "null", "win-4", "os", "Windows 7 x64", "LBrowser", "", "Windows NT", "6.1", "Windows 7 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; cs; rv:1.9.2.6) Gecko/20100628 myibrow/4alpha2"],
            ["my-internet-browser", "win-4", "null", "win-4", "os", "Windows 7", "myibrow", "4alpha2", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; ru-RU) AppleWebKit/533.3 (KHTML like Gecko) InternetSurfboard/0.4 Safari/533.3"],
            ["internetsurfboard", "win-4", "null", "win-4", "os", "Windows 7", "InternetSurfboard", "0.4", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; SkipStone 0.8.3) Gecko/20020615 Debian/1.0.0-3"],
            ["skipstone", "debian", "null", "debian", "os", "Debian", "SkipStone", "0.8.3", "Debian", "", "Debian", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; cs; rv:1.9.0.5) Gecko/2009021916 Songbird/1.1.2 (20090331142126)"],
            ["songbird", "win-2", "null", "win-2", "os", "Windows XP", "Songbird", "1.1.2", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.12 (KHTML, like Gecko) Chrome/9.0.571.0 Safari/534.12 ZipZap 3.1"],
            ["zipzap", "win-4", "null", "win-4", "os", "Windows 7", "ZipZap", "3.1", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; UltraBrowser 11.0; BTRS123574; InfoPath.2)"],
            ["ultrabrowser", "win-2", "null", "win-2", "os", "Windows XP", "UltraBrowser", "11.0", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (en-us) AppleWebKit/537.36(KHTML like Gecko; Google-Adwords-DisplayAds-WebRender;) Chrome/27.0.1453Safari/537.36"],
            ["webrender", "null", "null", "null", "os", "Unknown", "Webrender", "", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1067; it-it) AppleWebKit/533.20.25 (KHTML like Gecko) Mozilla/5.0 (Macintosh; U; Intel Mac OS X 1067; en) AppleWebKit/533.20.25 (KHTML like Gecko) \"wKiosk for Mac\""],
            ["wkiosk", "mac-3", "null", "mac-3", "os", "Mac OS X 1067", "", "", "Mac OS X", "1067", "Mac OS X 1067", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.2 Ryouko/1.2.4 Safari/534.34"],
            ["ryouko", "win-2", "null", "win-2", "os", "Windows XP", "Ryouko", "1.2.4", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) QupZilla/1.4.3 Safari/534.34"],
            ["qupzilla", "mac-3", "null", "mac-3", "os", "Mac OS X", "QupZilla", "1.4.3", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["Podkicker/1.0.3 Android/4.0.4"],
            ["podkicker", "android", "null", "android", "os", "Android 4.0.4", "Podkicker", "1.0.3", "Android", "4.0.4", "Android 4.0.4", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; PhaseOut-www.phaseout.net)"],
            ["phaseout", "win-2", "null", "win-2", "os", "Windows XP", "", "", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (BREW 3.1.5; U; en-us; Samsung; SPH_M330; POLARIS/6.1/WAP) MMP/2.0 Configuration/CLDC-1.1 Novarra-Vision/8.0"],
            ["polaris", "samsung", "samsung", "null", "device", "Samsung", "Polaris", "6.1", "Unknown", "", "Unknown", "Samsung", "", "Samsung"]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) Patriott::Browser/1.0.0 Safari/533.3"],
            ["patriott", "win-4", "null", "win-4", "os", "Windows 7", "Browser", "1.0.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; fa-IR) AppleWebKit/532.4 (KHTML like Gecko) Usejump/0.10.4 Safari/532.4"],
            ["usejump", "win-4", "null", "win-4", "os", "Windows 7", "Usejump", "0.10.4", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Xiino/1.0.9E [en] (v. 3.5.2H6.0; 153x130; c8)"],
            ["null", "null", "null", "null", "os", "Unknown", "Xiino", "1.0.9E", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["X-Smiles/1.2-20081113"],
            ["x-smiles", "null", "null", "null", "os", "Unknown", "X-Smiles", "1.2", "Unknown", "", "Unknown", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.34 (KHTML, like Gecko) zBrowser/NigtSky-0.0.2 Safari/534.34"],
            ["zbrowser", "win-4", "null", "win-4", "os", "Windows 7", "zBrowser", "NigtSky", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; Opera/9.5) Alltel HTC Touch Pro"],
            ["opera-1", "htc", "htc", "win-2", "device", "HTC Touch Pro", "Opera", "9.5", "Windows", "", "Windows CE", "HTC", "Touch Pro", "HTC Touch Pro"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2.2; de-de; Dell Streak Build/FRG83G) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "dell", "dell", "android", "device", "Dell Streak", "Android Webkit", "4.0", "Android", "2.2.2", "Android 2.2.2", "Dell", "Streak", "Dell Streak"]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.5; Trident/3.1; IEMobile/7.0; DELL; Venue Pro)"],
            ["msie-mobile", "dell", "dell", "wp7", "device", "Dell", "IEMobile", "7.0", "Windows Phone", "7.5", "Windows Phone 7.5", "Dell", "", "Dell"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "htc", "htc", "android", "device", "HTC Sensation", "Android Webkit", "4.0", "Android", "4.0.3", "Android 4.0.3", "HTC", "Sensation", "HTC Sensation"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2; fr-lu; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "htc", "htc", "android", "device", "HTC Legend", "Android Webkit", "4.0", "Android", "2.2", "Android 2.2", "HTC", "Legend", "HTC Legend"]
        ],
        [
            ["UA: Mozilla/5.0 (Linux; U; Android 1.6; es-es; HTC Tattoo 1.67.164.9 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1"],
            ["android-webkit", "htc", "htc", "android", "device", "HTC Tattoo", "Android Webkit", "3.1.2", "Android", "1.6", "Android 1.6", "HTC", "Tattoo", "HTC Tattoo"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2; xx-xx; lepad_001b Build/PQXU100.4.0097.042211) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "lenovo", "lenovo", "android", "device", "Lenovo LePad", "Android Webkit", "4.0", "Android", "2.2", "Android 2.2", "Lenovo", "LePad", "Lenovo LePad"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.2; en-us; DROID2 GLOBAL Build/S273) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"],
            ["android-webkit", "motorola", "motorola", "android", "device", "Motorola Droid", "Android Webkit", "4.0", "Android", "2.2", "Android 2.2", "Motorola", "Droid", "Motorola Droid"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"],
            ["android-webkit", "motorola", "motorola", "android", "device", "Motorola Xoom", "Android Webkit", "4.0", "Android", "3.0", "Android 3.0", "Motorola", "Xoom", "Motorola Xoom"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Milestone XT720 Build/STR_U2_01.18.2) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17"],
            ["android-webkit", "motorola", "motorola", "android", "device", "Motorola XT720", "Android Webkit", "4.0", "Android", "2.1", "Android 2.1", "Motorola", "XT720", "Motorola XT720"]
        ],
        [
            ["Opera/9.50 (Nintendo DSi; Opera/483; U; en-US)"],
            ["opera-1", "nintendodsi", "nintendodsi", "null", "device", "Nintendo DSi", "Opera", "9.50", "Unknown", "", "Unknown", "Nintendo", "DSi", "Nintendo DSi"]
        ],
        [
            ["Mozilla/5.0 (Nintendo WiiU) AppleWebKit/534.52 (KHTML, like Gecko) NX/2.1.0.8.23 NintendoBrowser/1.1.0.7579.EU"],
            ["mozilla", "nintendowiiu", "nintendowiiu", "null", "device", "Nintendo Wii U", "", "", "Unknown", "", "Unknown", "Nintendo", "Wii U", "Nintendo Wii U"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1; xx-xx; ONDA MID Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30"],
            ["android-webkit", "onda", "onda", "android", "device", "Onda", "Android Webkit", "4.0", "Android", "4.1", "Android 4.1", "Onda", "", "Onda"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-CN; OPPO R833T Build/baijiazai) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1"],
            ["ucbrowser", "oppo", "oppo", "android", "device", "OPPO", "UC Browser", "9.9.5.489", "Android", "4.2.2", "Android 4.2.2", "OPPO", "", "OPPO"]
        ],
        [
            ["Mozilla/5.0 (webOS/1.3.5.1; U; xx-xx) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.1"],
            ["safari", "palm", "palm", "palm", "device", "Palm Pixi", "Safari", "1.0", "Palm webOS", "", "Palm webOS", "Palm", "Pixi", "Palm Pixi"]
        ],
        [
            ["Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0"],
            ["palmpre", "palm", "palm", "palm", "device", "Palm Pre", "Pre", "1.0", "Palm webOS", "", "Palm webOS", "Palm", "Pre", "Palm Pre"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; zh-CN; Coolpad 8670 Build/JDQ39) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.2.467 U3/0.8.0 Mobile Safari/533.1"],
            ["ucbrowser", "coolpad", "coolpad", "android", "device", "CoolPad 8670", "UC Browser", "9.9.2.467", "Android", "4.2.2", "Android 4.2.2", "CoolPad", "8670", "CoolPad 8670"]
        ],
        [
            ["CoolPad8736_CMCC_TD/1.0 Linux/3.0.8 Android/4.2 Release/6.25.2013 Browser/AppleWebkit534.30"],
            ["android-webkit", "coolpad", "coolpad", "android", "device", "CoolPad 8736", "Android Webkit", "", "Android", "4.2", "Android 4.2", "CoolPad", "8736", "CoolPad 8736"]
        ],
        [
            ["Mozilla/5.0 (Ubuntu; Tablet) WebKit/537.21"],
            ["ubuntuwebbrowser", "ubuntutouch", "ubuntutouch", "null", "device", "Ubuntu Tablet", "Ubuntu Web Browser", "", "Unknown", "", "Unknown", "Ubuntu", "Tablet", "Ubuntu Tablet"]
        ],
        [
            ["UCWEB/2.0 (Linux; U; Android 4.2.1; zh-CN; vivo X3t) U2/1.0.0 UCBrowser/9.9.4.484 U2/1.0.0 Mobile"],
            ["ucbrowser", "vivo", "vivo", "android", "device", "vivo X3t", "UC Browser", "9.9.4.484", "Android", "4.2.1", "Android 4.2.1", "vivo", "X3t", "vivo X3t"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; vivo X3L Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "vivo", "vivo", "android", "device", "vivo X3L", "Android Webkit", "4.0", "Android", "4.3", "Android 4.3", "vivo", "X3L", "vivo X3L"]
        ],
        [
            ["HUAWEI_P6-T00_TD/5.0 Android/4.2.2 (Linux; U; Android 4.2.2; zh-cn) Release/03.20.2013 Browser/WAP2.0 (AppleWebKit/534.30) Mobile Safari/534.30"],
            ["android-webkit", "huawei", "huawei", "android", "device", "Huawei P6", "Android Webkit", "", "Android", "4.2.2", "Android 4.2.2", "Huawei", "P6", "Huawei P6"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"],
            ["chrome", "samsung", "samsung", "android", "device", "Samsung Galaxy Nexus", "Chrome", "18.0.1025.133", "Android", "4.0.4", "Android 4.0.4", "Samsung", "Galaxy Nexus", "Samsung Galaxy Nexus"]
        ],
        [
            ["Mozilla/5.0 (SmartHub; SMART-TV; U; Linux/SmartTV) AppleWebKit/531.2+ (KHTML, like Gecko) WebBrowser/1.0 SmartTV Safari/531.2+"],
            ["maplebrowser", "samsung", "samsung", "linux", "device", "Samsung Smart TV", "Maple Browser", "1.0", "GNU/Linux", "", "GNU/Linux", "Samsung", "Smart TV", "Samsung Smart TV"]
        ],
        [
            ["Mozilla/5.0 (SMART-TV; X11; Linux i686) AppleWebKit/535.20+ (KHTML, like Gecko) Version/5.0 Safari/535.20+"],
            ["safari", "samsung", "samsung", "linux", "device", "Samsung Smart TV", "Safari", "5.0", "GNU/Linux", "", "GNU/Linux", "Samsung", "Smart TV", "Samsung Smart TV"]
        ],
        [
            ["Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2"],
            ["silk", "playstation", "playstation", "null", "device", "Sony PlayStation Vita", "Silk", "3.2", "Unknown", "", "Unknown", "Sony", "PlayStation Vita", "Sony PlayStation Vita"]
        ],
        [
            ["PSP (PlayStation Portable); 2.00"],
            ["null", "playstation", "playstation", "null", "device", "Sony PlayStation Portable", "Unknown", "", "Unknown", "", "Unknown", "Sony", "PlayStation Portable", "Sony PlayStation Portable"]
        ],
        [
            ["Mozilla/4.0 (PSP (PlayStation Portable); 2.00)"],
            ["mozilla", "playstation", "playstation", "null", "device", "Sony PlayStation Portable", "", "", "Unknown", "", "Unknown", "Sony", "PlayStation Portable", "Sony PlayStation Portable"]
        ],
        [
            ["Mozilla/5.0 (PlayStation 4 1.51) AppleWebKit/536.26 (KHTML, like Gecko)"],
            ["webkit", "playstation", "playstation", "null", "device", "Sony PlayStation 4", "", "", "Unknown", "", "Unknown", "Sony", "PlayStation 4", "Sony PlayStation 4"]
        ],
        [
            ["Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3"],
            ["chrome", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "CriOS", "19.0.1084.60", "iOS", "5.1.1", "iOS 5.1.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (compatible; Konqueror/2.2.2; Linux 2.4.18; X11; i686; AffiliateCashGen/1.0; en) LindowsOS (Lindows.com, Inc.)"],
            ["konqueror", "lindowsos", "null", "lindowsos", "os", "LindowsOS", "Konqueror", "2.2.2", "LindowsOS", "", "LindowsOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en; rv:1.9b5) Gecko Foresight Linux Epiphany/2.22"],
            ["epiphany", "foresight", "null", "foresight", "os", "Foresight Linux", "Epiphany", "2.22", "Foresight Linux", "", "Foresight Linux", "", "", ""]
        ],
        [
            ["AmigaVoyager/3.4.4 (MorphOS/PPC native) user-agent"],
            ["amigavoyager", "morphos", "null", "morphos", "os", "MorphOS", "Voyager", "3.4.4", "MorphOS", "", "MorphOS", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.12) Gecko/20100826 moonOS/3.0 (Makara) Firefox/3.5.2"],
            ["firefox", "moonos", "null", "moonos", "os", "moonOS 3.0", "Firefox", "3.5.2", "moonOS", "3.0", "moonOS 3.0", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.7.10) Gecko/20050919 (No IDN) Firefox/1.0.6"],
            ["firefox", "openbsd", "null", "openbsd", "os", "OpenBSD", "Firefox", "1.0.6", "OpenBSD", "", "OpenBSD", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1) Gecko/20090619 Pardus/2009 Firefox/3.5"],
            ["firefox", "pardus", "null", "pardus", "os", "Pardus", "Firefox", "3.5", "Pardus", "", "Pardus", "", "", ""]
        ],
        [
            ["Mozilla/2.0 (Compatible; AOL-IWENG 3.0; Win16)"],
            ["aol", "win-1", "null", "win-1", "os", "Windows 3.11", "AOL", "", "Windows", "", "Windows 3.11", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)"],
            ["icecat", "zenwalk", "null", "zenwalk", "os", "Zenwalk", "IceCat", "3.6.13", "Zenwalk", "", "Zenwalk", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.2.13) Gecko/20101221 IceCat/3.6.13 (like Firefox/3.6.13) (Zenwalk GNU Linux)"],
            ["icecat", "zenwalk", "null", "zenwalk", "os", "Zenwalk", "IceCat", "3.6.13", "Zenwalk", "", "Zenwalk", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux i686; nl-NL; rv:1.6) Gecko/20050714 Linspire/1.6-5.1.0.50.linspire2.70"],
            ["mozilla", "lindowsos", "null", "lindowsos", "os", "Linspire", "", "", "Linspire", "", "Linspire", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Mac OSX; it; rv:1.9.0.7) Gecko/2009030422 Firefox/3.0.7"],
            ["firefox", "mac-2", "null", "mac-2", "os", "Mac OS X", "Firefox", "3.0.7", "Mac OS X", "", "Mac OS X", "", "", ""]
        ],
        [
            ["MobileSafari/9537.53 CFNetwork/672.1.13 Darwin/13.1.0"],
            ["safari", "mac-1", "null", "mac-1", "os", "Mac OS Darwin", "Mobile Safari", "", "Mac OS Darwin", "", "Mac OS Darwin", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; MEIZU MX Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobiile Safari/533.1"],
            ["android-webkit", "meizu", "meizu", "android", "device", "Meizu", "Android Webkit", "4.0", "Android", "2.3.5", "Android 2.3.5", "Meizu", "", "Meizu"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.4.4; Xperia SP Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 YiXin/3.2.0"],
            ["chrome", "xperia", "xperia", "android", "device", "Sony Xperia SP", "Chrome", "33.0.0.0", "Android", "4.4.4", "Android 4.4.4", "Sony", "Xperia SP", "Sony Xperia SP"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; Xperia Z Build/KTU84Q) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "xperia", "xperia", "android", "device", "Sony Xperia Z", "Android Webkit", "4.0", "Android", "4.4.4", "Android 4.4.4", "Sony", "Xperia Z", "Sony Xperia Z"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; GT-I9300I Build/JLS36C) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 Mobile Safari/537.36"],
            ["qqbrowser", "samsung", "samsung", "android", "device", "Samsung I9300I", "MQQBrowser", "5.4", "Android", "4.3", "Android 4.3", "Samsung", "I9300I", "Samsung I9300I"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1.2; zh-CN; GT-N7100 Build/JZO54K) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.2.467 U3/0.8.0 Mobile Safari/533.1"],
            ["ucbrowser", "samsung", "samsung", "android", "device", "Samsung N7100", "UC Browser", "9.9.2.467", "Android", "4.1.2", "Android 4.1.2", "Samsung", "N7100", "Samsung N7100"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.2.2; nl-nl; GT-I9505 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"],
            ["android-webkit", "samsung", "samsung", "android", "device", "Samsung I9505", "Android Webkit", "4.0", "Android", "4.2.2", "Android 4.2.2", "Samsung", "I9505", "Samsung I9505"]
        ],
        [
            ["AtomicBrowser/7.0.1 CFNetwork/672.0.8 Darwin/14.0.0"],
            ["atomicwebbrowser", "mac-1", "null", "mac-1", "os", "Mac OS Darwin", "Atomic Web Browser", "7.0.1", "Mac OS Darwin", "", "Mac OS Darwin", "", "", ""]
        ],
        [
            ["Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Multi-Browser XP 10.2 (www.multibrowser.de); Avant Browser; .NET CLR 2.0.50727; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 3.0.04506.30)"],
            ["multi-browserxp", "win-2", "null", "win-2", "os", "Windows XP", "Multi-Browser", "XP", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 MicroMessenger/5.0.1"],
            ["wechat", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "WeChat", "5.0.1", "iOS", "6.1.3", "iOS 6.1.3", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Linux; U; Android 4.1.2; zh-cn; MI-ONE Plus Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 MicroMessenger/5.0.1.352"],
            ["wechat", "xiaomi", "xiaomi", "android", "device", "Xiaomi 1", "WeChat", "5.0.1.352", "Android", "4.1.2", "Android 4.1.2", "Xiaomi", "1", "Xiaomi 1"]
        ],
        [
            ["Mozilla/3.04 (compatible; ANTFresco/2.13; RISC OS 4.02)"],
            ["antfresco", "risc", "null", "risc", "os", "RISC OS 4.02", "Fresco", "2.13", "RISC OS", "4.02", "RISC OS 4.02", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) WhiteHat Aviator/35.0.1916.114 Chrome/35.0.1916.114 Safari/537.36"],
            ["aviator", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "WhiteHat Aviator", "35.0.1916.114", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.1; rv:20.0) Gecko/20100101 Firefox/20.0 IceDragon/20.0.1.14"],
            ["icedragon", "win-4", "null", "win-4", "os", "Windows 7", "IceDragon", "20.0.1.14", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36 Kinza/1.2.0"],
            ["kinza", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "Kinza", "1.2.0", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.12) Gecko/20101026 Villanova/1.9.2.12 Polarity/3.0.0 Firefox/4.0"],
            ["polarity", "win-4", "null", "win-4", "os", "Windows 7", "Polarity", "3.0.0", "Windows NT", "6.1", "Windows 7", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.46 Safari/536.5 Nichrome/self/19"],
            ["nichromeself", "win-2", "null", "win-2", "os", "Windows XP", "NiChrome", "19", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (X11; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) QtCarBrowser Safari/533.3"],
            ["tesla", "linux", "null", "linux", "os", "GNU/Linux", "Tesla Car Browser", "", "GNU/Linux", "", "GNU/Linux", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:35.0) Gecko/20100101 Firefox/35.0 Waterfox/35.0"],
            ["waterfox", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "WaterFox", "35.0", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Superbird/37.0.2062.90 Chrome/37.0.2062.90 Safari/537.36"],
            ["superbird", "win-5", "null", "win-5", "os", "Windows 8.1 x64", "Superbird", "37.0.2062.90", "Windows NT", "6.3", "Windows 8.1 x64", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+"],
            ["safari", "blackberry", "blackberry", "null", "device", "BlackBerry 9900", "Mobile Safari", "7.1.0.346", "Unknown", "", "Unknown", "BlackBerry", "9900", "BlackBerry 9900"]
        ],
        [
            ["Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+"],
            ["safari", "blackberry", "null", "blackberry", "os", "BlackBerry OS 10", "Mobile Safari", "10.0.9.2372", "BlackBerry OS 10", "", "BlackBerry OS 10", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; NOKIA; Nokia 920) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0"],
            ["edge", "nokia", "nokia", "win-6", "device", "Nokia Lumia 920", "Edge", "12.0", "Windows", "10 Mobile", "Windows 10 Mobile", "Nokia", "Lumia 920", "Nokia Lumia 920"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) GSA/3.2.1.25875 Mobile/11D167 Safari/8536.25"],
            ["google", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Google Search App", "3.2.1.25875", "iOS", "7.1", "iOS 7.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (MeeGo) AppleWebKit/534.13 (KHTML, like Gecko) Mobile Safari/534.13"],
            ["safari", "meego", "null", "meego", "os", "Meego", "Mobile Safari", "", "Meego", "", "Meego", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13"],
            ["nokia", "nokia", "nokia", "meego", "device", "Nokia N9", "Browser", "8.5.0", "Meego", "", "Meego", "Nokia", "N9", "Nokia N9"]
        ],
        [
            ["Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263"],
            ["edge", "microsoft", "microsoft", "win-6", "device", "Microsoft Lumia 950", "Edge", "14.14263", "Windows", "10 Mobile", "Windows 10 Mobile", "Microsoft", "Lumia 950", "Microsoft Lumia 950"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36"],
            ["chrome", "samsung", "samsung", "android", "device", "Samsung G900P", "Chrome", "48.0.2564.23", "Android", "5.0", "Android 5.0", "Samsung", "G900P", "Samsung G900P"]
        ],
        [
            ["Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN79-3/10.018; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413"],
            ["maemo", "nokia", "nokia", "symbian", "device", "Nokia N79", "", "", "SymbianOS", "9.3", "SymbianOS 9.3", "Nokia", "N79", "Nokia N79"]
        ],
        [
            ["iTunes/10.2.1 (Windows; Microsoft Windows 7 Enterprise Edition Service Pack 1 (Build 7601)) AppleWebKit/533.20.25"],
            ["itunes", "microsoft", "microsoft", "win-2", "device", "Microsoft", "iTunes", "10.2.1", "Windows", "", "Windows", "Microsoft", "", "Microsoft"]
        ],
        [
            ["Microsoft Office PowerPoint 2013 (15.0.4693) Windows NT 6.2"],
            ["office", "microsoft", "microsoft", "win-5", "device", "Microsoft", "Microsoft Office", "", "Windows NT", "6.2", "Windows 8", "Microsoft", "", "Microsoft"]
        ],
        [
            ["Microsoft Office Upload Center 2013 (15.0.4693) Windows NT 6.2"],
            ["office", "microsoft", "microsoft", "win-5", "device", "Microsoft", "Microsoft Office", "", "Windows NT", "6.2", "Windows 8", "Microsoft", "", "Microsoft"]
        ],
        [
            ["Microsoft Office/15.0 (Windows NT 6.2; Microsoft Excel 15.0.4693; Pro)"],
            ["office", "microsoft", "microsoft", "win-5", "device", "Microsoft", "Microsoft Office", "", "Windows NT", "6.2", "Windows 8", "Microsoft", "", "Microsoft"]
        ],
        [
            ["Mozilla/5.0 (Linux; Android 4.1.2; Xperia Miro Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.90 Mobile Safari/537.36"],
            ["miro", "xperia", "xperia", "android", "device", "Sony Xperia Miro", "Miro", "", "Android", "4.1.2", "Android 4.1.2", "Sony", "Xperia Miro", "Sony Xperia Miro"]
        ],
        [
            ["WhatsApp/2.11.102 Android/4.0.4 Device/Motorola-XOOM_2"],
            ["whatsapp", "motorola", "motorola", "android", "device", "Motorola Xoom", "Whatsapp", "2.11.102", "Android", "4.0.4", "Android 4.0.4", "Motorola", "Xoom", "Motorola Xoom"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a Weibo (iPhone3,2__weibo__4.2.5__iphone__os7.0.4)"],
            ["weibo", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Weibo", "", "iOS", "7.0.4", "iOS 7.0.4", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B411 [FBAN/FBIOS;FBAV/26.0.0.11.13;FBBV/7806348;FBDV/iPhone5,2;FBMD/iPhone;FBSN/iPhone OS;FBSV/8.1;FBSS/2; FBCR/3DK;FBID/phone;FBLC/da_DK;FBOP/5]"],
            ["facebook", "iphone", "iphone", "mac-3", "device", "Apple iPhone", "Facebook", "26.0.0.11.13", "iOS", "8.1", "iOS 8.1", "Apple", "iPhone", "Apple iPhone"]
        ],
        [
            ["Mozilla/5.0 (Maemo; Linux; U; Jolla; Sailfish; Mobile; rv:31.0) Gecko/31.0 Firefox/31.0 SailfishBrowser/1.0"],
            ["sailfishbrowser", "jolla", "null", "jolla", "os", "Jolla", "Sailfish Browser", "1.0", "Jolla", "", "Jolla", "", "", ""]
        ],
        [
            ["Mozilla/5.0 (iPad3,1; iPad; U; CPU OS 7_0_4 like Mac OS X; en_GB) com.google.GooglePlus/29676 (KHTML, like Gecko) Mobile/J1AP (gzip)"],
            ["google", "ipad", "ipad", "mac-3", "device", "Apple iPad", "", "", "iOS", "7.0.4", "iOS 7.0.4", "Apple", "iPad", "Apple iPad"]
        ],
        [
            ["com.google.android.youtube/5.3.32(Linux; U; Android 4.0.3; ro_RO; GOCLEVER NETBOOK R103 Build/IML74K) gzip"],
            ["google", "android", "null", "android", "os", "Android 4.0.3", "Youtube", "5.3.32", "Android", "4.0.3", "Android 4.0.3", "", "", ""]
        ],
        [
            ["NS/3.3.1 (Linux; U; Android 5.0.1; en-in; phone/Nexus 5 Build/LRX22C; Density/480; gzip) com.google.android.apps.magazines/2014102707"],
            ["google", "google-nexusone", "google-nexusone", "android", "device", "Google Nexus 5", "", "", "Android", "5.0.1", "Android 5.0.1", "Google", "Nexus 5", "Google Nexus 5"]
        ],
        [
            ["Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/532.4 (KHTML, like Gecko) Google Earth/5.2.1.1329 Safari/532.4"],
            ["google", "win-2", "null", "win-2", "os", "Windows XP", "Google Earth", "5.2.1.1329", "Windows NT", "5.1", "Windows XP", "", "", ""]
        ]
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
