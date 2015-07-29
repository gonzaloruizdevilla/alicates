'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var clonePattern = function clonePattern(pattern) {
  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
};

var test = function test(pattern, s) {
  return clonePattern(pattern).test(s);
};
exports.test = test;