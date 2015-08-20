import {curryN} from './curryN';

const _construct =
  Fn =>
    curryN(
      Fn.length,
      (...args) =>
        new Fn(...args)
    );

const throwError = () => {throw new Error('Constructor with greater than ten arguments');};

export const construct =
  Fn =>
    Fn.length > 10 ? throwError()
                   : _construct(Fn);
