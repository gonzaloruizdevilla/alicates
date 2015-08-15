import {curry} from './curry';

const _construct =
  Fn =>
    curry(
      (...args) =>
        new Fn(...args),
        Fn.length
    );

const throwError = () => {throw new Error('Constructor with greater than ten arguments');};

export const construct =
  Fn =>
    Fn.length > 10 ? throwError()
                   : _construct(Fn);
