'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _keys = require('./keys');

var _listReduce = require('../list/reduce');

var mapObjIndexed = (0, _functionalCurry.curry)(function (fn, a) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = fn(a[key], key, a), acc);
  }, {}, (0, _keys.keys)(a));
});
exports.mapObjIndexed = mapObjIndexed;