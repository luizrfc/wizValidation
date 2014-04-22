describe('Ends with validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.endsWith'));
	});

	it('should allow text that ends with "finish"', function () {
		elem.sendKeys('finish');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});
	it('should set invalid when does not end with "begin"', function () {
		elem.sendKeys('finisha');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});