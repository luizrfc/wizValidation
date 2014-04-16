describe('Date of birth validation', function () {

	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear() - 18;

	it('should allow birth dates of people 18', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.dateOfBirth'));

		elem.sendKeys(day + '/' + month + '/' + year);

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should allow birth dates of people over 18', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.dateOfBirth'));

		elem.sendKeys((day - 1) + '/' + (month - 2) + '/' + (year - 3));

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when younger than 18', function () {
		browser.get('demo/index.html');

		var elem = element(by.model('demo.dateOfBirth'));

		elem.sendKeys((day + 1) + '/' + month + '/' + year);

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});
});