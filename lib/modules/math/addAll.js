'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _add = require('./add');

var _listReduce = require('../list/reduce');

var addAll = function addAll() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _listReduce.reduce)(_add.add, 0, args);
};
exports.addAll = addAll;