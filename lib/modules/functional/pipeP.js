'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _arity = require('./arity');

var _listReduce = require('../list/reduce');

var _functionalCurry = require('../functional/curry');

var _listTail = require('../list/tail');

var throwError = function throwError() {
  throw new Error('pipeP requires at least one argument');
};

var pipeP = function pipeP() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.length === 0 ? throwError() : (0, _arity.arity)(fns[0].length, (0, _functionalCurry.curry)(function () {
    return (0, _listReduce.reduce)(function (acc, fn) {
      return acc.then(fn);
    }, fns[0].apply(fns, arguments), (0, _listTail.tail)(fns));
  }, fns[0].length));
};
exports.pipeP = pipeP;