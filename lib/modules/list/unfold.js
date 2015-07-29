'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _unfold = function _unfold(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        res = _x2,
        acc = _x3;
    _again = false;

    if (res) {
      _x = fn;
      _x2 = fn(res[1]);
      _x3 = [].concat(_toConsumableArray(acc), [res[0]]);
      _again = true;
      continue _function;
    } else {
      return acc;
    }
  }
};

var unfold = (0, _functionalCurry.curry)(function (fn, seed) {
  return _unfold(fn, fn(seed), []);
});
exports.unfold = unfold;