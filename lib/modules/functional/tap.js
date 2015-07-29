'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var tap = (0, _curry.curry)(function (fn, a) {
  return (fn(a), a);
});
exports.tap = tap;