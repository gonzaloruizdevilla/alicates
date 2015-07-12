/* jshint -W067 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var curry = function curry(fn, arity) {
  return (function (curried) {
    return curried = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.length < (arity || fn.length) ? function () {
        for (var _len2 = arguments.length, more = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          more[_key2] = arguments[_key2];
        }

        return curried.apply(undefined, args.concat(more));
      } : fn.apply(undefined, args);
    };
  })();
};
/* jshint +W067 */
exports.curry = curry;