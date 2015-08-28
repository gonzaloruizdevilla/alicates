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

var _reduce = require('./reduce');

var _typeIsTransducer = require('../type/isTransducer');

var _slice = require('./slice');

var LastTaker = (function (_Base) {
  function LastTaker(n, xf) {
    _classCallCheck(this, LastTaker);

    _get(Object.getPrototypeOf(LastTaker.prototype), 'constructor', this).call(this);
    this.n = n;
    this.xf = xf;
    this.storage = new Array(n);
    this.pos = 0;
    this.moreThanN = false;
  }

  _inherits(LastTaker, _Base);

  _createClass(LastTaker, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      this.storage[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.n) {
        this.moreThanN = true;
        this.pos = 0;
      }
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      var step = this.xf['@@transducer/step'].bind(this);
      return (0, _reduce.reduce)(step, result, this.lastElements());
    }
  }, {
    key: 'lastElements',
    value: function lastElements() {
      return this.moreThanN ? [].concat(_toConsumableArray((0, _slice.slice)(this.pos, this.n, this.storage)), _toConsumableArray((0, _slice.slice)(0, this.pos, this.storage))) : (0, _slice.slice)(0, this.pos, this.storage);
    }
  }]);

  return LastTaker;
})(_transducerBase.Base);

var _takeLast = function _takeLast(n, xs) {
  return xs.slice(n < 0 ? 0 : n === 0 ? xs.length : -n);
};

var takeLast = (0, _functionalCurry.curry)(function (n, xf) {
  return (0, _typeIsTransducer.isTransducer)(xf) ? new LastTaker(n, xf) : _takeLast(n, xf);
});
exports.takeLast = takeLast;