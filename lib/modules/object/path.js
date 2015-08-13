'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var path = (0, _functionalCurry.curry)(function (props, obj) {
  return (0, _listReduce.reduce)(function (acc, prop) {
    return acc !== undefined && acc !== null ? acc[prop] : undefined;
  }, obj, props);
});
exports.path = path;