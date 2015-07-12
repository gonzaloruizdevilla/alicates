'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('./functional/curry');

var _list = require('./list');

var add = (0, _functionalCurry.curry)(function (a, b) {
  return a + b;
});

exports.add = add;

var addAll = function addAll() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _list.reduce)(add, 0, args);
};
exports.addAll = addAll;