'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _logic = require('../logic');

var _list = require('../list');

var _functionalCurry = require('../functional/curry');

var _typeIsObject = require('../type/isObject');

var _objectKeys = require('../object/keys');

var _functionalT = require('../functional/t');

var _toString = undefined;

var recur = (0, _functionalCurry.curry)(function (seen, a) {
  return (0, _list.contains)(a, seen) ? '<Circular>' : _toString(seen, a);
});

var nAry = function nAry(fn, pos) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn(args[pos]);
  };
};

var quote = function quote(a) {
  return '"' + a.replace(/"/g, '\\"') + '"';
};

var isNull = (0, _logic.equals)('[object Null]');
var nullToString = function nullToString() {
  return 'null';
};

var isUndefined = (0, _logic.equals)('[object Undefined]');
var undefinedToString = function undefinedToString() {
  return 'undefined';
};

var isBoolean = (0, _logic.equals)('[object Boolean]');
var booleanToString = function booleanToString(seen, a) {
  return (0, _typeIsObject.isObject)(a) ? 'new Boolean(' + recur([].concat(_toConsumableArray(seen), [a]), a.valueOf()) + ')' : a.toString();
};

var isString = (0, _logic.equals)('[object String]');
var stringToString = function stringToString(seen, a) {
  return (0, _typeIsObject.isObject)(a) ? 'new String(' + recur([].concat(_toConsumableArray(seen), [a]), a.valueOf()) + ')' : quote(a);
};

var isNumber = (0, _logic.equals)('[object Number]');
var numberToString = function numberToString(seen, a) {
  return (0, _typeIsObject.isObject)(a) ? 'new Number(' + recur([].concat(_toConsumableArray(seen), [a]), a.valueOf()) + ')' : 1 / a === -Infinity ? '-0' : a.toString();
};

var isDate = (0, _logic.equals)('[object Date]');
var dateToString = function dateToString(seen, a) {
  return 'new Date(' + quote(a.toISOString()) + ')';
};

var numeric = /^\d+$/;
var nonNumericKeys = function nonNumericKeys(a) {
  return (0, _list.filter)(function (prop) {
    return !numeric.test(prop);
  }, (0, _objectKeys.keys)(a));
};

var mapPairs = function mapPairs(seen, a, keys) {
  return (0, _list.map)(function (prop) {
    return quote(prop) + ': ' + recur([].concat(_toConsumableArray(seen), [a]), a[prop]);
  }, keys);
};

var isArray = (0, _logic.equals)('[object Array]');
var arrayToString = function arrayToString(seen, a) {
  return '[' + (0, _list.map)(recur([].concat(_toConsumableArray(seen), [a])), a).concat(mapPairs(seen, a, nonNumericKeys(a))).join(', ') + ']';
};

var isArguments = (0, _logic.equals)('[object Arguments]');
var argumentsToString = function argumentsToString(seen, a) {
  return '(function() { return arguments; }(' + (0, _list.map)(recur([].concat(_toConsumableArray(seen), [a])), a).join(', ') + '))';
};

var selfToString = function selfToString(seen, a) {
  return a.toString();
};

var objectWithToString = function objectWithToString(a) {
  return typeof a.constructor === 'function' && a.constructor.name !== 'Object' && typeof a.toString === 'function' && a.toString() !== '[object Object]';
};

var objectToString = function objectToString(seen, a) {
  return '{' + mapPairs(seen, a, (0, _objectKeys.keys)(a)).join(', ') + '}';
};

_toString = function (seen, a) {
  return (0, _logic.cond)([[nAry(isNull, 2), nullToString], [nAry(isUndefined, 2), undefinedToString], [nAry(isBoolean, 2), booleanToString], [nAry(isString, 2), stringToString], [nAry(isNumber, 2), numberToString], [nAry(isDate, 2), dateToString], [nAry(isArray, 2), arrayToString], [nAry(isArguments, 2), argumentsToString], [nAry(objectWithToString, 1), selfToString], [_functionalT.t, objectToString]])(seen, a, Object.prototype.toString.call(a));
};

var toString = function toString(a) {
  return _toString([], a);
};
exports.toString = toString;