'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var reduce = (0, _functionalCurry.curry)(function (fn, acc, _ref) {
  var _ref2 = _toArray(_ref);

  var x = _ref2[0];

  var arr = _ref2.slice(1);

  return x !== undefined ? reduce(fn, fn(acc, x), arr) : acc;
});
exports.reduce = reduce;