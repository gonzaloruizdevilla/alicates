'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _differenceWith = require('./differenceWith');

var _logicEquals = require('../logic/equals');

var difference = (0, _differenceWith.differenceWith)(_logicEquals.equals);
exports.difference = difference;