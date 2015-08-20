'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var _typeIsArrayLike = require('../type/isArrayLike');

var _typeIsString = require('../type/isString');

var _typeIsFunction = require('../type/isFunction');

var _objectHasMethod = require('../object/hasMethod');

var XfWrap = (function () {
  function XfWrap(fn) {
    _classCallCheck(this, XfWrap);

    this.f = fn;
  }

  _createClass(XfWrap, [{
    key: '@@transducer/init',
    value: function transducerInit() {
      throw new Error('init not implemented on XWrap');
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(acc) {
      return acc;
    }
  }, {
    key: '@@transducer/step',
    value: function transducerStep(acc, x) {
      return this.f(acc, x);
    }
  }]);

  return XfWrap;
})();

var arrayReduce = function arrayReduce(_x, _x2, _x3, _x4, _x5) {
  var _again = true;

  _function: while (_again) {
    var xf = _x,
        acc = _x2,
        arr = _x3,
        pos = _x4,
        length = _x5;
    _again = false;

    if (acc && acc['@@transducer/reduced']) {
      return acc['@@transducer/value'];
    } else {
      if (length === pos) {
        return xf['@@transducer/result'](acc);
      } else {
        _x = xf;
        _x2 = xf['@@transducer/step'](acc, arr[pos]);
        _x3 = arr;
        _x4 = pos + 1;
        _x5 = length;
        _again = true;
        continue _function;
      }
    }
  }
};

var canBeReduced = function canBeReduced(x) {
  return (0, _typeIsArrayLike.isArrayLike)(x) || (0, _typeIsString.isString)(x);
};

var reduce = (0, _functionalCurry.curry)(function (fn, acc, arr) {
  return (fn = (0, _typeIsFunction.isFunction)(fn) ? new XfWrap(fn) : fn, canBeReduced(arr) ? arrayReduce(fn, acc, arr, 0, arr.length) : (0, _objectHasMethod.hasMethod)('reduce', arr) ? arr.reduce(fn, acc) : null);
});
exports.reduce = reduce;