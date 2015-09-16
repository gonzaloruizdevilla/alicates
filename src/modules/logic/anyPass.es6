import {arity} from '../functional/arity';
import {any, pluck} from '../list';

export const anyPass =
  (fns, ...args) =>
    args.length > 0 ? any((fn)=>fn(...args), fns)
                    : arity(
                        Math.max(...pluck('length', fns)),
                        (...args) => any((fn) => fn(...args), fns)
                      );
