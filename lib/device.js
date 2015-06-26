(function(root) {
	var deviceList = [{
		regEx: /(MEIZU (MX|M9)|M030)|MX-3/i,
		name: "Meizu",
		image: "meizu"
	}, {
		regEx: /MI-ONE|MI \d|HM NOTE/i,
		name: "Xiaomi",
		image: "xiaomi",
		childItem: [{
			regEx: /HM NOTE ([A-Z0-9]+)/i,
			name: "HM-NOTE $1"
		}, {
			regEx: /MI ([A-Z0-9]+)/i,
			name: "$1"
		}, {
			regEx: /MI-ONE/i,
			name: "1"
		}]
	}, {
		regEx: /BlackBerry/i,
		name: "BlackBerry",
		image: "blackberry",
		version: {
			start: "blackberry ?",
		}
	}, {
		regEx: /Coolpad/i,
		name: "CoolPad",
		image: "coolpad",
		version: {
			start: "CoolPad( |\_)?",
			item: 2
		}
	}, {
		regEx: /Dell/i,
		name: "Dell",
		image: "dell",
		childItem: [{
			regEx: /Dell Streak/i,
			name: "Streak"
		}]
	}, {
		regEx: /HTC|Desire|Rhodium|WMD\-50433/i,
		name: "HTC",
		image: "htc",
		childItem: [{
			regEx: /Desire/i,
			name: "Desire"
		}, {
			regEx: /Rhodium|WMD\-50433|HTC[_|\ ]Touch[_|\ ]Pro2/i,
			name: "Touch Pro2"
		}, {
			regEx: /HTC[_|\ ]Touch[_|\ ]Pro/i,
			name: "Touch Pro"
		}, {
			regEx: /Windows Phone .+ by HTC/i,
			version: {
				start: "Windows Phone ",
				end: " by HTC"
			}
		}],
		version: {
			start: "HTC[ |_|-]?"
		}
	}, {
		regEx: /huawei/i,
		name: "Huawei",
		image: "huawei",
		version: {
			start: "HUAWEI( |\_)?",
			item: 2
		}
	}, {
		regEx: /Kindle/i,
		name: "Kindle",
		image: "kindle",
		version: {
			start: "Kindle\/"
		}
	}, {
		regEx: /K-Touch/i,
		name: "K-Touch",
		image: "k-touch",
		version: {
			start: "k-touch[ _]"
		}
	}, {
		regEx: /Lenovo|lepad/i,
		name: "Lenovo",
		image: "lenovo",
		childItem: [{
			regEx: "lepad",
			name: "LePad"
		}],
		version: {
			start: "Lenovo[\ |\-|\/|\_]"
		}
	}, {
		regEx: /LG/i,
		name: "LG",
		image: "lg",
		version: {
			start: "LGE?([- \/])",
			item: 2
		}
	}];

	var analyzeVersion = function(ret, deviceItem) {
		var rep;

		if (!('end' in deviceItem.version)) deviceItem.version.end = "";
		if (!('item' in deviceItem.version)) deviceItem.version.item = 1;

		var versionRegEx = new RegExp(deviceItem.version.start + "([.0-9a-zA-Z]+)" + deviceItem.version.end, "i");

		if (rep = ret.ua.match(versionRegEx)) {
			ret.name += " " + rep[deviceItem.version.item].replace(/_/g, "");
			//ret.addChild = false; // If it has some supplementary name then do not check child.
		}

	};

	var analyzeItem = function(ret, deviceList) {
		var rep = null;
		var fixedName = "";
		var i = 0;
		var deviceItem = null;
		for (var device in deviceList) { // We can use forEach instead on IE9+.
			deviceItem = deviceList[device];
			if (!(rep = ret.ua.match(deviceItem.regEx))) continue;

			for (var singleName in deviceItem) {
				var singleItem = deviceItem[singleName];
				switch (singleName) {
					case "childItem":
					case "version":
						// Do nothing..
						break;
					case "regEx":
						continue;
						break;
					case "name":
						if (rep.length === 0) continue; // Didn't match

						if (ret[singleName] != "") {
							ret[singleName] += " ";
						}
						fixedName = singleItem;
						for (var i = 1; i < rep.length; i++) { // rep[0] is useless
							fixedName = fixedName.replace(new RegExp("\\$" + i, "g"), rep[i]);
						}
						ret[singleName] += fixedName;
						
						break;
					case "version":
						// Do nothing
						break;
					default:
						ret[singleName] = singleItem;
						break;
				}
			}
			
			var checkVersionSwitch = ('version' in deviceItem);
			if ('childItem' in deviceItem) {
				if (analyzeItem(ret, deviceItem.childItem)) {
					checkVersionSwitch = false;
				}
			}


			if (checkVersionSwitch) {
				analyzeVersion(ret, deviceItem);
			}

			delete ret.addVersion;
			return true;
		}
		return false;
	}

	var analyze = function(ret) {
		var deviceItem = null;
		var singleName = null;
		var singleItem = null;

		if (analyzeItem(ret, deviceList)) {
			return;
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
				if (/IEMobile|WPDesktop|Edge/i.test(ret.ua)) {
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
	//#JSCOVERAGE_IF typeof module !== 'undefined' && module.exports
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = DEVICE;
	}
	//#JSCOVERAGE_ENDIF
	//#JSCOVERAGE_IF typeof define !== 'undefined' && define.amd
	// AMD
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function() {
			return DEVICE;
		});
	}
	//#JSCOVERAGE_ENDIF
	//#JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function(require, exports, module) {
			module.exports = DEVICE;
		});
		//#JSCOVERAGE_ENDIF
		//#JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
	} else {
		root.USERAGENT_DEVICE = function() {};
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}
	//#JSCOVERAGE_ENDIF

})(this);