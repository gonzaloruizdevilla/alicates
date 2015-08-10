'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listConcat = require('../list/concat');

var _listUniqWith = require('../list/uniqWith');

var _functionalCurry = require('../functional/curry');

var unionWith = (0, _functionalCurry.curry)(function (fn, xs, ys) {
  return (0, _listUniqWith.uniqWith)(fn, (0, _listConcat.concat)(xs, ys));
});
exports.unionWith = unionWith;