import {arity} from '../functional/arity';
import {all, pluck} from '../list';

export const allPass =
  (fns, ...args) =>
    args.length > 0 ? all((fn) => fn(...args), fns)
                    : arity(
                        Math.max(...pluck('length', fns)),
                        (...args) => all((fn) => fn(...args), fns)
                      );
