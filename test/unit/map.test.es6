
let assert = require('chai').assert;

import {add, into, map} from '../../src/index.es6';

let listXf = {
  '@@transducer/init': () => [],
  '@@transducer/step': (acc, x) => [...acc, x],
  '@@transducer/result': x => x
};

describe('map', () => {
  it('should map arrays', () => {
    const result = map(add(2), [0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });

  it('should be curried', () => {
    const result = map(add(2))([0,1,2]);
    assert.deepEqual(result, [2,3,4]);
  });

  let times2 = x => x * 2;
  let add1 = x => x + 1;
  let dec = x =>  x - 1;


  it('maps simple functions over arrays', function() {
    assert.deepEqual(map(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

  it('dispatches to objects that implement `map`', function() {
    let obj = {x: 100, map: function(f) { return f(this.x); }};
    assert.strictEqual(map(add1, obj), 101);
  });

  it('maps simple functions into arrays', function() {
    assert.deepEqual(into([], map(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

  it('maps simple functions over generator', function() {
    function* numbers(){
      let i = 1;
      while(i < 5){
        yield i;
        i +=1;
      }
    }

    assert.deepEqual(into([], map(times2), numbers()), [2, 4, 6, 8]);
  });

  it('composes', function() {
    let mdouble = map(times2);
    let mdec = map(dec);
    assert.deepEqual(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
  });

  it('can compose transducer-style', function() {
    let mdouble = map(times2);
    let mdec = map(dec);
    let xcomp = mdec(mdouble(listXf));
    assert.deepEqual(xcomp.xf, {xf: listXf, f: times2});
    assert.strictEqual(xcomp.f, dec);
  });

  it('is curried', function() {
    let inc = map(add1);
    assert.deepEqual(inc([1, 2, 3]), [2, 3, 4]);
  });

  it('dispatches to transformer objects', function() {
    assert.deepEqual(map(add1, listXf), {
      f: add1,
      xf: listXf
    });
  });

  it('correctly reports the arity of curried versions', function() {
    let inc = map(add1);
    assert.strictEqual(inc.length, 1);
  });
});
