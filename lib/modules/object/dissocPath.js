'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listInit = require('../list/init');

var _listLast = require('../list/last');

var _listReduce = require('../list/reduce');

var _shallowClone = require('./shallowClone');

var dissocPath = (0, _functionalCurry.curry)(function (keys, obj) {
  var newObj = (0, _shallowClone.shallowClone)(obj);
  var ref = newObj;
  if (keys.length) {
    (0, _listReduce.reduce)(function (acc, key) {
      return ref = acc[key] ? acc[key] = (0, _shallowClone.shallowClone)(acc[key]) : {};
    }, newObj, (0, _listInit.init)(keys));
    delete ref[(0, _listLast.last)(keys)];
  }
  return newObj;
});
exports.dissocPath = dissocPath;