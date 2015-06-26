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
			start: "blackberry ?"
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
	}, {
		regEx: / Droid|XT720|MOT-|MIB|XOOM/i, 
		name: "Motorola",
		image: "motorola",
		childItem: [{
			regEx: / Droid/i,
			name: "Droid"
		}, {
			regEx: /MOT\-|MIB/i,
			version: {
				start: "MOT(O|-)",
				item: 2
			}
		}, {
			regEx: /XOOM/i,
			name: "Xoom"
		}, {
			regEx: /XT720/i,
			name: "XT720"
		}]
	}, {
		regEx: /Nintendo/i,
		name: "Nintendo",
		image: "nintendo",
		childItem: [{
			regEx: /DSi/,
			name: "DSi",
			image: "nintendodsi"
		}, {
			regEx: /DS/,
			name: "DS",
			image: "nintendods"
		}, {
			regEx: /WiiU/,
			name: "Wii U",
			image: "nintendowiiu"
		}, {
			regEx: /Wii/,
			name: "Wii",
			image: "nintendowii"
		}]
	}, {
		regEx: /Nokia/i,
		name: "Nokia",
		image: "nokia",
		childItem: [{
			regEx: /Nokia 909/i,
			name: "Lumia 1020"
		}, {
			regEx: /IEMobile|WPDesktop|Edge/i,
			name: "Lumia",
			version: {
				start: "(Nokia |Lumia |Nokia;)",
				item: 2
			}	
		}],
		version: {
			start: "Nokia",
			item: 1
		}
	}, {
		regEx: /Onda/i,
		name: "Onda",
		image: "onda"
	}, {
		regEx: /oppo/i,
		name: "OPPO",
		image: "oppo"
	}, {
		regEx: / Pixi\/| Pre\/|Palm|webos/i, 
		name: "Palm",
		image: "palm",
		childItem: [{
			regEx: /Pixi/i,
			name: "Pixi"
		}, {
			regEx: /Pre/i,
			name: "Pre"
		}]
	}, {
		regEx: /Galaxy Nexus|Smart-?TV|GT-|Samsung/i,
		name: "Samsung",
		image: "samsung",
		childItem: [{
			regEx: /Smart-?TV/i,
			name: "Smart TV"
		}, {
			regEx: /Galaxy Nexus/i,
			name: "Galaxy Nexus"	
		}, {
			regEx: /GT-/i,
			version: {
				start: "GT-"
			}
		}], 
		version: {
			start: "Samsung-(SCH-)?",
			item: 2
		}
	}, {
		regEx: /PlayStation/i,
		name: "PlayStation",
		image: "playstation",
		version: {
			start: "PlayStation "
		}
	}, {
		regEx: /SonyEricsson/i,
		name: "SonyEricsson",
		image: "sonyericsson",
		version: {
			start: "SonyEricsson"
		}
	}, {
		regEx: /vivo/i,
		name: "vivo",
		image: "vivo",
		version: {
			start: "VIVO "
		}
	}, {
		regEx: /Xperia/i,
		name: "Xperia",
		image: "xperia",
		version: {
			start: "Xperia(-T)?( |\_|\-)?",
			item: 3
		}
	}, {
		regEx: /zte/i,
		name: "ZTE",
		image: "zte",
		version: {
			start: "ZTE "
		}
	}, {
		regEx: /Ubuntu; (Mobile|Tablet)/i,
		name: "Ubuntu",
		image: "ubuntutouch",
		childItem: [{
			regEx: /Mobile/i,
			name: "Phone"
		}, {
			regEx: /Tablet/i,
			name: "Tablet"
		}]
	}, {
		regEx: /Nexus/i,
		name: "Nexus",
		image: "google-nexusone",
		version: {
			start: "Nexus "
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
					case "regEx":
						// Do nothing..
						break;
					case "name":
						if (rep.length === 0) continue; // Didn't match

						if (ret[singleName] !== "") {
							ret[singleName] += " ";
						}
						fixedName = singleItem;
						for (i = 1; i < rep.length; i++) { // rep[0] is useless
							fixedName = fixedName.replace(new RegExp("\\$" + i, "g"), rep[i]);
						}
						ret[singleName] += fixedName;
						
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
	};

	var analyze = function(ret) {
		var deviceItem = null;
		var singleName = null;
		var singleItem = null;

		if (analyzeItem(ret, deviceList)) {
			return;
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