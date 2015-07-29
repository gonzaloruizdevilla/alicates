'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _keys = require('./keys');

var _listReduce = require('../list/reduce');

var mapObj = function mapObj(fn, a) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = fn(a[key]), acc);
  }, {}, (0, _keys.keys)(a));
};
exports.mapObj = mapObj;