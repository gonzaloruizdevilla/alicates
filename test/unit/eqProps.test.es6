let assert = require('chai').assert;

import {eqProps, equals} from '../../src/index.es6';

describe('eqProps', () => {
  it('reports whether two objects have the same value for a given property', () => {
    assert.strictEqual(eqProps('name', {name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
    assert.strictEqual(eqProps('name', {name: 'fred', age: 10}, {name: 'franny', age: 10}), false);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(eqProps('value', {value: 0}, {value: -0}), false);
    assert.strictEqual(eqProps('value', {value: -0}, {value: 0}), false);
    assert.strictEqual(eqProps('value', {value: NaN}, {value: NaN}), true);
    assert.strictEqual(eqProps('value', {value: new Just([42])}, {value: new Just([42])}), true);
  });

  it('is curried', () => {
    var sameName = eqProps('name');
    assert.strictEqual(sameName({name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
  });
});
