'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listContainsWith = require('../list/containsWith');

var _functionalCurryN = require('../functional/curryN');

var _listFilter = require('../list/filter');

var _listNone = require('../list/none');

var _listUniq = require('../list/uniq');

var differenceWith = (0, _functionalCurryN.curryN)(3, function (fn, arr) {
  for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    others[_key - 2] = arguments[_key];
  }

  return (0, _listUniq.uniq)((0, _listFilter.filter)(function (el) {
    return (0, _listNone.none)((0, _listContainsWith.containsWith)(fn, el), others);
  }, arr));
});
exports.differenceWith = differenceWith;