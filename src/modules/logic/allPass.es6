import {curryN} from '../functional/curryN';
import {all, pluck} from '../list';

export const allPass =
  (fns, ...args) =>
    args.length > 0 ? all((fn) => fn(...args), fns)
                    : curryN(
                        Math.max(...pluck('length', fns), 0),
                        (...args) => all((fn) => fn(...args), fns)
                      );
