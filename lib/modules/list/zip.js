'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _functionalCurry = require('../functional/curry');

/* jshint -W067 */

var zip = (0, _functionalCurry.curry)(function (arr1, arr2) {
  return (function (aux) {
    return (aux = function (_ref, _ref3, acc) {
      var _ref2 = _toArray(_ref);

      var x1 = _ref2[0];

      var arr1 = _ref2.slice(1);

      var _ref32 = _toArray(_ref3);

      var x2 = _ref32[0];

      var arr2 = _ref32.slice(1);

      return x1 === undefined || x2 === undefined ? acc : aux(arr1, arr2, [].concat(_toConsumableArray(acc), [[x1, x2]]));
    })(arr1, arr2, []);
  })();
});
/* jshint +W067 */
exports.zip = zip;