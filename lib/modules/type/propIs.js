'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicPropSatisfies = require('../logic/propSatisfies');

var _typeIs = require('../type/is');

var propIs = (0, _functionalCurry.curry)(function (type, prop, obj) {
  return (0, _logicPropSatisfies.propSatisfies)((0, _typeIs.is)(type), prop, obj);
});
exports.propIs = propIs;