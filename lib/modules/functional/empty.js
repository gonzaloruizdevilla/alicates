'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _objectHasMethod = require('../object/hasMethod');

var _typeIsArray = require('../type/isArray');

var _typeIsObject = require('../type/isObject');

var _typeIsString = require('../type/isString');

var empty = function empty(x) {
  return (0, _objectHasMethod.hasMethod)('empty', x) ? x.empty() : (0, _typeIsArray.isArray)(x) ? [] : (0, _typeIsString.isString)(x) ? '' : (0, _typeIsObject.isObject)(x) ? {} : null;
};
exports.empty = empty;