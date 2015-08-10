'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listConcat = require('../list/concat');

var _functionalCurry = require('../functional/curry');

var _listUniq = require('../list/uniq');

var union = (0, _functionalCurry.curry)(function (xs, ys) {
  return (0, _listUniq.uniq)((0, _listConcat.concat)(xs, ys));
});
exports.union = union;