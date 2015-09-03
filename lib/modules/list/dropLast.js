'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _functionalCurry = require('../functional/curry');

var _slice = require('./slice');

var _transducerBase = require('../transducer/Base');

var _reduce = require('./reduce');

var _list = require('./list');

var _typeIsTransformer = require('../type/isTransformer');

var _dropLast = function _dropLast(n, xs) {
  return n < -1 ? xs : (0, _slice.slice)(0, xs.length - n, xs);
};

var DropLastWhileFilter = (function (_Base) {
  function DropLastWhileFilter(n, xf) {
    _classCallCheck(this, DropLastWhileFilter);

    _get(Object.getPrototypeOf(DropLastWhileFilter.prototype), 'constructor', this).call(this);
    this.retained = _list.Nil;
    this.xf = xf;
    this.n = n;
  }

  _inherits(DropLastWhileFilter, _Base);

  _createClass(DropLastWhileFilter, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      return this.retain(result, input);
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      return this.xf['@@transducer/result'](this.flush(result));
    }
  }, {
    key: 'flush',
    value: function flush(result) {
      var _this = this;

      var retained = (0, _list.toArray)([], this.retained);
      result = (0, _reduce.reduce)(function (result, value) {
        return _this.xf['@@transducer/step'].bind(_this)(result, value);
      }, result, _dropLast(this.n, retained));
      return result;
    }
  }, {
    key: 'retain',
    value: function retain(result, input) {
      this.retained = (0, _list.cons)(input, this.retained);
      return result;
    }
  }]);

  return DropLastWhileFilter;
})(_transducerBase.Base);

var dropLast = (0, _functionalCurry.curry)(function (n, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new DropLastWhileFilter(n, xf) : _dropLast(n, xf);
});
exports.dropLast = dropLast;