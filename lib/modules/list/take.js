'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _functionalCurry = require('../functional/curry');

var _reduced = require('./reduced');

var _transducerBase = require('../transducer/Base');

var _typeIsTransducer = require('../type/isTransducer');

var Taker = (function (_Base) {
  function Taker(n, xf) {
    _classCallCheck(this, Taker);

    _get(Object.getPrototypeOf(Taker.prototype), 'constructor', this).call(this);
    this.max = n;
    this.pos = 0;
    this.xf = xf;
  }

  _inherits(Taker, _Base);

  _createClass(Taker, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      this.pos = this.pos + 1;
      return this.pos <= this.max ? this.xf['@@transducer/step'](result, input) : (0, _reduced.reduced)(this.xf['@@transducer/result'](result));
    }
  }]);

  return Taker;
})(_transducerBase.Base);

var _take = function _take(n, arr) {
  return typeof arr === 'string' ? arr.substr(0, n < 0 ? undefined : n) : arr.slice(0, n < 0 ? undefined : n);
};

var take = (0, _functionalCurry.curry)(function (n, xf) {
  return (0, _typeIsTransducer.isTransducer)(xf) ? new Taker(n, xf) : _take(n, xf);
});
exports.take = take;