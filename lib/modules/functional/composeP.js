'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _functionalCurryN = require('../functional/curryN');

var _listInit = require('../list/init');

var _listLast = require('../list/last');

var _listReduceRight = require('../list/reduceRight');

var throwError = function throwError() {
  throw new Error('composeP requires at least one argument');
};

var composeP = function composeP() {
  for (var _len = arguments.length, ps = Array(_len), _key = 0; _key < _len; _key++) {
    ps[_key] = arguments[_key];
  }

  return ps.length === 0 ? throwError() : (0, _functionalCurryN.curryN)((0, _listLast.last)(ps).length, function () {
    return (0, _listReduceRight.reduceRight)(function (p, acc) {
      return acc.then(p);
    }, (0, _listLast.last)(ps).apply(undefined, arguments), (0, _listInit.init)(ps));
  });
};
exports.composeP = composeP;