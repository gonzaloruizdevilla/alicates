let assert = require('chai').assert;

import {construct} from '../../src/index.es6';

describe('construct', () => {
  var Rectangle = function(w, h) {this.width = w; this.height = h;};
  Rectangle.prototype.area = function() {return this.width * this.height;};

  it('turns a constructor function into one that can be called without `new`', () => {
    var rect = construct(Rectangle);
    var r1 = rect(3, 4);
    assert.strictEqual(r1.constructor, Rectangle);
    assert.strictEqual(r1.width, 3);
    assert.strictEqual(r1.area(), 12);

    var regex = construct(RegExp);
    var word = regex('word', 'gi');
    assert.strictEqual(word.constructor, RegExp);
    assert.strictEqual(word.source, 'word');
    assert.strictEqual(word.global, true);
  });

  it('can be used to create Date object', () => {
    var date = construct(Date)(1984, 3, 26, 0, 0, 0, 0);
    assert.strictEqual(date.constructor, Date);
    assert.strictEqual(date.getFullYear(), 1984);
  });

  it('supports constructors with no arguments', () => {
    function Foo() {}
    var foo = construct(Foo)();
    assert.strictEqual(foo.constructor, Foo);
  });

  it('does not support constructor with greater than ten arguments', () => {
    assert.throws(
      () => {
        function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
          this.eleventh = $10;
        }
        construct(Foo);
      },
      Error,
      'Constructor with greater than ten arguments'
    );
  });

  it('returns a curried function', () => {
    var rect = construct(Rectangle);
    var rect3 = rect(3);
    var r1 = rect3(4);
    assert.strictEqual(r1.constructor, Rectangle);
    assert.strictEqual(r1.width, 3);
    assert.strictEqual(r1.height, 4);
    assert.strictEqual(r1.area(), 12);

    var regex = construct(RegExp);
    var word = regex('word');
    var complete = word('gi');
    assert.strictEqual(complete.constructor, RegExp);
    assert.strictEqual(complete.source, 'word');
    assert.strictEqual(complete.global, true);
  });
});
