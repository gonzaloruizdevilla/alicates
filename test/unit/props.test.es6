let assert = require('chai').assert;

import {props} from '../../src/index.es6';

describe('props', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('returns empty array if no properties requested', function() {
    assert.deepEqual(props([], obj), []);
  });

  it('returns values for requested properties', function() {
    assert.deepEqual(props(['a', 'e'], obj), [1, 5]);
  });

  it('preserves order', function() {
    assert.deepEqual(props(['f', 'c', 'e'], obj), [6, 3, 5]);
  });

  it('returns undefined for nonexistent properties', function() {
    var ps = props(['a', 'nonexistent'], obj);
    assert.strictEqual(ps.length, 2);
    assert.strictEqual(ps[0], 1);
    assert.strictEqual(ps[1], void 0);
  });

  it('is curried', function() {
    assert.deepEqual(props(['a', 'b'])(obj), [1, 2]);
  });
});
