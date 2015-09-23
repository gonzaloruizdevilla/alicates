'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listInit = require('../list/init');

var _listLast = require('../list/last');

var _listReduce = require('../list/reduce');

var _shallowClone = require('./shallowClone');

var assocPath = (0, _functionalCurry.curry)(function (keys, value, obj) {
  var newObj = (0, _shallowClone.shallowClone)(obj);
  if (keys.length) {
    (0, _listReduce.reduce)(function (acc, key) {
      return acc[key] = acc[key] || {};
    }, newObj, (0, _listInit.init)(keys))[(0, _listLast.last)(keys)] = value;
  }
  return newObj;
});
exports.assocPath = assocPath;