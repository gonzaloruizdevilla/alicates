'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var _objectHasMethod = require('../object/hasMethod');

var _typeIsArrayLike = require('../type/isArrayLike');

var _typeIsFunction = require('../type/isFunction');

var _typeIsIterable = require('../type/isIterable');

var _typeIsString = require('../type/isString');

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

var iterableReduce = function iterableReduce(_x6, _x7, _x8) {
  var _again2 = true;

  _function2: while (_again2) {
    var xf = _x6,
        acc = _x7,
        iter = _x8;
    _iter$next = value = done = undefined;
    _again2 = false;

    var _iter$next = iter.next();

    var value = _iter$next.value;
    var done = _iter$next.done;
    if (acc && acc['@@transducer/reduced']) {
      return acc['@@transducer/value'];
    } else {
      if (done) {
        return xf['@@transducer/result'](acc);
      } else {
        _x6 = xf;
        _x7 = xf['@@transducer/step'](acc, value);
        _x8 = iter;
        _again2 = true;
        continue _function2;
      }
    }
  }
};

var canBeReduced = function canBeReduced(x) {
  return (0, _typeIsArrayLike.isArrayLike)(x) || (0, _typeIsString.isString)(x);
};

var reduce = (0, _functionalCurry.curry)(function (fn, acc, arr) {
  return (fn = (0, _typeIsFunction.isFunction)(fn) ? new XfWrap(fn) : fn, (0, _typeIsIterable.isIterable)(arr) ? iterableReduce(fn, acc, arr[Symbol.iterator]()) : (0, _objectHasMethod.hasMethod)('reduce', arr) ? arr.reduce(fn, acc) : canBeReduced(arr) ? arrayReduce(fn, acc, arr, 0, arr.length) : null);
});
exports.reduce = reduce;