'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var identity = (0, _curry.curry)(function (a) {
  return a;
});
exports.identity = identity;