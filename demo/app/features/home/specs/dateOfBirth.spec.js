describe('Date of birth validation', function () {

	var testDate, elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		testDate = new Date();
		testDate.setFullYear(testDate.getFullYear() - 18);
		elem = element(by.model('demo.dateOfBirth'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people 18', function () {
		elem.sendKeys(testDate.getDate() + '/' + testDate.getMonth() + '/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people over 18', function () {
		testDate.setDate(testDate.getDate() - 1);
		elem.sendKeys(testDate.getDate() + '/' + testDate.getMonth() + '/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when younger than 18', function () {
		testDate.setDate(testDate.getDate() + 1);
		elem.sendKeys(testDate.getDate() + '/' + testDate.getMonth() + '/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});
});
