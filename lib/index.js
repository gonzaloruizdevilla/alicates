'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _modulesFunctional = require('./modules/functional');

var functional = _interopRequireWildcard(_modulesFunctional);

var _modulesFunctor = require('./modules/functor');

var functor = _interopRequireWildcard(_modulesFunctor);

var _modulesList = require('./modules/list');

var list = _interopRequireWildcard(_modulesList);

var _modulesLogic = require('./modules/logic');

var logic = _interopRequireWildcard(_modulesLogic);

var _modulesMath = require('./modules/math');

var math = _interopRequireWildcard(_modulesMath);

var _modulesObject = require('./modules/object');

var object = _interopRequireWildcard(_modulesObject);

var _modulesRelation = require('./modules/relation');

var relation = _interopRequireWildcard(_modulesRelation);

var _modulesString = require('./modules/string');

var string = _interopRequireWildcard(_modulesString);

var _modulesType = require('./modules/type');

var type = _interopRequireWildcard(_modulesType);

exports['default'] = Object.assign({}, functional, functor, list, logic, math, object, relation, string, type);
module.exports = exports['default'];