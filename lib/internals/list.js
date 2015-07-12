'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functional = require('./functional');

var reduce = (0, _functional.curry)(function (fn, acc, _ref) {
  var _ref2 = _toArray(_ref);

  var x = _ref2[0];

  var arr = _ref2.slice(1);

  return x !== undefined ? reduce(fn, fn(acc, x), arr) : acc;
});

exports.reduce = reduce;

var head = function head(arr) {
  return arr[0];
};

exports.head = head;

var init = function init(arr) {
  return arr.slice(0, -1);
};

exports.init = init;

var last = function last(arr) {
  return arr.slice(-1)[0];
};

exports.last = last;

var tail = function tail(arr) {
  return arr.slice(1);
};

exports.tail = tail;

var reduceRight = (0, _functional.curry)(function (fn, acc, arr) {
  return last(arr) !== undefined ? reduceRight(fn, fn(last(arr), acc), init(arr)) : acc;
});

exports.reduceRight = reduceRight;

var map = (0, _functional.curry)(function (fn, arr) {
  return reduce(function (acc, x) {
    return [].concat(_toConsumableArray(acc), [fn(x)]);
  }, [], arr);
});
exports.map = map;