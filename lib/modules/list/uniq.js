'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logicEquals = require('../logic/equals');

var _uniqWith = require('./uniqWith');

var uniq = (0, _uniqWith.uniqWith)(_logicEquals.equals);
exports.uniq = uniq;