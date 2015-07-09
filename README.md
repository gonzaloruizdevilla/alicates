# Alicates

![Build Status](https://img.shields.io/travis/gonzaloruizdevilla/alicates.svg) ![Coverage](https://img.shields.io/coveralls/gonzaloruizdevilla/alicates.svg)

Compact functional library made with ES6

Functions implemented in the library are very small but not necessarily very efficient.

A lot of development and documentation has to be done before this can be used for more than passing its own tests.

Why Alicates?

Because it's funny to implement functions like curry with (Java|Ecma)Script like this:

```javascript
const curry = (fn, arity) => (curried =>
  curried = (...args) => args.length < (arity || fn.length) ? (...more) => curried(...args, ...more)
                                                            : fn(...args)
)();
```

## Getting Started

Install it via npm:

```shell
npm install alicates
```

And include in your project:

```javascript
var alicates = require("alicates");
```

## License

MIT
