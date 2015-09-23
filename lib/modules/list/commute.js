'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _commuteMap = require('./commuteMap');

var _functionalIdentity = require('../functional/identity');

var commute = (0, _commuteMap.commuteMap)(_functionalIdentity.identity);
exports.commute = commute;