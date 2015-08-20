import {curry} from '../functional/curry';
import {range} from './range';
import {reduce} from './reduce';
import {slice} from './slice';

const _aperture =
  (n, xs) =>
    reduce(
      (acc, m) => (acc[m] = slice(m, m + n, xs), acc),
      [],
      range(0, xs.length - n + 1)
    );

export const aperture =
  curry(
    (n, xs) => n > xs.length ? []
                             : _aperture(n, xs)
  );
