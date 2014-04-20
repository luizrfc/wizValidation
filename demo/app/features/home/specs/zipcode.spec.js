describe('Zipcode validation', function () {
	it('should allow empty field', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.clear();

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard 5-dgit US zipcode format', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('12345');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard 5 hyphen 4-dgit US zipcode format', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('12345-6789');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when not zipcode format', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.zipcode'));

		elem.sendKeys('123456');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('12a45');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('12a45-6789');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
		elem.clear();

	});
});