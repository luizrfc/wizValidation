describe('Ends with validation', function () {
	it('should allow text that ends with "finish"', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.endsWith'));

		elem.sendKeys('finish');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});
	it('should set invalid when does not end with "begin"', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.endsWith'));

		elem.sendKeys('finisha');

		expect(elem.getAttribute('class')).toMatch('invalid');
	});
});