'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _keys = require('./keys');

var _listReduce = require('../list/reduce');

var toPairs = function toPairs(a) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return [].concat(_toConsumableArray(acc), [[key, a[key]]]);
  }, [], (0, _keys.keys)(a));
};
exports.toPairs = toPairs;