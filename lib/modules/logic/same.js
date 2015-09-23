'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var same = (0, _functionalCurry.curry)(function (a, b) {
  return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
} // NaN === NaN -> false;
);
exports.same = same;