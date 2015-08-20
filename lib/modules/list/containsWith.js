'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _containsWith = function _containsWith(_x, _x2, _x3, _x4, _x5) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        x = _x2,
        arr = _x3,
        pos = _x4,
        max = _x5;
    _again = false;

    if (pos === max) {
      return false;
    } else {
      if (fn(x, arr[pos])) {
        return true;
      } else {
        _x = fn;
        _x2 = x;
        _x3 = arr;
        _x4 = pos + 1;
        _x5 = max;
        _again = true;
        continue _function;
      }
    }
  }
};

var containsWith = (0, _functionalCurry.curry)(function (fn, x, arr) {
  return _containsWith(fn, x, arr, 0, arr.length);
});
exports.containsWith = containsWith;