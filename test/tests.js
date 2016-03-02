/*!
* atob-umd
*
* @link https://github.com/t1st3/atob-umd
* @author t1st3
* @version 1.1.0
* @license https://github.com/t1st3/atob-umd/blob/master/LICENSE
*
*/

/* global define,describe,it,mocha,chai */
/* jshint unused:false */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    require.config({
      baseUrl: '',
      paths: {
        /* dependencies */
        jquery: 'app/lib/jquery/dist/jquery.min',
        mocha: 'app/lib/mocha/mocha',
        chai: 'app/lib/chai/chai',
        chaijquery: 'app/lib/chai-jquery/chai-jquery',
        /* this project */
        atob: 'app/lib/atob-umd/dist/atob-umd'
      },
      shim: {
        jquery: {
          exports: '$'
        },
        chaijquery: ['jquery', 'chai'],
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
      'mocha'
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
