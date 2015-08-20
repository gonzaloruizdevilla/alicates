'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurryN = require('../functional/curryN');

var ifElse = (0, _functionalCurryN.curryN)(3, function (cond, onTrue, onFalse) {
  return (0, _functionalCurryN.curryN)(Math.max(cond.length, onTrue.length, onFalse.length), function () {
    return cond.apply(undefined, arguments) ? onTrue.apply(undefined, arguments) : onFalse.apply(undefined, arguments);
  });
});
exports.ifElse = ifElse;