describe('Postcode validation', function () {
	var elem;
	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.postcode'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: AA9A 9AA', function () {
		elem.sendKeys('AA9A 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: A9A 9AA', function () {
		elem.sendKeys('A9A 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: A9 9AA', function () {
		elem.sendKeys('A9 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: A99 9AA', function () {
		elem.sendKeys('A99 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: AA9 9AA', function () {
		elem.sendKeys('AA9 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow standard UK postcode formats: AA99 9AA', function () {
		elem.sendKeys('AA99 9AA');
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when not postcode format', function () {
		elem.sendKeys('0');
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});