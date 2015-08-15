'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _relationSortBy = require('../relation/sortBy');

var _functionalIdentity = require('../functional/identity');

var floor = Math.floor;

var sortedMedian = function sortedMedian(xs, length) {
  return length % 2 === 1 ? xs[floor(length / 2)] : (xs[floor(length / 2) - 1] + xs[floor(length / 2)]) / 2;
};

var median = function median(xs) {
  return sortedMedian((0, _relationSortBy.sortBy)(_functionalIdentity.identity, xs), xs.length);
};
exports.median = median;