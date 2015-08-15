'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _curry = require('./curry');

var _construct = function _construct(Fn) {
  return (0, _curry.curry)(function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(Fn, [null].concat(args)))();
  }, Fn.length);
};

var throwError = function throwError() {
  throw new Error('Constructor with greater than ten arguments');
};

var construct = function construct(Fn) {
  return Fn.length > 10 ? throwError() : _construct(Fn);
};
exports.construct = construct;