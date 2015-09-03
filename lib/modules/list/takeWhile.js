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

var _into = require('./into');

var _typeIsTransformer = require('../type/isTransformer');

var _reduced = require('./reduced');

var TakerWhile = (function (_Base) {
  function TakerWhile(fn, xf) {
    _classCallCheck(this, TakerWhile);

    _get(Object.getPrototypeOf(TakerWhile.prototype), 'constructor', this).call(this);
    this.fn = fn;
    this.xf = xf;
  }

  _inherits(TakerWhile, _Base);

  _createClass(TakerWhile, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      return this.fn(input) ? this.xf['@@transducer/step'](result, input) : (0, _reduced.reduced)(this.xf['@@transducer/result'](result));
    }
  }]);

  return TakerWhile;
})(_transducerBase.Base);

var takeWhile = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _typeIsTransformer.isTransformer)(xf) ? new TakerWhile(fn, xf) : (0, _into.into)([], takeWhile(fn), xf);
});
exports.takeWhile = takeWhile;