'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _arity = require('./arity');

var _listUnfold = require('../list/unfold');

var _listLast = require('../list/last');

var continues = function continues(_ref) {
  var count = _ref.count;
  var n = _ref.n;
  return count < n;
};

var lastRun = function lastRun(_ref2) {
  var count = _ref2.count;
  var fn = _ref2.fn;
  var n = _ref2.n;
  return count + fn.length >= n;
};

var applyFn = function applyFn(_ref3, rest) {
  var fn = _ref3.fn;
  var args = _ref3.args;
  var count = _ref3.count;
  return fn.apply(undefined, _toConsumableArray(args.slice(count, rest ? undefined : count + (fn.length || 1))));
};

var nextSeed = function nextSeed(seed) {
  return {
    count: seed.count + seed.fn.length,
    fn: !lastRun(seed) && applyFn(seed),
    n: seed.n,
    args: seed.args
  };
};

var nextValue = function nextValue(seed) {
  return lastRun(seed) && applyFn(seed, true);
};

var uncurryN = function uncurryN(n, fn) {
  return (0, _arity.arity)(n, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _listLast.last)((0, _listUnfold.unfold)(function (seed) {
      return continues(seed) ? [nextValue(seed), nextSeed(seed)] : false;
    }, { args: args, n: n, fn: fn, count: 0 }));
  });
};
exports.uncurryN = uncurryN;