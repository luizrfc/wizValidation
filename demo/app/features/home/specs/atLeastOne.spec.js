describe('At least one validation', function () {
	it('should allow one field to be filled in', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem1 = element(by.model('demo.atleastone1'));
		var elem2 = element(by.model('demo.atleastone2'));
		var elem3 = element(by.model('demo.atleastone3'));

		elem1.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem1.clear();
		elem2.clear();
		elem3.clear();

		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem1.clear();
		elem2.clear();
		elem3.clear();

		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem1.clear();
		elem2.clear();
		elem3.clear();
	});

	it('should set invalid when none of the fields are filled in', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem1 = element(by.model('demo.atleastone1'));
		var elem2 = element(by.model('demo.atleastone2'));
		var elem3 = element(by.model('demo.atleastone3'));

		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
	});
});