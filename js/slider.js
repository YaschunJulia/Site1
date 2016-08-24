'use strict';

var slider = document.getElementById('slider');

var radios = document.getElementsByClassName('slider_check');

var len = radios.length;

function sliderStart(){
	for (var i=0; i<len; i++){
		if (radios[i].checked){
			break;
		}
	}
	 (i < (len-1)) ? i++ : i=0;
	 radios[i].checked = true;

}

var timer = setInterval(sliderStart, 3000);


slider.onmouseenter = function( ){
	clearInterval(timer);
};

slider.onmouseleave = function( ){
	timer = setInterval(sliderStart, 3000);
};


