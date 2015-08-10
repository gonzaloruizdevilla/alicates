'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var reduced = function reduced(value) {
  return {
    '@@transducer/value': value,
    '@@transducer/reduced': true
  };
};
exports.reduced = reduced;