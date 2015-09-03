'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _functionalCurry = require('../functional/curry');

var _into = require('./into');

var _transducerBase = require('../transducer/Base');

var _reduce = require('./reduce');

var _typeIsTransformer = require('../type/isTransformer');

var _objectKeys = require('../object/keys');

var Grouper = (function (_Base) {
  function Grouper(fn, xf) {
    _classCallCheck(this, Grouper);

    _get(Object.getPrototypeOf(Grouper.prototype), 'constructor', this).call(this);
    this.xf = xf;
    this.f = fn;
    this.values = {};
  }

  _inherits(Grouper, _Base);

  _createClass(Grouper, [{
    key: '@@transducer/result',
    value: function transducerResult(result) {
      var _this = this;

      var step = function step(acc, key) {
        return _this.xf['@@transducer/step'](acc, _this.values[key]);
      };

      result = (0, _reduce.reduce)(step, result, (0, _objectKeys.keys)(this.values));
      return this.xf['@@transducer/result'](result);
    }
  }, {
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      var key = this.f(input);
      var pair = this.values[key] = this.values[key] || [key, []];
      pair[1][pair[1].length] = input;
      return result;
    }
  }]);

  return Grouper;
})(_transducerBase.Base);

var groupBy = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new Grouper(fn, xf) : (0, _into.into)({}, groupBy(fn), xf);
});
exports.groupBy = groupBy;