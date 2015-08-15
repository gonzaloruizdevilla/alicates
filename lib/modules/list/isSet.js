'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _indexOf = require('./indexOf');

var _tail = require('./tail');

var _head = require('./head');

var isSet = function isSet(xs) {
  return (function (xss) {
    return (xss = (0, _tail.tail)(xs), xs.length === 0 ? true : (0, _indexOf.indexOf)((0, _head.head)(xs), xss) > -1 ? false : isSet(xss));
  })();
};
exports.isSet = isSet;