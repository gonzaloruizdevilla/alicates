'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

/* jshint -W016 */

var contains = (0, _functionalCurry.curry)(function (x, arr) {
  return !! ~arr.indexOf(x);
});
/* jshint +W016 */
exports.contains = contains;