'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _range = require('./range');

var _reduce = require('./reduce');

var _slice = require('./slice');

var _aperture = function _aperture(n, xs) {
  return (0, _reduce.reduce)(function (acc, m) {
    return (acc[m] = (0, _slice.slice)(m, m + n, xs), acc);
  }, [], (0, _range.range)(0, xs.length - n + 1));
};

var aperture = (0, _functionalCurry.curry)(function (n, xs) {
  return n > xs.length ? [] : _aperture(n, xs);
});
exports.aperture = aperture;