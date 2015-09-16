import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';
import {isNil} from '../type/isNil';

export const path =
  curry(
    (props, obj) =>
      reduce(
        (acc, prop) => !isNil(acc)  ? acc[prop]
                                    : undefined,
        obj,
        props
      )
  );
