'use strict';
(function (root) {
	var deviceList = [
		{
			regEx: /(MEIZU (MX|M9)|M030)|MX-3/i,
			brand: "Meizu",
			image: "meizu"
		}, {
			regEx: /MI-ONE|MI \d|HM NOTE/i,
			brand: "Xiaomi",
			image: "xiaomi",
			childItem: [
				{
					regEx: /HM NOTE ([A-Z0-9]+)/i,
					model: "HM-NOTE $1"
				}, {
					regEx: /MI ([A-Z0-9]+)/i,
					model: "$1"
				}, {
					regEx: /MI-ONE/i,
					model: "1"
				}
			]
		}, {
			regEx: /BlackBerry/i,
			brand: "BlackBerry",
			image: "blackberry",
			version: {
				start: "blackberry ?"
			}
		}, {
			regEx: /Coolpad/i,
			brand: "CoolPad",
			image: "coolpad",
			version: {
				start: "CoolPad( |\_)?",
				item: 2
			}
		}, {
			regEx: /Dell/i,
			brand: "Dell",
			image: "dell",
			childItem: [{
				regEx: /Dell Streak/i,
				model: "Streak"
			}]
		}, {
			regEx: /HTC|Desire|Rhodium|WMD\-50433/i,
			brand: "HTC",
			image: "htc",
			childItem: [
				{
					regEx: /Desire/i,
					model: "Desire"
				}, {
					regEx: /Rhodium|WMD\-50433|HTC[_|\ ]Touch[_|\ ]Pro2/i,
					model: "Touch Pro2"
				}, {
					regEx: /HTC[_|\ ]Touch[_|\ ]Pro/i,
					model: "Touch Pro"
				}, {
					regEx: /Windows Phone .+ by HTC/i,
					version: {
						start: "Windows Phone ",
						end: " by HTC"
					}
				}
			],
			version: {
				start: "HTC[ |_|-]?"
			}
		}, {
			regEx: /huawei/i,
			brand: "Huawei",
			image: "huawei",
			version: {
				start: "HUAWEI( |\_)?",
				item: 2
			}
		}, {
			regEx: /Kindle/i,
			brand: "Amazon",
			model: "Kindle",
			image: "kindle",
			version: {
				start: "Kindle\/"
			}
		}, {
			regEx: /K-Touch/i,
			brand: "K-Touch",
			image: "k-touch",
			version: {
				start: "k-touch[ _]"
			}
		}, {
			regEx: /Lenovo|lepad/i,
			brand: "Lenovo",
			image: "lenovo",
			childItem: [
				{
					regEx: "lepad",
					model: "LePad"
				}
			],
			version: {
				start: "Lenovo[\ |\-|\/|\_]"
			}
		}, {
			regEx: /LG/i,
			brand: "LG",
			image: "lg",
			version: {
				start: "LGE?([- \/])",
				item: 2
			}
		}, {
			regEx: / Droid|XT720|MOT-|MIB|XOOM/i,
			brand: "Motorola",
			image: "motorola",
			childItem: [
				{
					regEx: / Droid/i,
					model: "Droid"
				}, {
					regEx: /MOT\-|MIB/i,
					version: {
						start: "MOT(O|-)",
						item: 2
					}
				}, {
					regEx: /XOOM/i,
					model: "Xoom"
				}, {
					regEx: /XT720/i,
					model: "XT720"
				}
			]
		}, {
			regEx: /Nintendo/i,
			brand: "Nintendo",
			image: "nintendo",
			childItem: [
				{
					regEx: /DSi/,
					model: "DSi",
					image: "nintendodsi"
				}, {
					regEx: /DS/,
					model: "DS",
					image: "nintendods"
				}, {
					regEx: /WiiU/,
					model: "Wii U",
					image: "nintendowiiu"
				}, {
					regEx: /Wii/,
					model: "Wii",
					image: "nintendowii"
				}
			]
		}, {
			regEx: /Nokia/i,
			brand: "Nokia",
			image: "nokia",
			childItem: [
				{
					regEx: /Nokia 909/i,
					model: "Lumia 1020"
				}, {
					regEx: /IEMobile|WPDesktop|Edge/i,
					model: "Lumia",
					version: {
						start: "(Nokia |Lumia |Nokia;)",
						item: 2
					}
				}
			],
			version: {
				start: "Nokia",
				item: 1
			}
		}, {
			regEx: /Onda/i,
			brand: "Onda",
			image: "onda"
		}, {
			regEx: /oppo/i,
			brand: "OPPO",
			image: "oppo"
		}, {
			regEx: / Pixi\/| Pre\/|Palm|webos/i,
			brand: "Palm",
			image: "palm",
			childItem: [
				{
					regEx: /Pixi/i,
					model: "Pixi"
				}, {
					regEx: /Pre/i,
					model: "Pre"
				}
			]
		}, {
			regEx: /Galaxy Nexus|Smart-?TV|GT-|Samsung/i,
			brand: "Samsung",
			image: "samsung",
			childItem: [
				{
					regEx: /Smart-?TV/i,
					model: "Smart TV"
				}, {
					regEx: /Galaxy Nexus/i,
					model: "Galaxy Nexus"
				}, {
					regEx: /GT-/i,
					version: {
						start: "GT-"
					}
				}
			],
			version: {
				start: "Samsung-(SCH-)?",
				item: 2
			}
		}, {
			regEx: /PlayStation/i,
			brand: "Sony",
			model: "PlayStation",
			image: "playstation",
			version: {
				start: "PlayStation "
			}
		}, {
			regEx: /SonyEricsson/i,
			brand: "SonyEricsson",
			image: "sonyericsson",
			version: {
				start: "SonyEricsson"
			}
		}, {
			regEx: /vivo/i,
			brand: "vivo",
			image: "vivo",
			version: {
				start: "VIVO "
			}
		}, {
			regEx: /Xperia/i,
			brand: "Sony",
			model: "Xperia",
			image: "xperia",
			version: {
				start: "Xperia(-T)?( |\_|\-)?",
				item: 3
			}
		}, {
			regEx: /zte/i,
			brand: "ZTE",
			image: "zte",
			version: {
				start: "ZTE "
			}
		}, {
			regEx: /Ubuntu; (Mobile|Tablet)/i,
			brand: "Ubuntu",
			image: "ubuntutouch",
			childItem: [
				{
					regEx: /Mobile/i,
					model: "Phone"
				}, {
					regEx: /Tablet/i,
					model: "Tablet"
				}
			]
		}, {
			regEx: /Nexus/i,
			brand: "Google",
			model: "Nexus",
			image: "google-nexusone",
			version: {
				start: "Nexus "
			}
		}
	];

	var analyzeVersion = function (ret, deviceItem) {
		var rep;

		if (!('end' in deviceItem.version)) deviceItem.version.end = "";
		if (!('item' in deviceItem.version)) deviceItem.version.item = 1;

		var versionRegEx = new RegExp(deviceItem.version.start + "([.0-9a-zA-Z]+)" + deviceItem.version.end, "i");

		if (rep = ret.ua.match(versionRegEx)) {
			ret.model += " " + rep[deviceItem.version.item].replace(/_/g, "");
			//ret.addChild = false; // If it has some supplementary name then do not check child.
		}

	};

	var analyzeItem = function (ret, deviceList) {
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
					case "brand":
					case "model":
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

	var analyze = function (ret) {
		var rep = null;
		if (analyzeItem(ret, deviceList)) {
			return;
		}

		// Apple
		else if (/iPad/i.test(ret.ua)) {
			ret.brand = "Apple";
			ret.model = "iPad";
			ret.image = "ipad";
		} else if (/iPod/i.test(ret.ua)) {
			ret.brand = "Apple";
			ret.model = "iPod";
			ret.image = "iphone";
		} else if (/iPhone/i.test(ret.ua)) {
			ret.brand = "Apple";
			ret.model = "iPhone";
			ret.image = "iphone";
		}

		//Some special UA..
		//is MSIE
		else if (/MSIE.+?Windows.+?Trident/i.test(ret.ua) && !/Windows ?Phone/i.test(ret.ua)) {
			ret.brand = "";
			ret.model = "";
			ret.image = "null";
		}
		// No Device match
		else {
			ret.image = "null";
		}
	};



	var DEVICE = {};

	DEVICE.analyze = function (uaString) {
		var ret = {
			"ua": uaString,
			"name": "",
			"image": "",
			"brand": "",
			"model": "",
			"dir": "device"
		};
		analyze(ret);
		ret.name = ret.brand === "" && ret.model === "" ? "" : ret.brand + (ret.model === "" ? "" : " ") + ret.model;
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
		define([], function () {
			return DEVICE;
		});
	}
	//#JSCOVERAGE_ENDIF
	//#JSCOVERAGE_IF typeof define !== 'undefined' && define.cmd
	// CMD
	else if (typeof define !== 'undefined' && define.cmd) {
		define([], function (require, exports, module) {
			module.exports = DEVICE;
		});
		//#JSCOVERAGE_ENDIF
		//#JSCOVERAGE_IF typeof define === 'undefined' && typeof module === 'undefined'
	} else {
		root.USERAGENT_DEVICE = function () { };
		USERAGENT_DEVICE.prototype.analyze = DEVICE.analyze;
	}
	//#JSCOVERAGE_ENDIF

})(this);