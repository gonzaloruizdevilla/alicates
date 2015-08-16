import {curry} from '../functional/curry';

export const ifElse =
  curry(
    (cond, onTrue, onFalse) =>
      curry(
        (...args) => cond(...args) ? onTrue(...args)
                                   : onFalse(...args),
        Math.max(cond.length, onTrue.length, onFalse.length)
      )
  );
