'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var hasIn = (0, _functionalCurry.curry)(function (property, obj) {
  return property in obj;
});
exports.hasIn = hasIn;