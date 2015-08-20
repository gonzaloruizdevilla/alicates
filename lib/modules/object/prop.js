'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsNil = require('../type/isNil');

//TODO:  check Content Security Policy to use new Function when allowed.
var _prop = function _prop(p, x) {
  return (0, _typeIsNil.isNil)(x) ? undefined : x[p];
};

var prop = function prop(p) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.length > 0 ? _prop(p, args[0]) : function (x) {
    return _prop(p, x);
  };
};
exports.prop = prop;