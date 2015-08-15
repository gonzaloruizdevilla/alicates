'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var join = (0, _functionalCurry.curry)(function (y, xs) {
  return xs.join(y);
});
exports.join = join;