"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isIterable = function isIterable(x) {
  return x[Symbol.iterator];
};
exports.isIterable = isIterable;