'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var prepend = (0, _functionalCurry.curry)(function (x, xs) {
  return [x].concat(_toConsumableArray(xs));
});
exports.prepend = prepend;