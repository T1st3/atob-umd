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
    root.Atob = factory(root.chai, root.Atob);
  }
}(this, function (chai, Atob) {

  if (typeof exports !== 'object') {
    mocha.setup('bdd');
  }
  var should = chai.should();
  
  describe('atob-umd unit tests', function () {
    describe('tests against constructor', function () {
      it('No param for a', function (done) {
        var res = new Atob();
        res.should.be.a('object');
        res.b.should.equal('');
        done();
      });
      it('Correct param "SGVsbG8gV29ybGQ=" for a', function (done) {
        var res = new Atob('SGVsbG8gV29ybGQ=');
        res.b.should.equal('Hello World');
        done();
      });
    });
    describe('tests against handle', function () {
      it('No param for a', function (done) {
        var umd = new Atob();
        var res = umd.handle();
        res.should.be.a('object');
        res.b.should.equal('');
        done();
      });
      it('Correct param "SGVsbG8gV29ybGQ=" for a', function (done) {
        var umd = new Atob();
        var res = umd.handle('SGVsbG8gV29ybGQ=');
        res.b.should.equal('Hello World');
        done();
      });
    });
  });
  
  if (typeof exports !== 'object') {
    mocha.run();
  }
}));
