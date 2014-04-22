describe('Blacklist validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.blacklist'));
	});

	it('should allow words not in the black list: blue', function () {
		elem.sendKeys('blue');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow words not in the black list: purple', function () {
		elem.sendKeys('purple');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow words not in the black list: pink', function () {
		elem.sendKeys('pink');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when word appears in blacklist: red', function () {
		elem.sendKeys('red');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when word appears in blacklist: orange', function () {
		elem.sendKeys('orange');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when word appears in blacklist: yellow', function () {
		elem.sendKeys('yellow');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});