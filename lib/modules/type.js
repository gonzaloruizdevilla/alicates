'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsArray = require('./type/isArray');

Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function get() {
    return _typeIsArray.isArray;
  }
});

var _typeIsDate = require('./type/isDate');

Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function get() {
    return _typeIsDate.isDate;
  }
});

var _typeIsRegExp = require('./type/isRegExp');

Object.defineProperty(exports, 'isRegExp', {
  enumerable: true,
  get: function get() {
    return _typeIsRegExp.isRegExp;
  }
});

var _typeIsFunction = require('./type/isFunction');

Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _typeIsFunction.isFunction;
  }
});

var _typeIsObject = require('./type/isObject');

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _typeIsObject.isObject;
  }
});

var _typeType = require('./type/type');

Object.defineProperty(exports, 'type', {
  enumerable: true,
  get: function get() {
    return _typeType.type;
  }
});