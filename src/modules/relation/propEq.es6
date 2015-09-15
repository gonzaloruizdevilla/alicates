import {curry} from '../functional/curry';
import {equals} from '../logic/equals';
import {prop} from '../object/prop';

export const propEq =
  curry(
    (name, obj, testObj) => equals(obj, prop(name, testObj))
  );
