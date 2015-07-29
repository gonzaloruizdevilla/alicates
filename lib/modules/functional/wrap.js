'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalArity = require('../functional/arity');

var _functionalCurry = require('../functional/curry');

var wrap = function wrap(fn, wrapper) {
  return (0, _functionalCurry.curry)((0, _functionalArity.arity)(fn.length, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return wrapper.apply(undefined, [fn].concat(args));
  }));
};
exports.wrap = wrap;