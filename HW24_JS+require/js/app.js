requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require (
	[
	'tmpl',
	'script_model',
	'script_view',
	'script_controller',
	'script',
	'jquery'
	],
	function(tmpl, script_model, script_view, script_controller, script, $) {
		console.log('$', $);
		console.log('tmpl', tmpl);
		console.log('script_model', script_model);
		console.log('script_view', script_model);
		console.log('script_controller', script_controller);
		console.log('script', script);
	}
	);
