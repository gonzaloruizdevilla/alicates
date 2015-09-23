'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsObject = require('../type/isObject');

var _keysIn = require('./keysIn');

var _listReduce = require('../list/reduce');

var _invertObj = function _invertObj(x) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[x[key]] = key, acc);
  }, {}, (0, _keysIn.keysIn)(x));
};

var invertObj = function invertObj(x) {
  return (0, _typeIsObject.isObject)(x) ? _invertObj(x) : {};
};
exports.invertObj = invertObj;