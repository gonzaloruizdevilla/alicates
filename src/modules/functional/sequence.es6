import {curryN} from './curryN';
import {reduce} from '../list/reduce';
import {tail} from '../list/tail';

const throwError = () => {throw new Error('pipe requires at least one argument');};

const _sequence =
  fns =>
    curryN(
        fns[0].length,
        function(...args) {
          return reduce(
            (a, fn) => fn.call(this, a),
            fns[0].call(this, ...args),
            tail(fns)
          );
        }
      );

export const sequence =
  (...fns) =>
    fns.length === 0 ? throwError()
                     : _sequence(fns);
