let assert = require('chai').assert;

import {add, Just, Nothing, toString} from '../../src/index.es6';

describe('Maybe', () => {
  it('has value for Just()', () => {
    let x = new Just(1);
    assert.equal(x.value, 1);
  });

  it('hasn\'t value for Nothing()', () => {
    let x = Nothing;
    assert.equal(x.value,  undefined);
  });

  it('has a toString function', () => {
    let x = new Just(1);
    let y = Nothing;
    assert.equal(toString(x), 'Just(1)');
    assert.equal(toString(y), 'Nothing()');
  });

  it('maps', () => {
    assert.deepEqual(new Just(1).map(add(2)), new Just(3));
    assert.equal(new Just(1).map(() => null), Nothing);
    assert.equal(Nothing.map(add(2)), Nothing);
  });

  it('supports function binding', () => {
    let result = new Just(5).bind(value =>
                   new Just(6).bind(value2 =>
                     new Just(value + value2)));
    assert.deepEqual(result, new Just(11));
    result = new Just(5).bind(() => Nothing).bind(value => new Just(value + 2));
    assert.deepEqual(result, Nothing);
  });
});
