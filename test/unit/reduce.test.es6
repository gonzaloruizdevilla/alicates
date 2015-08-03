let assert = require('chai').assert;

import {reduce, concat} from '../../src/index.es6';

describe('reduce', () => {
  
  const mult = (a, b) => a * b;
  const add =  (a,b) => a + b;

  it('should reduce arrays', () =>{
    assert.equal(reduce(add, 0, [0,1,2]), 3);
    assert.equal(reduce(add, '', ['0','1','2']), '012');
  });

  it('should reduce arrays with holes', () => {
    /* jshint -W128*/
    assert.equal(reduce(add, '', ['0', undefined, ,'1','2']), '0undefinedundefined12');
    /* jshint +W128*/
  });

  it('should be curried', () =>{
    let result = reduce(add)(0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add, 0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add)(0, [0,1,2]);
    assert.equal(result,3);
  });

  it('folds simple functions over arrays with the supplied accumulator', function() {
    assert.strictEqual(reduce(add, 0, [1, 2, 3, 4]), 10);
    assert.strictEqual(reduce(mult, 1, [1, 2, 3, 4]), 24);
  });

  it('dispatches to objects that implement `reduce`', function() {
    var obj = {x: [1, 2, 3], reduce: function() { return 'override'; }};
    assert.strictEqual(reduce(add, 0, obj), 'override');
    assert.strictEqual(reduce(add, 10, obj), 'override');
  });

  it('returns the accumulator for an empty array', function() {
    assert.strictEqual(reduce(add, 0, []), 0);
    assert.strictEqual(reduce(mult, 1, []), 1);
    assert.deepEqual(reduce(concat, [], []), []);
  });

  it('is curried', function() {
    var addOrConcat = reduce(add);
    var sum = addOrConcat(0);
    var cat = addOrConcat('');
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
    assert.strictEqual(cat(['1', '2', '3', '4']), '1234');
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = reduce(add, 0);
    assert.strictEqual(sum.length, 1);
  });
});
