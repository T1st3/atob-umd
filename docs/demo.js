'use strict';

require.config({
  baseUrl: '',
  paths: {
    jquery: 'assets/js/lib/jquery.min',
    atob: 'assets/js/lib/atob-umd',
    httpbackend: 'assets/js/lib/backends/backend-jquery',
    httpresponse: 'assets/js/lib/http-response',
    bootstrap: 'assets/js/lib/bootstrap.min'
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
  'assets/js/lib/codemirror',
  'assets/js/lib/codemirror/javascript',
  'bootstrap'
], function ($, Atob, CodeMirror) {
  $(document).ready(function () {
    $('#in').on('click', function () {
      var atob = function (a) {
        var umd = new Atob();
        return umd.handle(a).b;
      };
      $('#out > code').html(atob('SGVsbG8gV29ybGQ='));
    });
    $('#reset').on('click', function () {
      $('#out > code').html('No result yet!');
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
