import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {hasMethod} from '../object/hasMethod';

const _indexOf =
  (a, [x, ...xs], pos) =>
    equals(a, x) ? pos :
    xs.length    ? _indexOf(a, xs, pos + 1)
                 : -1;

export const indexOf =
  curry(
    (a, xs) =>
      hasMethod('indexOf', xs) ? xs.indexOf(a)
                               : _indexOf(a, xs, 0)
  );
