import {curryN} from './curryN';

const _constructN =
  (n, Fn) =>
    curryN(
      n,
      (...args) =>
        new Fn(...args)
    );

const throwError = () => {throw new Error('Constructor with greater than ten arguments');};

export const constructN =
  curryN(
    2,
    (n, Fn) =>
      Fn.length > 10 ? throwError()
                     : _constructN(n, Fn)
  );
