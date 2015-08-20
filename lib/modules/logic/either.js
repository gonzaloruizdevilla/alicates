'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var either = (0, _functionalCurry.curry)(function (fn1, fn2) {
  return function () {
    return fn1.apply(undefined, arguments) || fn2.apply(undefined, arguments);
  };
});
exports.either = either;