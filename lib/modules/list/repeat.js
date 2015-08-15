'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('../functional/curry');

var _repeat = function _repeat(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var a = _x,
        num = _x2,
        acc = _x3;
    _again = false;

    if (num <= 0) {
      return acc;
    } else {
      _x = a;
      _x2 = num - 1;
      _x3 = [].concat(_toConsumableArray(acc), [a]);
      _again = true;
      continue _function;
    }
  }
};

var repeat = (0, _functionalCurry.curry)(function (a, num) {
  return _repeat(a, num, []);
});
exports.repeat = repeat;