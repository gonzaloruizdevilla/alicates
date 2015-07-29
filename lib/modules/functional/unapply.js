"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var unapply = function unapply(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn(args);
  };
};
exports.unapply = unapply;