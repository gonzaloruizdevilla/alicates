import {curry} from '../functional/curry';

export const either =
  curry(
    (fn1, fn2) =>
      (...args) => fn1(...args) || fn2(...args)
  );
