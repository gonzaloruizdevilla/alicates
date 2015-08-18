'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _concat = require('./concat');

var _functionalCurry = require('../functional/curry');

var _head = require('./head');

var _reduce = require('./reduce');

var _tail = require('./tail');

var _typeIsNil = require('../type/isNil');

var _logicIsEmpty = require('../logic/isEmpty');

var _objectHasMethod = require('../object/hasMethod');

var intersperse = (0, _functionalCurry.curry)(function (sep, xs) {
  return (0, _typeIsNil.isNil)(xs) ? [] : (0, _objectHasMethod.hasMethod)('intersperse', xs) ? xs.intersperse(sep) : (0, _logicIsEmpty.isEmpty)(xs) ? [] : (0, _reduce.reduce)(function (acc, x) {
    return (0, _concat.concat)(acc, sep, x);
  }, [(0, _head.head)(xs)], (0, _tail.tail)(xs));
});
exports.intersperse = intersperse;