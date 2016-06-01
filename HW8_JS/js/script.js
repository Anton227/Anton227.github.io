// $(document).ready(function(){
// 	alert(jQuery.fn.jquery);
// });

$(function(){
	var prompt = $('.prompt');
	prompt.hide();
	
	$("#firstname").hover(function(){
		prompt.hide().filter(':eq(0)').show();
	},
	function(){
		prompt.hide()
	});

	$("#lastname").hover(function(){
		prompt.hide().filter(':eq(1)').show();
	},
	function(){
		prompt.hide();
	});

	$("#address").hover(function(){
		prompt.hide().filter(':eq(2)').show();
	},
	function(){
		prompt.hide();

	});

	$(".help").click(function(){
		prompt.show();
		if(prompt.show()){
			$("#firstname").hover(function(){
				prompt.show().filter(':eq(0)').hide();
			});
			$("#lastname").hover(function(){
				prompt.show().filter(':eq(1)').hide();
			});
			$("#address").hover(function(){
				prompt.show().filter(':eq(2)').hide();
			});
		}
	});
})
