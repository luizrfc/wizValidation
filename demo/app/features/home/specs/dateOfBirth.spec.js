describe('Date of birth validation', function () {

	var today, testDate, elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		today = new Date();
		testDate = new Date();
		elem = element(by.model('demo.dateOfBirth'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people 18', function () {
		testDate.setFullYear(today.getFullYear() - 18);
		elem.sendKeys('01/01/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people over 18', function () {
		testDate.setFullYear(today.getFullYear() - 19);
		elem.sendKeys('01/01/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when younger than 18', function () {
		testDate.setFullYear(today.getFullYear() - 17);
		elem.sendKeys('01/01/' + testDate.getFullYear());
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});
