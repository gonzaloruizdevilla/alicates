import {curryN} from './curryN';
import {map} from '../list/map';
import {prop} from '../object/prop';

export const converge =
  (fn, ...fns) =>
    curryN(
      Math.max(...map(prop('length'), fns)),
      function(...args) {
        var ctx = this;
        return fn.call(ctx,
          ...map(
            fn => fn.call(ctx, ...args),
            fns
          )
        );
      }
    );
