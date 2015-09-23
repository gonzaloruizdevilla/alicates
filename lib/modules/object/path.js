'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listReduce = require('../list/reduce');

var _typeIsNil = require('../type/isNil');

var path = (0, _functionalCurry.curry)(function (props, obj) {
  return (0, _listReduce.reduce)(function (acc, prop) {
    return !(0, _typeIsNil.isNil)(acc) ? acc[prop] : undefined;
  }, obj, props);
});
exports.path = path;