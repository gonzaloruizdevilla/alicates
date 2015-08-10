'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var propSatisfies = (0, _functionalCurry.curry)(function (fn, prop, obj) {
  return !!fn(obj[prop]);
});
exports.propSatisfies = propSatisfies;