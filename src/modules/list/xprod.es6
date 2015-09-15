import {curry} from '../functional/curry';
import {map} from './map';
import {unnest} from './unnest';

export const xprod =
  curry(
    (xs, ys) =>
      unnest(
        map(
          x => map(
              y => [x, y],
              ys
            ),
          xs
        )
      )
  );
