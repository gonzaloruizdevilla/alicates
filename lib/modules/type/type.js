'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var type = function type(x) {
  return ({}).toString.call(x).split(' ').pop().slice(0, -1);
};
exports.type = type;