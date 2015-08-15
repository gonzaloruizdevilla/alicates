import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {hasMethod} from '../object/hasMethod';

const _lastIndexOf =
  (y, xs, pos) =>
    pos < 0            ? -1 :
    equals(y, xs[pos]) ? pos
                       : _lastIndexOf(y, xs, pos - 1);

export const lastIndexOf =
  curry(
    (y, xs) =>
      hasMethod('lastIndexOf', xs) ? xs.lastIndexOf(y)
                                   : _lastIndexOf(y, xs, xs.length)
  );
