import {curry} from '../functional/curry';

export const defaultTo =
  curry(
    (x, y) =>( y === null || y === undefined) ? x
                                              : y
  );
