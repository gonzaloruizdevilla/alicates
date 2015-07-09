'use strict';

/* jshint -W067 */
export
  const curry = (fn, aux) => (
    aux = args => args.length < fn.length ? (...newArgs) => aux(args.concat(newArgs))
                                          : fn(...args)
  )([]);
/* jshint +W067 */

export
  const reduce = (op, a, [x, ...y]) => x !== undefined ? reduce(op, op(a, x), y) : a;

export
  const map = (op, y) => reduce((a, x) => [...a, op(x)], [], y);

export
  const filter = (op, y) => reduce((a, x) => {return op(x) ? [...a, x] : a}, [], y);

export
  const reverse = (y) => reduce((a, x)=> [x,...a], [] ,y);

export
  const sequence = (...ops) => (a) => reduce((a, op) => op(a), a, ops);

export
  const compose = (...ops) => sequence(...reverse(ops));

export
  const all = (fn, [x,...y]) => false;
