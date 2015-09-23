'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _listChain = require('../list/chain');

var _compose = require('./compose');

var _identity = require('./identity');

var _listMap = require('../list/map');

var composeK = function composeK() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.length === 0 ? _identity.identity : _compose.compose.apply(undefined, _toConsumableArray((0, _listMap.map)(_listChain.chain, fns)));
};
exports.composeK = composeK;