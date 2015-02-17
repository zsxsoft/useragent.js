(function() {

	var OS = {};

	OS.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
		}
		return ret;
	}


/*


class useragent_detect_os {

	public static function analyze($useragent) {

		$result = array();

		// Check if is AMD64
		$x64 = false;
		if (/x86_64|Win64; x64|WOW64/i.test(ret.ua)) {
			$x64 = true;
		}

		// Check Linux
		if (/Windows|Win(NT|32|95|98|16)|ZuneWP7|WPDesktop/i.test(ret.ua)) {
			$result = self::analyzeWindows($useragent);
		} else if (/Linux/i.test(ret.ua) && !preg_match('/Android|ADR/', $useragent)) {
			$result = self::analyzeLinux($useragent);
		} else {
			$result = self::analyzeOther($useragent);
		}
		if ($x64) {
			$result['title'] .= ' x64';
		}

		return $result;
	}

	public static function analyzeWindows($useragent) {
				$title = 'Windows';
		$code = 'win-2';

		if (/Windows Phone|WPDesktop|ZuneWP7|WP7/i.test(ret.ua)) {
						$title .= ' Phone';
			ret.image = "windowsphone";
			if (preg_match('/Windows Phone (OS )?([0-9\.]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[2];
				if ((int) $regmatch[2] == 7) {
					ret.image = "wp7";
				}
			}
		} else if (/Windows NT (6.4|10.0)/i.test(ret.ua)) {
			$title .= " 10";
			ret.image = "win-5";
		} else if (/Windows NT 6.3/i.test(ret.ua)) {
			$title .= " 8.1";
			ret.image = "win-5";
		} else if (/Windows NT 6.2/i.test(ret.ua)) {
			$title .= " 8";
			ret.image = "win-5";
		} else if (/Windows NT 6.1/i.test(ret.ua)) {
			$title .= " 7";
			ret.image = "win-4";
		} else if (/Windows NT 6.0/i.test(ret.ua)) {
			$title .= " Vista";
			ret.image = "win-3";
		} else if (/Windows NT 5.2/i.test(ret.ua)) {
			$title .= " Server 2003";
			ret.image = "win-2";
		} else if (/Windows (NT 5.1|XP)/i.test(ret.ua)) {
			$title .= " XP";
			ret.image = "win-2";
			// @codeCoverageIgnoreStart
		} else if (/Windows NT 5.01/i.test(ret.ua)) {
			$title .= " 2000 Service Pack 1";
			ret.image = "win-1";
			// @codeCoverageIgnoreEnd
		} else if (/Windows (NT 5.0|2000)/i.test(ret.ua)) {
			$title .= " 2000";
			ret.image = "win-1";
		} else if (/Windows NT 4.0/i.test(ret.ua)
			|| /WinNT4.0/i.test(ret.ua)) {
			$title .= " NT 4.0";
			ret.image = "win-1";
		} else if (/Win(dows )?NT ?3.51/i.test(ret.ua)
			|| /WinNT3.51/i.test(ret.ua)) {
			$title .= " NT 3.11";
			ret.image = "win-1";
		} else if (/Win(dows )?3.11|Win16/i.test(ret.ua)) {
			$title .= " 3.11";
			ret.image = "win-1";
		} else if (/Windows 3.1/i.test(ret.ua)) {
			$title .= " 3.1";
			ret.image = "win-1";
		} else if (/Win 9x 4.90|Windows ME/i.test(ret.ua)) {
			$title .= " Me";
			ret.image = "win-1";
		} else if (/Win98/i.test(ret.ua)) {
			$title .= " 98 SE";
			ret.image = "win-1";
		} else if (/Windows (98|4\.10)/i.test(ret.ua)) {
			$title .= " 98";
			ret.image = "win-1";
		} else if (/Windows 95/i.test(ret.ua)
			|| /Win95/i.test(ret.ua)) {
			$title .= " 95";
			ret.image = "win-1";
		} else if (/Windows CE|Windows .+Mobile/i.test(ret.ua)) {
			$title .= " CE";
			ret.image = "win-2";
			// @codeCoverageIgnoreStart
		} else if (/WM5/i.test(ret.ua)) {
			$title .= " Mobile 5";
			ret.image = "win-phone";
		} else if (/WindowsMobile/i.test(ret.ua)) {
			$title .= " Mobile";
			ret.image = "win-phone";
		}
		// @codeCoverageIgnoreEnd

		return array(
			'link' => $link,
			'title' => $title,
			'code' => $code,
			'dir' => 'os',
		);
	}

	public static function analyzeLinux($useragent) {
				$title = '';
		$code = '';
		$version = '';

		if (/[^A-Za-z]Arch/i.test(ret.ua)) {
						$title = "Arch Linux";
			ret.image = "archlinux";
		} else if (/CentOS/i.test(ret.ua)) {
						$title = "CentOS";

			if (preg_match('/.el([.0-9a-zA-Z]+).centos/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "centos";
// @codeCoverageIgnoreStart
		} else if (/Chakra/i.test(ret.ua)) {
						$title = "Chakra Linux";
			ret.image = "chakra";
// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Crunchbang/i.test(ret.ua)) {
						$title = "Crunchbang";
			ret.image = "crunchbang";
// @codeCoverageIgnoreEnd
		} else if (/Debian/i.test(ret.ua)) {
						$title = "Debian GNU/Linux";
			ret.image = "debian";
// @codeCoverageIgnoreStart
		} else if (/Edubuntu/i.test(ret.ua)) {
						$title = "Edubuntu";

			if (preg_match('/Edubuntu[\/|\ ]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];
			}

			if ($regmatch[1] < 10) {
				ret.image = "edubuntu-1";
			} else {
				ret.image = "edubuntu-2";
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}
// @codeCoverageIgnoreEnd
		} else if (/Fedora/i.test(ret.ua)) {
						$title = "Fedora";

			if (preg_match('/.fc([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "fedora";
		} else if (/Foresight\ Linux/i.test(ret.ua)) {
						$title = "Foresight Linux";

			if (preg_match('/Foresight\ Linux\/([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "foresight";
		} else if (/Gentoo/i.test(ret.ua)) {
						$title = "Gentoo";
			ret.image = "gentoo";

		} else if (/Kanotix/i.test(ret.ua)) {
						$title = "Kanotix";
			ret.image = "kanotix";
// @codeCoverageIgnoreStart
		} else if (/Knoppix/i.test(ret.ua)) {
						$title = "Knoppix";
			ret.image = "knoppix";
// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Kubuntu/i.test(ret.ua)) {
						$title = "Kubuntu";

			if (preg_match('/Kubuntu[\/|\ ]([.0-9]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];

				if ($regmatch[1] < 10) {
					ret.image = "kubuntu-1";
				} else {
					ret.image = "kubuntu-2";
				}
			} else {
				ret.image = "kubuntu-2";
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}
// @codeCoverageIgnoreEnd
		} else if (/LindowsOS/i.test(ret.ua)) {
						$title = "LindowsOS";
			ret.image = "lindowsos";

		} else if (/Linspire/i.test(ret.ua)) {
						$title = "Linspire";
			ret.image = "lindowsos";

		} else if (/Linux\ Mint/i.test(ret.ua)) {
						$title = "Linux Mint";

			if (preg_match('/Linux\ Mint\/([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "linuxmint";
// @codeCoverageIgnoreStart

		} else if (/Lubuntu/i.test(ret.ua)) {
						$title = "Lubuntu";

			if (preg_match('/Lubuntu[\/|\ ]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];
			}

			if ($regmatch[1] < 10) {
				ret.image = "lubuntu-1";
			} else {
				ret.image = "lubuntu-2";
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}
// @codeCoverageIgnoreEnd

// @codeCoverageIgnoreStart

		} else if (/Mageia/i.test(ret.ua)) {
						$title = "Mageia";
			ret.image = "mageia";
// @codeCoverageIgnoreEnd
		} else if (/Mandriva/i.test(ret.ua)) {
						$title = "Mandriva";
// @codeCoverageIgnoreStart

			if (preg_match('/mdv([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
// @codeCoverageIgnoreEnd

			ret.image = "mandriva";

		} else if (/moonOS/i.test(ret.ua)) {
						$title = "moonOS";

			if (preg_match('/moonOS\/([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "moonos";
		} else if (/Nova/i.test(ret.ua)) {
						$title = "Nova";

			if (preg_match('/Nova[\/|\ ]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}

			ret.image = "nova";
// @codeCoverageIgnoreStart

		} else if (/Oracle/i.test(ret.ua)) {
						$title = "Oracle";

			if (preg_match('/.el([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " Enterprise Linux " . str_replace("_", ".", $regmatch[1]);
			} else {
				$title .= " Linux";
			}
			ret.image = "oracle";
// @codeCoverageIgnoreEnd

		} else if (/Pardus/i.test(ret.ua)) {
						$title = "Pardus";
			ret.image = "pardus";
// @codeCoverageIgnoreStart

		} else if (/PCLinuxOS/i.test(ret.ua)) {
						$title = "PCLinuxOS";

			if (preg_match('/PCLinuxOS\/[.\-0-9a-zA-Z]+pclos([.\-0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . str_replace("_", ".", $regmatch[1]);
			}

			ret.image = "pclinuxos";
// @codeCoverageIgnoreEnd

		} else if (/Red\ Hat/i.test(ret.ua)
			|| /RedHat/i.test(ret.ua)) {
						$title = "Red Hat";

			if (preg_match('/.el([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " Enterprise Linux " . str_replace("_", ".", $regmatch[1]);
			}

			ret.image = "red-hat";
// @codeCoverageIgnoreStart

		} else if (/Rosa/i.test(ret.ua)) {
						$title = "Rosa Linux";
			ret.image = "rosa";
// @codeCoverageIgnoreEnd

// @codeCoverageIgnoreStart

		} else if (/Sabayon/i.test(ret.ua)) {
						$title = "Sabayon Linux";
			ret.image = "sabayon";
// @codeCoverageIgnoreEnd

		} else if (/Slackware/i.test(ret.ua)) {
						$title = "Slackware";
			ret.image = "slackware";
		} else if (/Suse/i.test(ret.ua)) {
						$title = "openSUSE";
			ret.image = "suse";
// @codeCoverageIgnoreStart
		} else if (/VectorLinux/i.test(ret.ua)) {
						$title = "VectorLinux";
			ret.image = "vectorlinux";
// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Venenux/i.test(ret.ua)) {
						$title = "Venenux GNU Linux";
			ret.image = "venenux";
// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Xandros/i.test(ret.ua)) {
						$title = "Xandros";
			ret.image = "xandros";
// @codeCoverageIgnoreEnd
			// @codeCoverageIgnoreStart
		} else if (/Xubuntu/i.test(ret.ua)) {
						$title = "Xubuntu";

			if (preg_match('/Xubuntu[\/|\ ]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];
			}

			if ($regmatch[1] < 10) {
				ret.image = "xubuntu-1";
			} else {
				ret.image = "xubuntu-2";
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}
// @codeCoverageIgnoreEnd
		} else if (/Zenwalk/i.test(ret.ua)) {
						$title = "Zenwalk GNU Linux";
			ret.image = "zenwalk";
		}

		// Pulled out of order to help ensure better detection for above platforms
		else if (/Ubuntu/i.test(ret.ua)) {
						$title = "Ubuntu";

			if (preg_match('/Ubuntu[\/|\ ]([.0-9]+[.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version .= " " . $regmatch[1];
				if ($regmatch[1] < 10) {
					ret.image = "ubuntu-1";
				}
			}

			if ($code == '') {
				ret.image = "ubuntu-2";
			}

			if (strlen($version) > 1) {
				$title .= $version;
			}

		} else {
						$title = "GNU/Linux";
			ret.image = "linux";
		}

		return array(
			'link' => $link,
			'title' => $title,
			'code' => $code,
			'dir' => 'os',
		);
	}

	public static function analyzeOther($useragent) {
				$title = '';
		$code = '';
		$version = '';

		// Opera's Useragent does not contains 'Linux'
		if (/Android|ADR /i.test(ret.ua)) {
						$title = "Android";
			ret.image = "android";

			if (preg_match('/(Android|Adr)[\ |\/]?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$version = $regmatch[2];
				$title .= " " . $version;
			}
		} else if (/AmigaOS/i.test(ret.ua)) {
						$title = "AmigaOS";

			if (preg_match('/AmigaOS\ ([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "amigaos";

		} else if (/BeOS/i.test(ret.ua)) {
						$title = "BeOS";
			ret.image = "beos";

		} else if (/\b(?!Mi)CrOS(?!oft)/i.test(ret.ua)) {
						$title = "Google Chrome OS";
			ret.image = "chromeos";
		} else if (/DragonFly/i.test(ret.ua)) {
						$title = "DragonFly BSD";
			ret.image = "dragonflybsd";

		} else if (/FreeBSD/i.test(ret.ua)) {
						$title = "FreeBSD";
			ret.image = "freebsd";

		} else if (/Inferno/i.test(ret.ua)) {
						$title = "Inferno";
			ret.image = "inferno";

		} else if (/IRIX/i.test(ret.ua)) {
						$title = "IRIX";

			if (preg_match('/IRIX(64)?\ ([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				if ($regmatch[1]) {
					$title .= " x" . $regmatch[1];
				}
				if ($regmatch[2]) {
					$title .= " " . $regmatch[2];
				}
			}

			ret.image = "irix";

		} else if (/Mac/i.test(ret.ua)
			|| /Darwin/i.test(ret.ua)) {
			
			if (preg_match('/(Mac OS ?X)/i', $useragent, $regmatch)) {
				$title = substr($useragent, strpos(strtolower($useragent), strtolower($regmatch[1])));
				$title = substr($title, 0, strpos($title, ")"));

				if (strpos($title, ";")) {
					$title = substr($title, 0, strpos($title, ";"));
				}

				$title = str_replace("_", ".", $title);

				$code = $regmatch[1] == "Mac OSX" ? "mac-2" : "mac-3";
			} else if (/Darwin/i.test(ret.ua)) {
				$title = "Mac OS Darwin";
				ret.image = "mac-1";
			} else {
				$title = "Macintosh";
				ret.image = "mac-1";
			}
		} else if (/MorphOS/i.test(ret.ua)) {
						$title = "MorphOS";
			ret.image = "morphos";

		} else if (/NetBSD/i.test(ret.ua)) {
						$title = "NetBSD";
			ret.image = "netbsd";

		} else if (/OpenBSD/i.test(ret.ua)) {
						$title = "OpenBSD";
			ret.image = "openbsd";
		} else if (/RISC OS/i.test(ret.ua)) {
						$title = "RISC OS";
			ret.image = "risc";

			if (preg_match('/RISC OS ([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

		} else if (/Solaris|SunOS/i.test(ret.ua)) {
						$title = "Solaris";
			ret.image = "solaris";

		} else if (/Symb(ian)?(OS)?/i.test(ret.ua)) {
						$title = "SymbianOS";

			if (preg_match('/Symb(ian)?(OS)?\/([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[3];
			}

			ret.image = "symbian";

		} else if (/Unix/i.test(ret.ua)) {
						$title = "Unix";
			ret.image = "unix";
// @codeCoverageIgnoreStart

		} else if (/webOS/i.test(ret.ua)) {
						$title = "Palm webOS";
			ret.image = "palm";
		} else if (/J2ME\/MIDP/i.test(ret.ua)) {
						$title = "J2ME/MIDP Device";
			ret.image = "java";
		} else {
			ret.image = "null";
		}

		return array(
			'link' => $link,
			'title' => $title,
			'code' => $code,
			'dir' => 'os',
		);
	}
}
?>
 */

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