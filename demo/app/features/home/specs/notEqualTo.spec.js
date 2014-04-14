describe('Not equal to validation', function () {
	it('should allow when at least on field is different', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem1 = element(by.model('demo.notEqualTo1'));
		var elem2 = element(by.model('demo.notEqualTo2'));
		var elem3 = element(by.model('demo.notEqualTo3'));

		elem1.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem1.clear();

		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem2.clear();

		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
		elem3.clear();
	});

	it('should set invalid when all fields are the same', function () {
		browser.get('/ngValidation/demo/index.html');

		var elem1 = element(by.model('demo.notEqualTo1'));
		var elem2 = element(by.model('demo.notEqualTo2'));
		var elem3 = element(by.model('demo.notEqualTo3'));

		elem1.sendKeys('something');
		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
	});
});