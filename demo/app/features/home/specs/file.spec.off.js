var path = require('path');

describe('File validation', function () {
	var elem;

	beforeEach(function () {
		browser.get('demo/index.html');
		elem = element(by.model('demo.file'));
	});

	it('should allow "image/jpeg" file', function () {
		pathToFile = path.resolve(__dirname, 'file.jpg');
		elem.sendKeys(pathToFile);
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should allow "image/gif" file', function () {
		pathToFile = path.resolve(__dirname, 'file.gif');
		elem.sendKeys(pathToFile);
		expect(elem.getAttribute('class')).not.toMatch('ng-invalid');
	});

	it('should not allow "image/png" file', function () {
		pathToFile = path.resolve(__dirname, 'file.png');
		elem.sendKeys(pathToFile);
		expect(elem.getAttribute('class')).toMatch('ng-invalid');
	});
});