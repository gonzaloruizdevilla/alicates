import {curry} from '../functional/curry';

export const propSatisfies =
  curry(
    (fn, prop, obj) => !!fn(obj[prop])
  );
