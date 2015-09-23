'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _keysIn = require('./keysIn');

var _listReduce = require('../list/reduce');

var pickBy = (0, _functionalCurry.curry)(function (fn, obj) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (fn(obj[key], key, obj) ? acc[key] = obj[key] : void 0, acc);
  }, {}, (0, _keysIn.keysIn)(obj));
});
exports.pickBy = pickBy;