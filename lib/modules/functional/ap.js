'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listReduce = require('../list/reduce');

var _listMap = require('../list/map');

var ap = function ap(fns, arr) {
  return (0, _listReduce.reduce)(function (acc, fn) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray((0, _listMap.map)(fn, arr)));
  }, [], fns);
};
exports.ap = ap;