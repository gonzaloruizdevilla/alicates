import {arity} from '../functional/arity';
import {curry} from '../functional/curry';

export const wrap =
  (fn, wrapper) =>
    curry(arity(fn.length, (...args) =>
      wrapper(fn, ...args)
    ));
