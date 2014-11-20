/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    require.config({
      baseUrl: '',
      paths: {
        /* dependencies */
        jquery: 'assets/lib/jquery/dist/jquery.min',
        mocha: 'assets/lib/mocha/mocha',
        chai: 'assets/lib/chai/chai',
        chaijquery: 'assets/lib/chai-jquery/chai-jquery',
        bootstrap: 'assets/lib/bootstrap/dist/js/bootstrap.min',
        /* this project */
        atob: 'assets/lib/atob-umd'
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
  } else if (typeof exports === 'object') {
    module.exports = factory(require('chai'), require('../src/atob-umd'));
  } else {
    root.AtobTests = factory(root.chai, root.Atob);
  }
}(this, function (chai, Atob) {

  var should = chai.should(),
  browser = false;

  if (typeof define === 'function' && define.amd) {
    browser = true;
  } else if (typeof exports === 'object') {
    browser = false;
  } else {
    browser = true;
  }

  if (browser === true) {
    mocha.setup('bdd');
    mocha.reporter('html');
  }

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
        var umd = new Atob(),
        res = umd.handle();
        res.should.be.a('object');
        res.b.should.equal('');
        done();
      });
      it('Correct param "SGVsbG8gV29ybGQ=" for a', function (done) {
        var umd = new Atob(),
        res = umd.handle('SGVsbG8gV29ybGQ=');
        res.b.should.equal('Hello World');
        done();
      });
    });
    describe('tests against decode', function () {
      it('No param for a', function (done) {
        var res = Atob.decode();
        res.should.equal('');
        done();
      });
      it('Correct param "" for a', function (done) {
        var res = Atob.decode('');
        res.should.equal('');
        done();
      });
      it('Correct param "abcd" for a with 5 chars', function (done) {
        var res = Atob.decode('abcde');
        res.should.equal('i·\u001d|');
        done();
      });
      it('Correct param "SGVsbG8gd29ybGQ=" for a', function (done) {
        var res = Atob.decode('SGVsbG8gd29ybGQ=');
        res.should.equal('Hello world');
        done();
      });
    });
    if (browser === true) {
      describe('test browser value', function () {
        it('Should be true', function (done) {
          var res = new Atob();
          res.browser.should.equal(true);
          done();
        });
      });
    } else {
      describe('test browser value', function () {
        it('Should be false', function (done) {
          var res = new Atob();
          res.browser.should.equal(false);
          done();
        });
      });
    }
  });

  describe('atob-umd functional tests', function () {
    describe('test general behaviour', function () {
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
          /* last test callback */
          console.log(window.__coverage__);
          done();
        });
      });
    }
  });

  if (typeof exports !== 'object') {
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
}));
