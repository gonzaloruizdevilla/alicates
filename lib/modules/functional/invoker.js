'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listInit = require('../list/init');

var _listLast = require('../list/last');

var _functionalCurry = require('../functional/curry');

var _typeIsFunction = require('../type/isFunction');

var _typeIsNil = require('../type/isNil');

var _stringToString = require('../string/toString');

var throwError = function throwError(x, method) {
  throw new TypeError(x + ' does not have a method named "' + method + '"');
};

var invoker = function invoker(n, method) {
  return (0, _functionalCurry.curry)(function () {
    var _last;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _typeIsNil.isNil)((0, _listLast.last)(args)) ? throwError((0, _listLast.last)(args), method) : (0, _typeIsFunction.isFunction)((0, _listLast.last)(args)[method]) ? (_last = (0, _listLast.last)(args))[method].apply(_last, _toConsumableArray((0, _listInit.init)(args))) : throwError((0, _stringToString.toString)((0, _listLast.last)(args)), method);
  }, n + 1);
};
exports.invoker = invoker;