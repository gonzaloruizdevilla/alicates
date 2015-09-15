import {curry} from '../functional/curry';
import {is} from '../type/is';
import {propSatisfies} from '../logic/propSatisfies';

export const propIs =
  curry(
    (type, prop, obj) => propSatisfies(is(type), prop, obj)
  );
