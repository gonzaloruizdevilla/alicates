/* jshint -W067 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var cond = function cond(arr) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (function (aux) {
      return (aux = function (_ref) {
        var _ref2 = _toArray(_ref);

        var x = _ref2[0];

        var arr = _ref2.slice(1);

        return x === undefined ? undefined : x[0].apply(x, args) ? x[1].apply(x, args) : aux(arr);
      })(arr);
    })();
  };
};
exports.cond = cond;
/* jshint +W067 */