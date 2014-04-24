describe('Conditions validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.conditions'));
	});

	it('should allow when conditions are true', function () {
		elem.sendKeys('hello world');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should be invalid when first condition is invalid', function () {
		elem.sendKeys('hello world');
		element(by.id('btn')).click();
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should be invalid when second condition is invalid', function () {
		elem.sendKeys('hello world');
		element(by.model('demo.integer')).sendKeys('0.5');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should be invalid when last condition is invalid', function () {
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should be invalid when all conditions are invalid', function () {
		element(by.model('demo.integer')).sendKeys('0.5');
		element(by.id('btn')).click();
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});