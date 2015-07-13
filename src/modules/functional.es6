import * as _curry from './functional/curry';
import {map, reduce, reverse} from './list';

export
  const always = (a) => () => a;

export
  const apply = (fns, arr) => reduce((acc, fn) => [...acc, ...map(fn, arr)], [], fns);

export const curry = _curry.curry;

export
  const sequence = (...fns) => (a) => reduce((a, fn) => fn(a), a, fns);

export
  const compose = (...fns) => sequence(...reverse(fns));

export
  const once = fn => ((executed, value) =>
    (...args) => executed ? value
                          : (executed = true, value = fn(...args))
  )();

export
  const lift = (fn, arity) => curry((x, ...args) => reduce(apply, map(curry(fn, arity), x), args), arity);

export const f = () => false;
export const t = () => true;
