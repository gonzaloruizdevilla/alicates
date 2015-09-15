import {any} from './any';
import {curryN} from '../functional/curryN';
import {filter} from './filter';
import {not} from '../logic/not';

/* jshint -W067 */
export
  const without = curryN(
    2,
    (arr, ...args) =>
      (filterFn => (
        filterFn = el => not(any(exclude => el === exclude, args)),
        filter(filterFn, arr)
      )
    )()
  );
/* jshint +W067 */
