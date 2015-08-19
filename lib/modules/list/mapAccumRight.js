'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _reduceRight = require('./reduceRight');

var _mapAccumRight = function _mapAccumRight(fn, a, xs) {
  return (0, _reduceRight.reduceRight)(function (x, acc, value) {
    return (value = fn(acc[0], x), [value[0], [value[1]].concat(_toConsumableArray(acc[1]))]);
  }, [a, []], xs);
};

var mapAccumRight = (0, _functionalCurry.curry)(_mapAccumRight);
exports.mapAccumRight = mapAccumRight;