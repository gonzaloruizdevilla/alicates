'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var eqBy = (0, _functionalCurry.curry)(function (fn, a, b) {
  return (0, _logicEquals.equals)(fn(a), fn(b));
});
exports.eqBy = eqBy;