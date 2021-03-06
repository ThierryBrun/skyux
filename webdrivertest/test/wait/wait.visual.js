
/*global describe, it, browser */

describe('wait', function () {
    'use strict';

    it('should match the baseline wait screenshot', function () {
        return browser
            .setupTest('/wait/fixtures/test.full.html')
            .pause(1000)
            .compareScreenshot({
                screenshotName: 'wait',
                selector: '#screenshot-wait',
                checkAccessibility: true
            });
    });
});
