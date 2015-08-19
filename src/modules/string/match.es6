import {curry} from '../functional/curry';

export const match =
  curry(
    (regex, s) => s.match(regex) || []
  );
