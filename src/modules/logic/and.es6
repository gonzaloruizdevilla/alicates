import {hasMethod} from '../object/hasMethod';
import {curry} from '../functional/curry';

export const and =
  curry(
    (a, b) =>
      hasMethod('and', a) ? a.and(b)
                          : a && b
  );
