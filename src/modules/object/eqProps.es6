import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {prop} from '../object/prop';

export const eqProps =
  curry(
    (p, x, y) => equals(prop(p,x), prop(p,y))
  );
