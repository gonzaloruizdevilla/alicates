let assert = require('chai').assert;

import {and} from '../../src/index.es6';

describe('and', () => {
  it('compares two values with js &&', () => {
    var someAr = [];
    assert.strictEqual(and(1, 1), 1);
    assert.strictEqual(and(1, 0), 0);
    assert.strictEqual(and(true, someAr), someAr);
  });

  it('dispatches to `and` method', () => {
    class Nothing {
      and(){return this;}
    }
    class Just {
      constructor(x){
        this.value = x;
      }
      and(x){return x;}
    }


    var n1 = new Nothing();
    var n2 = new Nothing();
    var j1 = new Just(1);
    var j2 = new Just(2);

    assert.strictEqual(and(n1, n2), n1);
    assert.strictEqual(and(n2, n1), n2);
    assert.strictEqual(and(n1, j2), n1);
    assert.strictEqual(and(j2, n1), n1);
    assert.strictEqual(and(j1, j2), j2);
    assert.strictEqual(and(j2, j1), j1);
  });

  it('is curried', () => {
    var halfTruth = and(true);
    assert.strictEqual(halfTruth(false), false);
    assert.strictEqual(halfTruth('lie'), 'lie');
  });
});
