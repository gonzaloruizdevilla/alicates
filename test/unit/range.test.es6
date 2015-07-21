let assert = require('chai').assert;

import {range} from '../../src/index.es6';



describe('range', () => {

  it('returns list of numbers', () => {
    assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
    assert.deepEqual(range(4, 7), [4, 5, 6]);
  });

  it('returns the empty list if the first parameter is not larger than the second', () => {
    assert.deepEqual(range(7, 3), []);
    assert.deepEqual(range(5, 5), []);
  });

  it('is curried', () => {
    var from10 = range(10);
    assert.deepEqual(from10(15), [10, 11, 12, 13, 14]);
  });

  it('returns an empty array if from > to', () => {
    var result = range(10, 5);
    assert.deepEqual(result, []);
    result.push(5);
    assert.deepEqual(range(10, 5), []);
  });


  it('terminates given bad input', () => {
    assert.throws(
      () => { range('a', 1); },
      TypeError,
      'First argument to range must be a number'
    );

    assert.throws(
      () => { range(1, 'z'); },
      TypeError,
      'Second argument to range must be a number'
    );

    assert.throws(
      () => { range(1, 2, 'z'); },
      TypeError,
      'Step argument to range must be a number'
    );
  });

  it('allows to define a step', () => {
    assert.deepEqual(range(0, 5, 2), [0, 2, 4]);
  });

  it('generates decreasing ranges with negative steps', () => {
    assert.deepEqual(range(5, 0, -1), [5, 4, 3, 2, 1]);
  });




});
