'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _arity = require('./arity');

var _partialRight = function _partialRight(fn, acc) {
  return (0, _arity.arity)(fn.length - acc.length, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length + acc.length >= fn.length ? fn.apply(undefined, args.concat(_toConsumableArray(acc))) : _partialRight(fn, [].concat(args, _toConsumableArray(acc)));
  });
};

var partialRight = function partialRight(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return _partialRight(fn, args);
};
exports.partialRight = partialRight;