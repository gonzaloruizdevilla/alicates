'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurryN = require('../functional/curryN');

var both = (0, _functionalCurryN.curryN)(2, function (fn1, fn2) {
  return (0, _functionalCurryN.curryN)(Math.max(fn1.length, fn2.length), function () {
    return fn1.apply(undefined, arguments) && fn2.apply(undefined, arguments);
  });
});
exports.both = both;