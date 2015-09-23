'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listMap = require('../list/map');

var lens = (0, _functionalCurry.curry)(function (getter, setter) {
  return function (f) {
    return function (s) {
      return (0, _listMap.map)(function (v) {
        return setter(v, s);
      }, f(getter(s)));
    };
  };
});
exports.lens = lens;