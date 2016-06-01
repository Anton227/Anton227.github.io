// $(document).ready(function(){
// 	alert(jQuery.fn.jquery);
// });
$(function(){
	var html = $('#test').html();
	// var data = {
	// 	title: 'Hello world'
	// }
	var articles = [
	{
		title: 'Іванов Іван Іванович',
		image: '<img src="image/boat1.jpg">',
		subtitle1: 'Студент Київського Політехнічного інституту',
		line: '<hr align="center" color="grey" size="2" width="100%">',
	},
	{
		subtitle2:'Для вивчити фронтенд треба :',
		list1: '- писати код',
		list2: '- знати англійську',
		list3: '- по SCRUM',
	},
	{
		line: '<hr align="center" color="grey" size="2" width="100%">',
		subtitle3: 'Мій контакнтий телефон',
		content:'050 99 29 333'
	},
	{
		line: '<hr align="center" color="grey" size="2" width="100%">',
		subtitle3: 'Мій email',
		content:'ivanov@gmail.com'
	},
	{
		line: '<hr align="center" color="grey" size="2" width="100%">',
		subtitle3: 'Моє хоббі',
		content:'катаю вел'
	}
	];

	var content = tmpl(html, {
		data: articles
	});
	$('body').append(content);
})