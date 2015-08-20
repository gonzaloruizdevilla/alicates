'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurryN = require('../functional/curryN');

var concat = (0, _functionalCurryN.curryN)(2, function () {
  var _ref;

  return (_ref = []).concat.apply(_ref, arguments);
});
exports.concat = concat;