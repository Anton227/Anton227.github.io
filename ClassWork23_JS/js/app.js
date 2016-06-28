requirejs.config({
	path: {
		// 'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
		// 'jquery': 'http://code.jquery.com/jquery-2.2.3.min'
		// // 'jquery': 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.0.0.min'
		// 'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min'
		'jquery': 'https://code.jquery.com/jquery-1.12.3'
		
	},
	shim: {
		'jquery': {
			exports: 'JQuery'
		}
	}
});

require (
	[
	'module1',
	'module2',
	'jquery',
	],
	function(module1,module2, $) {
		console.log('$', $);
		console.log('module1', module1);
		console.log('module2', module2);
		module1.sayHello();
		module2.someMethod()
	}
	);
