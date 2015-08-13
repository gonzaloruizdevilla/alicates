'use strict';

Object.defineProperty(exports, '__esModule', {
            value: true
});

var _typeIsString = require('../type/isString');

var nth = function nth(n, xs) {
            return (0, _typeIsString.isString)(xs) && n >= -xs.length ? xs.substr(n, 1) : (0, _typeIsString.isString)(xs) ? '' : n >= 0 ? xs[n] : xs[xs.length + n];
};
exports.nth = nth;