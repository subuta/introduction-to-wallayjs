/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */

// require hello (ignore module)
import hello from '../src/hello';

(function () {
    'use strict';

    describe('hello', function () {
        beforeEach(function() {
            document.body.innerHTML = '<span id="hello"></span>';
        });

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('should append hello message as h3', function () {
            // call hello
            hello($('#hello'));

            var h3Elem = $('#hello > h3')[0];
            expect(h3Elem).to.ok;
            expect(h3Elem.outerHTML).to.equal('<h3>hello</h3>');
        });

        it('should call as jQuery plugin', function () {
            // call hello as jQuery plugin
            $('#hello').hello();

            var h3Elem = $('#hello > h3')[0];
            expect(h3Elem).to.ok;
            expect(h3Elem.outerHTML).to.equal('<h3>hello</h3>');
        });
    });
})();