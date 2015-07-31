'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _unfold = require('./unfold');

var throwErrors = function throwErrors() {
  throw new Error('First argument to splitEvery must be a positive integer');
};

var _splitEvery = function _splitEvery(n, xs) {
  return (0, _unfold.unfold)(function (seed) {
    return seed.length > 0 ? [seed.slice(0, n), seed.slice(n)] : null;
  }, xs);
};

var splitEvery = function splitEvery(n, xs) {
  return n <= 0 ? throwErrors() : _splitEvery(n, xs);
};
exports.splitEvery = splitEvery;