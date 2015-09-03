'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _transducerBase = require('../transducer/Base');

var _functionalCurry = require('../functional/curry');

var _typeIsTransformer = require('../type/isTransformer');

var _range = require('./range');

var _reduce = require('./reduce');

var _slice = require('./slice');

var Aperturer = (function (_Base) {
  function Aperturer(n, xf) {
    _classCallCheck(this, Aperturer);

    _get(Object.getPrototypeOf(Aperturer.prototype), 'constructor', this).call(this);
    this.n = n;
    this.xf = xf;
    this.store = [];
  }

  _inherits(Aperturer, _Base);

  _createClass(Aperturer, [{
    key: 'hasNStored',
    value: function hasNStored() {
      return this.store.length === this.n;
    }
  }, {
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      if (this.hasNStored()) {
        this.store.shift();
      }
      this.store.push(input);
      return this.hasNStored() ? this.xf['@@transducer/step'](result, [].concat(_toConsumableArray(this.store))) : result;
    }
  }]);

  return Aperturer;
})(_transducerBase.Base);

var _aperture = function _aperture(n, xs) {
  return (0, _reduce.reduce)(function (acc, m) {
    return (acc[m] = (0, _slice.slice)(m, m + n, xs), acc);
  }, [], (0, _range.range)(0, xs.length - n + 1));
};

var aperture = (0, _functionalCurry.curry)(function (n, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new Aperturer(n, xf) : n > xf.length ? [] : _aperture(n, xf);
});
exports.aperture = aperture;