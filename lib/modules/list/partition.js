'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _head = require('./head');

var _tail = require('./tail');

var _functionalCurry = require('../functional/curry');

var _partition = function _partition(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
        var pred = _x,
            xs = _x2,
            acc = _x3;
        _again = false;

        if (xs.length === 0) {
            return acc;
        } else {
            _x = pred;
            _x2 = (0, _tail.tail)(xs);
            _x3 = pred((0, _head.head)(xs)) ? [[].concat(_toConsumableArray(acc[0]), [(0, _head.head)(xs)]), acc[1]] : [acc[0], [].concat(_toConsumableArray(acc[1]), [(0, _head.head)(xs)])];
            _again = true;
            continue _function;
        }
    }
};

var partition = (0, _functionalCurry.curry)(function (pred, xs) {
    return _partition(pred, xs, [[], []]);
});
exports.partition = partition;