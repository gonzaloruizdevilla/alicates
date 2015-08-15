'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listReduce = require('../list/reduce');

var _keys = require('./keys');

var _typeIsObject = require('../type/isObject');

var _typeIsArray = require('../type/isArray');

var _invert = function _invert(x) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[x[key]] = (0, _typeIsArray.isArray)(acc[x[key]]) ? [].concat(_toConsumableArray(acc[x[key]]), [key]) : [key], acc);
  }, {}, (0, _keys.keys)(x));
};

var invert = function invert(x) {
  return (0, _typeIsObject.isObject)(x) ? _invert(x) : {};
};
exports.invert = invert;