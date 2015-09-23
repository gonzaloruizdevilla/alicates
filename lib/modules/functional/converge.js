'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _curryN = require('./curryN');

var _listMap = require('../list/map');

var _objectProp = require('../object/prop');

var converge = function converge(fn) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return (0, _curryN.curryN)(Math.max.apply(Math, _toConsumableArray((0, _listMap.map)((0, _objectProp.prop)('length'), fns))), function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var ctx = this;
    return fn.call.apply(fn, [ctx].concat(_toConsumableArray((0, _listMap.map)(function (fn) {
      return fn.call.apply(fn, [ctx].concat(args));
    }, fns))));
  });
};
exports.converge = converge;