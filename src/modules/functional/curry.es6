import {curryN} from './curryN';

export const curry =
  fn =>
    curryN(fn.length, fn);
