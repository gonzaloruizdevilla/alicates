'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var _keys = require('./keys');

var merge = (0, _functionalCurry.curry)(function (a, b) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = b[key], acc);
  }, (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = a[key], acc);
  }, {}, (0, _keys.keys)(a)), (0, _keys.keys)(b));
});
exports.merge = merge;