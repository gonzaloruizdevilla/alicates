'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _merge = require('./merge');

var _listReduce = require('../list/reduce');

var mergeAll = function mergeAll(xs) {
  return (0, _listReduce.reduce)(_merge.merge, {}, xs);
};
exports.mergeAll = mergeAll;