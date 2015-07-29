'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _uniqWith = require('./uniqWith');

var uniqBy = (0, _functionalCurry.curry)(function (fn, xs) {
  return (0, _uniqWith.uniqWith)(function (x, y) {
    return (0, _logicEquals.equals)(fn(x), fn(y));
  }, xs);
});
exports.uniqBy = uniqBy;