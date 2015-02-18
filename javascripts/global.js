(function() {
	var getHttp = function(url) {
		if (window.XMLHttpRequest) {
			var xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET", url, false);
		xmlhttp.send();
		return xmlhttp.responseText;
	}

	document.getElementById("left-side").innerHTML = getHttp("left.html");
	
	// Statistic Code 
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?6446b8d880fd3e2ca082c500cf27283d";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();

})();