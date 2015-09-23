'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _transducerBase = require('../transducer/Base');

var _functionalCurry = require('../functional/curry');

var _typeIsTransformer = require('../type/isTransformer');

var _reduced = require('./reduced');

var _reduce = require('./reduce');

var NoneXf = (function (_Base) {
  _inherits(NoneXf, _Base);

  function NoneXf(fn, xf) {
    _classCallCheck(this, NoneXf);

    _get(Object.getPrototypeOf(NoneXf.prototype), 'constructor', this).call(this);
    this.fn = fn;
    this.none = true;
    this.xf = xf;
  }

  _createClass(NoneXf, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      if (this.fn(input)) {
        this.none = false;
        result = this.xf['@@transducer/step'](result, this.none);
        return (0, _reduced.reduced)(result);
      }
      return result;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      if (this.none) {
        result = this.xf['@@transducer/step'](result, true);
      }
      return this.xf['@@transducer/result'](result);
    }
  }]);

  return NoneXf;
})(_transducerBase.Base);

var _none = function _none(fn, xs) {
  return (0, _reduce.reduce)(function (acc, x) {
    return fn(x) ? (0, _reduced.reduced)(false) : true;
  }, true, xs);
};

var none = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new NoneXf(fn, xf) : _none(fn, xf);
});
exports.none = none;