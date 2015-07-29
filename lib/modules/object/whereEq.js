'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _mapObj = require('./mapObj');

var _where = require('./where');

var whereEq = (0, _functionalCurry.curry)(function (spec, obj) {
  return (0, _where.where)((0, _mapObj.mapObj)(_logicEquals.equals, spec), obj);
});
exports.whereEq = whereEq;