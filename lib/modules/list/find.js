'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var _typeIsIterable = require('../type/isIterable');

var _typeIsTransformer = require('../type/isTransformer');

var _reduced = require('./reduced');

var Finder = (function () {
  function Finder(fn, xf) {
    _classCallCheck(this, Finder);

    this.f = fn;
    this.pos = -1;
    this.xf = xf;
  }

  _createClass(Finder, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      this.pos += 1;
      if (this.f(input)) {
        result = this.xf['@@transducer/step'](result, input);
        return (0, _reduced.reduced)(this.xf['@@transducer/result'](result));
      }
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      result = this.xf['@@transducer/step'](result, undefined);
      return this.xf['@@transducer/result'](result);
    }
  }]);

  return Finder;
})();

var _find = function _find(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        xs = _x2,
        pos = _x3;
    _again = false;

    if (pos >= xs.length) {
      return undefined;
    } else {
      if (fn(xs[pos])) {
        return xs[pos];
      } else {
        _x = fn;
        _x2 = xs;
        _x3 = pos + 1;
        _again = true;
        continue _function;
      }
    }
  }
};

var _findIterable = function _findIterable(_x4, _x5) {
  var _again2 = true;

  _function2: while (_again2) {
    var fn = _x4,
        iter = _x5;
    _iter$next = value = done = undefined;
    _again2 = false;

    var _iter$next = iter.next();

    var value = _iter$next.value;
    var done = _iter$next.done;
    if (done) {
      return undefined;
    } else {
      if (fn(value)) {
        return value;
      } else {
        _x4 = fn;
        _x5 = iter;
        _again2 = true;
        continue _function2;
      }
    }
  }
};

var find = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new Finder(fn, xf) : (0, _typeIsIterable.isIterable)(xf) ? _findIterable(fn, xf[Symbol.iterator]()) : _find(fn, xf, 0);
});
exports.find = find;