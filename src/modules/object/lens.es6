import {map} from '../list/map';
import {curry} from '../functional/curry';

export const lens =
  curry(
    (getter, setter) =>
      f =>
          s => map(v => (setter(v, s)), f(getter(s)))
  );
