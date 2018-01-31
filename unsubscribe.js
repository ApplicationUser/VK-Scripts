var unsubscribe_button = document.getElementsByClassName("flat_button button_small fl_r");

var count = unsubscribe_button.length,
	i = 0;
function unsubscribe_all() {
	unsubscribe_button[i++].click();
}

setInterval(unsubscribe_all, 1500);