'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _shallowClone = require('./shallowClone');

var dissoc = (0, _functionalCurry.curry)(function (key, obj) {
  var newObj = (0, _shallowClone.shallowClone)(obj);
  delete newObj[key];
  return newObj;
});
exports.dissoc = dissoc;