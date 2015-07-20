import {curry} from '../functional/curry';

export
  const any = curry(
                (fn, [x,...arr]) => x === undefined ? false :
                                    fn(x)           ? true
                                                    : any(fn, arr)
              );
