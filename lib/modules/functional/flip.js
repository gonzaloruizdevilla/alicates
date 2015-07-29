'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var flip = function flip(fn) {
  return (0, _functionalCurry.curry)(function (x, y) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return fn.apply(undefined, [y, x].concat(args));
  });
};
exports.flip = flip;