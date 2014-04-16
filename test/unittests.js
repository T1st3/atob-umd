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
