import {any} from './any';
import {curryN} from '../functional/curryN';
import {filter} from './filter';
import {not} from '../logic/not';

const filterFn =
  args =>
    el =>
      not(any(exclude => el === exclude, args));

export
  const without = curryN(
    2,
    (arr, ...args) =>
      filter(filterFn(args), arr)
  );
