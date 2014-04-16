/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (window, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    require.config({
      baseUrl: '',
      paths: {
        jquery: 'lib/jquery',
        mocha: 'lib/mocha',
        chai: 'lib/chai',
        chaijquery: 'lib/chai-jquery',
        bootstrap: 'lib/bootstrap.min',
        atob: 'lib/atob-umd'
      },
      shim: {
        jquery: {
          exports: '$'
        },
        chaijquery: ['jquery', 'chai'],
        bootstrap: ['jquery'],
        atob: {
          exports: 'Atob'
        }
      },
      scriptType: 'text/javascript'
    });
    define([
      'chai',
      'atob',
      'jquery',
      'mocha',
      'bootstrap'
    ], factory);
  // Test for Node.js
  } else if (typeof exports === 'object') {
    // Node
    module.exports = factory(require('chai'), require('../src/atob-umd'));
  // Browser globals
  } else {
    // Browser globals
    /* global Atob */
    window.Atob = factory(chai, Atob);
  }
}(this, function (chai, Atob) {

  if (typeof exports !== 'object') {
    mocha.setup('bdd');
  }
  var should = chai.should();
  
  var browser = false;
  if (typeof define === 'function' && define.amd) {
    browser = true;
  } else if (typeof exports === 'object') {
    browser = false;
  } else {
    browser = true;
  }
  
  describe('atob-umd functional tests', function () {
    describe('test general behaviour (browser test)', function () {
      it('Should behave like native function', function (done) {
        var atob = function (a) {
          var umd = new Atob();
          return umd.handle(a).b;
        };
        atob('SGVsbG8gV29ybGQ=').should.equal('Hello World');
        done();
      });
    });
    if (browser === true) {
      describe('test general behaviour (browser test)', function () {
        it('Should behave like native function', function (done) {
          var atob = function (a) {
            var umd = new Atob();
            return umd.handle(a).b;
          };
          /* global window */
          atob('SGVsbG8gV29ybGQ=').should.equal(window.atob('SGVsbG8gV29ybGQ='));
          done();
        });
      });
    }
  });
  
  if (typeof exports !== 'object') {
    mocha.run();
  }
}));
