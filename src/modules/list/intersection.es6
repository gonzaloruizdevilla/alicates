import {curryN} from '../functional/curryN';
import {all} from './all';
import {contains} from './contains';
import {filter} from './filter';

export const intersection =
  curryN(
    2,
    (...args) =>
      filter(
        el => (all(contains(el), args)),
        [...(new Set(...args))]
      )
  );
