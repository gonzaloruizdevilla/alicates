import {curryN} from '../functional/curryN';
import {any, pluck} from '../list';

export const anyPass =
  (fns, ...args) =>
    args.length > 0 ? any((fn)=>fn(...args), fns)
                    : curryN(
                        Math.max(...pluck('length', fns), 0),
                        (...args) => any((fn) => fn(...args), fns)
                      );
