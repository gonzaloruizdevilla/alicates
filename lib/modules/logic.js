'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _logicAllPass = require('./logic/allPass');

_defaults(exports, _interopExportWildcard(_logicAllPass, _defaults));

var _logicAnd = require('./logic/and');

_defaults(exports, _interopExportWildcard(_logicAnd, _defaults));

var _logicAnyPass = require('./logic/anyPass');

_defaults(exports, _interopExportWildcard(_logicAnyPass, _defaults));

var _logicBoth = require('./logic/both');

_defaults(exports, _interopExportWildcard(_logicBoth, _defaults));

var _logicComplement = require('./logic/complement');

_defaults(exports, _interopExportWildcard(_logicComplement, _defaults));

var _logicCond = require('./logic/cond');

_defaults(exports, _interopExportWildcard(_logicCond, _defaults));

var _logicDefaultTo = require('./logic/defaultTo');

_defaults(exports, _interopExportWildcard(_logicDefaultTo, _defaults));

var _logicEither = require('./logic/either');

_defaults(exports, _interopExportWildcard(_logicEither, _defaults));

var _logicEquals = require('./logic/equals');

_defaults(exports, _interopExportWildcard(_logicEquals, _defaults));

var _logicIfElse = require('./logic/ifElse');

_defaults(exports, _interopExportWildcard(_logicIfElse, _defaults));

var _logicIsEmpty = require('./logic/isEmpty');

_defaults(exports, _interopExportWildcard(_logicIsEmpty, _defaults));

var _logicNot = require('./logic/not');

_defaults(exports, _interopExportWildcard(_logicNot, _defaults));

var _logicOr = require('./logic/or');

_defaults(exports, _interopExportWildcard(_logicOr, _defaults));

var _logicPropSatisfies = require('./logic/propSatisfies');

_defaults(exports, _interopExportWildcard(_logicPropSatisfies, _defaults));

var _logicSame = require('./logic/same');

_defaults(exports, _interopExportWildcard(_logicSame, _defaults));