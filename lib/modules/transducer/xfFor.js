'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _functorList = require('../functor/list');

var _objectCreateMapEntry = require('../object/createMapEntry');

var _functionalIdentity = require('../functional/identity');

var _typeIsArrayLike = require('../type/isArrayLike');

var _typeIsTransformer = require('../type/isTransformer');

var _objectMerge = require('../object/merge');

var arrayXf = function arrayXf(init) {
  return {
    '@@transducer/init': function transducerInit() {
      return [].concat(_toConsumableArray(init));
    },
    '@@transducer/step': function transducerStep(result, input) {
      return (result[result.length] = input, result);
    },
    '@@transducer/result': _functionalIdentity.identity
  };
};

var listXf = function listXf(list) {
  return {
    '@@transducer/init': function transducerInit() {
      return list;
    },
    '@@transducer/step': function transducerStep(result, input) {
      return (0, _functorList.cons)(input, result);
    },
    '@@transducer/result': _functionalIdentity.identity
  };
};

var stringXf = function stringXf(init) {
  return {
    '@@transducer/init': function transducerInit() {
      return init;
    },
    '@@transducer/step': function transducerStep(a, b) {
      return a + b;
    },
    '@@transducer/result': _functionalIdentity.identity
  };
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

var xfFor = function xfFor(obj) {
  return (0, _typeIsTransformer.isTransformer)(obj) ? obj : (0, _typeIsArrayLike.isArrayLike)(obj) ? arrayXf(obj) : (0, _functorList.isList)(obj) ? listXf(obj) : typeof obj === 'string' ? stringXf(obj) : typeof obj === 'object' ? objectXf : throwError();
};
exports.xfFor = xfFor;