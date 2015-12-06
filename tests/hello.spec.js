/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */

// require hello (ignore module)
import hello from '../src/hello';

(function () {
    'use strict';

    var clock;
    describe('hello', function () {
        beforeEach(function() {
            document.body.innerHTML = '<div id="wrapper"></div>';
            clock = sinon.useFakeTimers();
        });

        afterEach(function() {
            document.body.innerHTML = '';
            clock.restore();
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
            expect(escape(wrapperElem.text())).to.equal('%24%A0hello%A0wallaby.js');
        });

        it('should call as jQuery plugin', function () {
            // call hello as jQuery plugin
            $('#wrapper').hello();

            var wrapperElem = $('#wrapper > span');
            expect(wrapperElem).to.ok;
            expect(escape(wrapperElem.text())).to.equal('%24%A0hello%A0wallaby.js');
        });

        it('should animate typing', function () {
            // call hello as jQuery plugin
            $('#wrapper').hello(true);

            var wrapperElem = $('#wrapper > span');
            expect(wrapperElem).to.ok;
            expect(escape(wrapperElem.text())).to.equal('%24%A0%7C');

            // we should wait for typeSpeed + 0 ~ 70 mill sec according to the source ...
            // https://github.com/mattboldt/typed.js/blob/8a2a29a364c2cca41cd36a3356b530971b976b1d/js/typed.js#L149
            // h
            clock.tick(200);
            expect(escape(wrapperElem.text())).to.equal('%24%A0h%7C');

            // hello wallaby.js
            clock.tick(10000);
            expect(escape(wrapperElem.text())).to.equal('%24%A0hello%A0wallaby.js%7C');
        });
    });
})();