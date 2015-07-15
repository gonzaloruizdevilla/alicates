'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var isDate = function isDate(a) {
  return toString.call(a) === '[object Date]';
};
exports.isDate = isDate;