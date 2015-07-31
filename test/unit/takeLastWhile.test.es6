let assert = require('chai').assert;

import {takeLastWhile} from '../../src/index.es6';


describe('takeLastWhile', () => {
  it('continues taking elements while the function reports `true`', () => {
    assert.deepEqual(takeLastWhile(function(x) {return x !== 5;}, [1, 3, 5, 7, 9]), [7, 9]);
  });

  it('starts at the right arg and acknowledges undefined', () => {
    assert.deepEqual(takeLastWhile(function() { assert(false); }, []), []);
    assert.deepEqual(takeLastWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]), [5, 7]);
  });

  it('is curried', () => {
    var takeLastUntil7 = takeLastWhile(function(x) {return x !== 7;});
    assert.deepEqual(takeLastUntil7([1, 3, 5, 7, 9]), [9]);
    assert.deepEqual(takeLastUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  });
});
