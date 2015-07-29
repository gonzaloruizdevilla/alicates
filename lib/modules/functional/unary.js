"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var unary = function unary(fn) {
  return function (x) {
    return fn(x);
  };
};
exports.unary = unary;