'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var remove = (0, _functionalCurry.curry)(function (start, count, xs) {
  return xs.slice(0, start).concat(xs.slice(start + count));
});
exports.remove = remove;