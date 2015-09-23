'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _shallowClone = require('./shallowClone');

var assoc = (0, _functionalCurry.curry)(function (key, value, obj) {
  var newObj = (0, _shallowClone.shallowClone)(obj);
  newObj[key] = value;
  return newObj;
});
exports.assoc = assoc;