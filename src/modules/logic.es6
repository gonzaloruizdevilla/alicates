import {curry} from './functional/curry'

export
  const not = x => !x;

export
  const or = curry((a,b) => a || b) ;

export
  const same = curry(
    (a,b) => a === b ? (0 !== a || 1/a === 1/b)
                     : (a !== a && b !== b) // NaN === NaN -> false;
 );
