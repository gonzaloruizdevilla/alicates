'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
      _x3 = (acc[acc.length] = res[0], acc);
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