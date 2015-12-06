/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */
"use strict";

import $ from 'jquery';

class HelloComponent {
    constructor(element) {
        $(element).addClass('l-hello-console');
        $(element).addClass('l-hello-centered');
        $(element).append('<span id="console-prefix">$&nbsp;</span><span>hello&nbsp;wallaby.js</span>');
    }
}

var factory = function(element) {
    return new HelloComponent(element);
};

// export hello as jQuery plugin.
(function ( $ ) {
    $.fn.hello = function() {
        return factory(this);
    };
}( jQuery ));

// also export hello as es6 module.
export default factory;