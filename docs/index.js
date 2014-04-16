'use strict';

require.config({
  baseUrl: '',
  paths: {
    jquery: 'lib/jquery',
    atob: 'lib/atob-umd',
    httpbackend: 'lib/backends/backend-jquery',
    httpresponse: 'lib/http-response',
    bootstrap: 'lib/bootstrap.min'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    atob: {
      exports: 'Atob'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    }
  },
  scriptType: 'text/javascript'
});

require([
  'jquery',
  'atob',
  'lib/codemirror',
  'lib/codemirror/javascript',
  'bootstrap'
], function ($, Atob, CodeMirror) {
  $(document).ready(function () {
    $('#in').on('click', function () {
      var atob = function (a) {
        var umd = new Atob();
        return umd.handle(a).b;
      };
      $('#out').html(atob('SGVsbG8gV29ybGQ='));
    });
    $('#reset').on('click', function () {
      $('#out').html('No result yet!');
    });
    
    $('pre.js > code.js').each(function () {
      var self = $(this).parent();
      self.find('code.js').hide(),
      CodeMirror(self[0], {
        value: self.find('code.js').html(),
        mode: 'javascript',
        tabSize: 2,
        lineNumbers: true,
        readOnly: true
      });
    });
  });
});
