var Remarkable = require('remarkable')
var hljs = require('highlight.js')

var extend = function (obj, source) {
  var prop

  for (prop in source) {
    if (source.hasOwnProperty(prop)) {
      obj[prop] = source[prop]
    }
  }

  return obj
}

module.exports = function (source) {
  this.cacheable()

  var opts = extend({
    preset: 'default',
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value
      } catch (err) {}

      return ''
    }
  }, this.options.remarkable)

  var parser = new Remarkable(opts.preset, opts)

  return parser.render(source)
}
