/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */
"use strict";

import $ from 'jquery';
import typed from 'typed.js/js/typed';

class HelloComponent {
    constructor(element, isAnimate = false) {
        $(element).addClass('l-hello-console');
        $(element).addClass('l-hello-centered');
        $(element).append('<span id="console-prefix">$&nbsp;</span><span id="hello-message"></span>');

        var message = 'hello&nbsp;wallaby.js';

        if (isAnimate) {
            $('#hello-message').typed({
                strings: [message],
                typeSpeed: 100
            });
        } else {
            $('#hello-message').html(message);
        }
    }
}

var factory = function(element, isAnimate) {
    return new HelloComponent(element, isAnimate);
};

// export hello as jQuery plugin.
(function ( $ ) {
    $.fn.hello = function(isAnimate) {
        return factory(this, isAnimate);
    };
}( jQuery ));

// also export hello as es6 module.
export default factory;