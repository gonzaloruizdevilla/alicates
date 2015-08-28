'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _logicAllPass = require('./logic/allPass');

_defaults(exports, _interopRequireWildcard(_logicAllPass));

var _logicAnd = require('./logic/and');

_defaults(exports, _interopRequireWildcard(_logicAnd));

var _logicAnyPass = require('./logic/anyPass');

_defaults(exports, _interopRequireWildcard(_logicAnyPass));

var _logicBoth = require('./logic/both');

_defaults(exports, _interopRequireWildcard(_logicBoth));

var _logicComplement = require('./logic/complement');

_defaults(exports, _interopRequireWildcard(_logicComplement));

var _logicCond = require('./logic/cond');

_defaults(exports, _interopRequireWildcard(_logicCond));

var _logicDefaultTo = require('./logic/defaultTo');

_defaults(exports, _interopRequireWildcard(_logicDefaultTo));

var _logicEither = require('./logic/either');

_defaults(exports, _interopRequireWildcard(_logicEither));

var _logicEquals = require('./logic/equals');

_defaults(exports, _interopRequireWildcard(_logicEquals));

var _logicIfElse = require('./logic/ifElse');

_defaults(exports, _interopRequireWildcard(_logicIfElse));

var _logicIsEmpty = require('./logic/isEmpty');

_defaults(exports, _interopRequireWildcard(_logicIsEmpty));

var _logicNot = require('./logic/not');

_defaults(exports, _interopRequireWildcard(_logicNot));

var _logicOr = require('./logic/or');

_defaults(exports, _interopRequireWildcard(_logicOr));

var _logicPropSatisfies = require('./logic/propSatisfies');

_defaults(exports, _interopRequireWildcard(_logicPropSatisfies));

var _logicSame = require('./logic/same');

_defaults(exports, _interopRequireWildcard(_logicSame));