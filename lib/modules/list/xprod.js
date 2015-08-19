'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _unnest = require('./unnest');

var _map = require('./map');

var xprod = (0, _functionalCurry.curry)(function (xs, ys) {
  return (0, _unnest.unnest)((0, _map.map)(function (x) {
    return (0, _map.map)(function (y) {
      return [x, y];
    }, ys);
  }, xs));
});
exports.xprod = xprod;