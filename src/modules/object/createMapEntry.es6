import {curry} from '../functional/curry';

export const createMapEntry =
  curry(
    (key, value) => ({[key]: value})
  );
