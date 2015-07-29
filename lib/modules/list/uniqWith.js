'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _none = require('./none');

var _reduce = require('./reduce');

var uniqWith = (0, _functionalCurry.curry)(function (fn, xs) {
  return (0, _reduce.reduce)(function (acc, x) {
    return (0, _none.none)(function (y) {
      return fn(y, x);
    }, acc) ? [].concat(_toConsumableArray(acc), [x]) : acc;
  }, [], xs);
});
exports.uniqWith = uniqWith;