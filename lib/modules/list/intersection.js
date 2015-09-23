'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _all = require('./all');

var _contains = require('./contains');

var _functionalCurryN = require('../functional/curryN');

var _filter = require('./filter');

var intersection = (0, _functionalCurryN.curryN)(2, function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _filter.filter)(function (el) {
    return (0, _all.all)((0, _contains.contains)(el), args);
  }, [].concat(_toConsumableArray(new (_bind.apply(Set, [null].concat(args)))())));
});
exports.intersection = intersection;