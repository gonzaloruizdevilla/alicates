'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _transducerBase = require('../transducer/Base');

var _functionalCurry = require('../functional/curry');

var _typeIsTransformer = require('../type/isTransformer');

var _reduce = require('./reduce');

var _slice = require('./slice');

var AdjustXf = (function (_Base) {
  _inherits(AdjustXf, _Base);

  function AdjustXf(fn, n, xf) {
    _classCallCheck(this, AdjustXf);

    _get(Object.getPrototypeOf(AdjustXf.prototype), 'constructor', this).call(this);
    this.fn = fn;
    this.n = Math.abs(n);
    this.xf = xf;
    this.pos = 0;
    this.storage = n < 0 ? [] : null;
  }

  _createClass(AdjustXf, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      if (this.storage) {
        if (this.storage.length === this.n) {
          result = this.xf['@@transducer/step'](result, this.storage.shift());
        }
        this.storage.push(input);
      } else {
        if (this.pos === this.n) {
          result = this.xf['@@transducer/step'](result, this.fn(input));
        } else {
          result = this.xf['@@transducer/step'](result, input);
        }
      }
      this.pos += 1;
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      var step = this.xf['@@transducer/step'].bind(this);
      if (this.storage) {
        if (this.storage.length === this.n) {
          result = this.xf['@@transducer/step'](result, this.fn(this.storage.shift()));
        }
        result = (0, _reduce.reduce)(step, result, this.storage);
      }
      return this.xf['@@transducer/result'](result);
    }
  }]);

  return AdjustXf;
})(_transducerBase.Base);

var _adjust = function _adjust(fn, pos, xs) {
  return pos >= xs.length || pos < -xs.length ? xs : pos < 0 ? [].concat(_toConsumableArray((0, _slice.slice)(0, pos, xs)), [fn(xs[xs.length + pos])], _toConsumableArray((0, _slice.slice)(pos + 1, Infinity, xs))) : [].concat(_toConsumableArray((0, _slice.slice)(0, pos, xs)), [fn(xs[pos])], _toConsumableArray((0, _slice.slice)(pos + 1, Infinity, xs)));
};

var adjust = (0, _functionalCurry.curry)(function (fn, pos, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new AdjustXf(fn, pos, xf) : _adjust(fn, pos, xf);
});
exports.adjust = adjust;