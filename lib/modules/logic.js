'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('./functional/curry');

var _logicNot = require('./logic/not');

var _not = _interopRequireWildcard(_logicNot);

var _logicEquals = require('./logic/equals');

var _equals = _interopRequireWildcard(_logicEquals);

var _logicAllPass = require('./logic/allPass');

var _allPass = _interopRequireWildcard(_logicAllPass);

var _logicAnyPass = require('./logic/anyPass');

var _anyPass = _interopRequireWildcard(_logicAnyPass);

var not = _not.not;
exports.not = not;
var equals = _equals.equals;
exports.equals = equals;
var allPass = _allPass.allPass;
exports.allPass = allPass;
var anyPass = _anyPass.anyPass;

exports.anyPass = anyPass;

var or = (0, _functionalCurry.curry)(function (a, b) {
  return a || b;
});

exports.or = or;

var same = (0, _functionalCurry.curry)(function (a, b) {
  return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b // NaN === NaN -> false;
  ;
});

exports.same = same;
/* jshint -W067 */

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
/* jshint +W067 */
exports.cond = cond;