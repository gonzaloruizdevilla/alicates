'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _dropRepeatsWith = require('./dropRepeatsWith');

var _logicEquals = require('../logic/equals');

var dropRepeats = (0, _dropRepeatsWith.dropRepeatsWith)(_logicEquals.equals);
exports.dropRepeats = dropRepeats;