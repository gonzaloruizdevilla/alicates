'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listContains = require('../list/contains');

var _listReduce = require('../list/reduce');

var _keysIn = require('./keysIn');

var omit = (0, _functionalCurry.curry)(function (excludeKeys, obj) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (0, _listContains.contains)(key, excludeKeys) ? acc : (acc[key] = obj[key], acc);
  }, {}, (0, _keysIn.keysIn)(obj));
});
exports.omit = omit;