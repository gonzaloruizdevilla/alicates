'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _typeIsFunction = require('../type/isFunction');

var _keys = require('./keys');

var _listReduce = require('../list/reduce');

var _shallowClone = require('./shallowClone');

var evolve = (0, _functionalCurry.curry)(function (tx, x) {
  return (0, _listReduce.reduce)(function (acc, x) {
    return acc[x] === undefined ? acc : (0, _typeIsFunction.isFunction)(tx[x]) ? (acc[x] = tx[x](acc[x]), acc) : (acc[x] = evolve(tx[x], acc[x]), acc);
  }, (0, _shallowClone.shallowClone)(x), (0, _keys.keys)(tx));
});
exports.evolve = evolve;