import {curry} from '../functional/curry';
import {reduce} from './reduce';
import {hasMethod} from '../object/hasMethod';

export
  const filter = curry(
    (fn, arr) =>
      hasMethod('filter', arr) ? arr.filter(fn)
                               : reduce((acc, x) => fn(x) ? [...acc, x] : acc, [], arr)
  );
