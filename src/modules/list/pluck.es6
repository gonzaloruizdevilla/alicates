import {curry} from '../functional/curry';
import {map} from './map';

export const pluck =
  curry(
    (prop, arr) => map((a) => a[prop], arr)
  );
