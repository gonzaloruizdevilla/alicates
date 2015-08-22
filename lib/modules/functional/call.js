'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var call = (0, _curry.curry)(function (fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return fn.apply(undefined, args);
});
exports.call = call;