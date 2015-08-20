import {curry} from './curry';

export const call =
  curry(
    (fn, ...args) =>
      fn(...args)
  );
