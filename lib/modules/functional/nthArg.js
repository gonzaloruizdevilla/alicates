'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listNth = require('../list/nth');

var nthArg = function nthArg(n) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _listNth.nth)(n, args);
  };
};
exports.nthArg = nthArg;