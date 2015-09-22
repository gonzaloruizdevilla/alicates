let assert = require('chai').assert;

import {add, Identity, toString} from '../../src/index.es6';

describe('Identity', () => {
  it('has value and map properties', () => {
    let x = new Identity(1);
    assert.equal(x.value, 1);
    assert.equal(typeof x.map, 'function');
  });

  it('map returns a new Identity with the value resulting of applying the provided function', () => {
    let add2 = add(2);
    let x = new Identity(1);
    let y = x.map(add2);
    assert.equal(x.value, 1);
    assert.equal(y.value, 3);
    assert.ok(y instanceof Identity);
  });

  it('has a toString function', () => {
    let x = new Identity(1);
    assert.equal(toString(x), 'Identity(1)');
  });

  it('supports function binding', () => {
    let result = new Identity(5).bind(value =>
                   new Identity(6).bind(value2 =>
                     new Identity(value + value2)));
    assert.deepEqual(result, new Identity(11));
  });
});
