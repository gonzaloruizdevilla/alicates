'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _init = require('./init');

var _last = require('./last');

var reduceRight = (0, _functionalCurry.curry)(function (fn, acc, arr) {
  return (0, _last.last)(arr) !== undefined ? reduceRight(fn, fn((0, _last.last)(arr), acc), (0, _init.init)(arr)) : acc;
});
exports.reduceRight = reduceRight;