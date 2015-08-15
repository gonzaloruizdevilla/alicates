'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsInteger = require('../type/isInteger');

var _typeIsNil = require('../type/isNil');

var length = function length(xs) {
  return (0, _typeIsNil.isNil)(xs) ? NaN : typeof xs.length === 'undefined' ? NaN : (0, _typeIsInteger.isInteger)(xs.length) ? xs.length : NaN;
};
exports.length = length;