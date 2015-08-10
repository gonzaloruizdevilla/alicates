'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var _listMap = require('../list/map');

var project = (0, _functionalCurry.curry)(function (props, xs) {
  return (0, _listMap.map)(function (x) {
    return (0, _listReduce.reduce)(function (acc, prop) {
      return (acc[prop] = x[prop], acc);
    }, {}, props);
  }, xs);
});
exports.project = project;