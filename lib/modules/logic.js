'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _logicAllPass = require('./logic/allPass');

var _allPass = _interopRequireWildcard(_logicAllPass);

var _logicAnyPass = require('./logic/anyPass');

var _anyPass = _interopRequireWildcard(_logicAnyPass);

var _logicCond = require('./logic/cond');

var _cond = _interopRequireWildcard(_logicCond);

var _logicEquals = require('./logic/equals');

var _equals = _interopRequireWildcard(_logicEquals);

var _logicNot = require('./logic/not');

var _not = _interopRequireWildcard(_logicNot);

var _logicOr = require('./logic/or');

var _or = _interopRequireWildcard(_logicOr);

var _logicSame = require('./logic/same');

var _same = _interopRequireWildcard(_logicSame);

var allPass = _allPass.allPass;
exports.allPass = allPass;
var anyPass = _anyPass.anyPass;
exports.anyPass = anyPass;
var cond = _cond.cond;
exports.cond = cond;
var equals = _equals.equals;
exports.equals = equals;
var not = _not.not;
exports.not = not;
var or = _or.or;
exports.or = or;
var same = _same.same;
exports.same = same;