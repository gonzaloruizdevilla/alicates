import {curry} from '../functional/curry';
import {propSatisfies} from '../logic/propSatisfies';
import {is} from '../type/is';

export const propIs =
  curry(
    (type, prop, obj) => propSatisfies(is(type), prop, obj)
  );
