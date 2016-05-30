// $(document).ready(function(){
// 	alert(jQuery.fn.jquery);
// });

$(function(){
	var text = $('.text');
	var text1 = $('.text1');
	var text2 = $('.text2');
	var text3 = $('.text3');

	$('.btn1').click(function(){
		text.show(),
		text2.hide(),
		// text2.css({"display": "none"}); також працює некоректно !!!
		// text2.animate({
		// 	color:'#FF0000',
		// });
		// animate - взагалі не працює !!!
		text.show();
	});

	$('.btn2').click(function(){
		text.show(),
		text1.hide(),
		text3.hide(),
		text.show();
	});

	$('.btn3').click(function(){
		text.show(),
		text1.hide(),
		text2.hide(),
		text.show();
	});

})
