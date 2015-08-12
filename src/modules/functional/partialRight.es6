import {arity} from './arity';

const _partialRight =
  (fn, acc) =>
    arity(
      fn.length - acc.length,
      (...args) => args.length + acc.length >= fn.length ? fn(...args, ...acc)
                                                         : _partialRight(fn, [...args, ...acc])
    );

export const partialRight =
  (fn, ...args) => _partialRight(fn, args);
