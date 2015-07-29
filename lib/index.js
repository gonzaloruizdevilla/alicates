'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _modulesFunctional = require('./modules/functional');

var functional = _interopRequireWildcard(_modulesFunctional);

var _modulesLogic = require('./modules/logic');

var logic = _interopRequireWildcard(_modulesLogic);

var _modulesList = require('./modules/list');

var list = _interopRequireWildcard(_modulesList);

var _modulesMath = require('./modules/math');

var math = _interopRequireWildcard(_modulesMath);

var _modulesType = require('./modules/type');

var type = _interopRequireWildcard(_modulesType);

var _modulesString = require('./modules/string');

var string = _interopRequireWildcard(_modulesString);

var _modulesObject = require('./modules/object');

var object = _interopRequireWildcard(_modulesObject);

exports['default'] = Object.assign({}, functional, logic, list, math, type, string, object);
module.exports = exports['default'];