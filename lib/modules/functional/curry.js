'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _arity = require('./arity');

var _curry = function _curry(fn, farity, more) {
    return (0, _arity.arity)(farity, function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return args.length < farity ? _curry(fn, farity - args.length, [].concat(_toConsumableArray(more), args)) : fn.call.apply(fn, [this].concat(_toConsumableArray(more), args));
    });
};

var curry = function curry(fn, farity) {
    return _curry(fn, farity || fn.length, []);
};
exports.curry = curry;