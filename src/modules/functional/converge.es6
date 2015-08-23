import {curryN} from './curryN';
import {prop} from '../object/prop';
import {map} from '../list/map';

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
