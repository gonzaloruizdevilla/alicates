'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCompose = require('../functional/compose');

var _listContains = require('../list/contains');

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var _listUniq = require('../list/uniq');

var intersectionWith = (0, _functionalCurry.curry)(function (fn, xs, ys) {
  return (0, _functionalCompose.compose)(_listUniq.uniq, (0, _listReduce.reduce)(function (acc, y) {
    return (0, _listContains.contains)(y, xs) ? [].concat(_toConsumableArray(acc), [y]) : acc;
  }, []))(ys);
});
exports.intersectionWith = intersectionWith;