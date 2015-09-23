'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _functorConst = require('./functor/Const');

_defaults(exports, _interopExportWildcard(_functorConst, _defaults));

var _functorIdentity = require('./functor/Identity');

_defaults(exports, _interopExportWildcard(_functorIdentity, _defaults));

var _functorList = require('./functor/List');

_defaults(exports, _interopExportWildcard(_functorList, _defaults));

var _functorMaybe = require('./functor/Maybe');

_defaults(exports, _interopExportWildcard(_functorMaybe, _defaults));