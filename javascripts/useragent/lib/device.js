(function(root) {

	var analyze = function(ret) {
		var rep = null;

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
	};



	var DEVICE = {};

	DEVICE.analyze = function(uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"image": "",
			"dir": "device"
		};
		analyze(ret);
		ret.full = ret.name;
		return ret;
	};


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
		root.USERAGENT_DEVICE = function() {};
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}

})(this);