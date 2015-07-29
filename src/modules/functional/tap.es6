import {curry} from './curry';

export const tap =
  curry(  
    (fn, a) =>
        (fn(a), a)
  );
