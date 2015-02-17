(function() {

	var DEVICE = {};

	DEVICE.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
		}
		return ret;
	}


/*ent_Detect_Device {
	public static function analyze($useragent) {
				$title = '';
		$code = '';

		// meizu
		if (/(MEIZU (MX|M9)|M030)|MX-3/i.test(ret.ua)) {
						$title = "Meizu";
			ret.image = "meizu";
		}

		// xiaomi
		else if (/MI-ONE|MI \d|HM NOTE/i.test(ret.ua)) {
						$title = "Xiaomi";

			if (preg_match('/HM NOTE ([A-Z0-9]+)/i', $useragent, $regmatch)) {
				$title .= " HM-NOTE " . $regmatch[1];
			} else if (preg_match('/MI ([A-Z0-9]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			} else if (preg_match('/MI-ONE/i', $useragent, $regmatch)) {
				$title .= " 1";
			}

			ret.image = "xiaomi";
		}

		// BlackBerry
		else if (/BlackBerry/i.test(ret.ua)) {
						$title = "BlackBerry";

			if (preg_match('/blackberry([.0-9a-zA-Z]+)\//i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "blackberry";
		}
		// Coolpad
		else if (/Coolpad/i.test(ret.ua)) {
						$title = "CoolPad";

			if (preg_match('/CoolPad( |\_)?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[2];
			}

			ret.image = "coolpad";
		}

		// Dell
		else if (/Dell Streak/i.test(ret.ua)) {
						$title = "Dell Streak";
			ret.image = "dell";
		} else if (/Dell/i.test(ret.ua)) {
						$title = "Dell";
			ret.image = "dell";
		}

		// HTC
		else if (/Desire/i.test(ret.ua)) {
						$title = "HTC Desire";
			ret.image = "htc";
		} else if (/Rhodium/i.test(ret.ua)
			|| /HTC[_|\ ]Touch[_|\ ]Pro2/i.test(ret.ua)
			|| /WMD-50433/i.test(ret.ua)) {
						$title = "HTC Touch Pro2";
			ret.image = "htc";
		} else if (/HTC[_|\ ]Touch[_|\ ]Pro/i.test(ret.ua)) {
						$title = "HTC Touch Pro";
			ret.image = "htc";
		} else if (/Windows Phone .+ by HTC/i.test(ret.ua)) {
						$title = "HTC";
			if (preg_match('/Windows Phone ([0-9A-Za-z]+) by HTC/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
			ret.image = "htc";
		} else if (/HTC/i.test(ret.ua)) {
						$title = "HTC";

			if (preg_match('/HTC[\ |_|-]?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			} else if (preg_match('/HTC([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= str_replace("_", " ", $regmatch[1]);
			}

			ret.image = "htc";
		}
		// huawei
		else if (/Huawei/i.test(ret.ua)) {
						$title = "Huawei";
			ret.image = "huawei";
			if (preg_match('/HUAWEI( |\_)?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[2];
			}
		}
		// Kindle
		else if (/Kindle/i.test(ret.ua)) {
						$title = "Kindle";

			if (preg_match('/Kindle\/([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "kindle";
		}
		// K-Touch
		else if (/k-touch/i.test(ret.ua)) {
						$title = "K-Touch";
			ret.image = "k-touch";
			if (preg_match('/k-touch[ _]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
		}
		// Lenovo
		else if (/Lenovo|lepad/i.test(ret.ua)) {
						$title = "Lenovo";

			if (preg_match('/Lenovo[\ |\-|\/|\_]([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			} else if (/lepad/i.test(ret.ua)) {
				$title .= ' LePad';
			}

			ret.image = "lenovo";

		}
		// LG
		else if (/LG/i.test(ret.ua)) {
						$title = "LG";

			if (preg_match('/LGE?([- \/])([0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[2];
			}

			ret.image = "lg";
		}

		// Motorola
		else if (/\ Droid/i.test(ret.ua)) {
						$title .= "Motorola Droid";
			ret.image = "motorola";
		} else if (/XT720/i.test(ret.ua)) {
						$title .= "Motorola XT720";
			ret.image = "motorola";
		} else if (/MOT-/i.test(ret.ua)
			|| /MIB/i.test(ret.ua)) {
						$title = "Motorola";

			if (preg_match('/MOTO([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
			if (preg_match('/MOT-([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "motorola";
		} else if (/XOOM/i.test(ret.ua)) {
						$title .= "Motorola Xoom";
			ret.image = "motorola";
		}

		// Nintendo
		else if (/Nintendo/i.test(ret.ua)) {
			$title = "Nintendo";
						ret.image = "nintendo";

			if (/Nintendo DSi/i.test(ret.ua)) {
								$title .= " DSi";
				ret.image = "nintendodsi";
			} else if (/Nintendo DS/i.test(ret.ua)) {
								$title .= " DS";
				ret.image = "nintendods";
			} else if (/Nintendo WiiU/i.test(ret.ua)) {
								$title .= " Wii U";
				ret.image = "nintendowiiu";
			} else if (/Nintendo Wii/i.test(ret.ua)) {
								$title .= " Wii";
				ret.image = "nintendowii";
			}
		}

		// Nokia
		else if (/Nokia/i.test(ret.ua)) {
						$title = "Nokia";
			ret.image = "nokia";
			if (preg_match('/Nokia(E|N| )?([0-9]+)/i', $useragent, $regmatch)) {
				if (/IEMobile|WPDesktop/i.test(ret.ua)) {
					// Nokia Windows Phone
					if ($regmatch[2] == '909') {
						$regmatch[2] = '1020';
					}
					// Lumia 1020
					$title .= " Lumia " . $regmatch[2];
				} else {
					$title .= " " . $regmatch[1] . $regmatch[2];
				}
			} else if (preg_match('/Lumia ([0-9]+)/i', $useragent, $regmatch)) {
				$title .= " Lumia " . $regmatch[1];
			}

			//}
		}

		// Onda
		else if (/onda/i.test(ret.ua)) {
						$title = "Onda";
			ret.image = "onda";
		}
		// Onda
		else if (/oppo/i.test(ret.ua)) {
						$title = "OPPO";
			ret.image = "oppo";
		}

		// Palm
		else if (/\ Pixi\//i.test(ret.ua)) {
						$title = "Palm Pixi";
			ret.image = "palm";
		} else if (/\ Pre\//i.test(ret.ua)) {
						$title = "Palm Pre";
			ret.image = "palm";
		} else if (/Palm/i.test(ret.ua)) {
						$title = "Palm";
			ret.image = "palm";
		} else if (/webos/i.test(ret.ua)) {
						$title = "Palm";
			ret.image = "palm";
		}

		// Playstation
		else if (/PlayStation/i.test(ret.ua)) {
			$title = "PlayStation";

			if (/[PS|PlayStation\ ]3/i.test(ret.ua)) {
								$title .= " 3";
			} else if (/[PS|PlayStation\ ]4/i.test(ret.ua)) {
								$title .= " 4";
			} else if (/PlayStation Portable|PSP/i.test(ret.ua)) {
								$title .= " Portable";
			} else if (/PlayStation Vita|PSVita/i.test(ret.ua)) {
								$title .= " Vita";
			} else {
							}

			ret.image = "playstation";
		}

		// Samsung
		else if (/Galaxy Nexus/i.test(ret.ua)) {
						$title = "Galaxy Nexus";
			ret.image = "samsung";
		} else if (/Smart-?TV/i.test(ret.ua)) {
						$title = "Samsung Smart TV";
			ret.image = "samsung";
		} else if (/GT-/i.test(ret.ua)) {
						$title = "Samsung";

			if (preg_match('/GT-([.\-0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "samsung";
		} else if (/Samsung/i.test(ret.ua)) {
						$title = "Samsung";

			if (preg_match('/Samsung-([.\-0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "samsung";
		}

		// Sony Ericsson
		else if (/SonyEricsson/i.test(ret.ua)) {
						$title = "SonyEricsson";

			if (preg_match('/SonyEricsson([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}

			ret.image = "sonyericsson";
		}

		// vivo
		else if (/vivo/i.test(ret.ua)) {
						$title = "vivo";
			ret.image = "vivo";
			if (preg_match('/VIVO ([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
		}

		// Xperia
		else if (/Xperia/i.test(ret.ua)) {
						$title = "Xperia";
			ret.image = "xperia";
			if (preg_match('/Xperia(-T)?( |\_|\-)?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[3];
			}
		}
		// ZTE
		else if (/zte/i.test(ret.ua)) {
						$title = "ZTE";
			ret.image = "zte";
			if (preg_match('/ZTE(-T)?( |\_|\-)?([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[3];
			}
		}

		// Ubuntu Phone/Tablet
		else if (/Ubuntu\;\ Mobile/i.test(ret.ua)) {
						$title = "Ubuntu Phone";
			ret.image = "ubuntutouch";
		} else if (/Ubuntu\;\ Tablet/i.test(ret.ua)) {
						$title = "Ubuntu Tablet";
			ret.image = "ubuntutouch";
		}

		// Google
		else if (/Nexus/i.test(ret.ua)) {
						$title = "Nexus";
			ret.image = "google-nexusone";
			if (preg_match('/Nexus ([.0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " " . $regmatch[1];
			}
		}

		// Apple
		else if (/iPad/i.test(ret.ua)) {
						$title = "iPad";

			if (preg_match('/CPU\ OS\ ([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " iOS " . str_replace("_", ".", $regmatch[1]);
			}

			ret.image = "ipad";
		} else if (/iPod/i.test(ret.ua)) {
						$title = "iPod";

			if (preg_match('/iPhone\ OS\ ([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " iOS " . str_replace("_", ".", $regmatch[1]);
			}

			ret.image = "iphone";
		} else if (/iPhone/i.test(ret.ua)) {
						$title = "iPhone";

			if (preg_match('/iPhone\ OS\ ([._0-9a-zA-Z]+)/i', $useragent, $regmatch)) {
				$title .= " iOS " . str_replace("_", ".", $regmatch[1]);
			}

			ret.image = "iphone";
		}

		//Some special UA..
		//is MSIE
		else if (/MSIE.+?Windows.+?Trident/i.test(ret.ua) && !/Windows ?Phone/i.test(ret.ua)) {
						$title = "";
			ret.image = "null";
		}
		// No Device match
		else {
			ret.image = "null";
		}

		return array(
			'link' => $link,
			'title' => $title,
			'code' => $code,
			'dir' => 'device',
		);

	}
}
?>

 */

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
		window.USERAGENT_DEVICE = function() {}
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}

})();