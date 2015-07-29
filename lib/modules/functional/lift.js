'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _listMap = require('../list/map');

var _curry = require('./curry');

var _ap = require('./ap');

var lift = function lift(fn, arity) {
  return (0, _curry.curry)(function (x) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _listReduce.reduce)(_ap.ap, (0, _listMap.map)((0, _curry.curry)(fn, arity), x), args);
  }, arity);
};
exports.lift = lift;