describe('Date of birth validation', function () {

	var today = new Date();
	var birthDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
	var day = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear() - 18;

	it('should allow any date if no age specified', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.dateOfBirth'));

		elem.sendKeys('01/10/0110');

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should allow birth dates of people 18 and over', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.dateOfBirth18AndOver'));

		elem.sendKeys(day + '/' + month + '/' + year);

		expect(elem.getAttribute('class')).not.toMatch('invalid');
		elem.clear();

		elem.sendKeys((day + 1) + '/' + (month + 2) + '/' + (year + 3));

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when older than 18', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem = element(by.model('demo.dateOfBirth18AndOver'));

		elem.sendKeys((day - 1) + '/' + month + '/' + year);

		expect(elem.getAttribute('class')).not.toMatch('invalid');
	});
});