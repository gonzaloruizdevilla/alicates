import {curry} from '../functional/curry';
import {not} from '../logic/not';
import {any} from './any';
import {filter} from './filter';

/* jshint -W067 */
export
  const without = curry((arr, ...args) => (filterFn => (
    filterFn = el => not(any(exclude => el === exclude, args)),
    filter(filterFn, arr)
  ))(), 2);
/* jshint +W067 */
