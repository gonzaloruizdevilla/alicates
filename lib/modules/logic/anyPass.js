'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalArity = require('../functional/arity');

var _list = require('../list');

var anyPass = function anyPass(fns) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.length > 0 ? (0, _list.any)(function (fn) {
    return fn.apply(undefined, args);
  }, fns) : (0, _functionalArity.arity)(Math.max.apply(Math, _toConsumableArray((0, _list.pluck)('length', fns))), function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (0, _list.any)(function (fn) {
      return fn.apply(undefined, args);
    }, fns);
  });
};
exports.anyPass = anyPass;