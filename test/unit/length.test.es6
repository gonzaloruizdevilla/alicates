let assert = require('chai').assert;

import {identical, length} from '../../src/index.es6';

describe('length', () => {
  it('returns the length of a list', () => {
    assert.strictEqual(length([]), 0);
    assert.strictEqual(length(['a', 'b', 'c', 'd']), 4);
  });

  it('returns the length of a string', () => {
    assert.strictEqual(length(''), 0);
    assert.strictEqual(length('xyz'), 3);
  });

  it('returns the length of a function', () => {
    assert.strictEqual(length(() => ({})), 0);
    assert.strictEqual(length((x, y, z) => z), 3);
  });

  it('returns the length of an arguments object', () => {
    assert.strictEqual(length((function() { return arguments; }())), 0);
    assert.strictEqual(length((function() { return arguments; }('x', 'y', 'z'))), 3);
  });

  it('returns NaN for value of unexpected type', () => {
    assert.strictEqual(identical(NaN, length(0)), true);
    assert.strictEqual(identical(NaN, length({})), true);
    assert.strictEqual(identical(NaN, length(null)), true);
    assert.strictEqual(identical(NaN, length(undefined)), true);
  });

  it('returns NaN for length property of unexpected type', () => {
    assert.strictEqual(identical(NaN, length({length: ''})), true);
    assert.strictEqual(identical(NaN, length({length: '1.23'})), true);
    assert.strictEqual(identical(NaN, length({length: null})), true);
    assert.strictEqual(identical(NaN, length({length: undefined})), true);
    assert.strictEqual(identical(NaN, length({})), true);
  });
});
