import {curry} from './functional/curry';
import {not} from './logic/not';

export
  const reduce = curry((fn, acc, [x, ...arr]) => x !== undefined ? reduce(fn, fn(acc, x), arr) : acc);

export
  const head = arr => arr[0];

export
  const init = arr => arr.slice(0, -1);

export
  const last = arr => arr.slice(-1)[0];

export
  const tail = arr => arr.slice(1);

export
  const reduceRight = curry((fn, acc, arr) => last(arr) !== undefined ? reduceRight(fn, fn(last(arr), acc), init(arr)) : acc);

export
  const map = curry((fn, arr) => reduce((acc, x) => [...acc, fn(x)], [], arr));

export
  const filter = curry((fn, arr) => reduce((acc, x) => fn(x) ? [...acc, x] : acc, [], arr));

export
  const reverse = (arr) => reduce((acc, x)=> [x,...acc], [] ,arr);

export
  const all = curry(
                (fn, [x,...arr]) => x === undefined ? true :
                                    fn(x)           ? all(fn, arr)
                                                    : false
              );

export
  const any = curry(
                (fn, [x,...arr]) => x === undefined ? false :
                                    fn(x)           ? true
                                                    : any(fn, arr)
              );

export
  const none = curry(
                 (fn, [x,...arr]) => x === undefined ? true :
                                     fn(x)           ? false
                                                     : none(fn, arr)
              );


/* jshint -W067 */
export
  const zip = curry((arr1, arr2) => (
     ((aux) =>
        (aux = ([x1,...arr1], [x2,...arr2], acc) =>
          x1 === undefined || x2 === undefined ? acc
                                               : aux(arr1, arr2, [...acc, [x1, x2]])
        )(arr1, arr2, [])
      )()
  ));
/* jshint +W067 */

export
  const concat = curry((...args) => [].concat(...args), 2);

export
  const unique = arr => [...(new Set(arr))];

/* jshint -W067 */
export
  const without = curry((arr, ...args) => (filterFn => (
    filterFn = el => not(any(exclude => el === exclude, args)),
    filter(filterFn, arr)
  ))(), 2);
/* jshint +W067 */

/* jshint -W016 */
export
  const contains = curry((x, arr) => (!!~arr.indexOf(x)));
/* jshint +W016 */

export
  const intersection = curry((...args) => filter(
    el => (all(contains(el), args)),
    [...(new Set(...args))]
  ), 2);

export
  const difference = curry((arr, ...others) => filter(
        el => (none(contains(el), others)),
        arr
  ), 2);
