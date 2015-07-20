/* jshint -W067 */
export const curry =
  (fn, arity) =>
    (curried =>
      curried = (...args) =>
        args.length < (arity || fn.length) ? (...more) => curried(...args, ...more)
                                           : fn(...args)
    )();
/* jshint +W067 */
