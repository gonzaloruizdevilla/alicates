import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';

export const path =
  curry(
    (props, obj) =>
      reduce(
        (acc, prop) => (acc !== undefined && acc !== null)  ? acc[prop]
                                                            : undefined,
        obj,
        props
      )
  );
