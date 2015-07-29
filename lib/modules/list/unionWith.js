'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _concat = require('./concat');

var _uniqWith = require('./uniqWith');

var _functionalCurry = require('../functional/curry');

var unionWith = (0, _functionalCurry.curry)(function (fn, xs, ys) {
  return (0, _uniqWith.uniqWith)(fn, (0, _concat.concat)(xs, ys));
});
exports.unionWith = unionWith;