'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _contains = function _contains(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var x = _x,
        arr = _x2,
        pos = _x3,
        max = _x4;
    _again = false;

    if (pos === max) {
      return false;
    } else {
      if ((0, _logicEquals.equals)(x, arr[pos])) {
        return true;
      } else {
        _x = x;
        _x2 = arr;
        _x3 = pos + 1;
        _x4 = max;
        _again = true;
        continue _function;
      }
    }
  }
};

var contains = (0, _functionalCurry.curry)(function (x, arr) {
  return _contains(x, arr, 0, arr.length);
});
exports.contains = contains;