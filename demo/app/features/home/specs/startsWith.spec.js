describe('Starts with validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.startsWith'));
	});

	it('should allow text that starts with "begin"', function () {
		elem.sendKeys('begin');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when does not start with "begin"', function () {
		elem.sendKeys('abegin');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});