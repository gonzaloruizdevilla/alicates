'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var _scan = function _scan(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        result = _x2,
        _ref = _x3,
        length = _x4;
    _ref2 = x = xs = undefined;

    var _ref2 = _toArray(_ref);

    var x = _ref2[0];

    var xs = _ref2.slice(1);

    _again = false;

    if (length === 0) {
      return result;
    } else {
      result[result.length] = fn(result[result.length - 1], x);
      _x = fn;
      _x2 = result;
      _x3 = xs;
      _x4 = length - 1;
      _again = true;
      continue _function;
    }
  }
};

var scan = (0, _functionalCurry.curry)(function (fn, acc, xs) {
  return _scan(fn, [acc], xs, xs.length);
});
exports.scan = scan;