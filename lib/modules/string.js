'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _stringMatch = require('./string/match');

_defaults(exports, _interopRequireWildcard(_stringMatch));

var _stringSplit = require('./string/split');

_defaults(exports, _interopRequireWildcard(_stringSplit));

var _stringTest = require('./string/test');

_defaults(exports, _interopRequireWildcard(_stringTest));

var _stringToLower = require('./string/toLower');

_defaults(exports, _interopRequireWildcard(_stringToLower));

var _stringToString = require('./string/toString');

Object.defineProperty(exports, 'toString', {
  enumerable: true,
  get: function get() {
    return _stringToString.toString;
  }
});

var _stringToUpper = require('./string/toUpper');

_defaults(exports, _interopRequireWildcard(_stringToUpper));

var _stringTrim = require('./string/trim');

_defaults(exports, _interopRequireWildcard(_stringTrim));