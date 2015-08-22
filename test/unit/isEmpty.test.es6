let assert = require('chai').assert;

import {isEmpty} from '../../src/index.es6';

describe('isEmpty', () => {
  it('returns false for null', () => {
    assert.strictEqual(isEmpty(null), false);
  });

  it('returns false for undefined', () => {
    assert.strictEqual(isEmpty(undefined), false);
  });

  it('returns true for empty string', () => {
    assert.strictEqual(isEmpty(''), true);
  });

  it('returns true for empty array', () => {
    assert.strictEqual(isEmpty([]), true);
  });

  it('returns true for empty arguments object', () => {
    assert.strictEqual(isEmpty((function() { return arguments; }())), true);
  });

  it('returns true for object with own length property whose value is 0', () => {
    assert.strictEqual(isEmpty({length: 0, x: 1, y: 2}), true);
  });

  it('returns true for object with inherited length property whose value is 0', () => {
    function Empty() {}
    Empty.prototype.length = 0;
    assert.strictEqual(isEmpty(new Empty()), true);
  });

  it('returns false for every other value', () => {
    assert.strictEqual(isEmpty(0), false);
    assert.strictEqual(isEmpty(NaN), false);
    assert.strictEqual(isEmpty(['']), false);
    assert.strictEqual(isEmpty({}), false);

    function Nonempty() {}
    Nonempty.prototype.length = 1;
    assert.strictEqual(isEmpty(new Nonempty()), false);
  });
});
