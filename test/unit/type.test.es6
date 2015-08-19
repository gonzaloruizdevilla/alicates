let assert = require('chai').assert;

import {type} from '../../src/index.es6';

describe('type', () => {

  it('"Array" if given an array literal', () => {
    assert.strictEqual(type([1, 2, 3]), 'Array');
  });

  it('"Arguments" if given an arguments object', () => {
    var args = (function() { return arguments; }());
    assert.strictEqual(type(args), 'Arguments');
  });

  it('"Object" if given an object literal', () => {
    assert.strictEqual(type({batman: 'na na na na na na na'}), 'Object');
  });

  it('"RegExp" if given a RegExp literal', () => {
    assert.strictEqual(type(/[A-z]/), 'RegExp');
  });

  it('"Number" if given a numeric value', () => {
    assert.strictEqual(type(4), 'Number');
  });

  it('"Number" if given the NaN value', () => {
    assert.strictEqual(type(NaN), 'Number');
  });

  it('"String" if given a String literal', () => {
    assert.strictEqual(type('Gooooodd Mornning Ramda!!'), 'String');
  });

  it('"String" if given a String object', () => {
    /*jshint -W053 */
    assert.strictEqual(type(new String('I am a String object')), 'String');
  });

  it('"Null" if given the null value', () => {
    assert.strictEqual(type(null), 'Null');
  });

  it('"Undefined" if given the undefined value', () => {
    assert.strictEqual(type(undefined), 'Undefined');
  });
});
