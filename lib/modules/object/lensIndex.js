'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lens = require('./lens');

var _listUpdate = require('../list/update');

var lensIndex = function lensIndex(k) {
  return (0, _lens.lens)(function (xs) {
    return xs[k];
  }, (0, _listUpdate.update)(k));
};
exports.lensIndex = lensIndex;