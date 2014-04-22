describe('Zipcode validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.zipcode'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard 5-dgit US zipcode format', function () {
		elem.sendKeys('12345');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard 5 hyphen 4-dgit US zipcode format', function () {
		elem.sendKeys('12345-6789');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when not zipcode format: 123456', function () {
		elem.sendKeys('123456');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when not zipcode format: 12a45', function () {
		elem.sendKeys('12a45');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});

	it('should set invalid when not zipcode format: 12a45-6789', function () {
		elem.sendKeys('12a45-6789');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});