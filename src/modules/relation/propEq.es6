import {curry} from '../functional/curry';
import {prop} from '../object/prop';
import {equals} from '../logic/equals';

export const propEq =
  curry(
    (name, obj, testObj) => equals(obj, prop(name, testObj))
  );
