import {arity} from './arity';
import {identity} from './identity';

export const useWith =
  (main, fns) =>
    arity(fns.length, (...args) => main(
      ...(
        args.map(
          (arg, idx) => (fns[idx] || identity)(arg)
        )
      )
    ));
