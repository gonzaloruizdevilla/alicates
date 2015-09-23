'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _all = require('./all');

var _functionalCurryN = require('../functional/curryN');

var _filter = require('./filter');

var filterFn = function filterFn(args) {
  return function (el) {
    return (0, _all.all)(function (exclude) {
      return el !== exclude;
    }, args);
  };
};

var without = (0, _functionalCurryN.curryN)(2, function (arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (0, _filter.filter)(filterFn(args), arr);
});
exports.without = without;