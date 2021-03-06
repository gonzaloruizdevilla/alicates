import {arity} from './arity';
import {repeat} from '../list/repeat';
import {slice} from '../list/slice';

const throwError = () => {throw new Error('First argument to nAry must be a non-negative integer no greater than ten');};

export const nAry =
  (n, fn) =>
    n > 10 ? throwError()
           : arity(
              n,
              (...args) =>
                fn(...slice(0, n, args), ...repeat(undefined, n - args.length))
            );
