'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _objectHasMethod = require('../object/hasMethod');

var _indexOf = function _indexOf(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var a = _x,
        _ref = _x2,
        pos = _x3;
    _ref2 = x = xs = undefined;

    var _ref2 = _toArray(_ref);

    var x = _ref2[0];

    var xs = _ref2.slice(1);

    _again = false;

    if ((0, _logicEquals.equals)(a, x)) {
      return pos;
    } else {
      if (xs.length) {
        _x = a;
        _x2 = xs;
        _x3 = pos + 1;
        _again = true;
        continue _function;
      } else {
        return -1;
      }
    }
  }
};

var indexOf = (0, _functionalCurry.curry)(function (a, xs) {
  return (0, _objectHasMethod.hasMethod)('indexOf', xs) ? xs.indexOf(a) : _indexOf(a, xs, 0);
});
exports.indexOf = indexOf;