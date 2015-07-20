import {curry} from '../functional/curry';

export
  const none = curry(
                 (fn, [x,...arr]) => x === undefined ? true :
                                     fn(x)           ? false
                                                     : none(fn, arr)
              );
