let assert = require('chai').assert;

import {flip} from '../../src/index.es6';

describe('flip', () => {
  it('returns a function which inverts the first two arguments to the supplied function', () => {
    var f = (a, b, c) => a + ' ' + b + ' ' + c;
    var g = flip(f);
    assert.strictEqual(f('a', 'b', 'c'), 'a b c');
    assert.strictEqual(g('a', 'b', 'c'), 'b a c');
  });

  it('returns a curried function', () => {
    var f = (a, b, c) => a + ' ' + b + ' ' + c;
    var g = flip(f)('a');
    assert.strictEqual(g('b', 'c'), 'b a c');
  });
});
