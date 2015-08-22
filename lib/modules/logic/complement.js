"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var complement = function complement(fn1) {
  return function () {
    return !fn1.apply(undefined, arguments);
  };
};
exports.complement = complement;