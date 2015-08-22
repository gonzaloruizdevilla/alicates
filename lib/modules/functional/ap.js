'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var _typeIsArray = require('../type/isArray');

var _listMap = require('../list/map');

var _listUnnest = require('../list/unnest');

var _ = require('./__');

var ap = (0, _curry.curry)(function (fns, arr) {
  return !(0, _typeIsArray.isArray)(arr) ? fns.ap(arr) : (0, _listUnnest.unnest)((0, _listMap.map)((0, _listMap.map)(_.__, arr), fns));
});
exports.ap = ap;