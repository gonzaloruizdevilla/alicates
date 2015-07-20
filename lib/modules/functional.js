'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _functionalAlways = require('./functional/always');

var _always = _interopRequireWildcard(_functionalAlways);

var _functionalApply = require('./functional/apply');

var _apply = _interopRequireWildcard(_functionalApply);

var _functionalCurry = require('./functional/curry');

var _curry = _interopRequireWildcard(_functionalCurry);

var _functionalCompose = require('./functional/compose');

var _compose = _interopRequireWildcard(_functionalCompose);

var _functionalF = require('./functional/f');

var _f = _interopRequireWildcard(_functionalF);

var _functionalIdentity = require('./functional/identity');

var _identity = _interopRequireWildcard(_functionalIdentity);

var _functionalLift = require('./functional/lift');

var _lift = _interopRequireWildcard(_functionalLift);

var _functionalMemoize = require('./functional/memoize');

var _memoize = _interopRequireWildcard(_functionalMemoize);

var _functionalOnce = require('./functional/once');

var _once = _interopRequireWildcard(_functionalOnce);

var _functionalSequence = require('./functional/sequence');

var _sequence = _interopRequireWildcard(_functionalSequence);

var _functionalT = require('./functional/t');

var _t = _interopRequireWildcard(_functionalT);

var always = _always.always;
exports.always = always;
var apply = _apply.apply;
exports.apply = apply;
var curry = _curry.curry;
exports.curry = curry;
var compose = _compose.compose;
exports.compose = compose;
var f = _f.f;
exports.f = f;
var identity = _identity.identity;
exports.identity = identity;
var lift = _lift.lift;
exports.lift = lift;
var memoize = _memoize.memoize;
exports.memoize = memoize;
var once = _once.once;
exports.once = once;
var sequence = _sequence.sequence;
exports.sequence = sequence;
var t = _t.t;
exports.t = t;