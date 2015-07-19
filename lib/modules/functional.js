'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functionalCurry = require('./functional/curry');

var _curry = _interopRequireWildcard(_functionalCurry);

var _functionalIdentity = require('./functional/identity');

var _identity = _interopRequireWildcard(_functionalIdentity);

var _functionalMemoize = require('./functional/memoize');

var _memoize = _interopRequireWildcard(_functionalMemoize);

var _functionalT = require('./functional/t');

var _t = _interopRequireWildcard(_functionalT);

var _functionalF = require('./functional/f');

var _f = _interopRequireWildcard(_functionalF);

var _list = require('./list');

var curry = _curry.curry;
exports.curry = curry;
var identity = _identity.identity;
exports.identity = identity;
var memoize = _memoize.memoize;
exports.memoize = memoize;
var f = _f.f;
exports.f = f;
var t = _t.t;

exports.t = t;

var always = function always(a) {
  return function () {
    return a;
  };
};

exports.always = always;

var apply = function apply(fns, arr) {
  return (0, _list.reduce)(function (acc, fn) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray((0, _list.map)(fn, arr)));
  }, [], fns);
};

exports.apply = apply;

var sequence = function sequence() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (a) {
    return (0, _list.reduce)(function (a, fn) {
      return fn(a);
    }, a, fns);
  };
};

exports.sequence = sequence;

var compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return sequence.apply(undefined, _toConsumableArray((0, _list.reverse)(fns)));
};

exports.compose = compose;

var once = function once(fn) {
  return (function (executed, value) {
    return function () {
      return executed ? value : (executed = true, value = fn.apply(undefined, arguments));
    };
  })();
};

exports.once = once;

var lift = function lift(fn, arity) {
  return curry(function (x) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (0, _list.reduce)(apply, (0, _list.map)(curry(fn, arity), x), args);
  }, arity);
};
exports.lift = lift;