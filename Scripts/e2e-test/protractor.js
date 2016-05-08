'use strict';

describe('Main Page Tests', function () {
    beforeEach(function() {
        browser.get('http://127.0.0.1:8080/');
    });

    it('Open the browser and test the title', function () {
        expect(browser.getTitle()).toEqual('Angular Typescript Template');
    });

    it('Open the browser and test the Url', function () {
        expect(browser.getCurrentUrl()).toBe('http://127.0.0.1:8080/');
    });

    it('Test the scope variable', function () {
        var name = element(by.binding('ctrl.name'));
        expect(name.getText()).toEqual('John Doe');
    });
});