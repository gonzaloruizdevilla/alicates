'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listSlice = require('../list/slice');

var _listRepeat = require('../list/repeat');

var _arity = require('./arity');

var throwError = function throwError() {
  throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
};

var nAry = function nAry(n, fn) {
  return n > 10 ? throwError() : (0, _arity.arity)(n, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(undefined, _toConsumableArray((0, _listSlice.slice)(0, n, args)).concat(_toConsumableArray((0, _listRepeat.repeat)(undefined, n - args.length))));
  });
};
exports.nAry = nAry;