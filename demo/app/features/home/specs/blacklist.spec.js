describe('Blacklist validation', function () {
	it('should allow words not in the black list', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.blacklist'));

		elem.sendKeys('blue');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('purple');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('pink');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when word appears in blacklist', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.blacklist'));

		elem.sendKeys('red');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('orange');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('yellow');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});