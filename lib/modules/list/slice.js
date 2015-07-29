'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _objectHasMethod = require('../object/hasMethod');

var slice = (0, _functionalCurry.curry)(function (start, end, xs) {
  return (0, _objectHasMethod.hasMethod)('slice', xs) ? xs.slice(start, end) : Array.prototype.slice.call(xs, start, end);
});
exports.slice = slice;