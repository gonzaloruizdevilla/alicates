import {curryN} from '../functional/curryN';
import {not} from '../logic/not';
import {any} from './any';
import {filter} from './filter';

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
