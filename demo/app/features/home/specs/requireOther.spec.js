describe('Require other validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.requireOther'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow when other fields are valid', function () {
		var intElem = element(by.model('demo.integer'));
		var decElem = element(by.model('demo.decimal'));
		intElem.sendKeys('1');
		decElem.sendKeys('0.5');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should be invalid when first of the other fields are invalid', function () {
		var intElem = element(by.model('demo.integer'));
		var decElem = element(by.model('demo.decimal'));
		intElem.sendKeys('0.5');
		decElem.sendKeys('0.5');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should be invalid when second of the other fields are invalid', function () {
		var intElem = element(by.model('demo.integer'));
		var decElem = element(by.model('demo.decimal'));
		intElem.sendKeys('1');
		decElem.sendKeys('1');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should be invalid when all of the other fields are invalid', function () {
		var intElem = element(by.model('demo.integer'));
		var decElem = element(by.model('demo.decimal'));
		intElem.sendKeys('0.5');
		decElem.sendKeys('1');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});