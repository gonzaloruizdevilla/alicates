'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ap = require('./ap');

var _curryN = require('./curryN');

var _listMap = require('../list/map');

var _listReduce = require('../list/reduce');

var liftN = (0, _curryN.curryN)(2, function (arity, fn) {
  return (0, _curryN.curryN)(arity, function (x) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _listReduce.reduce)(_ap.ap, (0, _listMap.map)((0, _curryN.curryN)(arity, fn), x), args);
  });
});
exports.liftN = liftN;