let assert = require('chai').assert;

import {match} from '../../src/index.es6';

describe('match', function() {
  var re = /[A-Z]\d\d\-[a-zA-Z]+/;
  var matching = 'B17-afn';
  var notMatching = 'B1-afn';

  it('determines whether a string matches a regex', function() {
    assert.strictEqual(match(re, matching).length, 1);
    assert.deepEqual(match(re, notMatching), []);
  });

  it('is curried', function() {
    var format = match(re);
    assert.strictEqual(format(matching).length, 1);
    assert.deepEqual(format(notMatching), []);
  });

  it('defaults to a different empty array each time', function() {
    var first = match(re, notMatching);
    var second = match(re, notMatching);
    assert.notStrictEqual(first, second);
  });

  it('throws on null input', function() {
    assert.throws(function shouldThrow() { match(re, null); }, TypeError);
  });
});
