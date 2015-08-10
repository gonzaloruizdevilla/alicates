'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _objectProp = require('../object/prop');

var _logicEquals = require('../logic/equals');

var propEq = (0, _functionalCurry.curry)(function (name, obj, testObj) {
  return (0, _logicEquals.equals)(obj, (0, _objectProp.prop)(name, testObj));
});
exports.propEq = propEq;