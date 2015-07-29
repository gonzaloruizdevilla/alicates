'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _unfold = require('./unfold');

var notIsNumber = function notIsNumber(a) {
  return Object.prototype.toString.call(a) !== '[object Number]';
};
var throwErrors = function throwErrors(name) {
  throw new TypeError(name + ' argument to range must be a number');
};

var range = (0, _functionalCurry.curry)(function (start, end) {
  var step = arguments[2] === undefined ? 1 : arguments[2];
  return notIsNumber(start) ? throwErrors('First') : notIsNumber(end) ? throwErrors('Second') : notIsNumber(step) ? throwErrors('Step') : step > 0 ? (0, _unfold.unfold)(function (n) {
    return n < end ? [n, n + step] : null;
  }, start) : (0, _unfold.unfold)(function (n) {
    return n > end ? [n, n + step] : null;
  }, start);
});
exports.range = range;