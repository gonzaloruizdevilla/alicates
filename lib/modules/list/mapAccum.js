'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _reduce = require('./reduce');

var _mapAccum = function _mapAccum(fn, a, xs) {
  return (0, _reduce.reduce)(function (acc, x, value) {
    return (value = fn(acc[0], x), [value[0], [].concat(_toConsumableArray(acc[1]), [value[1]])]);
  }, [a, []], xs);
};

var mapAccum = (0, _functionalCurry.curry)(_mapAccum);
exports.mapAccum = mapAccum;