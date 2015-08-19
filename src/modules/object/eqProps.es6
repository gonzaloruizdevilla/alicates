import {curry} from '../functional/curry';
import {equals} from '../logic/equals';

export const eqProps =
  curry(
    (prop, x, y) => equals(x[prop], y[prop])
  );
