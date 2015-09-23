'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _map = require('./map');

var _range = require('./range');

var notIsNumber = function notIsNumber(a) {
  return Object.prototype.toString.call(a) !== '[object Number]';
};
var throwError = function throwError() {
  throw new RangeError('Second argument is not a valid array length');
};

var times = (0, _functionalCurry.curry)(function (fn, n) {
  return notIsNumber(n) || n < 0 ? throwError() : (0, _map.map)(fn, (0, _range.range)(0, n));
});
exports.times = times;