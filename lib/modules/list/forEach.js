'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _objectHasMethod = require('../object/hasMethod');

var _reduce = require('./reduce');

var _forEach = function _forEach(fn, xs) {
  return ((0, _reduce.reduce)(function (acc, x) {
    return fn(x);
  }, null, xs), xs);
};

var forEach = (0, _functionalCurry.curry)(function (fn, xs) {
  return (0, _objectHasMethod.hasMethod)('forEach', xs) ? xs.forEach(fn) : _forEach(fn, xs);
});
exports.forEach = forEach;