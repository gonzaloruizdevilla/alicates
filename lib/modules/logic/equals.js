'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _functionalCurry = require('../functional/curry');

var _list = require('../list');

var _type = require('../type');

var _equals = undefined;

var hasMethod = function hasMethod(name, a) {
  return !!a && typeof a[name] === 'function';
};
var isArray = Array.isArray;
var isMap = function isMap(a) {
  return (0, _type.isObject)(a) && !isArray(a) && !(0, _type.isRegExp)(a) && !(0, _type.isDate)(a);
};

var equalArrays = function equalArrays(a, b) {
  return a.length === b.length && (0, _list.all)(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var x = _ref2[0];
    var y = _ref2[1];
    return _equals(x, y);
  }, (0, _list.zip)(a, b));
};

var getPropertiesKeys = function getPropertiesKeys(o) {
  var keys = new Set();
  for (var key in o) {
    if (!(0, _type.isFunction)(o[key])) keys.add(key);
  }
  return keys;
};

var equalMaps = function equalMaps(a, b) {
  var aKeys = getPropertiesKeys(a);
  var bKeys = getPropertiesKeys(b);
  return aKeys.size === bKeys.size && (0, _list.all)(function (key) {
    return aKeys.has(key) && _equals(a[key], b[key]);
  }, bKeys);
};

var equalObjects = function equalObjects(a, b) {
  return isArray(a) ? isArray(b) && equalArrays(a, b) : (0, _type.isRegExp)(a) ? (0, _type.isRegExp)(b) && a.toString() === b.toString() : (0, _type.isDate)(a) ? (0, _type.isDate)(b) && _equals(a.getTime(), b.getTime()) : !isMap(b) ? false : equalMaps(a, b);
};

_equals = function (a, b) {
  return a === b ? true : a === null || b === null ? false : a !== a && b !== b ? true : //NaN !== NaN =>  true
  hasMethod('equals', a) ? a.equals(b) : hasMethod('equals', b) ? b.equals(a) : (0, _type.isObject)(a) && (0, _type.isObject)(b) && equalObjects(a, b);
};

var equals = (0, _functionalCurry.curry)(_equals);
exports.equals = equals;