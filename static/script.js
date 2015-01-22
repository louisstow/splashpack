(function app() {
	'use strict';

	function ready() {
		// Online and not waiting for a pending Web Activity
		if (!navigator.onLine) {
			return;
		}
		
		location.replace("https://flipboard.com/m/magazines#weeks-highlights");
	}

	// Called on start and on every offline/online event
	function onlineCheck() {
		if (navigator.onLine) {
			document.body.classList.remove('is-offline');
			ready();
		} else {
			document.body.classList.add('is-offline');
		}
	}

	// Called on load to ensure splashscreen
	window.addEventListener('load', function() {
		window.addEventListener('online', onlineCheck);
		window.addEventListener('offline', onlineCheck);
		onlineCheck();
	});

})();