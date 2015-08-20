'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _curryN = require('./curryN');

var _constructN = function _constructN(n, Fn) {
  return (0, _curryN.curryN)(n, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(Fn, [null].concat(args)))();
  });
};

var throwError = function throwError() {
  throw new Error('Constructor with greater than ten arguments');
};

var constructN = (0, _curryN.curryN)(2, function (n, Fn) {
  return Fn.length > 10 ? throwError() : _constructN(n, Fn);
});
exports.constructN = constructN;