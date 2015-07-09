'use strict';

/* jshint -W067 */
export
  const curry = (fn, aux) => (
    aux = args => args.length < fn.length ? (...newArgs) => aux(args.concat(newArgs))
                                          : fn(...args)
  )([]);
/* jshint +W067 */

export
  const head = y => y[0];

export
    const last = arr => arr.slice(-1)[0];

export
  const init = arr => arr.slice(0, -1);
  const reduce = curry((op, a, [x, ...y]) => x !== undefined ? reduce(op, op(a, x), y) : a);

export
  const map = curry((op, y) => reduce((a, x) => [...a, op(x)], [], y));

export
  const filter = curry((op, y) => reduce((a, x) => {return op(x) ? [...a, x] : a}, [], y));

export
  const reverse = (y) => reduce((a, x)=> [x,...a], [] ,y);

export
  const sequence = (...ops) => (a) => reduce((a, op) => op(a), a, ops);

export
  const compose = (...ops) => sequence(...reverse(ops));

export
  const all = curry(
                (fn, [x,...y]) => x === undefined ? true :
                                  fn(x)           ? all(fn, y)
                                                  : false
              );

export
  const any = curry(
                (fn, [x,...y]) => x === undefined ? false :
                                  fn(x)           ? true
                                                  : any(fn, y)
              );

export
  const none = curry(
                (fn, [x,...y]) => x === undefined ? true :
                                  fn(x)           ? false
                                                  : none(fn, y)
              );

/* jshint -W067 */
export
  const zip = curry((y1, y2) => (
     ((aux) =>
        (aux = ([x1,...y1], [x2,...y2], acc) =>
          x1 === undefined || x2 === undefined ? acc
                                               : aux(y1, y2, acc.concat([[x1, x2]]))
        )(y1, y2, [])
      )()
  ));
/* jshint +W067 */
