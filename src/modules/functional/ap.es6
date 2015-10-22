import {__}    from './__';
import {curryN} from './curryN';
import {isFunction} from '../type/isFunction';
import {map}    from '../list/map';
import {unnest}    from '../list/unnest';

const applyFnsToValues =
  (fns, vals) =>
    unnest(
        map(
          map(__, vals),
          fns
        )
      );

const treatAsAplicative =
  (applicative, fn) =>
    curryN(
      Math.max(applicative.length, fn.length),
      function() {
        return applicative.apply(this, arguments)(fn.apply(this, arguments));
      }
    );

export const ap =
  curryN(
    2,
    (applicative, fn) =>
      isFunction(applicative.ap) ? applicative.ap(fn) :
      isFunction(applicative)    ? treatAsAplicative(applicative, fn)
                                 : applyFnsToValues(applicative, fn)
  );
