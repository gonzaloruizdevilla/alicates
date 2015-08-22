'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _objectHasMethod = require('../object/hasMethod');

var _functionalCurry = require('../functional/curry');

var and = (0, _functionalCurry.curry)(function (a, b) {
  return (0, _objectHasMethod.hasMethod)('and', a) ? a.and(b) : a && b;
});
exports.and = and;