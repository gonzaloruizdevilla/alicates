'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _multiply = require('./multiply');

var _listReduce = require('../list/reduce');

var product = function product(xs) {
  return (0, _listReduce.reduce)(_multiply.multiply, 1, xs);
};
exports.product = product;