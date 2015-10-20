import {curryN} from './curryN';
import {identity} from './identity';

export const useWith =
  (main, fns) =>
    curryN(
      fns.length,
      function(...args) {
        return main.apply(
          this,
          args.map(
            (arg, idx) => (fns[idx] || identity).call(this, arg)
          )
        );
      }
    );
