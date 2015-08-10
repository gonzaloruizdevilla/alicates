'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var propOr = (0, _functionalCurry.curry)(function (def, name, x) {
  return x && x.hasOwnProperty(name) ? x[name] : def;
});
exports.propOr = propOr;