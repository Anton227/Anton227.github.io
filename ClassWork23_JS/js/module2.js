define (
	'module2',
	[jquery],
	function() {
		var test = 'test';
		return {
			someMethod: function(){
				console.log('SomeMethod');
			}
		};
	}
	);
