import {all} from './all';
import {curryN} from '../functional/curryN';
import {filter} from './filter';

const filterFn =
  args =>
    el =>
      all(exclude => el !== exclude, args);

export
  const without = curryN(
    2,
    (arr, ...args) =>
      filter(filterFn(args), arr)
  );
