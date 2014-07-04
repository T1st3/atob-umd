/*!
* atob-umd
*
* @link https://github.com/T1st3/atob-umd
* @author T1st3
* @version 0.4.4
* @license https://github.com/T1st3/atob-umd/blob/master/LICENSE
*
*/

/* global define */

'use strict';

(function (root, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  // Test for Node.js
  } else if (typeof exports === 'object') {
    // Node
    module.exports = factory();
  // Browser globals
  } else {
    // Browser globals
    root.Atob = factory();
  }
}(this, function () {
  /**
  * atob(), UMD style
  * @module Atob
  * @namespace Atob
  */

  /**
  * @constructor
  * @param {string} a
  * @since 0.1.0
  */
  var Atob = function (a) {
    this.a = '';
    this.b = '';
    // set method if supplied
    if (a) {
      this.handle(a);
      return this;
    }
    // keep chainability
    return this;
  };

  /**
  * handle A to B
  * @method handle
  * @memberof Atob
  * @param {string} a
  * @since 0.1.0
  */
  Atob.prototype.handle = function (a) {
    // Check a
    if (!a) {
      // keep chainability
      return this;
    }
    this.a = a;

    var browser = true;
    if (typeof define === 'function' && define.amd) {
      browser = true;
    } else if (typeof exports === 'object') {
      browser = false;
    }

    if (browser === true) {
      /* global window */
      if (typeof window.btoa === 'function') {
        this.b = window.atob(a);
      } else {
        this.b = Atob.decode(a);
      }
    } else {
      this.b = new Buffer(a, 'base64').toString('binary');
    }
    // keep chainability
    return this;
  };

  /**
  * decode fix for browser which don't support atob
  * @method decode
  * @memberof Atob
  * @param {string} a
  * @since 0.2.0
  */
  Atob.decode = function (a) {
    if (!a || arguments.length === 0) {
      return '';
    }
    var _byte = [],
    _char = [],
    _result = [],
    j = 0,
    i = 0,
    CHAR_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    /*jshint bitwise: false*/
    while ((a.length % 4) !== 0) {
      a += '=';
    }
    for (i = 0; i < a.length; i += 4) {
      _char[0] = CHAR_MAP.indexOf(a.charAt(i));
      _char[1] = CHAR_MAP.indexOf(a.charAt(i + 1));
      _char[2] = CHAR_MAP.indexOf(a.charAt(i + 2));
      _char[3] = CHAR_MAP.indexOf(a.charAt(i + 3));
      _byte[0] = (_char[0] << 2) | (_char[1] >> 4);
      _byte[1] = ((_char[1] & 15) << 4) | (_char[2] >> 2);
      _byte[2] = ((_char[2] & 3) << 6) | _char[3];
      _result[j++] = String.fromCharCode(_byte[0]);
      if (_char[2] !== 64) {
        _result[j++] = String.fromCharCode(_byte[1]);
      }
      if (_char[3] !== 64) {
        _result[j++] = String.fromCharCode(_byte[2]);
      }
    }
    return _result.join('');
  };

  return Atob;
}));
