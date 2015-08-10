'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var multiply = (0, _functionalCurry.curry)(function (x, y) {
  return x * y;
});
exports.multiply = multiply;