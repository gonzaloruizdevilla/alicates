let assert = require('chai').assert;

import {add, evolve} from '../../src/index.es6';

describe('evolve', () => {
  it('creates a new object by evolving the `object` according to the `transformation` functions', () => {
    var transf   = {elapsed: add(1), remaining: add(-1)};
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400};
    var expected = {name: 'Tomato', elapsed: 101, remaining: 1399};
    assert.deepEqual(evolve(transf, object), expected);
  });

  it('does not invoke function if object does not contain the key', () => {
    var transf   = {n: add(1), m: add(1)};
    var object   = {m: 3};
    var expected = {m: 4};
    assert.deepEqual(evolve(transf, object), expected);
  });

  it('is not destructive', () => {
    var transf   = {elapsed: add(1), remaining: add(-1)};
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400};
    var expected = {name: 'Tomato', elapsed: 100, remaining: 1400};
    evolve(transf, object);
    assert.deepEqual(object, expected);
  });

  it('is recursive', () => {
    var transf   = {nested: {second: add(-1), third: add(1)}};
    var object   = {first: 1, nested: {second: 2, third: 3}};
    var expected = {first: 1, nested: {second: 1, third: 4}};
    assert.deepEqual(evolve(transf, object), expected);
  });

  it('is curried', () => {
    var tick = evolve({elapsed: add(1), remaining: add(-1)});
    var object   = {name: 'Tomato', elapsed: 100, remaining: 1400};
    var expected = {name: 'Tomato', elapsed: 101, remaining: 1399};
    assert.deepEqual(tick(object), expected);
  });
});
