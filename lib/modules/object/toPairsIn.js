'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _keysIn = require('./keysIn');

var _listReduce = require('../list/reduce');

var toPairsIn = function toPairsIn(a) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return [].concat(_toConsumableArray(acc), [[key, a[key]]]);
  }, [], (0, _keysIn.keysIn)(a));
};
exports.toPairsIn = toPairsIn;