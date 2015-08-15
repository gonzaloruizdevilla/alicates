'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsNil = require('../type/isNil');

var isEmpty = function isEmpty(x) {
  return !(0, _typeIsNil.isNil)(x) && x.length === 0;
};
exports.isEmpty = isEmpty;