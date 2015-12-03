var path = require('path');
var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var sinon = require('sinon');
var chai = require('chai');

module.exports = function(wallaby) {

    var webpackPostprocessor = wallabyWebpack({
        resolve: {
            modulesDirectories: ['bower_components']
        }
    });

    return {
        files: [
            // include vendor folder libraries
            {pattern: 'vendor/**/*.js', instrument: false},
            // include vendors
            {pattern: 'node_modules/lodash/index.js', instrument: false},
            {pattern: 'node_modules/jquery/dist/jquery.js', instrument: false},

            // include assertions
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/chai-jquery/chai-jquery.js', instrument: false},
            {pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},

            // include src
            {pattern: 'src/**/*.js', load: false}
        ],

        tests: [
            {pattern: 'tests/*.spec.js', load: false}
        ],

        postprocessor: webpackPostprocessor,
        testFramework: 'mocha',

        bootstrap: function(wallaby) {
            // wallaby.testFramework is jasmine/QUnit/mocha object
            wallaby.testFramework.ui('tdd');

            // you can access 'window' object in a browser environment,
            // 'global' object or require(...) something in node environment
            window.sinon = sinon;
            window.chai = chai;
            window.expect = chai.expect;

            window.__moduleBundler.loadTests();
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: babel,
                presets: ['es2015']
            })
        }
    };
};