'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _listAll = require('../list/all');

var _functionalCurry = require('../functional/curry');

var _listFind = require('../list/find');

var _objectHasMethod = require('../object/hasMethod');

var _type = require('../type');

var _equals = undefined;

var isMap = function isMap(a) {
  return a instanceof Map;
};
var isWeakMap = function isWeakMap(a) {
  return a instanceof WeakMap;
};
var isSet = function isSet(a) {
  return a instanceof Set;
};
var isWeakSet = function isWeakSet(a) {
  return a instanceof WeakSet;
};
var isHashMap = function isHashMap(a) {
  return (0, _type.isObject)(a) && !(0, _type.isArray)(a) && !(0, _type.isRegExp)(a) && !(0, _type.isDate)(a);
};

var getPropertiesKeys = function getPropertiesKeys(o) {
  var keys = new Set();
  for (var key in o) {
    if (!(0, _type.isFunction)(o[key])) {
      keys.add(key);
    }
  }
  return keys;
};

var equalHashMaps = function equalHashMaps(a, b, acc) {
  var aKeys = getPropertiesKeys(a);
  var bKeys = getPropertiesKeys(b);
  acc.set(a, b);
  return aKeys.size === bKeys.size && (0, _listAll.all)(function (key) {
    return aKeys.has(key) && _equals(a[key], b[key], acc);
  }, bKeys);
};

var equalMaps = function equalMaps(a, b, acc) {
  return a.size === b.size && (0, _listAll.all)(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var aKey = _ref2[0];
    var aValue = _ref2[1];
    return (0, _listFind.find)(function (_ref3) {
      var _ref32 = _slicedToArray(_ref3, 2);

      var bKey = _ref32[0];
      var bValue = _ref32[1];
      return _equals(aKey, bKey, new Map(acc)) && _equals(aValue, bValue, acc);
    }, b.entries());
  }, a.entries()) && (acc.set(a, b), true);
};

var equalObjects = function equalObjects(a, b, acc) {
  return acc.has(a) ? acc.get(a) === b : (0, _type.isArray)(a) ? (0, _type.isArray)(b) && equalHashMaps(a, b, acc) : (0, _type.isRegExp)(a) ? (0, _type.isRegExp)(b) && a.toString() === b.toString() && equalHashMaps(a, b, acc) : (0, _type.isDate)(a) ? (0, _type.isDate)(b) && _equals(a.getTime(), b.getTime()) && equalHashMaps(a, b, acc) : isMap(a) ? isMap(b) && equalMaps(a, b, acc) : isWeakMap(a) ? isWeakMap(b) && a === b : isSet(a) ? isSet(b) && equalMaps(a, b, acc) : isWeakSet(a) ? isWeakSet(b) && a === b : !isHashMap(b) ? false : equalHashMaps(a, b, acc);
};

var differenciateZeroes = function differenciateZeroes(a, b) {
  return a === 0 ? 1 / a === 1 / b : true;
};

var dispatchToEquals = function dispatchToEquals(a, b) {
  return (0, _objectHasMethod.hasMethod)('equals', a) && a.equals(b) && (0, _objectHasMethod.hasMethod)('equals', b) && b.equals(a);
};

_equals = function (a, b, acc) {
  return a === b ? differenciateZeroes(a, b) : a === null || b === null ? false : a !== a && b !== b ? true : //NaN !== NaN =>  true
  (0, _objectHasMethod.hasMethod)('equals', a) ? dispatchToEquals(a, b) : (0, _objectHasMethod.hasMethod)('equals', b) ? dispatchToEquals(a, b) : (0, _type.isObject)(a) && (0, _type.isObject)(b) && equalObjects(a, b, acc);
};

var equals = (0, _functionalCurry.curry)(function (a, b) {
  return _equals(a, b, new Map());
});
exports.equals = equals;