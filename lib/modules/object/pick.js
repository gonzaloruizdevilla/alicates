'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listReduce = require('../list/reduce');

var _functionalCurry = require('../functional/curry');

var pick = (0, _functionalCurry.curry)(function (keys, obj) {
  return (0, _listReduce.reduce)(function (acc, key) {
    return (obj[key] !== undefined ? acc[key] = obj[key] : void 0, acc);
  }, {}, keys);
});
exports.pick = pick;