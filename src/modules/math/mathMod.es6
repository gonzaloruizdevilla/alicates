import {curry} from '../functional/curry';
import {isInteger} from '../type/isInteger';

export const mathMod =
  curry(
    (x, y) =>
      !isInteger(x) ? NaN :
      !isInteger(y) ? NaN :
      y < 1         ? NaN
                    : ((x % y) + y) % y
  );
