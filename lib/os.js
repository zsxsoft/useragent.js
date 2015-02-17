(function() {

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
				if (typeof rep[1] !== undefined) {
					ret.x64 = true;
				}
				if (typeof rep[2] !== undefined) {
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
			ret.image = "null";
		}

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
			"x64": false
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
		window.USERAGENT_OS = function() {}
		USERAGENT_OS.prototype.analyze = OS.analyze;
	}

})();