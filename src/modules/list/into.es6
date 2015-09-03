import {reduce} from './reduce';
import {isTransformer} from '../type/isTransformer';
import {curry} from '../functional/curry';
import {xfFor} from '../transducer/xfFor';


export const into =
  curry(
    (acc, xf, xs) =>
      isTransformer(acc) ? reduce(xf(acc), acc['@@transducer/init'](), xs)
                         : reduce(xf(xfFor(acc)), xfFor(acc)['@@transducer/init'](), xs)
  );
