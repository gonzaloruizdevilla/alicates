'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _objectHasMethod = require('../object/hasMethod');

var _lastIndexOf = function _lastIndexOf(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var y = _x,
        xs = _x2,
        pos = _x3;
    _again = false;

    if (pos < 0) {
      return -1;
    } else {
      if ((0, _logicEquals.equals)(y, xs[pos])) {
        return pos;
      } else {
        _x = y;
        _x2 = xs;
        _x3 = pos - 1;
        _again = true;
        continue _function;
      }
    }
  }
};

var lastIndexOf = (0, _functionalCurry.curry)(function (y, xs) {
  return (0, _objectHasMethod.hasMethod)('lastIndexOf', xs) ? xs.lastIndexOf(y) : _lastIndexOf(y, xs, xs.length);
});
exports.lastIndexOf = lastIndexOf;