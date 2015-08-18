'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _typeIsFunction = require('../type/isFunction');

var _keysIn = require('./keysIn');

var _listReduce = require('../list/reduce');

var functionsIn = function functionsIn(x) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (0, _typeIsFunction.isFunction)(x[key]) ? [].concat(_toConsumableArray(acc), [key]) : acc;
  }, [], (0, _keysIn.keysIn)(x));
};
exports.functionsIn = functionsIn;