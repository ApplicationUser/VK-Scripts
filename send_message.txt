var zone = document.getElementsByClassName("im_editable im-chat-input--text _im_text")[0];
var micro = document.getElementsByClassName('im-send-btn im-chat-input--send _im_send im-send-btn_audio')[0] || document.getElementsByClassName('im-send-btn im-chat-input--send _im_send im-send-btn_send')[0];

micro.setAttribute('id', 'button_submit');

var subm = document.getElementById('button_submit');

var i = 0;
function iter() {
	change_submit();
	zone.innerHTML = i++;
	subm.click();
}

function sm() {
	change_submit();
	zone.innerHTML = 'I fuck you mother';
	subm.click();
}

function gen_auto() {
	change_submit();
	var words = [
		'Я маму твою ебал',
		'Я твой тухум ебал',
		'Я твоё всё живое ебал',
		'Я твой жизненный путь ебал',
		'Я твой кормёшь ебал',
		'Я твою бабушку ебал',
		'Я твоего дедушку ебал',
		'Я твой рот ебал'
	];
	zone.innerHTML = words[rand(0, words.length)];
	subm.click();
}

var timer = setInterval(gen_auto, 2500);

function change_submit() {
	subm.setAttribute('class', 'im-send-btn im-chat-input--send _im_send im-send-btn_send');
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}