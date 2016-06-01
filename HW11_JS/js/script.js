$(function(){
	var leftUIEL= $('.carusel-arrow-left');
	var rightUIEL= $('.carusel-arrow-right');
	var elementsList = $('.carusel-list');

	var pixelsOffset = 125;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	var maximumOffset = 0;

	leftUIEL.click(function(){
		if (currentLeftValue != maximumOffset){
			currentLeftValue +=125;
			elementList.animate({left: currentLeftValue + 'px'},500);
		}
	})
	rightUIEL.click(function(){
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 125;
			elementsList.animate({left:currentLeftValue + 'px'},500);
		}
	})
});
