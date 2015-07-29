'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _typeIsArray = require('../type/isArray');

var _reduce = require('./reduce');

var unnest = function unnest(xs) {
  return (0, _reduce.reduce)(function (acc, x) {
    return (0, _typeIsArray.isArray)(x) ? [].concat(_toConsumableArray(acc), _toConsumableArray(x)) : [].concat(_toConsumableArray(acc), [x]);
  }, [], xs);
};
exports.unnest = unnest;