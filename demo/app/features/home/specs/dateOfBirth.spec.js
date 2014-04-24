describe('Date of birth validation', function () {

	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear() - 18;
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.dateOfBirth'));
	});

	it('should allow empty field', function () {
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people 18', function () {
		elem.sendKeys(day + '/' + month + '/' + year);
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow birth dates of people over 18', function () {
		elem.sendKeys((day - 1) + '/' + (month - 2) + '/' + (year - 3));
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should set invalid when younger than 18', function () {
		elem.sendKeys((day + 1) + '/' + month + '/' + year);
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});
