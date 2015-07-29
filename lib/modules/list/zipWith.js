'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var _zipWith = function _zipWith(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        _ref = _x2,
        _ref3 = _x3,
        acc = _x4;
    _ref2 = x1 = arr1 = _ref32 = x2 = arr2 = undefined;

    var _ref2 = _toArray(_ref);

    var x1 = _ref2[0];

    var arr1 = _ref2.slice(1);

    var _ref32 = _toArray(_ref3);

    var x2 = _ref32[0];

    var arr2 = _ref32.slice(1);

    _again = false;

    if (x1 === undefined || x2 === undefined) {
      return acc;
    } else {
      _x = fn;
      _x2 = arr1;
      _x3 = arr2;
      _x4 = [].concat(_toConsumableArray(acc), [fn(x1, x2)]);
      _again = true;
      continue _function;
    }
  }
};

var zipWith = (0, _functionalCurry.curry)(function (fn, arr1, arr2) {
  return _zipWith(fn, arr1, arr2, []);
});
exports.zipWith = zipWith;