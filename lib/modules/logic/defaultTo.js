'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var defaultTo = (0, _functionalCurry.curry)(function (x, y) {
  return y === null || y === undefined ? x : y;
});
exports.defaultTo = defaultTo;