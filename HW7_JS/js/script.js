// $(document).ready(function(){
// 	alert(jQuery.fn.jquery);
// });

$(function(){
	var articles = $('.articles');
	var text = $('.text');

	$('.btn1').click(function(){
		text.hide().filter(':eq(0)').show();
	});

	$('.btn2').click(function(){
		text.hide().filter(':eq(1)').show();
	});

	$('.btn3').click(function(){
		text.hide().filter(':eq(2)').show();
	});

})
