describe('Decimal validation', function() {
    it('should allow decimal numbers', function () {
        browser.get('/ngValidation/demo/index.html');

        var elem = element(by.model('demo.decimal'));

        elem.sendKeys('0.5');

        expect(elem.getAttribute('class')).not.toMatch('invalid');
    });
    it('should set invalid when not decimal numbers', function () {
        browser.get('/ngValidation/demo/index.html');

        var elem = element(by.model('demo.decimal'));

        elem.sendKeys('0');

        expect(elem.getAttribute('class')).toMatch('invalid');
    });
});