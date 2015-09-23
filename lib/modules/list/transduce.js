'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var _into = require('./into');

var _typeIsTransformer = require('../type/isTransformer');

var Xf = (function () {
  function Xf(step, init) {
    _classCallCheck(this, Xf);

    this['@@transducer/step'] = this['@@transducer/step'].bind(this);
    this.init = init;
    this.step = (0, _typeIsTransformer.isTransformer)(step) ? step['@@transducer/step'] : step;
  }

  _createClass(Xf, [{
    key: '@@transducer/init',
    value: function transducerInit() {
      return this.init;
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      return result;
    }
  }, {
    key: '@@transducer/step',
    value: function transducerStep(result, input) {
      return this.step(result, input);
    }
  }]);

  return Xf;
})();

var transduce = (0, _functionalCurry.curry)(function (tx, fn, init, xs) {
  return (0, _into.into)(new Xf(fn, init), tx, xs);
});
exports.transduce = transduce;