'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var divide = (0, _functionalCurry.curry)(function (a, b) {
  return a / b;
});
exports.divide = divide;