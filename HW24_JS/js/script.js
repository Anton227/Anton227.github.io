$(function(){
	var firstToDoList = ['run a lot', 'ran fast', 'run marathon'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);

});