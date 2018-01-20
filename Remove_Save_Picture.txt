function del_save_pic() { // Удаление сохранёнок
	Photoview.deletePhoto();
	cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
};

setInterval(del_save_pic, 2000);