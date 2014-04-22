describe('Not equal to validation', function () {
	var elem1, elem2, elem3;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem1 = element(by.model('demo.notEqualTo1'));
		elem2 = element(by.model('demo.notEqualTo2'));
		elem3 = element(by.model('demo.notEqualTo3'));
	});

	it('should allow when first field is different', function () {
		elem1.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow when secondfield is different', function () {
		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow when first field is different', function () {
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when all fields are the same', function () {
		elem1.sendKeys('something');
		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});
});