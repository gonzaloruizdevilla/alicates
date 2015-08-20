'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curryN = require('./curryN');

var curry = function curry(fn) {
  return (0, _curryN.curryN)(fn.length, fn);
};
exports.curry = curry;