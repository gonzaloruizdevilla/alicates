'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var concat = (0, _functionalCurry.curry)(function () {
  var _ref;

  return (_ref = []).concat.apply(_ref, arguments);
}, 2);
exports.concat = concat;