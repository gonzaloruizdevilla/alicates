'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var _typeIsTransducer = require('../type/isTransducer');

var IndexFinder = (function () {
  function IndexFinder(fn, xf) {
    _classCallCheck(this, IndexFinder);

    this.pos = -1;
    this.result = undefined;
    this.xf = xf;
    this.f = fn;
  }

  _createClass(IndexFinder, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      this.pos += 1;
      this.result = this.f(input) ? input : this.result;
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      result = this.xf['@@transducer/step'](result, this.result);
      return this.xf['@@transducer/result'](result);
    }
  }]);

  return IndexFinder;
})();

var _findLast = function _findLast(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        xs = _x2,
        pos = _x3;
    _again = false;

    if (pos === -1) {
      return undefined;
    } else {
      if (fn(xs[pos])) {
        return xs[pos];
      } else {
        _x = fn;
        _x2 = xs;
        _x3 = pos - 1;
        _again = true;
        continue _function;
      }
    }
  }
};

var findLast = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransducer.isTransducer)(xf) ? new IndexFinder(fn, xf) : _findLast(fn, xf, xf.length - 1);
});
exports.findLast = findLast;