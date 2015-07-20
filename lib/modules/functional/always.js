"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var always = function always(a) {
  return function () {
    return a;
  };
};
exports.always = always;