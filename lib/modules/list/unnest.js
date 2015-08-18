'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _chain = require('./chain');

var _functionalIdentity = require('../functional/identity');

var unnest = (0, _chain.chain)(_functionalIdentity.identity);
exports.unnest = unnest;