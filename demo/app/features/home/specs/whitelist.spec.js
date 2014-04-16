describe('Whitelist validation', function () {
	it('should allow words in the whitelist', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.whitelist'));

		elem.sendKeys('red');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys('orange');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys('yellow');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when word do not appear in whitelist', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.whitelist'));

		elem.sendKeys('blue');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

		elem.sendKeys('purple');

		expect(elem.getAttribute('class')).toMatch('invalid');
		elem.clear();

		elem.sendKeys('pink');

		expect(elem.getAttribute('class')).toMatch('invalid');
	});
});