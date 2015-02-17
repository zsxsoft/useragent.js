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
	
})()