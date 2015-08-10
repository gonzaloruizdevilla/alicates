'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var is = (0, _functionalCurry.curry)(function (type, obj) {
  return obj != null && obj.constructor === type || obj instanceof type;
});
exports.is = is;