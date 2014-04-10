describe('Starts with validation', function () {
	it('should allow text that starts with "begin"', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.startsWith'));

		elem.sendKeys('begin');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});
	it('should set invalid when does not start with "begin"', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.startsWith'));

		elem.sendKeys('abegin');

		expect(elem.getAttribute('class')).toMatch('invalid');
	});
});