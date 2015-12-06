/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */

// require hello
import hello from '../src/hello';

(function () {
    'use strict';

    describe('hello', function () {
        beforeEach(function() {
            document.body.innerHTML = '<div id="wrapper"></div>';
        });

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('should has console/centerized cass', function () {
            // call hello
            hello($('#wrapper'));

            var wrapperElem = $('#wrapper');
            expect(wrapperElem).to.ok;
            expect(wrapperElem.hasClass('l-hello-console')).to.ok;
            expect(wrapperElem.hasClass('l-hello-centered')).to.ok;
        });

        it('should append hello message as h1', function () {
            // call hello
            hello($('#wrapper'));

            var wrapperElem = $('#wrapper > span');
            expect(wrapperElem).to.ok;
            expect(escape(wrapperElem.text())).to.equal('%24%A0hello');
        });
    });
})();