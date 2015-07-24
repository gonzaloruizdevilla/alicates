import {curry} from '../functional/curry';
import {hasMethod} from '../object/hasMethod';

export const slice =
  curry(
    (start, end, xs) =>
      hasMethod('slice', xs) ? xs.slice(start, end)
                             : Array.prototype.slice.call(xs, start, end)
  );
