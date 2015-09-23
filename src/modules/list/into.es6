import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduce} from './reduce';
import {xfFor} from '../transducer/xfFor';


export const into =
  curry(
    (acc, xf, xs) => {
      acc = isTransformer(acc) ? acc : xfFor(acc);
      return reduce(xf(acc), acc['@@transducer/init'](), xs);
    }
  );
