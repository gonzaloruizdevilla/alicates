import {reduce} from './reduce';
import {isTransducer} from '../type/isTransducer';
import {curry} from '../functional/curry';
import {xfFor} from '../transducer/xfFor';


export const into =
  curry(
    (acc, xf, xs) =>
      isTransducer(acc) ? reduce(xf(acc), acc['@@transducer/init'](), xs)
                        : reduce(xf(xfFor(acc)), xfFor(acc)['@@transducer/init'](), xs)
  );
