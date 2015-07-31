'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var split = (0, _functionalCurry.curry)(function (sep, s) {
  return s.split(sep);
});
exports.split = split;