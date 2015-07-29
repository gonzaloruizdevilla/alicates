'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _reduce = require('./reduce');

var groupBy = (0, _functionalCurry.curry)(function (fn, arr) {
  return (function (key) {
    return (0, _reduce.reduce)(function (acc, a) {
      return (key = fn(a), (acc[key] = acc[key] || []).push(a), acc);
    }, {}, arr);
  })();
});
exports.groupBy = groupBy;