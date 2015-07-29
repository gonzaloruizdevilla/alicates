'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var take = (0, _functionalCurry.curry)(function (n, arr) {
  return typeof arr === 'string' ? arr.substr(0, n < 0 ? undefined : n) : arr.slice(0, n < 0 ? undefined : n);
});
exports.take = take;