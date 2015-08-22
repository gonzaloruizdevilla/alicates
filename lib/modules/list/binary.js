"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var binary = function binary(fn) {
  return function (a, b) {
    return fn(a, b);
  };
};
exports.binary = binary;