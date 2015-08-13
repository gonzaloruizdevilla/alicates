'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _functionalCurry = require('../functional/curry');

var pickAll = (0, _functionalCurry.curry)(function (keys, obj) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = obj[key], acc);
  }, {}, keys);
});
exports.pickAll = pickAll;