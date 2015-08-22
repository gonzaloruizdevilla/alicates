'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _functionalCurry = require('../functional/curry');

var _typeIsArrayLike = require('../type/isArrayLike');

var _typeIsDate = require('../type/isDate');

var _typeIsObject = require('../type/isObject');

var _typeIsRegExp = require('../type/isRegExp');

var _listFind = require('../list/find');

var _listReduce = require('../list/reduce');

var _listContainsWith = require('../list/containsWith');

var _objectKeysIn = require('../object/keysIn');

var _clone = undefined;

var get = function get(seen, seenkey) {
  return (0, _listFind.find)(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var key = _ref2[0];
    var value = _ref2[1];
    return key === seenkey;
  }, seen)[1];
};

var has = function has(seen, key, s) {
  return (0, _listContainsWith.containsWith)(function (key, _ref3) {
    var _ref32 = _slicedToArray(_ref3, 2);

    var pairkey = _ref32[0];
    var value = _ref32[1];
    return key === pairkey;
  }, key, seen);
};

var addEntry = function addEntry(seen, key, value) {
  return (seen.push([key, value]), value);
};

var cloneRegExp = function cloneRegExp(seen, re) {
  return addEntry(seen, re, new RegExp(re.source, (re.global ? 'g' : '') + (re.multiline ? 'm' : '') + (re.ignoreCase ? 'i' : '')));
};

var cloneArray = function cloneArray(seen, x) {
  return (0, _listReduce.reduce)(function (acc, element) {
    return (acc.push(_clone(seen, element)), acc);
  }, addEntry(seen, x, []), x);
};

var cloneObj = function cloneObj(seen, x) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = _clone(seen, x[key]), acc);
  }, addEntry(seen, x, {}), (0, _objectKeysIn.keysIn)(x));
};

var isUndefined = function isUndefined(x) {
  return x === undefined;
};
var isNull = function isNull(x) {
  return x === null;
};

_clone = (0, _functionalCurry.curry)(function (seen, x) {
  return isUndefined(x) ? undefined : isNull(x) ? null : !(0, _typeIsObject.isObject)(x) ? x : has(seen, x) ? get(seen, x) : (0, _typeIsRegExp.isRegExp)(x) ? cloneRegExp(seen, x) : (0, _typeIsDate.isDate)(x) ? new Date(x.getTime()) : (0, _typeIsArrayLike.isArrayLike)(x) ? cloneArray(seen, x) : cloneObj(seen, x);
});

var clone = function clone(x) {
  return _clone([], x);
};
exports.clone = clone;