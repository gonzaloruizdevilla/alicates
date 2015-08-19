import {arity} from './arity';

const _curry =
  (fn, farity, more) =>
    arity(
      farity,
      function (...args) {
        return (args.length < farity) ? _curry(fn, farity - args.length, [...more, ...args])
                                      : fn.call(this, ...more, ...args);
      });

export const curry =
  (fn, farity) =>
    _curry(fn, farity || fn.length, []);
