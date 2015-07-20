'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var sequence = function sequence() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (a) {
    return (0, _listReduce.reduce)(function (a, fn) {
      return fn(a);
    }, a, fns);
  };
};
exports.sequence = sequence;