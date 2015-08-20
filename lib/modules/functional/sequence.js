'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _listTail = require('../list/tail');

var _curryN = require('./curryN');

var throwError = function throwError() {
  throw new Error('pipe requires at least one argument');
};

var _sequence = function _sequence(fns) {
  return (0, _curryN.curryN)(fns[0].length, function () {
    var _fns$0,
        _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _listReduce.reduce)(function (a, fn) {
      return fn.call(_this, a);
    }, (_fns$0 = fns[0]).call.apply(_fns$0, [this].concat(args)), (0, _listTail.tail)(fns));
  });
};

var sequence = function sequence() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return fns.length === 0 ? throwError() : _sequence(fns);
};
exports.sequence = sequence;