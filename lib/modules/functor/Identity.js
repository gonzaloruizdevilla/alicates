'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _stringToString = require('../string/toString');

var Identity = (function () {
  function Identity(value) {
    _classCallCheck(this, Identity);

    this.value = value;
  }

  _createClass(Identity, [{
    key: 'map',
    value: function map(f) {
      return new Identity(f(this.value));
    }
  }, {
    key: 'bind',
    value: function bind(transform) {
      return transform(this.value);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Identity(' + (0, _stringToString.toString)(this.value) + ')';
    }
  }]);

  return Identity;
})();

exports.Identity = Identity;