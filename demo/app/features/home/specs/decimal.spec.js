describe('Decimal validation', function () {
	it('should allow emtpy field', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.decimal'));
		var elemPlaces = element(by.model('demo.decimalPlaces'));

		elem.clear();
		elemPlaces.clear();

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elemPlaces.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow decimal numbers', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.decimal'));
		var elemPlaces = element(by.model('demo.decimalPlaces'));

		elem.sendKeys('0.5');
		elemPlaces.sendKeys('0.5');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elemPlaces.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow decimal numbers up to specified places', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.decimalPlaces'));

		// Specified 3 places
		elem.sendKeys('0.123');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when not decimal numbers', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.decimal'));
		var elemPlaces = element(by.model('demo.decimalPlaces'));

		elem.sendKeys('0');
		elemPlaces.sendKeys('0');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		expect(elemPlaces.getAttribute('class')).toMatch('ng-invalid');
	});


	it('should set invalid when decimal places exceed limit', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.decimalPlaces'));

		// Specified 3 places
		elem.sendKeys('0.1234');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});