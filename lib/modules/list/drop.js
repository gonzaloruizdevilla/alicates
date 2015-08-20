'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _slice = require('./slice');

var _dropWhile = require('./dropWhile');

var _typeIsTransducer = require('../type/isTransducer');

var firstN = function firstN(n) {
  var pos = 0;
  return function () {
    return (pos += 1, pos <= n);
  };
};

var drop = (0, _functionalCurry.curry)(function (n, xf) {
  return (0, _typeIsTransducer.isTransducer)(xf) ? (0, _dropWhile.dropWhile)(firstN(n), xf) : (0, _slice.slice)(n < 0 ? 0 : n, Infinity, xf);
});
exports.drop = drop;