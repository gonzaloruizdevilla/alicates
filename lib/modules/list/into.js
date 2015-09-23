'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurry = require('../functional/curry');

var _typeIsTransformer = require('../type/isTransformer');

var _reduce = require('./reduce');

var _transducerXfFor = require('../transducer/xfFor');

var into = (0, _functionalCurry.curry)(function (acc, xf, xs) {
  acc = (0, _typeIsTransformer.isTransformer)(acc) ? acc : (0, _transducerXfFor.xfFor)(acc);
  return (0, _reduce.reduce)(xf(acc), acc['@@transducer/init'](), xs);
});
exports.into = into;