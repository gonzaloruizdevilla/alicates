'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _curry = require('./curry');

var bind = (0, _curry.curry)(function (fn, x) {
  return fn.bind(x);
});
exports.bind = bind;