'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Base = (function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: '@@transducer/init',
    value: function transducerInit() {
      return this.xf['@@transducer/init']();
    }
  }, {
    key: '@@transducer/result',
    value: function transducerResult(result) {
      return this.xf['@@transducer/result'](result);
    }
  }]);

  return Base;
})();

exports.Base = Base;