'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isFunction = require('./isFunction');

var isTransducer = function isTransducer(x) {
  return (0, _isFunction.isFunction)(x['@@transducer/step']);
};
exports.isTransducer = isTransducer;