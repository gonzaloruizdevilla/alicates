import {Base} from '../transducer/Base';
import {into} from './into';
import {isArrayLike} from '../type/isArrayLike';
import {isTransformer} from '../type/isTransformer';

let _flatten;

class Flattener extends Base {
  constructor(xf) {
    super();
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return isArrayLike(input) ? into(result, _flatten, input)
                              : this.xf['@@transducer/step'](result, input);
  }
}

_flatten =
   xf =>
     isTransformer(xf) ? new Flattener(xf)
                       : into([], _flatten, xf);

export const flatten = _flatten;
