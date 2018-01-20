var links = document.getElementsByClassName("friends_find_user_add");

var i = 0;
var timer = setInterval(function() {
	links[i++].click();
}, 2500);