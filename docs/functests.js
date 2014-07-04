/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (root, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    require.config({
      baseUrl: '',
      paths: {
        jquery: 'assets/js/lib/jquery.min',
        mocha: 'assets/js/lib/mocha',
        chai: 'assets/js/lib/chai',
        chaijquery: 'assets/js/lib/chai-jquery',
        bootstrap: 'assets/js/lib/bootstrap.min',
        atob: 'assets/js/lib/atob-umd'
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
    root.AtobTests = factory(root.chai, root.Atob);
  }
}(this, function (chai, Atob) {

  if (typeof exports !== 'object') {
    mocha.setup('bdd');
  }

  var should = chai.should(),
  browser = false;

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
