'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _transducerBase = require('../transducer/Base');

var _functionalCurry = require('../functional/curry');

var _typeIsTransformer = require('../type/isTransformer');

var _unfold = require('./unfold');

var Splitter = (function (_Base) {
  function Splitter(n, xf) {
    _classCallCheck(this, Splitter);

    _get(Object.getPrototypeOf(Splitter.prototype), 'constructor', this).call(this);
    this.n = n;
    this.xf = xf;
    this.store = [];
  }

  _inherits(Splitter, _Base);

  _createClass(Splitter, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      this.store[this.store.length] = input;
      if (this.store.length === this.n) {
        result = this.flush(result);
      }
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      return this.xf['@@transducer/result'](this.flush(result));
    }
  }, {
    key: 'flush',
    value: function flush(result) {
      if (this.store.length) {
        result = this.xf['@@transducer/step'](result, this.store);
      }
      this.store = [];
      return result;
    }
  }]);

  return Splitter;
})(_transducerBase.Base);

var throwErrors = function throwErrors() {
  throw new Error('First argument to splitEvery must be a positive integer');
};

var _splitEvery = function _splitEvery(n, xs) {
  return (0, _unfold.unfold)(function (seed) {
    return seed.length > 0 ? [seed.slice(0, n), seed.slice(n)] : null;
  }, xs);
};

var splitEvery = (0, _functionalCurry.curry)(function (n, xf) {
  return n <= 0 ? throwErrors() : (0, _typeIsTransformer.isTransformer)(xf) ? new Splitter(n, xf) : _splitEvery(n, xf);
});
exports.splitEvery = splitEvery;