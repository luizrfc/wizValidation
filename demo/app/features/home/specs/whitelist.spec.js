describe('Whitelist validation', function () {
	var elem;
	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.whitelist'));
	});

	it('should allow words in the whitelist: red', function () {
		elem.sendKeys('red');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow words in the whitelist: blue', function () {
		elem.sendKeys('orange');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow words in the whitelist: yellow', function () {
		elem.sendKeys('yellow');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when word do not appear in whitelist: blue', function () {
		elem.sendKeys('blue');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when word do not appear in whitelist: purple', function () {
		elem.sendKeys('purple');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when word do not appear in whitelist: pink', function () {
		elem.sendKeys('pink');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});