'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _listTail = require('../list/tail');

var _listHead = require('../list/head');

var maxBy = function maxBy(fn) {
  for (var _len = arguments.length, xs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    xs[_key - 1] = arguments[_key];
  }

  var x = (0, _listHead.head)(xs);
  return (0, _listReduce.reduce)(function (acc, x) {
    var v = fn(x);
    return v > acc.v ? { v: v, o: x } : acc;
  }, { v: fn(x), o: x }, (0, _listTail.tail)(xs)).o;
};
exports.maxBy = maxBy;