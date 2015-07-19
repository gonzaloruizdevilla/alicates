'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var _reduce = function _reduce(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        acc = _x2,
        _ref = _x3,
        length = _x4;
    _ref2 = x = arr = undefined;

    var _ref2 = _toArray(_ref);

    var x = _ref2[0];

    var arr = _ref2.slice(1);

    _again = false;

    if (length === 0) {
      return acc;
    } else {
      _x = fn;
      _x2 = fn(acc, x);
      _x3 = arr;
      _x4 = length - 1;
      _again = true;
      continue _function;
    }
  }
};

var reduce = (0, _functionalCurry.curry)(function (fn, acc, arr) {
  return _reduce(fn, acc, arr, arr.length);
});
exports.reduce = reduce;