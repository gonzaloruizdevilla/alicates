'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _typeIsInteger = require('../type/isInteger');

var mathMod = (0, _functionalCurry.curry)(function (x, y) {
  return !(0, _typeIsInteger.isInteger)(x) ? NaN : !(0, _typeIsInteger.isInteger)(y) ? NaN : y < 1 ? NaN : (x % y + y) % y;
});
exports.mathMod = mathMod;