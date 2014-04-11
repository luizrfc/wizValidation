describe('Integer validation', function () {
	it('should allow whole numbers', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.integer'));

		elem.sendKeys('1234567890');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});
	it('should set invalid when not whole numbers', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.integer'));

		elem.sendKeys('0.5');

		expect(elem.getAttribute('class')).toMatch('invalid');
	});
});