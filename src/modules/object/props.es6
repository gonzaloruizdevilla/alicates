import {curry} from '../functional/curry';
import {map} from '../list/map';
import {prop} from './prop';

export const props =
  curry(
    (xs, a) => map(x => prop(x,a), xs)
  );
