'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var isRegExp = function isRegExp(a) {
  return toString.call(a) === '[object RegExp]';
};
exports.isRegExp = isRegExp;