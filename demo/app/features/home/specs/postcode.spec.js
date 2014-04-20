describe('Postcode validation', function () {
	it('should allow empty field', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.postcode'));

		elem.clear();

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});
	it('should allow standard UK postcode formats', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.postcode'));

		elem.sendKeys('AA9A 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('A9A 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('A9 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('A99 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('AA9 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();

		elem.sendKeys('AA99 9AA');

		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
		elem.clear();
	});

	it('should set invalid when not postcode format', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.postcode'));

		elem.sendKeys('0');

		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});