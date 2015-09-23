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

var LastWhileTaker = (function (_Base) {
  _inherits(LastWhileTaker, _Base);

  function LastWhileTaker(fn, xf) {
    _classCallCheck(this, LastWhileTaker);

    _get(Object.getPrototypeOf(LastWhileTaker.prototype), 'constructor', this).call(this);
    this.fn = fn;
    this.storage = [];
    this.xf = xf;
  }

  _createClass(LastWhileTaker, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      if (this.fn(input)) {
        this.storage[this.storage.length] = input;
      } else {
        this.storage.length = 0;
      }
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      var step = this.xf['@@transducer/step'].bind(this);
      return (0, _reduce.reduce)(step, result, this.storage);
    }
  }, {
    key: 'lastElements',
    value: function lastElements() {
      return this.moreThanN ? [].concat(_toConsumableArray((0, _slice.slice)(this.pos, this.n, this.storage)), _toConsumableArray((0, _slice.slice)(0, this.pos, this.storage))) : (0, _slice.slice)(0, this.pos, this.storage);
    }
  }]);

  return LastWhileTaker;
})(_transducerBase.Base);

var _takeLastWhile = function _takeLastWhile(_x4, _x5, _x6) {
  var _again2 = true;

  _function2: while (_again2) {
    var fn = _x4,
        xs = _x5,
        pos = _x6;
    _again2 = false;

    if (pos === -1) {
      return xs;
    } else {
      if (fn(xs[pos])) {
        _x4 = fn;
        _x5 = xs;
        _x6 = pos - 1;
        _again2 = true;
        continue _function2;
      } else {
        return xs.slice(pos + 1, Infinity);
      }
    }
  }
};

var takeLastWhile = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new LastWhileTaker(fn, xf) : _takeLastWhile(fn, xf, xf && xf.length - 1);
});
exports.takeLastWhile = takeLastWhile;