'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _addAll = require('./addAll');

var sum = function sum(xs) {
  return _addAll.addAll.apply(undefined, _toConsumableArray(xs));
};
exports.sum = sum;