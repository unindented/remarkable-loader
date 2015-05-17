# Remarkable loader for webpack [![Version](https://img.shields.io/npm/v/remarkable-loader.svg)](https://www.npmjs.com/package/remarkable-loader) [![Build Status](https://img.shields.io/travis/unindented/remarkable-loader.svg)](http://travis-ci.org/unindented/remarkable-loader) [![Dependency Status](https://img.shields.io/gemnasium/unindented/remarkable-loader.svg)](https://gemnasium.com/unindented/remarkable-loader)

Parses source as Markdown using the awesome [Remarkable](https://github.com/jonschlinkert/remarkable) parser.


## Installation

```sh
$ npm install --save remarkable-loader
```


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js` file:

```js
module.exports = {
  module: {
    loaders: [{
      test:   /\.md/,
      loader: 'remarkable'
    }]
  },

  remarkable: {
    preset: 'full',
    linkify: true,
    typographer: true
  }
};
```


## Meta

* Code: `git clone git://github.com/unindented/remarkable-loader.git`
* Home: <https://github.com/unindented/remarkable-loader/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2014 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
