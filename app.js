(function(window) {
	// General Utilities
	var doc = window.document,
			$ = function(selector) {
				var result = doc.querySelectorAll(selector);
				return (result.length > 1) ? result : result[0];
			};

	Node.prototype.on = Node.prototype.addEventListener;
	NodeList.prototype.on = function(type, func, flag) {
		[].forEach.call(this, function(node, index) {
			node.on(type, func, flag);
		});
	};

	// App related code goes here
	var label = $('.label'),
			labelText = $('.label .text');
			dropDown = $('.dropDown'),
			targetImg = $('.targetImg');

	// mapping the filter properties to corresponding css classes, key is the prop and value is the corresponding css class
	var filterMap = {
		blur: 'blur',
		brightness: 'brightness',
		saturate: 'saturate',
		contrast: 'contrast',
		hueRotate: 'hue-rotate',
		invert: 'invert'	,
		grayscale: 'grayscale',
		sepia: 'sepia'
	}

	// Handling the events and applying the proper filter class
	label.on('click', function(e) {
		dropDown.classList.toggle('dispBlock');
	}, false);

	dropDown.on('click', function(e) {
		var targetLi = e.target;
				filter = targetLi.getAttribute('data-filter');

		labelText.innerHTML = targetLi.textContent;
		targetImg.id = filterMap[filter];
		this.classList.remove('dispBlock');
	}, false);

}(this));