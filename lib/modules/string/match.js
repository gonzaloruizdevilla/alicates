'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var match = (0, _functionalCurry.curry)(function (regex, s) {
  return s.match(regex) || [];
});
exports.match = match;