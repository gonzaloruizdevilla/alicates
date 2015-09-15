import {curry} from './curry';

export const bind =
  curry(
    (fn, x) => fn.bind(x)
  );
