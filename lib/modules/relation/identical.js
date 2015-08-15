'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var differnciateZeroes = function differnciateZeroes(x, y) {
  return x === 0 ? 1 / x === 1 / y : true;
};
var _identical = function _identical(x, y) {
  return x === y ? differnciateZeroes(x, y) : x !== x && y !== y ? true //NaN !== NaN =>  true
  : false;
};

var identical = (0, _functionalCurry.curry)(_identical);
exports.identical = identical;