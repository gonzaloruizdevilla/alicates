'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functorIdentity = require('../functor/Identity');

var _functionalCurry = require('../functional/curry');

var set = (0, _functionalCurry.curry)(function (lens, value, x) {
  return lens(function () {
    return new _functorIdentity.Identity(value);
  })(x).value;
});
exports.set = set;