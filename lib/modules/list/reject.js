'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _filter = require('./filter');

var _logicNot = require('../logic/not');

var reject = (0, _functionalCurry.curry)(function (fn, xs) {
  return (0, _filter.filter)(function (x) {
    return (0, _logicNot.not)(fn(x));
  }, xs);
});
exports.reject = reject;