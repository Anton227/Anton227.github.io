'use strict';

$(function() {

	var data = {
		header: 'Тестування',
		questions: [{
			question: '1. Питання № 1',
			name: 'question_1',
			id:['1','2','3'],
			answers: ['Відповідь № 1','Відповідь № 2', 'Відповідь № 3'],
			correct: 1	
		}, 
		{
			question: '2. Питання № 2',
			name: 'question_2',
			id:['4','5','6'],
			answers: ['Відповідь № 1','Відповідь № 2', 'Відповідь № 3'],
			correct: 5
		},
		{
			question: '3. Питання № 3',
			name: 'question_3',
			id:['7','8','9'],
			answers: ['Відповідь № 1','Відповідь № 2', 'Відповідь № 3'],
			correct: 9
		}],
		button: 'Перевірити'
	};

// вставити обєкт по зразку
var template = $('#test').html();
var content = tmpl(template, data);
$('.wrapper').append(content);

// зберігти обєкт в localStarage
localStorage.setItem('programming_test', JSON.stringify(data));	
var getTest = JSON.parse(localStorage.getItem('programming_test'));


// відпопідь на питання 
function test() {
	var totalQuestions = 3;
	var result = 0;
	var answerChecked = $('input:checked');
	var correctAnswer = [];

	for (var i = 0; i < getTest.questions.length; i++) {
		correctAnswer[i] = getTest.questions[i].correct;
		if ($(answerChecked[i]).attr('id') == correctAnswer[i]) {
			result ++;	

		}
	}

	if (result == getTest.questions.length) { 
		$('#modal-text').append('Тест пройдено');
	} else if (result == 0) {
		$('#modal-text').append('Дайте відповіді на всі питання');
	} else {
		$('#modal-text').append('Тест не пройдено. Ваш результат '+ result + ' з ' + totalQuestions + '-x');
	}
};


// відкрити та закрити модальне вікно
$("#modal-launcher, #modal-background, #modal-close, #modal-try_again").on('click', function () {

	$("#modal-background").toggleClass("active");
	$('#modal-content').slideToggle(200);
	$('#modal-text').empty();

	$('#modal-try_again').one('click', function (e) {
		e.preventDefault();
		$('#modal-text').empty();
		$('input').attr('checked', false);

	});

});

$("#modal-launcher").on('click', test);


});
