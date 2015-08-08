import {curry} from '../functional/curry';
import {slice} from './slice';

export const adjust =
  curry(
    (fn, pos, xs) =>
      (pos >= xs.length || pos < -xs.length) ? xs :
      pos < 0                                    ? [...slice(0, pos, xs), fn(xs[xs.length + pos]), ...slice(pos + 1, Infinity, xs)]
                                                 : [...slice(0, pos, xs), fn(xs[pos]), ...slice(pos + 1, Infinity, xs)]
  );
