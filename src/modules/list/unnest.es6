import {into} from './into';
import {isArrayLike} from '../type/isArrayLike';
import {reduce} from './reduce';

const pull =
  (input, xf, result) =>
    reduce(
      (acc, x) => xf['@@transducer/step'](acc, x),
      result,
      input
    )

const unnester =
  xf =>
    (result, input) =>
      isArrayLike(input) ? pull(input, xf, result)
                         : xf['@@transducer/step'](result, input);

export const  unnest =
  xs =>
    into([],
      unnester,
      xs
    );
