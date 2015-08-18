'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var has = (0, _functionalCurry.curry)(function (property, obj) {
  return obj.hasOwnProperty(property);
});
exports.has = has;