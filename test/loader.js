var cheerio = require('cheerio');
var loader = require('../index.js');
var source = '# Header';
var sourceWithLink = 'Visit http://unindented.org!';
var sourceWithCode = '```js\nconsole.log("Hello World");/n```';

var mock = function (opts) {
  var result = {
    cacheable: function () {},
    options: {}
  };

  if (opts) {
    result.options.remarkable = opts;
  }

  return result;
};

module.exports.test = {

  'parses source as markdown': function (test) {
    var context = mock();
    var $ = cheerio.load(loader.call(context, source));
    test.equal($('h1').text(), 'Header');
    test.done();
  },

  'parses source with options': function (test) {
    var context = mock({linkify: true});
    var $ = cheerio.load(loader.call(context, sourceWithLink));
    test.equal($('a').text(), 'http://unindented.org');
    test.done();
  },

  'highlights source': function (test) {
    var context = mock();
    var $ = cheerio.load(loader.call(context, sourceWithCode));
    test.equal($('.hljs-string').text(), '"Hello World"');
    test.done();
  }

};
