'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _takeLastWhile = function _takeLastWhile(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        xs = _x2,
        pos = _x3;
    _again = false;

    if (pos === -1) {
      return xs;
    } else {
      if (fn(xs[pos])) {
        _x = fn;
        _x2 = xs;
        _x3 = pos - 1;
        _again = true;
        continue _function;
      } else {
        return xs.slice(pos + 1, Infinity);
      }
    }
  }
};

var takeLastWhile = (0, _functionalCurry.curry)(function (fn, xs) {
  return _takeLastWhile(fn, xs, xs && xs.length - 1);
});
exports.takeLastWhile = takeLastWhile;