"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keysIn = function keysIn(a) {
  var ks = [];
  for (var prop in a) {
    ks[ks.length] = prop;
  }
  return ks;
};
exports.keysIn = keysIn;