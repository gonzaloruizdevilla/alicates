import {curry} from './curry';

export const partial =
  (fn, ...args) => curry(fn)(...args);
