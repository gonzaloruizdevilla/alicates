let assert = require('chai').assert;

import {find, into} from '../../src/index.es6';

describe('find', () => {
  let obj1 = {x: 100};
  let obj2 = {x: 200};
  let a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  let even = x => x % 2 === 0;
  let gt100 = x => x > 100;
  let isStr = x => typeof x === 'string';
  let xGt100 = o => o && o.x > 100;

  it('returns the first element that satisfies the predicate', () => {
    assert.strictEqual(find(even, a), 10);
    assert.strictEqual(find(gt100, a), 200);
    assert.strictEqual(find(isStr, a), 'cow');
    assert.strictEqual(find(xGt100, a), obj2);
  });

  it('finds elements inside iterables', () => {
    function* numbers(){
      let i = 1;
      /*eslint-disable no-constant-condition */
      while(true){
        yield i;
        i +=1;
      }
    }
    assert.strictEqual(find(gt100, numbers()), 101);
  });




  it('transduces the first element that satisfies the predicate into an array', () => {
    assert.deepEqual(into([])(find(even), a), [10]);
    assert.deepEqual(into([])(find(gt100), a), [200]);
    assert.deepEqual(into([])(find(isStr), a), ['cow']);
    assert.deepEqual(into([])(find(xGt100), a), [obj2]);
  });

  it('returns `undefined` when no element satisfies the predicate', () => {
    assert.strictEqual(find(even, ['zing']), undefined);
  });

  it('returns `undefined` in array when no element satisfies the predicate into an array', () => {
    assert.deepEqual(into([])(find(even), ['zing']), [undefined]);
  });

  it('returns `undefined` when given an empty list', () => {
    assert.strictEqual(find(even, []), undefined);
  });

  it('returns `undefined` into an array when given an empty list', () => {
    assert.deepEqual(into([])(find(even), []), [undefined]);
  });

  it('is curried', () => {
    assert.strictEqual(typeof find(even), 'function');
    assert.strictEqual(find(even)(a), 10);
  });
});
