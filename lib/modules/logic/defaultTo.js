'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsNil = require('../type/isNil');

var _functionalCurry = require('../functional/curry');

var defaultTo = (0, _functionalCurry.curry)(function (x, y) {
  return (0, _typeIsNil.isNil)(y) ? x : y;
});
exports.defaultTo = defaultTo;