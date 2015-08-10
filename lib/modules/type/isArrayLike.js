'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isArray = require('./isArray');

var _isString = require('./isString');

var _isFunction = require('./isFunction');

var NODE_TYPE_ELEMENT = 1;

var isPositive = function isPositive(length) {
  return typeof length === 'number' && length > 0;
};

var startAndEnd = function startAndEnd(length, obj) {
  return 0 in obj && length - 1 in obj;
};

var isArrayLike = function isArrayLike(obj) {
  if (obj == null) {
    return false;
  }
  // Support: iOS 8.2 (not reproducible in simulator)
  // "length" in obj used to prevent JIT error (gh-11508)
  var length = 'length' in Object(obj) && obj.length;

  return obj.nodeType === NODE_TYPE_ELEMENT && length ? true : (0, _isString.isString)(obj) ? false : (0, _isFunction.isFunction)(obj) ? false : (0, _isArray.isArray)(obj) ? true : length === 0 ? true : isPositive(length) && startAndEnd(length, obj) ? true : false;
};
exports.isArrayLike = isArrayLike;