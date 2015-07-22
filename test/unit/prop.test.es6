let assert = require('chai').assert;

import {prop} from '../../src/index.es6';

describe('prop', () => {
  let fred = {name: 'Fred', age: 23};

  it('returns a function that fetches the appropriate property', () => {
    let nm = prop('name');
    assert.strictEqual(typeof nm, 'function');
    assert.strictEqual(nm(fred), 'Fred');
    assert.strictEqual(prop('name',fred), 'Fred');
  });
});
