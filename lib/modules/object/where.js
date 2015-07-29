'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listAll = require('../list/all');

var _functionalCurry = require('../functional/curry');

var _keys = require('./keys');

var where = (0, _functionalCurry.curry)(function (spec, obj) {
  return (0, _listAll.all)(function (key) {
    return spec[key](obj[key]);
  }, (0, _keys.keys)(spec));
});
exports.where = where;