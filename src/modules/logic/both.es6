import {curryN} from '../functional/curryN';

export const both =
  curryN(
    2,
    (fn1, fn2) =>
      curryN(
        Math.max(fn1.length, fn2.length),
        (...args) => fn1(...args) && fn2(...args)
      )
  );
