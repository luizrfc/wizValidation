describe('Phone validation', function () {
	it('should allow local UK phone number formats', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.phone'));

		elem.sendKeys('01132123456');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys('07512123456');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys('08000800800');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should allow international UK phone number formats', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.phone'));

		elem.sendKeys('+441132123456');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys('00441132123456');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when not phone number format', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.phone'));

		elem.sendKeys('(0113)2123456');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

		elem.sendKeys('0113 2123456');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();
	});
});