# Alicates

![Build Status](https://travis-ci.org/gonzaloruizdevilla/alicates.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/gonzaloruizdevilla/alicates/badge.svg?branch=master&service=github)](https://coveralls.io/github/gonzaloruizdevilla/alicates?branch=master)

Compact functional library made with ES6

Functions implemented in the library are very small but not necessarily very efficient (yet).

A lot of development and documentation has to be done before this can be used for more than passing its own tests.

Why Alicates?

Because it's funny to implement functions like curry with (Java|Ecma)Script like this:

```javascript
const curry = (fn, arity) => (curried =>
  curried = (...args) =>
    args.length < (arity || fn.length) ? (...more) => curried(...args, ...more)
                                       : fn(...args)
)();
```
Or to implement a zip function like:
```javascript
const zip = (arr1, arr2) => (
   ((aux) =>
      (aux = ([x1,...arr1], [x2,...arr2], acc) =>
        x1 === undefined || x2 === undefined ? acc
                                             : aux(arr1, arr2, [...acc, [x1, x2]])
      )(arr1, arr2, [])
    )()
);
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
