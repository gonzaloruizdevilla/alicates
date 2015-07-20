'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listReduce = require('../list/reduce');

var reverse = function reverse(arr) {
  return (0, _listReduce.reduce)(function (acc, x) {
    return [x].concat(_toConsumableArray(acc));
  }, [], arr);
};
exports.reverse = reverse;