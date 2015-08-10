'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var lte = (0, _functionalCurry.curry)(function (a, b) {
  return a <= b;
});
exports.lte = lte;