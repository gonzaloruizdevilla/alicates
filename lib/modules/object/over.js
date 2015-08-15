'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _functorIdentity = require('../functor/Identity');

var over = (0, _functionalCurry.curry)(function (lens, fn, x) {
  return lens(function (y) {
    return new _functorIdentity.Identity(fn(y));
  })(x).value;
});
exports.over = over;