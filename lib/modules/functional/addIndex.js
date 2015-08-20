'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _curryN = require('./curryN');

var _listHead = require('../list/head');

var _listLast = require('../list/last');

var _listTail = require('../list/tail');

/* jshint -W016*/
var _addIndex = function _addIndex(idx, indexed, fn, xs, rest) {
  return indexed.apply(undefined, [function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(undefined, args.concat([idx++, xs]));
  }].concat(_toConsumableArray(rest)));
};
/* jshint +W016*/

var addIndex = function addIndex(indexed) {
  return (0, _curryN.curryN)(indexed.length, function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _addIndex(0, indexed, (0, _listHead.head)(args), (0, _listLast.last)(args), (0, _listTail.tail)(args));
  });
};
exports.addIndex = addIndex;