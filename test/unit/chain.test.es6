let assert = require('chai').assert;

import {compose, chain, into} from '../../src/index.es6';


describe('chain', function() {

  function dupl(x) { return [x, x]; }
  function add1(x) { return [x + 1]; }
  function dec(x) { return [x - 1]; }
  function times2(x) { return [x * 2]; }

  it('maps a function over a nested list and returns the (shallow) flattened result', function() {
    assert.deepEqual(chain(times2, [1, 2, 3, 1, 0, 10, -3, 5, 7]), [2, 4, 6, 2, 0, 20, -6, 10, 14]);
    assert.deepEqual(chain(times2, [1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(chain(dupl, [1, 2, 3]), [1, 1, 2, 2, 3, 3]);
  });
  it('does not flatten recursively', function() {
    function f(xs) {
      return xs[0] ? [xs[0]] : [];
    }
    assert.deepEqual(chain(f, [[1], [[2], 100], [], [3, [4]]]), [1, [2], 3]);
  });

  it('maps a function (a -> [b]) into a (shallow) flat result', function() {
    let intoArray = into([]);
    assert.deepEqual(intoArray(chain(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

  it('dispatches to objects that implement `chain`', function() {
    var obj = {x: 100, chain: function(f) { return f(this.x); }};
    assert.deepEqual(chain(add1, obj), [101]);
  });

  /*it('dispatches to transformer objects', function() {
    assert.strictEqual(_isTransformer(chain(add1, listXf)), true);
  });*/

  it('composes', function() {
    var mdouble = chain(times2);
    var mdec = chain(dec);
    assert.deepEqual(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
  });

  it('can compose transducer-style', function() {
    let intoArray = into([]);
    var mdupl = chain(dupl);
    var mdouble = chain(times2);
    var mdec = chain(dec);
    var xcomp = compose(mdec, mdouble, mdupl);
    assert.deepEqual(intoArray(xcomp, [10, 20, 30]), [18, 18 , 38, 38, 58, 58]);
  });

  it('is curried', function() {
    var flatInc = chain(add1);
    assert.deepEqual(flatInc([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6, 7]);
  });

  it('correctly reports the arity of curried versions', function() {
    var inc = chain(add1);
    assert.strictEqual(inc.length, 1);
  });

});
