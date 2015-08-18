'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduce = require('./reduce');

var _typeIsTransducer = require('../type/isTransducer');

var _functionalCurry = require('../functional/curry');

var _transducerXfFor = require('../transducer/xfFor');

var into = (0, _functionalCurry.curry)(function (acc, xf, xs) {
  return (0, _typeIsTransducer.isTransducer)(acc) ? (0, _reduce.reduce)(xf(acc), acc['@@transducer/init'](), xs) : (0, _reduce.reduce)(xf((0, _transducerXfFor.xfFor)(acc)), (0, _transducerXfFor.xfFor)(acc)['@@transducer/init'](), xs);
});
exports.into = into;