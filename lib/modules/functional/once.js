"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var once = function once(fn) {
  return (function (executed, value) {
    return function () {
      return executed ? value : (executed = true, value = fn.apply(undefined, arguments));
    };
  })();
};
exports.once = once;