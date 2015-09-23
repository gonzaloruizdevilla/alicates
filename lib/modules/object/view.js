'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functorConst = require('../functor/Const');

var _functionalConstruct = require('../functional/construct');

var _functionalCurry = require('../functional/curry');

var view = (0, _functionalCurry.curry)(function (lens, x) {
  return lens((0, _functionalConstruct.construct)(_functorConst.Const))(x).value;
});
exports.view = view;