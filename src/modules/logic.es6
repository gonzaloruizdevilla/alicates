import {curry} from './functional/curry'

import * as _not from './logic/not'
export
  const not = _not.not;

export
  const or = curry((a,b) => a || b) ;

export
  const same = curry(
    (a,b) => a === b ? (0 !== a || 1/a === 1/b)
                     : (a !== a && b !== b) // NaN === NaN -> false;
 );

/* jshint -W067 */
export
  const cond = (arr) =>
    (...args) =>
      ((aux) =>
        (aux = ([x, ...arr]) => x === undefined ? undefined :
                                x[0](...args)   ? x[1](...args)
                                                : aux(arr)
        )(arr)
      )();
/* jshint +W067 */
