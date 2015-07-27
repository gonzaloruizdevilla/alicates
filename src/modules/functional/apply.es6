import {curry} from './curry';
export const apply =
  curry(
    (fn, args) => fn(...args)
  );
