import {isString} from '../type/isString';

export const nth =
  (n, xs) =>  isString(xs) && n >= (-xs.length) ? xs.substr(n, 1) :
              isString(xs)                      ? '' :
              n >= 0                            ? xs[n]
                                                : xs[xs.length + n];
