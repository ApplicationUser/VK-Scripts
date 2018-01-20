var like = document.getElementsByClassName("pv_like_link")[0];

function del_like_post() { // Удаление лайков
	like.click();
	cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
};

setInterval(del_like_post, 2500);