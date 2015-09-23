'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _stringMatch = require('./string/match');

_defaults(exports, _interopExportWildcard(_stringMatch, _defaults));

var _stringSplit = require('./string/split');

_defaults(exports, _interopExportWildcard(_stringSplit, _defaults));

var _stringTest = require('./string/test');

_defaults(exports, _interopExportWildcard(_stringTest, _defaults));

var _stringToLower = require('./string/toLower');

_defaults(exports, _interopExportWildcard(_stringToLower, _defaults));

var _stringToString = require('./string/toString');

Object.defineProperty(exports, 'toString', {
  enumerable: true,
  get: function get() {
    return _stringToString.toString;
  }
});

var _stringToUpper = require('./string/toUpper');

_defaults(exports, _interopExportWildcard(_stringToUpper, _defaults));

var _stringTrim = require('./string/trim');

_defaults(exports, _interopExportWildcard(_stringTrim, _defaults));