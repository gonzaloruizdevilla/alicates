'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var sortBy = (0, _functionalCurry.curry)(function (fn, xs) {
  return Array.prototype.sort.call(xs, function (a, b) {
    return fn(a) < fn(b) ? -1 : 1;
  });
});
exports.sortBy = sortBy;