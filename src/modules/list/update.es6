import {curry} from '../functional/curry';
import {slice} from './slice';

export const update =
  curry(
    (pos, x, xs) => pos >= xs.length || pos < (-xs.length) ? xs
                                                           : [...slice(0, pos, xs), x, ...slice(pos+1, Infinity, xs)]
  );
