import {curry} from '../functional/curry';

/* jshint -W067 */
export
  const zip = curry((arr1, arr2) => (
    (aux =>
      (aux = ([x1,...arr1], [x2,...arr2], acc) =>
        x1 === undefined || x2 === undefined ? acc
                                             : aux(arr1, arr2, [...acc, [x1, x2]])
      )(arr1, arr2, [])
    )()
  ));
/* jshint +W067 */
