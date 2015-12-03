/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */

import helloComponent from '../src/hello';

(function () {
    'use strict';

    describe('hello', function () {
        beforeEach(function() {
            document.body.innerHTML = '<span id="hello"></span>';
            $(document).ready(function() {
                helloComponent($('#hello'));
            });
        });

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('should contains message \'hello\'', function () {
            var h3Elem = $('#hello > h3');
            expect(h3Elem.text()).to.equal('hello');
        });
    });
})();