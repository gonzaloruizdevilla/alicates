'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var ifElse = (0, _functionalCurry.curry)(function (cond, onTrue, onFalse) {
  return (0, _functionalCurry.curry)(function () {
    return cond.apply(undefined, arguments) ? onTrue.apply(undefined, arguments) : onFalse.apply(undefined, arguments);
  }, Math.max(cond.length, onTrue.length, onFalse.length));
});
exports.ifElse = ifElse;