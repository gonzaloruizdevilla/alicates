'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _reduce = require('./reduce');

var filter = (0, _functionalCurry.curry)(function (fn, arr) {
  return (0, _reduce.reduce)(function (acc, x) {
    return fn(x) ? [].concat(_toConsumableArray(acc), [x]) : acc;
  }, [], arr);
});
exports.filter = filter;