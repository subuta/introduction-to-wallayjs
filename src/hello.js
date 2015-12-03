/* global describe:false, beforeEach:false, afterEach:false, it:false, expect:false, sinon:false */
"use strict";

import $ from 'jquery';

class HelloComponent {
    constructor(element) {
        $(element).append('<h3>hello</h3>');
    }
}

var factory = function(element) {
    return new HelloComponent(element);
};

export default factory;