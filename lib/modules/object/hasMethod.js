'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _typeIsArray = require('../type/isArray');

var _typeIsFunction = require('../type/isFunction');

var hasMethod = function hasMethod(name, a) {
  return a && !(0, _typeIsArray.isArray)(a) && (0, _typeIsFunction.isFunction)(a[name]);
};
exports.hasMethod = hasMethod;