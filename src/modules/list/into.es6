import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduce} from './reduce';
import {xfFor} from '../transducer/xfFor';


export const into =
  curry(
    (acc, xf, xs) =>
      isTransformer(acc) ? reduce(xf(acc), acc['@@transducer/init'](), xs)
                         : reduce(xf(xfFor(acc)), xfFor(acc)['@@transducer/init'](), xs)
  );
