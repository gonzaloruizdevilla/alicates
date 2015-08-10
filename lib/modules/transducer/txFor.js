'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalIdentity = require('../functional/identity');

var _listConcat = require('../list/concat');

var _typeIsTransducer = require('../type/isTransducer');

var _objectCreateMapEntry = require('../object/createMapEntry');

var merge = function merge() {};

var isArrayLike = Array.isArray;

var arrayTx = {
  '@@transducer/init': Array,
  '@@transducer/step': function transducerStep(xs, x) {
    return (0, _listConcat.concat)(xs, [x]);
  },
  '@@transducer/result': _functionalIdentity.identity
};
var stringTx = {
  '@@transducer/init': String,
  '@@transducer/step': function transducerStep(a, b) {
    return a + b;
  },
  '@@transducer/result': _functionalIdentity.identity
};

var objectTx = {
  '@@transducer/init': Object,
  '@@transducer/step': function transducerStep(result, input) {
    return merge(result, isArrayLike(input) ? (0, _objectCreateMapEntry.createMapEntry)(input[0], input[1]) : input);
  },
  '@@transducer/result': _functionalIdentity.identity
};

var throwError = function throwError(obj) {
  throw new Error('Cannot create transformer for ' + obj);
};

var txFor = function txFor(obj) {
  return (0, _typeIsTransducer.isTransducer)(obj) ? obj : isArrayLike(obj) ? arrayTx : typeof obj === 'string' ? stringTx : typeof obj === 'object' ? objectTx : throwError();
};
exports.txFor = txFor;