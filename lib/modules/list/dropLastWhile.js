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

var DropLastWhileFilter = (function (_Base) {
  function DropLastWhileFilter(fn, xf) {
    _classCallCheck(this, DropLastWhileFilter);

    _get(Object.getPrototypeOf(DropLastWhileFilter.prototype), 'constructor', this).call(this);
    this.retained = _list.Nil;
    this.xf = xf;
    this.f = fn;
  }

  _inherits(DropLastWhileFilter, _Base);

  _createClass(DropLastWhileFilter, [{
    key: 'flush',
    value: function flush(result, input) {
      var _this = this;

      result = (0, _reduce.reduce)(function (result, value) {
        return _this.xf['@@transducer/step'].bind(_this)(result, value);
      }, result, (0, _list.toArray)([], this.retained));
      this.retained = _list.Nil;
      return this.xf['@@transducer/step'](result, input);
    }
  }, {
    key: 'retain',
    value: function retain(result, input) {
      this.retained = (0, _list.cons)(input, this.retained);
      return result;
    }
  }, {
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    }
  }]);

  return DropLastWhileFilter;
})(_transducerBase.Base);

var _dropLastWhile = function _dropLastWhile(_x4, _x5, _x6) {
  var _again2 = true;

  _function2: while (_again2) {
    var fn = _x4,
        xs = _x5,
        pos = _x6;
    _again2 = false;

    if (pos === -1) {
      return [];
    } else {
      if (fn(xs[pos])) {
        _x4 = fn;
        _x5 = xs;
        _x6 = pos - 1;
        _again2 = true;
        continue _function2;
      } else {
        return (0, _slice.slice)(0, pos + 1, xs);
      }
    }
  }
};

var dropLastWhile = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new DropLastWhileFilter(fn, xf) : _dropLastWhile(fn, xf, xf.length - 1);
});
exports.dropLastWhile = dropLastWhile;