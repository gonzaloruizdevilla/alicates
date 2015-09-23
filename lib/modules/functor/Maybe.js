'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _typeIsNil = require('../type/isNil');

var _stringToString = require('../string/toString');

var N = (function () {
  function N() {
    _classCallCheck(this, N);
  }

  _createClass(N, [{
    key: 'toString',
    value: function toString() {
      return 'Nothing()';
    }
  }, {
    key: 'map',
    value: function map() {
      return this;
    }
  }, {
    key: 'bind',
    value: function bind() {
      return this;
    }
  }]);

  return N;
})();

var Nothing = new N();

exports.Nothing = Nothing;

var Just = (function () {
  function Just(value) {
    _classCallCheck(this, Just);

    this.value = value;
  }

  _createClass(Just, [{
    key: 'toString',
    value: function toString() {
      return 'Just(' + (0, _stringToString.toString)(this.value) + ')';
    }
  }, {
    key: 'map',
    value: function map(f) {
      var newValue = f(this.value);
      return (0, _typeIsNil.isNil)(newValue) ? Nothing : new Just(newValue);
    }
  }, {
    key: 'bind',
    value: function bind(transform) {
      return transform(this.value);
    }
  }]);

  return Just;
})();

exports.Just = Just;
var toMaybe = function toMaybe(value) {
  return (0, _typeIsNil.isNil)(value) ? new Just(value) : Nothing;
};
exports.toMaybe = toMaybe;