'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isFunction = require('./isFunction');

var isTransformer = function isTransformer(x) {
  return (0, _isFunction.isFunction)(x['@@transducer/step']);
};
exports.isTransformer = isTransformer;