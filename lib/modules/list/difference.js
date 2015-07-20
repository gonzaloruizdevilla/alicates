'use strict';

Object.defineProperty(exports, '__esModule', {
      value: true
});

var _functionalCurry = require('../functional/curry');

var _contains = require('./contains');

var _none = require('./none');

var _filter = require('./filter');

var difference = (0, _functionalCurry.curry)(function (arr) {
      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            others[_key - 1] = arguments[_key];
      }

      return (0, _filter.filter)(function (el) {
            return (0, _none.none)((0, _contains.contains)(el), others);
      }, arr);
}, 2);
exports.difference = difference;