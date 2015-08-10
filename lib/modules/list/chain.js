'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reduce = require('./reduce');

var _map = require('./map');

var _concat = require('./concat');

var _objectHasMethod = require('../object/hasMethod');

var _functionalCurry = require('../functional/curry');

var _typeIsTransducer = require('../type/isTransducer');

var _transducerBase = require('../transducer/Base');

var Chainer = (function (_Base) {
  function Chainer(fn, xf) {
    _classCallCheck(this, Chainer);

    _get(Object.getPrototypeOf(Chainer.prototype), 'constructor', this).call(this);
    this.xf = xf;
    this.f = fn;
  }

  _inherits(Chainer, _Base);

  _createClass(Chainer, [{
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      return (0, _reduce.reduce)(this.xf['@@transducer/step'].bind(this.xf), result, this.f(input));
    }
  }]);

  return Chainer;
})(_transducerBase.Base);

var _chain = function _chain(fn, xf) {
  return _concat.concat.apply(undefined, _toConsumableArray((0, _map.map)(fn, xf)));
};

var chain = (0, _functionalCurry.curry)(function (fn, xf) {
  return (0, _objectHasMethod.hasMethod)('chain', xf) ? xf.chain(fn) : (0, _typeIsTransducer.isTransducer)(xf) ? new Chainer(fn, xf) : _chain(fn, xf);
});
exports.chain = chain;