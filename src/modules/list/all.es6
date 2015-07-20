import {curry} from '../functional/curry';

export
  const all = curry(
                (fn, [x,...arr]) => x === undefined ? true :
                                    fn(x)           ? all(fn, arr)
                                                    : false
              );
