'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _functionalCurry = require('../functional/curry');

var createMapEntry = (0, _functionalCurry.curry)(function (key, value) {
  return _defineProperty({}, key, value);
});
exports.createMapEntry = createMapEntry;