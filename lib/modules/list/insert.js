'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _slice = require('./slice');

var insert = (0, _functionalCurry.curry)(function (pos, x, xs) {
  return [].concat(_toConsumableArray((0, _slice.slice)(0, pos, xs)), [x], _toConsumableArray((0, _slice.slice)(pos, Infinity, xs)));
});
exports.insert = insert;