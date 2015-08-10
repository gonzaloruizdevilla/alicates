'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _listTail = require('../list/tail');

var _curry = require('./curry');

var throwError = function throwError() {
  throw new Error('pipe requires at least one argument');
};

var sequence = function sequence() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.length === 0 ? throwError() : (0, _curry.curry)(function () {
    var _fns$0,
        _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (0, _listReduce.reduce)(function (a, fn) {
      return fn.call(_this, a);
    }, (_fns$0 = fns[0]).call.apply(_fns$0, [this].concat(args)), (0, _listTail.tail)(fns));
  }, fns[0].length);
};
exports.sequence = sequence;