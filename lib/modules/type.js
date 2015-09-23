'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _typeIs = require('./type/is');

_defaults(exports, _interopExportWildcard(_typeIs, _defaults));

var _typeIsArray = require('./type/isArray');

_defaults(exports, _interopExportWildcard(_typeIsArray, _defaults));

var _typeIsArrayLike = require('./type/isArrayLike');

_defaults(exports, _interopExportWildcard(_typeIsArrayLike, _defaults));

var _typeIsDate = require('./type/isDate');

_defaults(exports, _interopExportWildcard(_typeIsDate, _defaults));

var _typeIsFunction = require('./type/isFunction');

_defaults(exports, _interopExportWildcard(_typeIsFunction, _defaults));

var _typeIsNil = require('./type/isNil');

_defaults(exports, _interopExportWildcard(_typeIsNil, _defaults));

var _typeIsObject = require('./type/isObject');

_defaults(exports, _interopExportWildcard(_typeIsObject, _defaults));

var _typeIsRegExp = require('./type/isRegExp');

_defaults(exports, _interopExportWildcard(_typeIsRegExp, _defaults));

var _typeIsString = require('./type/isString');

_defaults(exports, _interopExportWildcard(_typeIsString, _defaults));

var _typePropIs = require('./type/propIs');

_defaults(exports, _interopExportWildcard(_typePropIs, _defaults));

var _typeType = require('./type/type');

_defaults(exports, _interopExportWildcard(_typeType, _defaults));