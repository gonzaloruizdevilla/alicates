import {curry} from '../functional/curry';
import {hasMethod} from '../object/hasMethod';
import {reduce} from './reduce';

const _forEach =
  (fn, xs) =>
    (
      reduce(
          (acc, x) => fn(x),
          null,
          xs
      ),
      xs
    );

export const forEach =
  curry(
    (fn, xs) =>
      hasMethod('forEach', xs) ? xs.forEach(fn)
                               : _forEach(fn, xs)
  );
