'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _listMap = require('../list/map');

var _prop = require('./prop');

var props = (0, _functionalCurry.curry)(function (xs, a) {
  return (0, _listMap.map)(function (x) {
    return (0, _prop.prop)(x, a);
  }, xs);
});
exports.props = props;