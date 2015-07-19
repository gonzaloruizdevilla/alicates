"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var keys = function keys(a) {
  var keys = new Set();
  for (var key in a) {
    keys.add(key);
  }
  return [].concat(_toConsumableArray(keys)).sort();
};
exports.keys = keys;