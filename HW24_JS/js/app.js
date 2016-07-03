requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.12.0.min'
	},
	shim: {
		'jquery': {
			exports: 'jquery'
		}
	}
});

require (
	[
	'jquery',
	'tmpl',
	'script_model',
	'script_view',
	'script_controller',
	'script',
	],
	function($, tmpl, script_model, script_view, script_controller, script) {
		console.log('$', $);
		console.log('tmpl', tmpl);
		console.log('script_model', script_model);
		console.log('script_view', script_model);
		console.log('script_controller', script_controller);
		console.log('script', script);
	}
	);
