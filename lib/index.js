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

var always = functional.always;
exports.always = always;
var apply = functional.apply;
exports.apply = apply;
var compose = functional.compose;
exports.compose = compose;
var curry = functional.curry;
exports.curry = curry;
var f = functional.f;
exports.f = f;
var lift = functional.lift;
exports.lift = lift;
var once = functional.once;
exports.once = once;
var sequence = functional.sequence;
exports.sequence = sequence;
var t = functional.t;

exports.t = t;
var cond = logic.cond;
exports.cond = cond;
var equals = logic.equals;
exports.equals = equals;
var not = logic.not;
exports.not = not;
var or = logic.or;
exports.or = or;
var same = logic.same;

exports.same = same;
var all = list.all;
exports.all = all;
var any = list.any;
exports.any = any;
var concat = list.concat;
exports.concat = concat;
var contains = list.contains;
exports.contains = contains;
var difference = list.difference;
exports.difference = difference;
var filter = list.filter;
exports.filter = filter;
var head = list.head;
exports.head = head;
var init = list.init;
exports.init = init;
var intersection = list.intersection;
exports.intersection = intersection;
var last = list.last;
exports.last = last;
var map = list.map;
exports.map = map;
var none = list.none;
exports.none = none;
var reduce = list.reduce;
exports.reduce = reduce;
var reduceRight = list.reduceRight;
exports.reduceRight = reduceRight;
var reverse = list.reverse;
exports.reverse = reverse;
var tail = list.tail;
exports.tail = tail;
var unique = list.unique;
exports.unique = unique;
var without = list.without;
exports.without = without;
var zip = list.zip;

exports.zip = zip;
var add = math.add;
exports.add = add;
var addAll = math.addAll;
exports.addAll = addAll;