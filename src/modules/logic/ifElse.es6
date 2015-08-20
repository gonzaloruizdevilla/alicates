import {curryN} from '../functional/curryN';

export const ifElse =
  curryN(
    3,
    (cond, onTrue, onFalse) =>
      curryN(
        Math.max(cond.length, onTrue.length, onFalse.length),
        (...args) => cond(...args) ? onTrue(...args) : onFalse(...args)
      )
  );
