(function(root) {

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
				if (parseInt(ret.version) === 7) {
					ret.image = "wp7";
				}
			}
			ret.full = ret.name + (ret.version === "" ? '' : " " + ret.version);
		} else if (/Windows NT/i.test(ret.ua)) {
			ret.name = "Windows NT";
			rep = ret.ua.match(/Windows NT ([.0-9]+)/i);
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
						//#JSCOVERAGE_IF false
					case "5.01":
						ret.full = "Windows 2000 Service Pack 1";
						ret.image = "win-1";
						break;
						//#JSCOVERAGE_ENDIF
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
		var linuxRegEx = new RegExp([
			"Chakra", "Crunchbang", "Debian", "Gentoo", "Kanotix", "Knoppix",
			"LindowsOS", "Linspire", "Mageia", "Pardus", "Rosa", "Sabayon",
			"Slackware", "Suse", "VectorLinux", "Venenux", "Xandros", "Zenwalk"
		//	"Edubuntu", "KUbuntu", "LUbuntu", "Ubuntu"
		].join("|"), "i");
		var defaultLinuxList = {
			"suse": {
				"title": "openSUSE",
			},
			"lindowsos": {
				"title": "LindowsOS"
			}, 
			"linspire": {
				"image": "lindowsos"
			}
		};

		var res = ret.ua.match(linuxRegEx);

		if (res !== null) {
			var name = res[0].toLowerCase();
			ret.name = name.replace(/(\w)/, function(string) {
				return string.toUpperCase();
			});
			ret.image = name;

			if (typeof defaultLinuxList[name] !== 'undefined') {
				ret.name = defaultLinuxList[name].title || ret.name;
				ret.image = defaultLinuxList[name].image || ret.image;
			} 

		} else if (/[^A-Za-z]Arch/i.test(ret.ua)) {
			ret.name = "Arch Linux";
			ret.image = "archlinux";
		} else if (/CentOS/i.test(ret.ua)) {
			ret.name = "CentOS";

			if (rep = ret.ua.match(/.el([.0-9a-zA-Z]+).centos/i)) {
				ret.version = rep[1];
			}

			ret.image = "centos";

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

		} else if (/Linux\ Mint/i.test(ret.ua)) {
			ret.name = "Linux Mint";

			if (rep = ret.ua.match(/Linux\ Mint\/([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}

			ret.image = "linuxmint";
			//#JSCOVERAGE_IF false

		} else if (/Mandriva/i.test(ret.ua)) {
			ret.name = "Mandriva";
			//#JSCOVERAGE_IF false

			if (rep = ret.ua.match(/mdv([.0-9a-zA-Z]+)/i)) {
				ret.version = rep[1];
			}
			//#JSCOVERAGE_ENDIF

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
			//#JSCOVERAGE_IF false

		} else if (/Oracle/i.test(ret.ua)) {
			ret.name = "Oracle";

			if (rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)) {
				ret.name += " Enterprise Linux";
				ret.version = rep[1].replace(/_/g, ".");
			} else {
				ret.name += " Linux";
			}
			ret.image = "oracle";
			//#JSCOVERAGE_ENDIF

			//#JSCOVERAGE_IF false

		} else if (/PCLinuxOS/i.test(ret.ua)) {
			ret.name = "PCLinuxOS";

			if (rep = ret.ua.match(/PCLinuxOS\/[.\-0-9a-zA-Z]+pclos([.\-0-9a-zA-Z]+)/i)) {
				ret.version = rep[1].replace(/_/g, ".");
			}

			ret.image = "pclinuxos";
			//#JSCOVERAGE_ENDIF

		} else if (/Red\ Hat/i.test(ret.ua) || /RedHat/i.test(ret.ua)) {
			ret.name = "Red Hat";

			if (rep = ret.ua.match(/.el([._0-9a-zA-Z]+)/i)) {
				ret.name += " Enterprise Linux";
				ret.version = rep[1].replace(/_/g, ".");
			}

			ret.image = "red-hat";

		// Pulled out of order to help ensure better detection for above platforms
		} else if (/(L|K|X|Ed)?Ubuntu/i.test(ret.ua)) {

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
			//#JSCOVERAGE_IF false
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

		ret.full = ret.name + (ret.version === "" ? "" : " " + ret.version);

	};



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
		};
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