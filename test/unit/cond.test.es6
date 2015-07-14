let assert = require('chai').assert;

import {always, cond, same, t} from '../../src/index.es6';

describe('cond', () => {
  it('returns a function', () => {
      assert.strictEqual(typeof cond([]), 'function');
  });

  it('returns a conditional function', () => {
    var fn = cond([
      [same(0),   always('water freezes at 0°C')],
      [same(100), always('water boils at 100°C')],
      [t,           function(temp) { return 'nothing special happens at ' + temp + '°C'; }]
    ]);
    assert.strictEqual(fn(0), 'water freezes at 0°C');
    assert.strictEqual(fn(50), 'nothing special happens at 50°C');
    assert.strictEqual(fn(100), 'water boils at 100°C');
  });

  it('returns a function which returns undefined if none of the predicates matches', function() {
    var fn = cond([
      [same('foo'), always(1)],
      [same('bar'), always(2)]
    ]);
    assert.strictEqual(fn('quux'), undefined);
  });

  it('predicates are tested in order', function() {
    var fn = cond([
      [t, always('foo')],
      [t, always('bar')],
      [t, always('baz')]
    ]);
    assert.strictEqual(fn(), 'foo');
  });

  it('forwards all arguments to predicates and to transformers', function() {
    var fn = cond([
      [function(_, x) { return x === 42; }, function() { return arguments.length; }]
    ]);
    assert.strictEqual(fn(21, 42, 84), 3);
  });
});
