import {curry} from '../functional/curry';

export const propOr =
  curry(
    (def, name, x) =>
      x && x.hasOwnProperty(name) ? x[name]
                                  : def
  );
