'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var arity = function arity(n, fn) {
  return n === 0 ? function () {
    return fn.apply(undefined, arguments);
  } : n === 1 ? function (a0) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(undefined, [a0].concat(args));
  } : n === 2 ? function (a0, a1) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return fn.apply(undefined, [a0, a1].concat(args));
  } : n === 3 ? function (a0, a1, a2) {
    for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      args[_key3 - 3] = arguments[_key3];
    }

    return fn.apply(undefined, [a0, a1, a2].concat(args));
  } : n === 4 ? function (a0, a1, a2, a3) {
    for (var _len4 = arguments.length, args = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
      args[_key4 - 4] = arguments[_key4];
    }

    return fn.apply(undefined, [a0, a1, a2, a3].concat(args));
  } : n === 5 ? function (a0, a1, a2, a3, a4) {
    for (var _len5 = arguments.length, args = Array(_len5 > 5 ? _len5 - 5 : 0), _key5 = 5; _key5 < _len5; _key5++) {
      args[_key5 - 5] = arguments[_key5];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4].concat(args));
  } : n === 6 ? function (a0, a1, a2, a3, a4, a5) {
    for (var _len6 = arguments.length, args = Array(_len6 > 6 ? _len6 - 6 : 0), _key6 = 6; _key6 < _len6; _key6++) {
      args[_key6 - 6] = arguments[_key6];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4, a5].concat(args));
  } : n === 7 ? function (a0, a1, a2, a3, a4, a5, a6) {
    for (var _len7 = arguments.length, args = Array(_len7 > 7 ? _len7 - 7 : 0), _key7 = 7; _key7 < _len7; _key7++) {
      args[_key7 - 7] = arguments[_key7];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4, a5, a6].concat(args));
  } : n === 8 ? function (a0, a1, a2, a3, a4, a5, a6, a7) {
    for (var _len8 = arguments.length, args = Array(_len8 > 8 ? _len8 - 8 : 0), _key8 = 8; _key8 < _len8; _key8++) {
      args[_key8 - 8] = arguments[_key8];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4, a5, a6, a7].concat(args));
  } : n === 9 ? function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    for (var _len9 = arguments.length, args = Array(_len9 > 9 ? _len9 - 9 : 0), _key9 = 9; _key9 < _len9; _key9++) {
      args[_key9 - 9] = arguments[_key9];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4, a5, a6, a7, a8].concat(args));
  } : n === 10 ? function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    for (var _len10 = arguments.length, args = Array(_len10 > 10 ? _len10 - 10 : 0), _key10 = 10; _key10 < _len10; _key10++) {
      args[_key10 - 10] = arguments[_key10];
    }

    return fn.apply(undefined, [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9].concat(args));
  } : (function () {
    throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  })();
};
exports.arity = arity;