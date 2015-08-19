import {curry} from '../functional/curry';
import {unnest} from './unnest';
import {map} from './map';

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
