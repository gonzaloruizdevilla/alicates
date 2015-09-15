import {curry} from '../functional/curry';
import {map} from '../list/map';

export const lens =
  curry(
    (getter, setter) =>
      f =>
          s => map(v => (setter(v, s)), f(getter(s)))
  );
