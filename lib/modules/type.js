'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _typeIs = require('./type/is');

_defaults(exports, _interopRequireWildcard(_typeIs));

var _typeIsArray = require('./type/isArray');

_defaults(exports, _interopRequireWildcard(_typeIsArray));

var _typeIsArrayLike = require('./type/isArrayLike');

_defaults(exports, _interopRequireWildcard(_typeIsArrayLike));

var _typeIsDate = require('./type/isDate');

_defaults(exports, _interopRequireWildcard(_typeIsDate));

var _typeIsFunction = require('./type/isFunction');

_defaults(exports, _interopRequireWildcard(_typeIsFunction));

var _typeIsNil = require('./type/isNil');

_defaults(exports, _interopRequireWildcard(_typeIsNil));

var _typeIsObject = require('./type/isObject');

_defaults(exports, _interopRequireWildcard(_typeIsObject));

var _typeIsRegExp = require('./type/isRegExp');

_defaults(exports, _interopRequireWildcard(_typeIsRegExp));

var _typeIsString = require('./type/isString');

_defaults(exports, _interopRequireWildcard(_typeIsString));

var _typePropIs = require('./type/propIs');

_defaults(exports, _interopRequireWildcard(_typePropIs));

var _typeType = require('./type/type');

_defaults(exports, _interopRequireWildcard(_typeType));