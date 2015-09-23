'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _zipWith = function _zipWith(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        iter1 = _x2,
        iter2 = _x3,
        acc = _x4;
    _iter1$next = value = done = pair = undefined;
    _again = false;

    var _iter1$next = iter1.next();

    var value = _iter1$next.value;
    var done = _iter1$next.done;

    var pair = iter2.next();
    if (done || pair.done) {
      return acc;
    } else {
      _x = fn;
      _x2 = iter1;
      _x3 = iter2;
      _x4 = [].concat(_toConsumableArray(acc), [fn(value, pair.value)]);
      _again = true;
      continue _function;
    }
  }
};

var zipWith = (0, _functionalCurry.curry)(function (fn, xs, ys) {
  return _zipWith(fn, xs[Symbol.iterator](), ys[Symbol.iterator](), []);
});
exports.zipWith = zipWith;