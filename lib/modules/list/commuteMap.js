'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _append = require('./append');

var _functionalAp = require('../functional/ap');

var _functionalCurry = require('../functional/curry');

var _map = require('./map');

var _reduce = require('./reduce');

var commuteMap = (0, _functionalCurry.curry)(function (fn, of, xs) {
  return (0, _reduce.reduce)(function (acc, ftor) {
    return (0, _functionalAp.ap)((0, _map.map)(_append.append, fn(ftor)), acc);
  }, of([]), xs);
});
exports.commuteMap = commuteMap;