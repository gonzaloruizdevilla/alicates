'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _functionalCurry = require('../functional/curry');

var Nil = Object.defineProperties({
  isEmpty: true,

  equals: function equals(x) {
    return x.isEmpty;
  }
}, {
  head: {
    get: function get() {
      throw new Error('Accessing head on empty list.');
    },
    configurable: true,
    enumerable: true
  },
  tail: {
    get: function get() {
      throw new Error('Accessing tail on empty list.');
    },
    configurable: true,
    enumerable: true
  }
});

exports.Nil = Nil;

var Cons = (function () {
  function Cons(head, tail) {
    _classCallCheck(this, Cons);

    this.head = head;
    this.tail = tail;
  }

  _createClass(Cons, [{
    key: 'isEmpty',
    get: function get() {
      return false;
    }
  }]);

  return Cons;
})();

exports.Cons = Cons;
var cons = function cons(head, tail) {
  return new Cons(head, tail);
};

exports.cons = cons;
var _reverse = function _reverse(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    var acc = _x,
        list = _x2;
    _again = false;

    if (list === Nil) {
      return acc;
    } else {
      _x = cons(list.head, acc);
      _x2 = list.tail;
      _again = true;
      continue _function;
    }
  }
};

var reverseList = function reverseList(list) {
  return _reverse(Nil, list);
};

exports.reverseList = reverseList;
var _length = function _length(_x3, _x4) {
  var _again2 = true;

  _function2: while (_again2) {
    var acc = _x3,
        list = _x4;
    _again2 = false;

    if (list.isEmpty) {
      return acc;
    } else {
      _x3 = acc + 1;
      _x4 = list.tail;
      _again2 = true;
      continue _function2;
    }
  }
};

var listLength = function listLength(list) {
  return _length(0, list);
};

exports.listLength = listLength;
var _toArray = function _toArray(_x5, _x6, _x7) {
  var _again3 = true;

  _function3: while (_again3) {
    var acc = _x5,
        pos = _x6,
        list = _x7;
    _again3 = false;

    if (list.isEmpty) {
      return acc;
    } else {
      acc[pos] = list.head;
      _x5 = acc;
      _x6 = pos - 1;
      _x7 = list.tail;
      _again3 = true;
      continue _function3;
    }
  }
};

var toArray = (0, _functionalCurry.curry)(function (start, list) {
  return _toArray(start, start.length + listLength(list) - 1, list);
});

exports.toArray = toArray;
var isList = function isList(obj) {
  return obj.constructor.name === 'Cons' || obj.isEmpty;
};
exports.isList = isList;