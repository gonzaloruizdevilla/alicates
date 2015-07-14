'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('./functional/curry');

var _logicNot = require('./logic/not');

var reduce = (0, _functionalCurry.curry)(function (fn, acc, _ref) {
  var _ref2 = _toArray(_ref);

  var x = _ref2[0];

  var arr = _ref2.slice(1);

  return x !== undefined ? reduce(fn, fn(acc, x), arr) : acc;
});

exports.reduce = reduce;

var head = function head(arr) {
  return arr[0];
};

exports.head = head;

var init = function init(arr) {
  return arr.slice(0, -1);
};

exports.init = init;

var last = function last(arr) {
  return arr.slice(-1)[0];
};

exports.last = last;

var tail = function tail(arr) {
  return arr.slice(1);
};

exports.tail = tail;

var reduceRight = (0, _functionalCurry.curry)(function (fn, acc, arr) {
  return last(arr) !== undefined ? reduceRight(fn, fn(last(arr), acc), init(arr)) : acc;
});

exports.reduceRight = reduceRight;

var map = (0, _functionalCurry.curry)(function (fn, arr) {
  return reduce(function (acc, x) {
    return [].concat(_toConsumableArray(acc), [fn(x)]);
  }, [], arr);
});

exports.map = map;

var filter = (0, _functionalCurry.curry)(function (fn, arr) {
  return reduce(function (acc, x) {
    return fn(x) ? [].concat(_toConsumableArray(acc), [x]) : acc;
  }, [], arr);
});

exports.filter = filter;

var reverse = function reverse(arr) {
  return reduce(function (acc, x) {
    return [x].concat(_toConsumableArray(acc));
  }, [], arr);
};

exports.reverse = reverse;

var all = (0, _functionalCurry.curry)(function (fn, _ref3) {
  var _ref32 = _toArray(_ref3);

  var x = _ref32[0];

  var arr = _ref32.slice(1);

  return x === undefined ? true : fn(x) ? all(fn, arr) : false;
});

exports.all = all;

var any = (0, _functionalCurry.curry)(function (fn, _ref4) {
  var _ref42 = _toArray(_ref4);

  var x = _ref42[0];

  var arr = _ref42.slice(1);

  return x === undefined ? false : fn(x) ? true : any(fn, arr);
});

exports.any = any;

var none = (0, _functionalCurry.curry)(function (fn, _ref5) {
  var _ref52 = _toArray(_ref5);

  var x = _ref52[0];

  var arr = _ref52.slice(1);

  return x === undefined ? true : fn(x) ? false : none(fn, arr);
});

exports.none = none;
/* jshint -W067 */

var zip = (0, _functionalCurry.curry)(function (arr1, arr2) {
  return (function (aux) {
    return (aux = function (_ref6, _ref7, acc) {
      var _ref62 = _toArray(_ref6);

      var x1 = _ref62[0];

      var arr1 = _ref62.slice(1);

      var _ref72 = _toArray(_ref7);

      var x2 = _ref72[0];

      var arr2 = _ref72.slice(1);

      return x1 === undefined || x2 === undefined ? acc : aux(arr1, arr2, [].concat(_toConsumableArray(acc), [[x1, x2]]));
    })(arr1, arr2, []);
  })();
});
exports.zip = zip;
/* jshint +W067 */

var concat = (0, _functionalCurry.curry)(function () {
  var _ref8;

  return (_ref8 = []).concat.apply(_ref8, arguments);
}, 2);

exports.concat = concat;

var unique = function unique(arr) {
  return [].concat(_toConsumableArray(new Set(arr)));
};

exports.unique = unique;
/* jshint -W067 */

var without = (0, _functionalCurry.curry)(function (arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (function (filterFn) {
    return (filterFn = function (el) {
      return (0, _logicNot.not)(any(function (exclude) {
        return el === exclude;
      }, args));
    }, filter(filterFn, arr));
  })();
}, 2);
exports.without = without;
/* jshint +W067 */

/* jshint -W016 */

var contains = (0, _functionalCurry.curry)(function (x, arr) {
  return !! ~arr.indexOf(x);
});
exports.contains = contains;
/* jshint +W016 */

var intersection = (0, _functionalCurry.curry)(function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return filter(function (el) {
    return all(contains(el), args);
  }, [].concat(_toConsumableArray(new (_bind.apply(Set, [null].concat(args)))())));
}, 2);

exports.intersection = intersection;

var difference = (0, _functionalCurry.curry)(function (arr) {
  for (var _len3 = arguments.length, others = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    others[_key3 - 1] = arguments[_key3];
  }

  return filter(function (el) {
    return none(contains(el), others);
  }, arr);
}, 2);
exports.difference = difference;