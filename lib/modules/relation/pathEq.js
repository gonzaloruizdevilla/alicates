'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logicEquals = require('../logic/equals');

var _objectPath = require('../object/path');

var pathEq = function pathEq(props, value, obj) {
  return (0, _logicEquals.equals)(value, (0, _objectPath.path)(props, obj));
};
exports.pathEq = pathEq;