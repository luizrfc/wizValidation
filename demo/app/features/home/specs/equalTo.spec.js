describe('Equal to validation', function () {
	it('should allow when all fields are the same', function () {
		browser.get('demo/index.html');

		var elem1 = element(by.model('demo.equalTo1'));
		var elem2 = element(by.model('demo.equalTo2'));
		var elem3 = element(by.model('demo.equalTo3'));

		elem1.sendKeys('something');
		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).not.toMatch('invalid');
		expect(elem2.getAttribute('class')).not.toMatch('invalid');
		expect(elem3.getAttribute('class')).not.toMatch('invalid');
	});

	it('should set invalid when one of the fields are different', function () {
		browser.get('demo/index.html');

		var elem1 = element(by.model('demo.equalTo1'));
		var elem2 = element(by.model('demo.equalTo2'));
		var elem3 = element(by.model('demo.equalTo3'));

		elem1.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem1.clear();

		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem2.clear();

		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem3.clear();

		elem1.sendKeys('something');
		elem2.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem1.clear();
		elem2.clear();

		elem1.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem1.clear();
		elem3.clear();

		elem2.sendKeys('something');
		elem3.sendKeys('something');
		expect(elem1.getAttribute('class')).toMatch('invalid');
		expect(elem2.getAttribute('class')).toMatch('invalid');
		expect(elem3.getAttribute('class')).toMatch('invalid');
		elem2.clear();
		elem3.clear();
	});
});