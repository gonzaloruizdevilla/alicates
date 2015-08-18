'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalIdentity = require('../functional/identity');

var _objectMerge = require('../object/merge');

var _typeIsTransducer = require('../type/isTransducer');

var _typeIsArrayLike = require('../type/isArrayLike');

var _objectCreateMapEntry = require('../object/createMapEntry');

var _listList = require('../list/list');

var arrayXf = {
  '@@transducer/init': function transducerInit() {
    return _listList.Nil;
  },
  '@@transducer/step': function transducerStep(result, input) {
    return (0, _listList.cons)(input, result);
  },
  '@@transducer/result': _listList.toArray
};

var listXf = function listXf(list) {
  return {
    '@@transducer/init': function transducerInit() {
      return list;
    },
    '@@transducer/step': function transducerStep(result, input) {
      return (0, _listList.cons)(input, result);
    },
    '@@transducer/result': _functionalIdentity.identity
  };
};

var stringXf = {
  '@@transducer/init': String,
  '@@transducer/step': function transducerStep(a, b) {
    return a + b;
  },
  '@@transducer/result': _functionalIdentity.identity
};

var objectXf = {
  '@@transducer/init': Object,
  '@@transducer/step': function transducerStep(result, input) {
    return (0, _objectMerge.merge)(result, (0, _typeIsArrayLike.isArrayLike)(input) ? (0, _objectCreateMapEntry.createMapEntry)(input[0], input[1]) : input);
  },
  '@@transducer/result': _functionalIdentity.identity
};

var throwError = function throwError(obj) {
  throw new Error('Cannot create transformer for ' + obj);
};

var isList = function isList(obj) {
  return obj instanceof _listList.Cons || obj === _listList.Nil;
};

var xfFor = function xfFor(obj) {
  return (0, _typeIsTransducer.isTransducer)(obj) ? obj : (0, _typeIsArrayLike.isArrayLike)(obj) ? arrayXf : isList(obj) ? listXf(obj) : typeof obj === 'string' ? stringXf : typeof obj === 'object' ? objectXf : throwError();
};
exports.xfFor = xfFor;