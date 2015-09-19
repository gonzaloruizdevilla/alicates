import {toString} from '../string/toString';

const callFn =
  (fn, cache, key, args) =>
    (
      cache.has(key) ? cache
                     : cache.set(key, fn(...args))
    ).get(key);


export const memoize =
  fn =>
    ((cache) => (
        cache = new Map(),
        (...args) => callFn(fn, cache, toString(args), args)
    ))();
