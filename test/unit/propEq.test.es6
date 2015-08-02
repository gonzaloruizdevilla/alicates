let assert = require('chai').assert;

import {filter, equals, propEq} from '../../src/index.es6';

describe('propEq', () => {
  let obj1 = {name: 'Abby', age: 7, hair: 'blond'};
  let obj2 = {name: 'Fred', age: 12, hair: 'brown'};
  let obj3 = {name: 'Rusty', age: 10, hair: 'brown'};
  let obj4 = {name: 'Alois', age: 15, disposition: 'surly'};

  it('determines whether a particular property matches a given value for a specific object', () => {
    assert.strictEqual(propEq('name', 'Abby', obj1), true);
    assert.strictEqual(propEq('hair', 'brown', obj2), true);
    assert.strictEqual(propEq('hair', 'blond', obj2), false);
  });

  it('has equals semantics', () => {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value);
    };

    assert.strictEqual(propEq('value', 0, {value: -0}), false);
    assert.strictEqual(propEq('value', -0, {value: 0}), false);
    assert.strictEqual(propEq('value', NaN, {value: NaN}), true);
    assert.strictEqual(propEq('value', new Just([42]), {value: new Just([42])}), true);
  });

  it('is curried', () => {
    let kids = [obj1, obj2, obj3, obj4];
    let hairMatch = propEq('hair');
    assert.strictEqual(typeof hairMatch, 'function');
    let brunette = hairMatch('brown');
    assert.deepEqual(filter(brunette, kids), [obj2, obj3]);
    // more likely usage:
    assert.deepEqual(filter(propEq('hair', 'brown'), kids), [obj2, obj3]);
  });

});
