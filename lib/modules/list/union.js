'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _concat = require('./concat');

var _functionalCurry = require('../functional/curry');

var _uniq = require('./uniq');

var union = (0, _functionalCurry.curry)(function (xs, ys) {
  return (0, _uniq.uniq)((0, _concat.concat)(xs, ys));
});
exports.union = union;