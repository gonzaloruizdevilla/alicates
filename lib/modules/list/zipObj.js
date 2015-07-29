'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

var _zipObj = function _zipObj(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var _ref = _x,
        _ref3 = _x2,
        acc = _x3;
    _ref2 = x1 = arr1 = _ref32 = x2 = arr2 = undefined;

    var _ref2 = _toArray(_ref);

    var x1 = _ref2[0];

    var arr1 = _ref2.slice(1);

    var _ref32 = _toArray(_ref3);

    var x2 = _ref32[0];

    var arr2 = _ref32.slice(1);

    _again = false;

    if (x1 === undefined) {
      return acc;
    } else {
      _x = arr1;
      _x2 = arr2;
      _x3 = (acc[x1] = x2, acc);
      _again = true;
      continue _function;
    }
  }
};

var zipObj = (0, _functionalCurry.curry)(function (arr1, arr2) {
  return _zipObj(arr1, arr2, {});
});
exports.zipObj = zipObj;