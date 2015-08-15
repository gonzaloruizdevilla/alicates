'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _assoc = require('./assoc');

var _lens = require('./lens');

var _prop = require('./prop');

var lensProp = function lensProp(k) {
  return (0, _lens.lens)((0, _prop.prop)(k), (0, _assoc.assoc)(k));
};
exports.lensProp = lensProp;