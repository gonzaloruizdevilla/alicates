'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constructN = require('./constructN');

var construct = function construct(Fn) {
  return (0, _constructN.constructN)(Fn.length, Fn);
};
exports.construct = construct;