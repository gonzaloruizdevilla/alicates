'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicEquals = require('../logic/equals');

var _objectProp = require('../object/prop');

var eqProps = (0, _functionalCurry.curry)(function (p, x, y) {
  return (0, _logicEquals.equals)((0, _objectProp.prop)(p, x), (0, _objectProp.prop)(p, y));
});
exports.eqProps = eqProps;