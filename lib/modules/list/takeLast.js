'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var takeLast = (0, _functionalCurry.curry)(function (n, xs) {
  return xs.slice(n < 0 ? 0 : n === 0 ? xs.length : -n);
});
exports.takeLast = takeLast;