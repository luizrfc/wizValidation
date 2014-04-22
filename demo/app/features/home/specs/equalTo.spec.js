describe('Equal to validation', function () {
	var elem1, elem2, elem3;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem1 = element(by.model('demo.equalTo1'));
		elem2 = element(by.model('demo.equalTo2'));
		elem3 = element(by.model('demo.equalTo3'));
	});

	it('should allow when all fields are the same', function () {
		elem1.sendKeys('something');
		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).not.toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when first field is different', function () {
		elem1.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when second field is different', function () {
		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when third field is different', function () {
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when first two fields are same', function () {
		elem1.sendKeys('something');
		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when first and last fields are same', function () {
		elem1.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when last two fields are same', function () {
		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('ng-invalid');
		expect(elem2.getAttribute('class')).toMatch('ng-invalid');
		expect(elem3.getAttribute('class')).toMatch('ng-invalid');
	});
});