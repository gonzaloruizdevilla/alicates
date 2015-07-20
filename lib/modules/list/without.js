'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _logicNot = require('../logic/not');

var _any = require('./any');

var _filter = require('./filter');

/* jshint -W067 */

var without = (0, _functionalCurry.curry)(function (arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (function (filterFn) {
    return (filterFn = function (el) {
      return (0, _logicNot.not)((0, _any.any)(function (exclude) {
        return el === exclude;
      }, args));
    }, (0, _filter.filter)(filterFn, arr));
  })();
}, 2);
/* jshint +W067 */
exports.without = without;