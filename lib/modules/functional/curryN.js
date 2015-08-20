'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _arity = require('./arity');

var argsLength = function argsLength(args) {
  return args.filter(function (x) {
    return !x || !x['@@functional/placeholder'];
  }).length;
};

var combine = function combine(oldArgs, newArgs) {
  return oldArgs.map(function (x) {
    return x && x['@@functional/placeholder'] ? newArgs.length ? newArgs.shift() : x : x;
  }).concat(newArgs);
};

var _curryN = function _curryN(n, fn, oldArgs) {
  return (0, _arity.arity)(n - argsLength(oldArgs), function () {
    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    var args = combine(oldArgs, newArgs);
    return argsLength(args) < n ? _curryN(n, fn, args) : fn.call.apply(fn, [this].concat(_toConsumableArray(args)));
  });
};

var curryN = function curryN(n, fn) {
  return fn === undefined ? function (fn) {
    return _curryN(n, fn, []);
  } : _curryN(n, fn, []);
};
exports.curryN = curryN;