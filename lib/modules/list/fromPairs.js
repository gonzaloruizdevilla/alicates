'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduce = require('./reduce');

var _objectAssoc = require('../object/assoc');

var _typeIsNil = require('../type/isNil');

var fromPairs = (0, _reduce.reduce)(function (acc, x) {
  return !(0, _typeIsNil.isNil)(x) && !(0, _typeIsNil.isNil)(x[0]) && !(0, _typeIsNil.isNil)(x[1]) ? (0, _objectAssoc.assoc)(x[0], x[1], acc) : acc;
}, {});
exports.fromPairs = fromPairs;