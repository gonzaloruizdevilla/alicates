'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _typeIsDate = require('./type/isDate');

var _isDate = _interopRequireWildcard(_typeIsDate);

var _typeIsRegExp = require('./type/isRegExp');

var _isRegExp = _interopRequireWildcard(_typeIsRegExp);

var _typeIsFunction = require('./type/isFunction');

var _isFunction = _interopRequireWildcard(_typeIsFunction);

var _typeIsObject = require('./type/isObject');

var _isObject = _interopRequireWildcard(_typeIsObject);

var isDate = _isDate.isDate;
exports.isDate = isDate;
var isRegExp = _isRegExp.isRegExp;
exports.isRegExp = isRegExp;
var isFunction = _isFunction.isFunction;
exports.isFunction = isFunction;
var isObject = _isObject.isObject;
exports.isObject = isObject;