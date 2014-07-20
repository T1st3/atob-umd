atob-umd
==================


[![NPM version](https://badge.fury.io/js/atob-umd.svg)](http://badge.fury.io/js/atob-umd)
[![Dependency Status](https://david-dm.org/t1st3/atob-umd.svg?theme=shields.io)](https://david-dm.org/t1st3/atob-umd)
[![Build Status](https://travis-ci.org/T1st3/atob-umd.svg?branch=master)](https://travis-ci.org/T1st3/atob-umd)
[![Coverage Status](https://coveralls.io/repos/T1st3/atob-umd/badge.png)](https://coveralls.io/r/T1st3/atob-umd)



About
---

`atob-umd` is a Javascript UMD module for atob().

You'll find all about this project on its **[project pages](http://t1st3.github.io/atob-umd/)**




Installation for production
---

**with Node.js**

`atob-umd` is available on [NPM](https://www.npmjs.org/package/atob-umd)
[![NPM](http://t1st3.github.io/atob-umd/assets/img/vendor/npm-16x16.png)](https://www.npmjs.org/package/atob-umd).

[![NPM version](https://badge.fury.io/js/atob-umd.svg)](http://badge.fury.io/js/atob-umd)

You can install it with the following command:

    npm install atob-umd


**Browser globals and AMD**


`atob-umd` is available on [Bower](http://bower.io/search/?q=atob-umd)
[![Bower](http://t1st3.github.io/atob-umd/assets/img/vendor/bower-16x16.png)](http://bower.io/search/?q=atob-umd).

[![Bower version](https://badge.fury.io/bo/atob-umd.svg)](http://badge.fury.io/js/atob-umd)

To install it from Bower, just run 

    bower install atob-umd

Note that published versions on both NPM and Bower should stay in sync.



Installation for development
---


You also can download the whole project (and build it from its source; see below).

Either use `git clone` command to get it:

    git clone https://github.com/T1st3/atob-umd.git

Or download the latest version of [the whole project](https://github.com/T1st3/atob-umd/archive/master.zip).

Then, get the dependencies of the project from both Bower and NPM:

    npm install
    bower install



Documentation
---


You can find fully functional examples, tests and a documentation in the [JSDoc](http://usejsdoc.org/) format in the `docs` folder.

You can also browse these documents and tests online:

- [Demo](http://t1st3.github.io/atob-umd/demo.html)
- [this README and more info](http://t1st3.github.io/atob-umd)
- [JSDoc](http://t1st3.github.io/atob-umd/jsdoc.html)
- [Credits](http://t1st3.github.io/atob-umd/credits.html)
- [Tests](http://t1st3.github.io/atob-umd/tests.html)
- [Coverage](http://t1st3.github.io/atob-umd/coverage.html)
- [Dependencies](http://t1st3.github.io/atob-umd/dependencies.html)



Build from source
---


First, see "Installation for development" above. 
Do not forget to get the dependencies!

Then, you also need to install [Gulp](http://gulpjs.com/) globally to build the project.

    npm install -g gulp

See more at the ["Getting started with Gulp" page](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started).


---

You are now ready to build!

The source is located in the "src" folder; the built target is located in the "dist" folder.

To build, just run:

    gulp build

To test, you can use either the `npm test` command or the `gulp test` command:

    npm test

or

    gulp test

To get info about the package from the command line, just run:

    gulp info


---

**Serve and livereload**

You can also use the `serve` task to load the `docs` pages in your browser.

    gulp serve

Once it has loaded the page in the browser, this task watches for any modification in the source.
If changes happen in the source, the task automatically reloads the page in the browser (livereload).





Build the docs and Github pages
---

Please note that this task has a few more dependencies:

* [Istanbul](http://gotwarlost.github.io/istanbul/)
* [Ruby](https://www.ruby-lang.org/) and [RubyGems](https://rubygems.org/)
* [Jekyll](http://jekyllrb.com/)
* [Kramdown](http://kramdown.gettalong.org/)


Check [the build-docs page](http://t1st3.github.io/atob-umd/build_docs.html) for more info.




Credits
---


See [the credits page](http://t1st3.github.io/atob-umd/credits.html) to see more.


License
---


This piece of code is triple-licensed: [MIT / BSD / GPL licenses](https://github.com/T1st3/atob-umd/blob/master/LICENSE.md)

You can also view it in a re-formatted fashion: [MIT / BSD / GPL licenses](http://t1st3.github.io/atob-umd/license.html).



Initial author
---

[T1st3](https://github.com/T1st3/) 
[![T1st3](http://t1st3.github.io/atob-umd/assets/img/gravatar-16x16.png)](https://github.com/T1st3/)

