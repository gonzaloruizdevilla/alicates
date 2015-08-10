'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

//TODO: use transducer style with map

var _takeWhile = function _takeWhile(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        _ref = _x2,
        acc = _x3;
    _ref2 = x = xs = undefined;

    var _ref2 = _toArray(_ref);

    var x = _ref2[0];

    var xs = _ref2.slice(1);

    _again = false;

    if (xs.length > 0) {
      if (fn(x)) {
        _x = fn;
        _x2 = xs;
        _x3 = [].concat(_toConsumableArray(acc), [x]);
        _again = true;
        continue _function;
      } else {
        return acc;
      }
    } else {
      return fn(x) ? [].concat(_toConsumableArray(acc), [x]) : acc;
    }
  }
};

var takeWhile = (0, _functionalCurry.curry)(function (fn, xs) {
  return xs.length > 0 ? _takeWhile(fn, xs, []) : [];
});
exports.takeWhile = takeWhile;