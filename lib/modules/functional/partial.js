'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var partial = function partial(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (0, _curry.curry)(fn).apply(undefined, args);
};
exports.partial = partial;