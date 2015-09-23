'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _stringToString = require('../string/toString');

var callFn = function callFn(fn, cache, key, args) {
  return (cache.has(key) ? cache : cache.set(key, fn.apply(undefined, _toConsumableArray(args)))).get(key);
};

var memoize = function memoize(fn) {
  return (function (cache) {
    return (cache = new Map(), function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return callFn(fn, cache, (0, _stringToString.toString)(args), args);
    });
  })();
};
exports.memoize = memoize;