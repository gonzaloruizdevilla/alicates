'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _keysIn = require('./keysIn');

var shallowClone = function shallowClone(x) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (acc[key] = x[key], acc);
  }, {}, (0, _keysIn.keysIn)(x));
};
exports.shallowClone = shallowClone;