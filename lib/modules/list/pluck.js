'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _map = require('./map');

var pluck = (0, _functionalCurry.curry)(function (prop, arr) {
  return (0, _map.map)(function (a) {
    return a[prop];
  }, arr);
});
exports.pluck = pluck;