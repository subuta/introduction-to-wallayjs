/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */
"use strict";

import $ from 'jquery';

class HelloComponent {
    constructor(element) {
        $(element).addClass('l-hello-console');
        $(element).addClass('l-hello-centered');
        $(element).append('<span id="console-prefix">$&nbsp;</span><span>hello</span>');
    }
}

var factory = function(element) {
    return new HelloComponent(element);
};

// also export hello as es6 module.
export default factory;