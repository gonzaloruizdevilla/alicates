'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _containsWith = require('./containsWith');

var _logicEquals = require('../logic/equals');

var contains = (0, _containsWith.containsWith)(_logicEquals.equals);
exports.contains = contains;