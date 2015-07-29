//TODO:  check Content Security Policy to use new Function when allowed.
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prop = function prop(a) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.length > 0 ? args[0][a] : function (b) {
    return b[a];
  };
};
exports.prop = prop;