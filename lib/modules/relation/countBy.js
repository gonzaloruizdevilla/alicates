'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var countBy = (0, _functionalCurry.curry)(function (fn, xs) {
  return (0, _listReduce.reduce)(function (acc, x) {
    return (acc[fn(x)] = (parseInt(acc[fn(x)]) || 0) + 1, acc);
  }, {}, xs);
});
exports.countBy = countBy;