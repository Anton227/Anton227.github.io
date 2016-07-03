$(function() {

	var $myKey = '2744718-383a7278676ceeda415525dcf';	

	function search(e) {
		e.preventDefault();
		$('img').remove();
		var $searchKeyWords = $('.form-control').val();

		$.ajax ({
			url: 'https://pixabay.com/api/?key='+ $myKey +'&q='+ $searchKeyWords +'&image_type=photo&pretty=true',
			dataType: 'jsonp',
			success: function (data) {
				var $getResult = data.hits;
				for (var i = 0; i < data.hits.length; i++) {
					$('.results').append('<img class = "item" src ="'+ $getResult[i].previewURL + '">');
				}
			},
			error: function () {
				alert('Error!');
			}
		});

		$('.form-control').val('');

	}

	$('.form-control').keypress(function () {
		if (event.keyCode === 13) {
			search;
		}
	});

	$('.btn').on('click', search);

});