'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _liftN = require('./liftN');

var lift = function lift(fn) {
  return (0, _liftN.liftN)(fn.length, fn);
};
exports.lift = lift;